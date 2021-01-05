import { User, UserRequest } from "../proto/users_pb";
import { client } from "./utils";

export default (id: number) =>
  new Promise<User>((resolve, reject) => {
    const request = new UserRequest();
    request.setId(id);

    client.getUser(request, (err, user) => {
      err ? reject(err) : resolve(user);
    });
  });
