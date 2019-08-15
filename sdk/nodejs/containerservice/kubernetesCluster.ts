// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/kubernetes_cluster.html.markdown.
 */
export class KubernetesCluster extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KubernetesClusterState, opts?: pulumi.CustomResourceOptions): KubernetesCluster {
        return new KubernetesCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:containerservice/kubernetesCluster:KubernetesCluster';

    /**
     * Returns true if the given object is an instance of KubernetesCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesCluster.__pulumiType;
    }

    /**
     * A `addonProfile` block.
     */
    public readonly addonProfile!: pulumi.Output<outputApi.containerservice.KubernetesClusterAddonProfile>;
    /**
     * One or more `agentPoolProfile` blocks as defined below.
     */
    public readonly agentPoolProfiles!: pulumi.Output<outputApi.containerservice.KubernetesClusterAgentPoolProfile[]>;
    /**
     * The IP ranges to whitelist for incoming traffic to the masters.
     */
    public readonly apiServerAuthorizedIpRanges!: pulumi.Output<string[] | undefined>;
    /**
     * DNS prefix specified when creating the managed cluster. Changing this forces a new resource to be created.
     */
    public readonly dnsPrefix!: pulumi.Output<string>;
    /**
     * The FQDN of the Azure Kubernetes Managed Cluster.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * A `kubeAdminConfig` block as defined below. This is only available when Role Based Access Control with Azure Active Directory is enabled.
     */
    public /*out*/ readonly kubeAdminConfig!: pulumi.Output<outputApi.containerservice.KubernetesClusterKubeAdminConfig>;
    /**
     * Raw Kubernetes config for the admin account to be used by [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) and other compatible tools. This is only available when Role Based Access Control with Azure Active Directory is enabled.
     */
    public /*out*/ readonly kubeAdminConfigRaw!: pulumi.Output<string>;
    /**
     * A `kubeConfig` block as defined below.
     */
    public /*out*/ readonly kubeConfig!: pulumi.Output<outputApi.containerservice.KubernetesClusterKubeConfig>;
    /**
     * Raw Kubernetes config to be used by [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) and other compatible tools
     */
    public /*out*/ readonly kubeConfigRaw!: pulumi.Output<string>;
    /**
     * Version of Kubernetes specified when creating the AKS managed cluster. If not specified, the latest recommended version will be used at provisioning time (but won't auto-upgrade).
     */
    public readonly kubernetesVersion!: pulumi.Output<string>;
    /**
     * A `linuxProfile` block.
     */
    public readonly linuxProfile!: pulumi.Output<outputApi.containerservice.KubernetesClusterLinuxProfile | undefined>;
    /**
     * The location where the Managed Kubernetes Cluster should be created. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the Managed Kubernetes Cluster to create. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A `networkProfile` block.
     */
    public readonly networkProfile!: pulumi.Output<outputApi.containerservice.KubernetesClusterNetworkProfile>;
    /**
     * The auto-generated Resource Group which contains the resources for this Managed Kubernetes Cluster.
     */
    public /*out*/ readonly nodeResourceGroup!: pulumi.Output<string>;
    /**
     * Specifies the Resource Group where the Managed Kubernetes Cluster should exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A `roleBasedAccessControl` block. Changing this forces a new resource to be created.
     */
    public readonly roleBasedAccessControl!: pulumi.Output<outputApi.containerservice.KubernetesClusterRoleBasedAccessControl>;
    /**
     * A `servicePrincipal` block as documented below.
     */
    public readonly servicePrincipal!: pulumi.Output<outputApi.containerservice.KubernetesClusterServicePrincipal>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a KubernetesCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KubernetesClusterArgs | KubernetesClusterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as KubernetesClusterState | undefined;
            inputs["addonProfile"] = state ? state.addonProfile : undefined;
            inputs["agentPoolProfiles"] = state ? state.agentPoolProfiles : undefined;
            inputs["apiServerAuthorizedIpRanges"] = state ? state.apiServerAuthorizedIpRanges : undefined;
            inputs["dnsPrefix"] = state ? state.dnsPrefix : undefined;
            inputs["fqdn"] = state ? state.fqdn : undefined;
            inputs["kubeAdminConfig"] = state ? state.kubeAdminConfig : undefined;
            inputs["kubeAdminConfigRaw"] = state ? state.kubeAdminConfigRaw : undefined;
            inputs["kubeConfig"] = state ? state.kubeConfig : undefined;
            inputs["kubeConfigRaw"] = state ? state.kubeConfigRaw : undefined;
            inputs["kubernetesVersion"] = state ? state.kubernetesVersion : undefined;
            inputs["linuxProfile"] = state ? state.linuxProfile : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkProfile"] = state ? state.networkProfile : undefined;
            inputs["nodeResourceGroup"] = state ? state.nodeResourceGroup : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["roleBasedAccessControl"] = state ? state.roleBasedAccessControl : undefined;
            inputs["servicePrincipal"] = state ? state.servicePrincipal : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as KubernetesClusterArgs | undefined;
            if (!args || args.agentPoolProfiles === undefined) {
                throw new Error("Missing required property 'agentPoolProfiles'");
            }
            if (!args || args.dnsPrefix === undefined) {
                throw new Error("Missing required property 'dnsPrefix'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.servicePrincipal === undefined) {
                throw new Error("Missing required property 'servicePrincipal'");
            }
            inputs["addonProfile"] = args ? args.addonProfile : undefined;
            inputs["agentPoolProfiles"] = args ? args.agentPoolProfiles : undefined;
            inputs["apiServerAuthorizedIpRanges"] = args ? args.apiServerAuthorizedIpRanges : undefined;
            inputs["dnsPrefix"] = args ? args.dnsPrefix : undefined;
            inputs["kubernetesVersion"] = args ? args.kubernetesVersion : undefined;
            inputs["linuxProfile"] = args ? args.linuxProfile : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkProfile"] = args ? args.networkProfile : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["roleBasedAccessControl"] = args ? args.roleBasedAccessControl : undefined;
            inputs["servicePrincipal"] = args ? args.servicePrincipal : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["fqdn"] = undefined /*out*/;
            inputs["kubeAdminConfig"] = undefined /*out*/;
            inputs["kubeAdminConfigRaw"] = undefined /*out*/;
            inputs["kubeConfig"] = undefined /*out*/;
            inputs["kubeConfigRaw"] = undefined /*out*/;
            inputs["nodeResourceGroup"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(KubernetesCluster.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering KubernetesCluster resources.
 */
export interface KubernetesClusterState {
    /**
     * A `addonProfile` block.
     */
    readonly addonProfile?: pulumi.Input<inputApi.containerservice.KubernetesClusterAddonProfile>;
    /**
     * One or more `agentPoolProfile` blocks as defined below.
     */
    readonly agentPoolProfiles?: pulumi.Input<pulumi.Input<inputApi.containerservice.KubernetesClusterAgentPoolProfile>[]>;
    /**
     * The IP ranges to whitelist for incoming traffic to the masters.
     */
    readonly apiServerAuthorizedIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * DNS prefix specified when creating the managed cluster. Changing this forces a new resource to be created.
     */
    readonly dnsPrefix?: pulumi.Input<string>;
    /**
     * The FQDN of the Azure Kubernetes Managed Cluster.
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * A `kubeAdminConfig` block as defined below. This is only available when Role Based Access Control with Azure Active Directory is enabled.
     */
    readonly kubeAdminConfig?: pulumi.Input<inputApi.containerservice.KubernetesClusterKubeAdminConfig>;
    /**
     * Raw Kubernetes config for the admin account to be used by [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) and other compatible tools. This is only available when Role Based Access Control with Azure Active Directory is enabled.
     */
    readonly kubeAdminConfigRaw?: pulumi.Input<string>;
    /**
     * A `kubeConfig` block as defined below.
     */
    readonly kubeConfig?: pulumi.Input<inputApi.containerservice.KubernetesClusterKubeConfig>;
    /**
     * Raw Kubernetes config to be used by [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) and other compatible tools
     */
    readonly kubeConfigRaw?: pulumi.Input<string>;
    /**
     * Version of Kubernetes specified when creating the AKS managed cluster. If not specified, the latest recommended version will be used at provisioning time (but won't auto-upgrade).
     */
    readonly kubernetesVersion?: pulumi.Input<string>;
    /**
     * A `linuxProfile` block.
     */
    readonly linuxProfile?: pulumi.Input<inputApi.containerservice.KubernetesClusterLinuxProfile>;
    /**
     * The location where the Managed Kubernetes Cluster should be created. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Managed Kubernetes Cluster to create. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `networkProfile` block.
     */
    readonly networkProfile?: pulumi.Input<inputApi.containerservice.KubernetesClusterNetworkProfile>;
    /**
     * The auto-generated Resource Group which contains the resources for this Managed Kubernetes Cluster.
     */
    readonly nodeResourceGroup?: pulumi.Input<string>;
    /**
     * Specifies the Resource Group where the Managed Kubernetes Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `roleBasedAccessControl` block. Changing this forces a new resource to be created.
     */
    readonly roleBasedAccessControl?: pulumi.Input<inputApi.containerservice.KubernetesClusterRoleBasedAccessControl>;
    /**
     * A `servicePrincipal` block as documented below.
     */
    readonly servicePrincipal?: pulumi.Input<inputApi.containerservice.KubernetesClusterServicePrincipal>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a KubernetesCluster resource.
 */
export interface KubernetesClusterArgs {
    /**
     * A `addonProfile` block.
     */
    readonly addonProfile?: pulumi.Input<inputApi.containerservice.KubernetesClusterAddonProfile>;
    /**
     * One or more `agentPoolProfile` blocks as defined below.
     */
    readonly agentPoolProfiles: pulumi.Input<pulumi.Input<inputApi.containerservice.KubernetesClusterAgentPoolProfile>[]>;
    /**
     * The IP ranges to whitelist for incoming traffic to the masters.
     */
    readonly apiServerAuthorizedIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * DNS prefix specified when creating the managed cluster. Changing this forces a new resource to be created.
     */
    readonly dnsPrefix: pulumi.Input<string>;
    /**
     * Version of Kubernetes specified when creating the AKS managed cluster. If not specified, the latest recommended version will be used at provisioning time (but won't auto-upgrade).
     */
    readonly kubernetesVersion?: pulumi.Input<string>;
    /**
     * A `linuxProfile` block.
     */
    readonly linuxProfile?: pulumi.Input<inputApi.containerservice.KubernetesClusterLinuxProfile>;
    /**
     * The location where the Managed Kubernetes Cluster should be created. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Managed Kubernetes Cluster to create. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `networkProfile` block.
     */
    readonly networkProfile?: pulumi.Input<inputApi.containerservice.KubernetesClusterNetworkProfile>;
    /**
     * Specifies the Resource Group where the Managed Kubernetes Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `roleBasedAccessControl` block. Changing this forces a new resource to be created.
     */
    readonly roleBasedAccessControl?: pulumi.Input<inputApi.containerservice.KubernetesClusterRoleBasedAccessControl>;
    /**
     * A `servicePrincipal` block as documented below.
     */
    readonly servicePrincipal: pulumi.Input<inputApi.containerservice.KubernetesClusterServicePrincipal>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
