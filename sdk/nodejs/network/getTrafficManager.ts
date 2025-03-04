// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access the ID of a specified Traffic Manager Geographical Location within the Geographical Hierarchy.
 * 
 * ## Example Usage (World)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = azure.network.getTrafficManager({
 *     name: "World",
 * });
 * 
 * export const locationCode = test.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/traffic_manager_geographical_location.html.markdown.
 */
export function getTrafficManager(args: GetTrafficManagerArgs, opts?: pulumi.InvokeOptions): Promise<GetTrafficManagerResult> & GetTrafficManagerResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetTrafficManagerResult> = pulumi.runtime.invoke("azure:network/getTrafficManager:getTrafficManager", {
        "name": args.name,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getTrafficManager.
 */
export interface GetTrafficManagerArgs {
    /**
     * Specifies the name of the Location, for example `World`, `Europe` or `Germany`.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getTrafficManager.
 */
export interface GetTrafficManagerResult {
    readonly name: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
