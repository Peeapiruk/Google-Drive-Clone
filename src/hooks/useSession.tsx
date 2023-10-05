import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@/components/common/Button/Button";

export const useFetchSession =() => {
    
    const { data: session } = useSession();
    console.log(session);
    
    return {session};

};