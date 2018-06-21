import { ParentEntity} from './parentEntity.model';
export class UserModel extends ParentEntity{
    public firstName: string;
    public lastName: string;
    public firstSurname: string; 
    public secondSurname: string;
    public phone: string;
    public address: string;


}