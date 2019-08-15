// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an Authorization Rule associated with a Notification Hub within a Notification Hub Namespace.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "Australia East",
 *     name: "notificationhub-resources",
 * });
 * const testNamespace = new azure.notificationhub.Namespace("test", {
 *     location: testResourceGroup.location,
 *     name: "myappnamespace",
 *     namespaceType: "NotificationHub",
 *     resourceGroupName: testResourceGroup.name,
 *     skuName: "Free",
 * });
 * const testHub = new azure.notificationhub.Hub("test", {
 *     location: testResourceGroup.location,
 *     name: "mynotificationhub",
 *     namespaceName: testNamespace.name,
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testAuthorizationRule = new azure.notificationhub.AuthorizationRule("test", {
 *     listen: true,
 *     manage: true,
 *     name: "management-auth-rule",
 *     namespaceName: testNamespace.name,
 *     notificationHubName: testHub.name,
 *     resourceGroupName: testResourceGroup.name,
 *     send: true,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/notification_hub_authorization_rule.html.markdown.
 */
export class AuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing AuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuthorizationRuleState, opts?: pulumi.CustomResourceOptions): AuthorizationRule {
        return new AuthorizationRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:notificationhub/authorizationRule:AuthorizationRule';

    /**
     * Returns true if the given object is an instance of AuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuthorizationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuthorizationRule.__pulumiType;
    }

    /**
     * Does this Authorization Rule have Listen access to the Notification Hub? Defaults to `false`.
     */
    public readonly listen!: pulumi.Output<boolean | undefined>;
    /**
     * Does this Authorization Rule have Manage access to the Notification Hub? Defaults to `false`.
     */
    public readonly manage!: pulumi.Output<boolean | undefined>;
    /**
     * The name to use for this Authorization Rule. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the Notification Hub Namespace in which the Notification Hub exists. Changing this forces a new resource to be created.
     */
    public readonly namespaceName!: pulumi.Output<string>;
    /**
     * The name of the Notification Hub for which the Authorization Rule should be created. Changing this forces a new resource to be created.
     */
    public readonly notificationHubName!: pulumi.Output<string>;
    /**
     * The Primary Access Key associated with this Authorization Rule.
     */
    public /*out*/ readonly primaryAccessKey!: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The Secondary Access Key associated with this Authorization Rule.
     */
    public /*out*/ readonly secondaryAccessKey!: pulumi.Output<string>;
    /**
     * Does this Authorization Rule have Send access to the Notification Hub? Defaults to `false`.
     */
    public readonly send!: pulumi.Output<boolean | undefined>;

    /**
     * Create a AuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AuthorizationRuleArgs | AuthorizationRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AuthorizationRuleState | undefined;
            inputs["listen"] = state ? state.listen : undefined;
            inputs["manage"] = state ? state.manage : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namespaceName"] = state ? state.namespaceName : undefined;
            inputs["notificationHubName"] = state ? state.notificationHubName : undefined;
            inputs["primaryAccessKey"] = state ? state.primaryAccessKey : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["secondaryAccessKey"] = state ? state.secondaryAccessKey : undefined;
            inputs["send"] = state ? state.send : undefined;
        } else {
            const args = argsOrState as AuthorizationRuleArgs | undefined;
            if (!args || args.namespaceName === undefined) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if (!args || args.notificationHubName === undefined) {
                throw new Error("Missing required property 'notificationHubName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["listen"] = args ? args.listen : undefined;
            inputs["manage"] = args ? args.manage : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["notificationHubName"] = args ? args.notificationHubName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["send"] = args ? args.send : undefined;
            inputs["primaryAccessKey"] = undefined /*out*/;
            inputs["secondaryAccessKey"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(AuthorizationRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AuthorizationRule resources.
 */
export interface AuthorizationRuleState {
    /**
     * Does this Authorization Rule have Listen access to the Notification Hub? Defaults to `false`.
     */
    readonly listen?: pulumi.Input<boolean>;
    /**
     * Does this Authorization Rule have Manage access to the Notification Hub? Defaults to `false`.
     */
    readonly manage?: pulumi.Input<boolean>;
    /**
     * The name to use for this Authorization Rule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Notification Hub Namespace in which the Notification Hub exists. Changing this forces a new resource to be created.
     */
    readonly namespaceName?: pulumi.Input<string>;
    /**
     * The name of the Notification Hub for which the Authorization Rule should be created. Changing this forces a new resource to be created.
     */
    readonly notificationHubName?: pulumi.Input<string>;
    /**
     * The Primary Access Key associated with this Authorization Rule.
     */
    readonly primaryAccessKey?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The Secondary Access Key associated with this Authorization Rule.
     */
    readonly secondaryAccessKey?: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have Send access to the Notification Hub? Defaults to `false`.
     */
    readonly send?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a AuthorizationRule resource.
 */
export interface AuthorizationRuleArgs {
    /**
     * Does this Authorization Rule have Listen access to the Notification Hub? Defaults to `false`.
     */
    readonly listen?: pulumi.Input<boolean>;
    /**
     * Does this Authorization Rule have Manage access to the Notification Hub? Defaults to `false`.
     */
    readonly manage?: pulumi.Input<boolean>;
    /**
     * The name to use for this Authorization Rule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Notification Hub Namespace in which the Notification Hub exists. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The name of the Notification Hub for which the Authorization Rule should be created. Changing this forces a new resource to be created.
     */
    readonly notificationHubName: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have Send access to the Notification Hub? Defaults to `false`.
     */
    readonly send?: pulumi.Input<boolean>;
}
