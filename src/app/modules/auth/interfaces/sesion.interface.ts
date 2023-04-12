export interface IntSession {
    data:    Sesion;
    message: string;
    status:  boolean;
    token:   string;
}
   
export interface Sesion {
    created_at:        Date;
    email:             string;
    email_verified_at?: null;
    id:                number;
    updated_at?:        Date;
    user_name:         string;
}

export interface SignIn {
    email:             string;
    password:         string;
}
   