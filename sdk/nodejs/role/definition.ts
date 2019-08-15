// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a custom Role Definition, used to assign Roles to Users/Principals. See ['Understand role definitions'](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-definitions) in the Azure documentation for more details.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const primary = pulumi.output(azure.core.getSubscription({}));
 * const test = new azure.role.Definition("test", {
 *     assignableScopes: [primary.id],
 *     description: "This is a custom role",
 *     name: "my-custom-role",
 *     permissions: [{
 *         actions: ["*"],
 *         notActions: [],
 *     }],
 *     scope: primary.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/role_definition.html.markdown.
 */
export class Definition extends pulumi.CustomResource {
    /**
     * Get an existing Definition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefinitionState, opts?: pulumi.CustomResourceOptions): Definition {
        return new Definition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:role/definition:Definition';

    /**
     * Returns true if the given object is an instance of Definition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Definition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Definition.__pulumiType;
    }

    /**
     * One or more assignable scopes for this Role Definition, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`.
     */
    public readonly assignableScopes!: pulumi.Output<string[]>;
    /**
     * A description of the Role Definition.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the Role Definition. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A `permissions` block as defined below.
     */
    public readonly permissions!: pulumi.Output<outputApi.role.DefinitionPermission[]>;
    /**
     * A unique UUID/GUID which identifies this role - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    public readonly roleDefinitionId!: pulumi.Output<string>;
    /**
     * The scope at which the Role Definition applies too, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`. Changing this forces a new resource to be created.
     */
    public readonly scope!: pulumi.Output<string>;

    /**
     * Create a Definition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefinitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefinitionArgs | DefinitionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DefinitionState | undefined;
            inputs["assignableScopes"] = state ? state.assignableScopes : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["permissions"] = state ? state.permissions : undefined;
            inputs["roleDefinitionId"] = state ? state.roleDefinitionId : undefined;
            inputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as DefinitionArgs | undefined;
            if (!args || args.assignableScopes === undefined) {
                throw new Error("Missing required property 'assignableScopes'");
            }
            if (!args || args.permissions === undefined) {
                throw new Error("Missing required property 'permissions'");
            }
            if (!args || args.scope === undefined) {
                throw new Error("Missing required property 'scope'");
            }
            inputs["assignableScopes"] = args ? args.assignableScopes : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["permissions"] = args ? args.permissions : undefined;
            inputs["roleDefinitionId"] = args ? args.roleDefinitionId : undefined;
            inputs["scope"] = args ? args.scope : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Definition.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Definition resources.
 */
export interface DefinitionState {
    /**
     * One or more assignable scopes for this Role Definition, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`.
     */
    readonly assignableScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A description of the Role Definition.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the Role Definition. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `permissions` block as defined below.
     */
    readonly permissions?: pulumi.Input<pulumi.Input<inputApi.role.DefinitionPermission>[]>;
    /**
     * A unique UUID/GUID which identifies this role - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    readonly roleDefinitionId?: pulumi.Input<string>;
    /**
     * The scope at which the Role Definition applies too, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`. Changing this forces a new resource to be created.
     */
    readonly scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Definition resource.
 */
export interface DefinitionArgs {
    /**
     * One or more assignable scopes for this Role Definition, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`.
     */
    readonly assignableScopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A description of the Role Definition.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the Role Definition. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `permissions` block as defined below.
     */
    readonly permissions: pulumi.Input<pulumi.Input<inputApi.role.DefinitionPermission>[]>;
    /**
     * A unique UUID/GUID which identifies this role - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    readonly roleDefinitionId?: pulumi.Input<string>;
    /**
     * The scope at which the Role Definition applies too, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`. Changing this forces a new resource to be created.
     */
    readonly scope: pulumi.Input<string>;
}
