// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

export class ZipBlob extends pulumi.CustomResource {
    /**
     * Get an existing ZipBlob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZipBlobState, opts?: pulumi.CustomResourceOptions): ZipBlob {
        return new ZipBlob(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:storage/zipBlob:ZipBlob';

    /**
     * Returns true if the given object is an instance of ZipBlob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ZipBlob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ZipBlob.__pulumiType;
    }

    public readonly attempts!: pulumi.Output<number | undefined>;
    public readonly contentType!: pulumi.Output<string | undefined>;
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly parallelism!: pulumi.Output<number | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly size!: pulumi.Output<number | undefined>;
    public readonly content!: pulumi.Output<pulumi.asset.Archive | undefined>;
    public readonly sourceUri!: pulumi.Output<string | undefined>;
    public readonly storageAccountName!: pulumi.Output<string>;
    public readonly storageContainerName!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string | undefined>;
    public /*out*/ readonly url!: pulumi.Output<string>;

    /**
     * Create a ZipBlob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZipBlobArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZipBlobArgs | ZipBlobState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ZipBlobState | undefined;
            inputs["attempts"] = state ? state.attempts : undefined;
            inputs["contentType"] = state ? state.contentType : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parallelism"] = state ? state.parallelism : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["content"] = state ? state.content : undefined;
            inputs["sourceUri"] = state ? state.sourceUri : undefined;
            inputs["storageAccountName"] = state ? state.storageAccountName : undefined;
            inputs["storageContainerName"] = state ? state.storageContainerName : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as ZipBlobArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageAccountName === undefined) {
                throw new Error("Missing required property 'storageAccountName'");
            }
            if (!args || args.storageContainerName === undefined) {
                throw new Error("Missing required property 'storageContainerName'");
            }
            inputs["attempts"] = args ? args.attempts : undefined;
            inputs["contentType"] = args ? args.contentType : undefined;
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parallelism"] = args ? args.parallelism : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["size"] = args ? args.size : undefined;
            inputs["content"] = args ? args.content : undefined;
            inputs["sourceUri"] = args ? args.sourceUri : undefined;
            inputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            inputs["storageContainerName"] = args ? args.storageContainerName : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["url"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ZipBlob.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ZipBlob resources.
 */
export interface ZipBlobState {
    readonly attempts?: pulumi.Input<number>;
    readonly contentType?: pulumi.Input<string>;
    readonly metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    readonly name?: pulumi.Input<string>;
    readonly parallelism?: pulumi.Input<number>;
    readonly resourceGroupName?: pulumi.Input<string>;
    readonly size?: pulumi.Input<number>;
    readonly content?: pulumi.Input<pulumi.asset.Archive>;
    readonly sourceUri?: pulumi.Input<string>;
    readonly storageAccountName?: pulumi.Input<string>;
    readonly storageContainerName?: pulumi.Input<string>;
    readonly type?: pulumi.Input<string>;
    readonly url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ZipBlob resource.
 */
export interface ZipBlobArgs {
    readonly attempts?: pulumi.Input<number>;
    readonly contentType?: pulumi.Input<string>;
    readonly metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    readonly name?: pulumi.Input<string>;
    readonly parallelism?: pulumi.Input<number>;
    readonly resourceGroupName: pulumi.Input<string>;
    readonly size?: pulumi.Input<number>;
    readonly content?: pulumi.Input<pulumi.asset.Archive>;
    readonly sourceUri?: pulumi.Input<string>;
    readonly storageAccountName: pulumi.Input<string>;
    readonly storageContainerName: pulumi.Input<string>;
    readonly type?: pulumi.Input<string>;
}
