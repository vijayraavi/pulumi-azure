// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an API Schema within an API Management Service.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as fs from "fs";
 * 
 * const exampleApi = pulumi.output(azure.apimanagement.getApi({
 *     apiManagementName: "search-api-management",
 *     name: "search-api",
 *     resourceGroupName: "search-service",
 *     revision: "2",
 * }));
 * const exampleApiSchema = new azure.apimanagement.ApiSchema("example", {
 *     apiManagementName: exampleApi.apiManagementName,
 *     apiName: exampleApi.name,
 *     contentType: "application/vnd.ms-azure-apim.xsd+xml",
 *     resourceGroupName: exampleApi.resourceGroupName,
 *     schemaId: "example-sche,a",
 *     value: fs.readFileSync("api_management_api_schema.xml", "utf-8"),
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_api_schema.html.markdown.
 */
export class ApiSchema extends pulumi.CustomResource {
    /**
     * Get an existing ApiSchema resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiSchemaState, opts?: pulumi.CustomResourceOptions): ApiSchema {
        return new ApiSchema(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:apimanagement/apiSchema:ApiSchema';

    /**
     * Returns true if the given object is an instance of ApiSchema.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiSchema {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiSchema.__pulumiType;
    }

    /**
     * The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
     */
    public readonly apiManagementName!: pulumi.Output<string>;
    /**
     * The name of the API within the API Management Service where this API Schema should be created. Changing this forces a new resource to be created.
     */
    public readonly apiName!: pulumi.Output<string>;
    /**
     * The content type of the API Schema.
     */
    public readonly contentType!: pulumi.Output<string>;
    /**
     * The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A unique identifier for this API Schema. Changing this forces a new resource to be created.
     */
    public readonly schemaId!: pulumi.Output<string>;
    /**
     * The JSON escaped string defining the document representing the Schema.
     */
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a ApiSchema resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiSchemaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiSchemaArgs | ApiSchemaState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ApiSchemaState | undefined;
            inputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            inputs["apiName"] = state ? state.apiName : undefined;
            inputs["contentType"] = state ? state.contentType : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["schemaId"] = state ? state.schemaId : undefined;
            inputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as ApiSchemaArgs | undefined;
            if (!args || args.apiManagementName === undefined) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if (!args || args.apiName === undefined) {
                throw new Error("Missing required property 'apiName'");
            }
            if (!args || args.contentType === undefined) {
                throw new Error("Missing required property 'contentType'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.schemaId === undefined) {
                throw new Error("Missing required property 'schemaId'");
            }
            if (!args || args.value === undefined) {
                throw new Error("Missing required property 'value'");
            }
            inputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            inputs["apiName"] = args ? args.apiName : undefined;
            inputs["contentType"] = args ? args.contentType : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["schemaId"] = args ? args.schemaId : undefined;
            inputs["value"] = args ? args.value : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ApiSchema.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ApiSchema resources.
 */
export interface ApiSchemaState {
    /**
     * The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
     */
    readonly apiManagementName?: pulumi.Input<string>;
    /**
     * The name of the API within the API Management Service where this API Schema should be created. Changing this forces a new resource to be created.
     */
    readonly apiName?: pulumi.Input<string>;
    /**
     * The content type of the API Schema.
     */
    readonly contentType?: pulumi.Input<string>;
    /**
     * The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A unique identifier for this API Schema. Changing this forces a new resource to be created.
     */
    readonly schemaId?: pulumi.Input<string>;
    /**
     * The JSON escaped string defining the document representing the Schema.
     */
    readonly value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApiSchema resource.
 */
export interface ApiSchemaArgs {
    /**
     * The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Input<string>;
    /**
     * The name of the API within the API Management Service where this API Schema should be created. Changing this forces a new resource to be created.
     */
    readonly apiName: pulumi.Input<string>;
    /**
     * The content type of the API Schema.
     */
    readonly contentType: pulumi.Input<string>;
    /**
     * The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A unique identifier for this API Schema. Changing this forces a new resource to be created.
     */
    readonly schemaId: pulumi.Input<string>;
    /**
     * The JSON escaped string defining the document representing the Schema.
     */
    readonly value: pulumi.Input<string>;
}
