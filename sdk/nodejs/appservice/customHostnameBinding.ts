// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Hostname Binding within an App Service.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as random from "@pulumi/random";
 * 
 * const server = new random.RandomId("server", {
 *     byteLength: 8,
 *     keepers: {
 *         azi_id: 1,
 *     },
 * });
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "some-resource-group",
 * });
 * const testPlan = new azure.appservice.Plan("test", {
 *     location: testResourceGroup.location,
 *     name: "some-app-service-plan",
 *     resourceGroupName: testResourceGroup.name,
 *     sku: {
 *         size: "S1",
 *         tier: "Standard",
 *     },
 * });
 * const testAppService = new azure.appservice.AppService("test", {
 *     appServicePlanId: testPlan.id,
 *     location: testResourceGroup.location,
 *     name: server.hex,
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testCustomHostnameBinding = new azure.appservice.CustomHostnameBinding("test", {
 *     appServiceName: testAppService.name,
 *     hostname: "www.mywebsite.com",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/app_service_custom_hostname_binding.html.markdown.
 */
export class CustomHostnameBinding extends pulumi.CustomResource {
    /**
     * Get an existing CustomHostnameBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CustomHostnameBindingState, opts?: pulumi.CustomResourceOptions): CustomHostnameBinding {
        return new CustomHostnameBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:appservice/customHostnameBinding:CustomHostnameBinding';

    /**
     * Returns true if the given object is an instance of CustomHostnameBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomHostnameBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomHostnameBinding.__pulumiType;
    }

    /**
     * The name of the App Service in which to add the Custom Hostname Binding. Changing this forces a new resource to be created.
     */
    public readonly appServiceName!: pulumi.Output<string>;
    /**
     * Specifies the Custom Hostname to use for the App Service, example `www.example.com`. Changing this forces a new resource to be created.
     */
    public readonly hostname!: pulumi.Output<string>;
    /**
     * The name of the resource group in which the App Service exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The SSL type. Possible values are `IpBasedEnabled` and `SniEnabled`. Changing this forces a new resource to be created.
     */
    public readonly sslState!: pulumi.Output<string | undefined>;
    /**
     * The SSL certificate thumbprint. Changing this forces a new resource to be created.
     */
    public readonly thumbprint!: pulumi.Output<string | undefined>;
    /**
     * The virtual IP address assigned to the hostname if IP based SSL is enabled.
     */
    public /*out*/ readonly virtualIp!: pulumi.Output<string>;

    /**
     * Create a CustomHostnameBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomHostnameBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CustomHostnameBindingArgs | CustomHostnameBindingState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CustomHostnameBindingState | undefined;
            inputs["appServiceName"] = state ? state.appServiceName : undefined;
            inputs["hostname"] = state ? state.hostname : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sslState"] = state ? state.sslState : undefined;
            inputs["thumbprint"] = state ? state.thumbprint : undefined;
            inputs["virtualIp"] = state ? state.virtualIp : undefined;
        } else {
            const args = argsOrState as CustomHostnameBindingArgs | undefined;
            if (!args || args.appServiceName === undefined) {
                throw new Error("Missing required property 'appServiceName'");
            }
            if (!args || args.hostname === undefined) {
                throw new Error("Missing required property 'hostname'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["appServiceName"] = args ? args.appServiceName : undefined;
            inputs["hostname"] = args ? args.hostname : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sslState"] = args ? args.sslState : undefined;
            inputs["thumbprint"] = args ? args.thumbprint : undefined;
            inputs["virtualIp"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(CustomHostnameBinding.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering CustomHostnameBinding resources.
 */
export interface CustomHostnameBindingState {
    /**
     * The name of the App Service in which to add the Custom Hostname Binding. Changing this forces a new resource to be created.
     */
    readonly appServiceName?: pulumi.Input<string>;
    /**
     * Specifies the Custom Hostname to use for the App Service, example `www.example.com`. Changing this forces a new resource to be created.
     */
    readonly hostname?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the App Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The SSL type. Possible values are `IpBasedEnabled` and `SniEnabled`. Changing this forces a new resource to be created.
     */
    readonly sslState?: pulumi.Input<string>;
    /**
     * The SSL certificate thumbprint. Changing this forces a new resource to be created.
     */
    readonly thumbprint?: pulumi.Input<string>;
    /**
     * The virtual IP address assigned to the hostname if IP based SSL is enabled.
     */
    readonly virtualIp?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CustomHostnameBinding resource.
 */
export interface CustomHostnameBindingArgs {
    /**
     * The name of the App Service in which to add the Custom Hostname Binding. Changing this forces a new resource to be created.
     */
    readonly appServiceName: pulumi.Input<string>;
    /**
     * Specifies the Custom Hostname to use for the App Service, example `www.example.com`. Changing this forces a new resource to be created.
     */
    readonly hostname: pulumi.Input<string>;
    /**
     * The name of the resource group in which the App Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SSL type. Possible values are `IpBasedEnabled` and `SniEnabled`. Changing this forces a new resource to be created.
     */
    readonly sslState?: pulumi.Input<string>;
    /**
     * The SSL certificate thumbprint. Changing this forces a new resource to be created.
     */
    readonly thumbprint?: pulumi.Input<string>;
}
