// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package keyvault

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about the permissions from the Management Key Vault Templates.
func LookupAccessPolicy(ctx *pulumi.Context, args *GetAccessPolicyArgs) (*GetAccessPolicyResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
	}
	outputs, err := ctx.Invoke("azure:keyvault/getAccessPolicy:getAccessPolicy", inputs)
	if err != nil {
		return nil, err
	}
	return &GetAccessPolicyResult{
		CertificatePermissions: outputs["certificatePermissions"],
		KeyPermissions: outputs["keyPermissions"],
		SecretPermissions: outputs["secretPermissions"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getAccessPolicy.
type GetAccessPolicyArgs struct {
	// Specifies the name of the Management Tempalte. Possible values are: `Key Management`,
	// `Secret Management`, `Certificate Management`, `Key & Secret Management`, `Key & Certificate Management`,
	// `Secret & Certificate Management`,  `Key, Secret, & Certificate Management`
	Name interface{}
}

// A collection of values returned by getAccessPolicy.
type GetAccessPolicyResult struct {
	// the certificate permissions for the access policy
	CertificatePermissions interface{}
	// the key permissions for the access policy
	KeyPermissions interface{}
	// the secret permissions for the access policy
	SecretPermissions interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
