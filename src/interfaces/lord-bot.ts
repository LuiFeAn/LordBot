
export interface ILordBot {

    name: string;
    states: IlordBotStates []
    owner: IlordOwnerProps

}

export interface IlordBotStates {
    
    name: string;
    execute: () => any
}

export interface IlordOwnerProps {

    number: string,
    message?: string,
    state: string

}
