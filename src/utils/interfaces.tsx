
export interface iButton {
    title?: string;
    m?: string;
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


    actualImage?: string;
    setActualImage?: React.Dispatch<React.SetStateAction<string>>;

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
    image?: string;
}


export interface iButton {
    title?: string;
    onClick?: () => void;
    bg?: string;
    br?: string;
    tx?: string;
}

export interface iBut {
    bg?: string;
    ll?: string;
    link?: boolean;
    title?: string;
    tc?: string;
    mmm?: string;
    onClick?: () => void
}


export interface iDiv {
    src?: string,
    text?: string,
}

export interface iCard {
    logo?: string;
    src?: string;
    top?: string;
    sub?: string;
    bb?: string;
    rr?: string;
    r?: string;
}

export interface iMage {
    src?: string
    h?: string
}

export interface iCard1 {
    subText?: string;
    mainText?: string;
    image?: string;
    h?: string;
    ml?: string;
    mt?: string;
    m?: string;

}



export interface iFeature {
    rr?: string;
    title?: string;
    sub?: string;
    but?: string;
    src?: string;
}
