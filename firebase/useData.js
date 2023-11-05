import React, { useEffect, useState } from "react";
import { db } from "./config";
import { onValue, ref } from "firebase/database";

export function useData(Document) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const query = ref(db, Document);
        return onValue(query, (snapshot) => {
            const getData = snapshot.val();
            if (snapshot.exists()) {
                Object.values(getData).map((project) => {
                    setData((projects) => [...projects, project]);
                });
            }
        });
    }, []);
    if (Object.values(data).length <= 0){
        return []
    }else{
        return data
    }
}