import { useState } from "react";
import {
  Trash2,
  Edit,
  Copy,
  Users,
  UserPlus,
  Clock,
  History,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Alert, AlertDescription } from "../../UI/Alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../UI/Dialog";
import { Card, CardContent, CardHeader, CardTitle } from "../../UI/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../UI/Tabs";

interface Role {
  id: number;
  name: string;
  description: string;
  permissions: string[];
  users: string[];
  isActive: boolean;
  createdAt: string;
  expiryDate?: string | null;
}

interface Permission {
  id: string;
  label: string;
}

interface FormData {
  name: string;
  description: string;
  permissions: string[];
  expiryDate: string | null;
}

interface Notification {
  message: string;
  type: "success" | "error";
}

const initialRoles: Role[] = [
  {
    id: 1,
    name: "Admin",
    description: "Full system access",
    permissions: ["create", "read", "update", "delete"],
    users: ["John Doe", "Jane Smith"],
    isActive: true,
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    name: "Editor",
    description: "Can edit content",
    permissions: ["read", "update"],
    users: ["Bob Johnson"],
    isActive: true,
    createdAt: "2024-01-02",
  },
];

const initialPermissionsList: Permission[] = [
  { id: "create", label: "Create" },
  { id: "read", label: "Read" },
  { id: "update", label: "Update" },
  { id: "delete", label: "Delete" },
  { id: "approve", label: "Approve" },
  { id: "publish", label: "Publish" },
];

const UserRoleManagement = () => {
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [, setSelectedRole] = useState<Role | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [dialogType, setDialogType] = useState<"add" | "edit">("add");
  const [notification, setNotification] = useState<Notification | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    permissions: [],
    expiryDate: null,
  });

  const [permissionsList, setPermissionsList] = useState<Permission[]>(
    initialPermissionsList
  );
  const [newPermission, setNewPermission] = useState<string>("");

  const showNotification = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddRole = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const newRole: Role = {
        id: roles.length + 1,
        name: formData.name,
        description: formData.description,
        permissions: formData.permissions,
        users: [],
        isActive: true,
        createdAt: new Date().toISOString(),
        expiryDate: formData.expiryDate,
      };
      setRoles([...roles, newRole]);
      setFormData({
        name: "",
        description: "",
        permissions: [],
        expiryDate: null,
      });
      showNotification("Role added successfully");
      setIsSubmitting(false);
      setShowDialog(false);
    }, 1000);
  };

  const handleDeleteRole = (roleId: number) => {
    setRoles(roles.filter((role) => role.id !== roleId));
    showNotification("Role deleted successfully");
  };

  const handleEditRole = (role: Role) => {
    setSelectedRole(role);
    setFormData({
      name: role.name,
      description: role.description,
      permissions: role.permissions,
      expiryDate: role.expiryDate || null,
    });
    setShowDialog(true);
    setDialogType("edit");
  };

  const handleDuplicateRole = (role: Role) => {
    const newRole: Role = {
      ...role,
      id: roles.length + 1,
      name: `${role.name} (Copy)`,
      users: [],
    };
    setRoles([...roles, newRole]);
    showNotification("Role duplicated successfully");
  };

  const handleAddPermission = () => {
    if (newPermission.trim() !== "") {
      const newId = newPermission.toLowerCase().replace(/\s+/g, "-");
      const newPerm: Permission = { id: newId, label: newPermission };

      setPermissionsList([...permissionsList, newPerm]);
      setNewPermission("");
      showNotification("Permission added successfully", "success");
    } else {
      showNotification("Permission cannot be empty", "error");
    }
  };
  const handleDeletePermission = (permissionId: string) => {
    setPermissionsList(
      permissionsList.filter((permission) => permission.id !== permissionId)
    );
    showNotification("Permission deleted successfully");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Role Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="roles">
            <TabsList>
              <TabsTrigger value="roles">Roles</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
              <TabsTrigger value="audit">Audit Log</TabsTrigger>
            </TabsList>

            <TabsContent value="roles" className="space-y-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    setShowDialog(true);
                    setDialogType("add");
                    setFormData({
                      name: "",
                      description: "",
                      permissions: [],
                      expiryDate: null,
                    });
                  }}
                  className="bg-[#1C4A93] text-white px-4 py-2 rounded-md hover:bg-blue flex items-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  Add New Role
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Description</th>
                      <th className="p-3 text-left">Users</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roles.map((role) => (
                      <tr key={role.id} className="border-b">
                        <td className="p-3">{role.name}</td>
                        <td className="p-3">{role.description}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {role.users.length}
                          </div>
                        </td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 w-fit ${
                              role.isActive
                                ? "bg-green-100 text-green"
                                : "bg-red-100 text-white"
                            }`}
                          >
                            {role.isActive ? (
                              <CheckCircle className="w-3 h-3" />
                            ) : (
                              <AlertCircle className="w-3 h-3" />
                            )}
                            {role.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEditRole(role)}
                              className="p-2 hover:bg-gray-100 rounded-full"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDuplicateRole(role)}
                              className="p-2 hover:bg-gray-100 rounded-full"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteRole(role.id)}
                              className="p-2 hover:bg-gray-100 rounded-full text-red"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="permissions">
              <div className="space-y-4">
                <div className="flex flex-col items-start lg:flex-row md:flex-row gap-5 lg:items-center">
                  <input
                    type="text"
                    value={newPermission}
                    onChange={(e) => setNewPermission(e.target.value)}
                    placeholder="Enter new permission"
                    className="w-full p-2 border rounded-md"
                  />
                  <button
                    onClick={handleAddPermission}
                    className="bg-[#1C4A93] text-white px-4 py-2 rounded-md hover:bg-blue w-[200px]"
                  >
                    Add Permission
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {permissionsList.map((permission) => (
                    <Card key={permission.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-row items-center justify-between mt-1">
                          <CheckCircle className="w-4 h-4" />
                          <span>{permission.label}</span>
                          <button
                            onClick={() =>
                              handleDeletePermission(permission.id)
                            }
                            className="text-red hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="audit">
              <div className="space-y-4">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className="flex items-center space-x-4 p-4 border rounded-lg"
                  >
                    <History className="w-4 h-4" />
                    <div>
                      <p className="font-medium">{role.name} created</p>
                      <p className="text-sm text-gray-500">
                        {new Date(role.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {notification && (
        <Alert
          className={`fixed bottom-4 right-4 ${
            notification.type === "error" ? "bg-red" : "bg-green"
          }`}
        >
          <AlertDescription>
            <div className="flex items-center gap-2">
              {notification.type === "error" ? (
                <AlertCircle className="w-4 h-4" />
              ) : (
                <CheckCircle className="w-4 h-4" />
              )}
              {notification.message}
            </div>
          </AlertDescription>
        </Alert>
      )}

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {dialogType === "add" ? "Add New Role" : "Edit Role"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Role Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Permissions
              </label>
              <div className="space-y-2">
                {permissionsList.map((permission) => (
                  <label
                    key={permission.id}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      checked={formData.permissions.includes(permission.id)}
                      onChange={(e) => {
                        const newPermissions = e.target.checked
                          ? [...formData.permissions, permission.id]
                          : formData.permissions.filter(
                              (p) => p !== permission.id
                            );
                        setFormData({
                          ...formData,
                          permissions: newPermissions,
                        });
                      }}
                    />
                    <span>{permission.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              onClick={dialogType === "add" ? handleAddRole : () => {}}
              disabled={isSubmitting}
              className="w-full bg-[#1C4A93] text-white px-4 py-2 rounded-md hover:bg-blue disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {dialogType === "add" ? (
                    <UserPlus className="w-4 h-4" />
                  ) : (
                    <Edit className="w-4 h-4" />
                  )}
                  {dialogType === "add" ? "Add Role" : "Update Role"}
                </>
              )}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserRoleManagement;
