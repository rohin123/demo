const protocol = "http://";
const sProtocol = "https://";

const SecurityManagementDomain = sProtocol + "security-management.appspot.com/";
const UserManagementDomain = sProtocol + "user-management-1096.appspot.com/";

export default {
	"appkey":"7f18c33cd61496c6aef15a1b85b1e83c",
	"orgId" : "5151213049872384",
	"rolesInOrgApi":SecurityManagementDomain + "api/organization/:organization_id/roles",
	"fetchUsersInOrg":SecurityManagementDomain + "api/organization/:organizationId/users",
	"loginUrl": UserManagementDomain + "login",
	"UserSearch":SecurityManagementDomain+'api/user/search',
	"createUserApi":UserManagementDomain+'staffs',
	"userApi":UserManagementDomain+'staff/:staff_id',
	"securityUserApi":SecurityManagementDomain+'api/user/:user_id'
}