
export interface iButton {
    title?: string;
    color?: string;
    bg?: string;
    icon?: any
    onClick?: () => void
}


export interface iInPut {
    name?: boolean;
    email?: boolean;
    password?: boolean;
    confirm?: boolean;


    name1?: string;
    email1?: string;
    password1?: string;
    confirm1?: string;

    name2?: string;
    email2?: string;

    password2?: string;

    confirm2?: string;

}



export interface iGlobal {
    actualName?: string;
    setActualName?: React.Dispatch<React.SetStateAction<string>>;

    actualEmail?: string;
    setActualEmail?: React.Dispatch<React.SetStateAction<string>>;

    actualPassword?: string;
    setActualPassword?: React.Dispatch<React.SetStateAction<string>>;

    actualConfirm?: string;
    setActualConfirm?: React.Dispatch<React.SetStateAction<string>>;

    userState?: {} | null;
    setUserState?: React.Dispatch<React.SetStateAction<{} | null>>;


}


export interface iUser {
    name?: string;
    email?: string;
    password?: string;
}