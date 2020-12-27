import {User, UserStatus} from "../proto/users_pb";

export const userToClass =({id, name, age, status}: User.AsObject) => {
    const user = new User();
    user.setId(id);
    user.setName(name);
    user.setAge(age);
    user.setStatus(status);
    return user;
}

export const users: User[] = [
    { id: 1, name: 'Nikolas', age: 29, status: UserStatus.BUSY },
    { id: 2, name: 'Melui', age: 29, status: UserStatus.OFFLINE },
].map(userToClass)


