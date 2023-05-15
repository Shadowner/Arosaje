import { RoleType } from "../interfaces/BasicRoleType";
import { Role } from "../models/role.model";
import { User } from "../models/user.model";

export async function initialisation() {
    await rolesInitialisation(RoleType.ADMIN);
    await rolesInitialisation(RoleType.USER);
    await rolesInitialisation(RoleType.BOTANISTE);

    await usersInitialisation("admin@localhost", await Role.findBy({ name: RoleType.ADMIN }));
    await usersInitialisation("user@localhost", await Role.findBy({ name: RoleType.USER }));
    await usersInitialisation("botaniste@localhost", await Role.findBy({ name: RoleType.BOTANISTE }));
}

async function rolesInitialisation(roleName: string) {
    const potentialRole = await Role.findBy({ name: roleName });
    if (potentialRole.length === 0) {
        const role = await Role.create({ name: roleName });
        await role.save();
    }
}

async function usersInitialisation(email: string, roles: Role[]) {
    const potentialUser = await User.findBy({ email });
    if (potentialUser.length === 0) {
        const user = new User();
        user.email = email;
        user.password = '123456789';
        user.roles = roles;
        user.firstname = 'firstname';
        user.lastname = 'lastname';
        user.birthdate = new Date();
        user.address = 'address';
        user.city = 'city';
        user.country = 'country';
        user.phoneNumber = '0123456789';
        user.username = email;

        await user.save();
    }

}