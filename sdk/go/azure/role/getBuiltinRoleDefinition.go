// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package role

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access the properties of a built-in Role Definition. To access information about a custom Role Definition, [please see the `azurerm_role_definition` data source](role_definition.html) instead.
func LookupBuiltinRoleDefinition(ctx *pulumi.Context, args *GetBuiltinRoleDefinitionArgs) (*GetBuiltinRoleDefinitionResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
	}
	outputs, err := ctx.Invoke("azure:role/getBuiltinRoleDefinition:getBuiltinRoleDefinition", inputs)
	if err != nil {
		return nil, err
	}
	return &GetBuiltinRoleDefinitionResult{
		AssignableScopes: outputs["assignableScopes"],
		Description: outputs["description"],
		Permissions: outputs["permissions"],
		Type: outputs["type"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getBuiltinRoleDefinition.
type GetBuiltinRoleDefinitionArgs struct {
	// Specifies the name of the built-in Role Definition. Possible values are: `Contributor`, `Owner`, `Reader` and `VirtualMachineContributor`.
	Name interface{}
}

// A collection of values returned by getBuiltinRoleDefinition.
type GetBuiltinRoleDefinitionResult struct {
	// One or more assignable scopes for this Role Definition, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`.
	AssignableScopes interface{}
	// the Description of the built-in Role.
	Description interface{}
	// a `permissions` block as documented below.
	Permissions interface{}
	// the Type of the Role.
	Type interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
