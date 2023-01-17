import { collection, doc, getDocs,onSnapshot, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";

const getTodos =async () => {
    try {
        let data = [];
        const res =await getDocs(collection(db, "todos"))
        res.forEach((doc) => {
                data.push({id:doc.id, name:doc.data().name});
            })
        return data;
    } catch (error) {
        return error;
    }
};

const addTodos = async (n) => {
    try {
        // console.log(n);
        const time = Date.now()
        const res = await setDoc(doc(db, 'todos', `${time}`), { name: n });
        return res
    } catch (error) {
        return error;
    }
};

const deleteTodos = async (n) => {
    try {
        //   console.log(n);
        const res = await deleteDoc(doc(db, 'todos', `${n}`));
        console.log(res);
        return res
    } catch (error) {
        return error;
    }
};
export { getTodos, addTodos, deleteTodos };
