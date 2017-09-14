const protocol = "http://";
const sProtocol = "https://";

const SecurityManagementDomain = sProtocol + "dev-security-management.appspot.com/";
const UserManagementDomain = sProtocol + "dev-user-management.appspot.com/";

export default {
	"appkey":"a47b59825a9244c0327d2be69cfcdcca",
	"orgId" : "5644406560391168",
	"rolesInOrgApi":SecurityManagementDomain + "api/organization/:organization_id/roles",
	"fetchUsersInOrg":SecurityManagementDomain + "api/organization/:organizationId/users",
	"loginUrl": UserManagementDomain + "login",
	"UserSearch":SecurityManagementDomain+'api/user/search',
	"createUserApi":UserManagementDomain+'staffs',
	"userApi":UserManagementDomain+'staff/:staff_id',
	"securityUserApi":SecurityManagementDomain+'api/user/:user_id'
}