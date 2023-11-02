'use client'
import React, { useEffect, useState } from "react";
import { db } from "./config";
import { onValue, ref } from "firebase/database";

export function useData(Document) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const query = ref(db, Document);
        return onValue(query, (snapshot) => {
            const data = snapshot.val();

            if (snapshot.exists()) {
                Object.values(data).map((project) => {
                    setProjects((projects) => [...projects, project]);
                });
            }
        });
    }, []);
    return projects
}