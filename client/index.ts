import { User, UserStatus } from "../proto/users_pb";
import getUser from "./get-user";
import createUsers from "./create-users";
import getUsers from "./get-users";

(async () => {
  try {
    const user = await getUser(1);
    console.info(user.toString());

    const jim = new User();
    jim.setName("Jim");
    jim.setAge(10);
    jim.setId(20);
    jim.setStatus(UserStatus.OFFLINE);
    createUsers([jim]);
    console.info(`\nCreated user ${jim.toString()}`);

    const users = await getUsers();
    console.info(`\nListing all ${users.length} users`);
    for (const user of users) {
      console.info(user.toString());
    }
  } catch (error) {
    console.info(error);
  }
})();
