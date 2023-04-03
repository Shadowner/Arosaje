import { UserDTO } from "./UserDTO";

export interface NotificationDTO {
    owner: UserDTO,
    
    /**
     * JSON contenant ce qu'est la notification
     */
    content: string,
}