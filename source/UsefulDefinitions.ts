
/*
    BEGIN_MODULE UsefulDefinitions
    OID: joint-iso-itu-t.ds.module.usefulDefinitions.3
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
} from "./__utils";


export type ID = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_ID = __utils._decodeObjectIdentifier;
export const _encode_ID = __utils._encodeObjectIdentifier;


export const ds: ID = new asn1.ObjectIdentifier([
    /* ds */ 5,
], joint_iso_itu_t);

export const module_: ID = new asn1.ObjectIdentifier([
    1,
], ds);

export const serviceElement: ID = new asn1.ObjectIdentifier([
    2,
], ds);

export const attributeSyntax: ID = new asn1.ObjectIdentifier([
    5,
], ds);

export const algorithm: ID = new asn1.ObjectIdentifier([
    8,
], ds);

export const group: ID = new asn1.ObjectIdentifier([
    16,
], ds);

export const usefulDefinitions: ID = new asn1.ObjectIdentifier([
    /* usefulDefinitions */ 0,
    3,
], module_);

export const informationFramework: ID = new asn1.ObjectIdentifier([
    /* informationFramework */ 1,
    3,
], module_);

export const directoryAbstractService: ID = new asn1.ObjectIdentifier([
    /* directoryAbstractService */ 2,
    3,
], module_);

export const distributedOperations: ID = new asn1.ObjectIdentifier([
    /* distributedOperations */ 3,
    3,
], module_);

export const protocolObjectIdentifiers: ID = new asn1.ObjectIdentifier([
    /* protocolObjectIdentifiers */ 4,
    3,
], module_);

export const selectedAttributeTypes: ID = new asn1.ObjectIdentifier([
    /* selectedAttributeTypes */ 5,
    3,
], module_);

export const selectedObjectClasses: ID = new asn1.ObjectIdentifier([
    /* selectedObjectClasses */ 6,
    3,
], module_);

export const authenticationFramework: ID = new asn1.ObjectIdentifier([
    /* authenticationFramework */ 7,
    3,
], module_);

export const algorithmObjectIdentifiers: ID = new asn1.ObjectIdentifier([
    /* algorithmObjectIdentifiers */ 8,
    3,
], module_);

export const directoryObjectIdentifiers: ID = new asn1.ObjectIdentifier([
    /* directoryObjectIdentifiers */ 9,
    3,
], module_);

export const upperBounds: ID = new asn1.ObjectIdentifier([
    /* upperBounds */ 10,
    3,
], module_);

export const dap: ID = new asn1.ObjectIdentifier([
    /* dap */ 11,
    3,
], module_);

export const dsp: ID = new asn1.ObjectIdentifier([
    /* dsp */ 12,
    3,
], module_);

export const distributedDirectoryOIDs: ID = new asn1.ObjectIdentifier([
    /* distributedDirectoryOIDs */ 13,
    3,
], module_);

export const directoryShadowOIDs: ID = new asn1.ObjectIdentifier([
    /* directoryShadowOIDs */ 14,
    3,
], module_);

export const directoryShadowAbstractService: ID = new asn1.ObjectIdentifier([
    /* directoryShadowAbstractService */ 15,
    3,
], module_);

export const disp: ID = new asn1.ObjectIdentifier([
    /* disp */ 16,
    3,
], module_);

export const dop: ID = new asn1.ObjectIdentifier([
    /* dop */ 17,
    3,
], module_);

export const opBindingManagement: ID = new asn1.ObjectIdentifier([
    /* opBindingManagement */ 18,
    3,
], module_);

export const opBindingOIDs: ID = new asn1.ObjectIdentifier([
    /* opBindingOIDs */ 19,
    3,
], module_);

export const hierarchicalOperationalBindings: ID = new asn1.ObjectIdentifier([
    /* hierarchicalOperationalBindings */ 20,
    3,
], module_);

export const dsaOperationalAttributeTypes: ID = new asn1.ObjectIdentifier([
    /* dsaOperationalAttributeTypes */ 22,
    3,
], module_);

export const schemaAdministration: ID = new asn1.ObjectIdentifier([
    /* schemaAdministration */ 23,
    3,
], module_);

export const basicAccessControl: ID = new asn1.ObjectIdentifier([
    /* basicAccessControl */ 24,
    3,
], module_);

export const directoryOperationalBindingTypes: ID = new asn1.ObjectIdentifier([
    /* directoryOperationalBindingTypes */ 25,
    3,
], module_);

export const certificateExtensions: ID = new asn1.ObjectIdentifier([
    /* certificateExtensions */ 26,
    0,
], module_);

export const directoryManagement: ID = new asn1.ObjectIdentifier([
    /* directoryManagement */ 27,
    1,
], module_);

export const enhancedSecurity: ID = new asn1.ObjectIdentifier([
    /* enhancedSecurity */ 28,
    1,
], module_);

export const iDMProtocolSpecification: ID = new asn1.ObjectIdentifier([
    /* iDMProtocolSpecification */ 30,
    4,
], module_);

export const directoryIDMProtocols: ID = new asn1.ObjectIdentifier([
    /* directoryIDMProtocols */ 31,
    4,
], module_);

export const objectClass: ID = new asn1.ObjectIdentifier([
    6,
], ds);

export const id_oc: ID = objectClass;

export const attributeType: ID = new asn1.ObjectIdentifier([
    4,
], ds);

export const id_at: ID = attributeType;

export const abstractSyntax: ID = new asn1.ObjectIdentifier([
    9,
], ds);

export const id_as: ID = abstractSyntax;

export const matchingRule: ID = new asn1.ObjectIdentifier([
    13,
], ds);

export const id_mr: ID = matchingRule;

export const nameForm: ID = new asn1.ObjectIdentifier([
    15,
], ds);

export const id_nf: ID = nameForm;

export const subentry: ID = new asn1.ObjectIdentifier([
    17,
], ds);

export const id_sc: ID = subentry;

export const operationalAttributeType: ID = new asn1.ObjectIdentifier([
    18,
], ds);

export const id_oa: ID = operationalAttributeType;

export const operationalBinding: ID = new asn1.ObjectIdentifier([
    19,
], ds);

export const id_ob: ID = operationalBinding;

export const dsaOperationalAttribute: ID = new asn1.ObjectIdentifier([
    12,
], ds);

export const id_doa: ID = dsaOperationalAttribute;

export const knowledgeMatchingRule: ID = new asn1.ObjectIdentifier([
    14,
], ds);

export const id_kmr: ID = knowledgeMatchingRule;

export const schemaObjectClass: ID = new asn1.ObjectIdentifier([
    20,
], ds);

export const id_soc: ID = schemaObjectClass;

export const schemaOperationalAttribute: ID = new asn1.ObjectIdentifier([
    21,
], ds);

export const id_soa: ID = schemaOperationalAttribute;

export const administrativeRoles: ID = new asn1.ObjectIdentifier([
    23,
], ds);

export const id_ar: ID = administrativeRoles;

export const accessControlAttribute: ID = new asn1.ObjectIdentifier([
    24,
], ds);

export const id_aca: ID = accessControlAttribute;

export const applicationContext: ID = new asn1.ObjectIdentifier([
    3,
], ds);

export const id_ac: ID = applicationContext;

export const rosObject: ID = new asn1.ObjectIdentifier([
    25,
], ds);

export const id_rosObject: ID = rosObject;

export const contract: ID = new asn1.ObjectIdentifier([
    26,
], ds);

export const id_contract: ID = contract;

export const package_: ID = new asn1.ObjectIdentifier([
    27,
], ds);

export const id_package: ID = package_;

export const accessControlSchemes: ID = new asn1.ObjectIdentifier([
    28,
], ds);

export const id_acScheme: ID = accessControlSchemes;

export const certificateExtension: ID = new asn1.ObjectIdentifier([
    29,
], ds);

export const id_ce: ID = certificateExtension;

export const managementObject: ID = new asn1.ObjectIdentifier([
    30,
], ds);

export const id_mgt: ID = managementObject;

export const idmProtocol: ID = new asn1.ObjectIdentifier([
    33,
], ds);

export const id_idm: ID = idmProtocol;

export const attributeValueContext: ID = new asn1.ObjectIdentifier([
    31,
], ds);

export const id_avc: ID = attributeValueContext;

export const problem: ID = new asn1.ObjectIdentifier([
    34,
], ds);

export const id_pr: ID = problem;

export const notification: ID = new asn1.ObjectIdentifier([
    35,
], ds);

export const id_not: ID = notification;

export const matchingRestriction: ID = new asn1.ObjectIdentifier([
    36,
], ds);

export const id_mre: ID = matchingRestriction;

export const controlAttributeType: ID = new asn1.ObjectIdentifier([
    37,
], ds);

export const id_cat: ID = controlAttributeType;

/* END_MODULE UsefulDefinitions */
