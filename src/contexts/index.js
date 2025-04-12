import { createContext, useEffect, useState } from "react";
import auth from"@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const  AuthContext = createContext();


export default function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const[loadAuth, setLoadAuth] = useState(false);

useEffect(()=>{

    async function loadStorange(){
      
      
        const storangeUser = await AsyncStorage.getItem('@devUser')
        if(storangeUser){
            setUser(JSON.parse(storangeUser))
              setLoading(false)
        }

       
        setLoading(false)

    }

    loadStorange()
},[])


    async function siginUp( email,password,name){
        setLoadAuth(true)
        await auth().createUserWithEmailAndPassword(email, password)
        .then(async(value)=>{
            let uid = value.user.uid;
            await firestore().collection('users')
            .doc(uid).set({
                nome:name,
                email:email,
                createdAt: new Date()
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: name,
                    email: value.user.email
                }
                // jogando o os dados do novo usuario para o setUser

                setUser(data);
                storangeUser(data)
                setLoadAuth(false)
            })

            .catch((erro)=> {
                console.log("Erro ao cadastrar usuário,", erro)
                setLoadAuth(false)
            })
        })
    }


  async  function signIn(email, password){
    setLoadAuth(true)
        await auth().signInWithEmailAndPassword(email, password)
        .then(async(value)=> {
            let uid = value.user.uid;

            const userProfile = await firestore().collection('users').doc(uid).get();
        

          let data = {
            uid: uid,
            nome: userProfile.data().nome,
            email: value.user.email
          }

          setUser(data)
          storangeUser(data)
          setLoadAuth(false)
        })
        .catch((erro)=>{
            console.log(erro)
            setLoadAuth(false)
        })
    }

   async function storangeUser(data){
   await  AsyncStorage.setItem('@devUser', JSON.stringify(data))
 
   }

  
   return(
    <AuthContext.Provider value={{signed: !!user, user, siginUp, signIn,loading,loadAuth}}>
        {children}
    </AuthContext.Provider>
   )
}