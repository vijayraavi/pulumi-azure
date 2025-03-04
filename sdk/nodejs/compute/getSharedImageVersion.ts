// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Version of a Shared Image within a Shared Image Gallery.
 * 
 * > **NOTE** Shared Image Galleries are currently in Public Preview. You can find more information, including [how to register for the Public Preview here](https://azure.microsoft.com/en-gb/blog/announcing-the-public-preview-of-shared-image-gallery/).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = azure.compute.getSharedImageVersion({
 *     galleryName: "my-image-gallery",
 *     imageName: "my-image",
 *     name: "1.0.0",
 *     resourceGroupName: "example-resources",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/shared_image_version.html.markdown.
 */
export function getSharedImageVersion(args: GetSharedImageVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedImageVersionResult> & GetSharedImageVersionResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetSharedImageVersionResult> = pulumi.runtime.invoke("azure:compute/getSharedImageVersion:getSharedImageVersion", {
        "galleryName": args.galleryName,
        "imageName": args.imageName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getSharedImageVersion.
 */
export interface GetSharedImageVersionArgs {
    /**
     * The name of the Shared Image in which the Shared Image exists.
     */
    readonly galleryName: string;
    /**
     * The name of the Shared Image in which this Version exists.
     */
    readonly imageName: string;
    /**
     * The name of the Image Version.
     */
    readonly name: string;
    /**
     * The name of the Resource Group in which the Shared Image Gallery exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getSharedImageVersion.
 */
export interface GetSharedImageVersionResult {
    /**
     * Is this Image Version excluded from the `latest` filter?
     */
    readonly excludeFromLatest: boolean;
    readonly galleryName: string;
    readonly imageName: string;
    /**
     * The supported Azure location where the Shared Image Gallery exists.
     */
    readonly location: string;
    /**
     * The ID of the Managed Image which was the source of this Shared Image Version.
     */
    readonly managedImageId: string;
    /**
     * The Azure Region in which this Image Version exists.
     */
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the Shared Image.
     */
    readonly tags: {[key: string]: string};
    /**
     * One or more `targetRegion` blocks as documented below.
     */
    readonly targetRegions: outputs.compute.GetSharedImageVersionTargetRegion[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
