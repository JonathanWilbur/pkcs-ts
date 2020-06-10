
/*
    BEGIN_MODULE SelectedAttributeTypes
    OID: joint-iso-itu-t.ds.module.selectedAttributeTypes.3
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
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    informationFramework,
    upperBounds,
    id_at,
    id_mr,
    id_avc,
    directoryAbstractService,
    id_pr,
    id_not,
    id_cat
} from "./UsefulDefinitions";
export {
    informationFramework,
    upperBounds,
    id_at,
    id_mr,
    id_avc,
    directoryAbstractService,
    id_pr,
    id_not,
    id_cat
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    Attribute,
    ATTRIBUTE,
    MATCHING_RULE,
    AttributeType,
    OBJECT_CLASS,
    DistinguishedName,
    objectIdentifierMatch,
    distinguishedNameMatch,
    CONTEXT,
    ContextAssertion,
    AttributeCombination,
    ContextCombination,
    MAPPING_BASED_MATCHING,
    MRMapping,
    AttributeValueAssertion,
    _decode_Attribute,
    _encode_Attribute,
    _decode_AttributeType,
    _encode_AttributeType,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
    _decode_ContextAssertion,
    _encode_ContextAssertion,
    _decode_AttributeCombination,
    _encode_AttributeCombination,
    _decode_ContextCombination,
    _encode_ContextCombination,
    _decode_MRMapping,
    _encode_MRMapping,
    _decode_AttributeValueAssertion,
    _encode_AttributeValueAssertion
} from "./InformationFramework";
export {
    Attribute,
    ATTRIBUTE,
    MATCHING_RULE,
    AttributeType,
    OBJECT_CLASS,
    DistinguishedName,
    objectIdentifierMatch,
    distinguishedNameMatch,
    CONTEXT,
    ContextAssertion,
    AttributeCombination,
    ContextCombination,
    MAPPING_BASED_MATCHING,
    MRMapping,
    AttributeValueAssertion,
    _decode_Attribute,
    _encode_Attribute,
    _decode_AttributeType,
    _encode_AttributeType,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
    _decode_ContextAssertion,
    _encode_ContextAssertion,
    _decode_AttributeCombination,
    _encode_AttributeCombination,
    _decode_ContextCombination,
    _encode_ContextCombination,
    _decode_MRMapping,
    _encode_MRMapping,
    _decode_AttributeValueAssertion,
    _encode_AttributeValueAssertion
} from "./InformationFramework";

import * as MTSAbstractService from "./MTSAbstractService";
import {
    G3FacsimileNonBasicParameters,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters
} from "./MTSAbstractService";
export {
    G3FacsimileNonBasicParameters,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters
} from "./MTSAbstractService";

import * as UpperBounds from "./UpperBounds";
import {
    ub_answerback,
    ub_name,
    ub_common_name,
    ub_surname,
    ub_serial_number,
    ub_locality_name,
    ub_state_name,
    ub_street_address,
    ub_organization_name,
    ub_organizational_unit_name,
    ub_title,
    ub_description,
    ub_business_category,
    ub_postal_line,
    ub_postal_string,
    ub_postal_code,
    ub_post_office_box,
    ub_physical_office_name,
    ub_telex_number,
    ub_country_code,
    ub_teletex_terminal_id,
    ub_telephone_number,
    ub_x121_address,
    ub_international_isdn_number,
    ub_destination_indicator,
    ub_user_password,
    ub_match,
    ub_knowledge_information,
    ub_directory_string_first_component_match,
    ub_localeContextSyntax,
    ub_pseudonym
} from "./UpperBounds";
export {
    ub_answerback,
    ub_name,
    ub_common_name,
    ub_surname,
    ub_serial_number,
    ub_locality_name,
    ub_state_name,
    ub_street_address,
    ub_organization_name,
    ub_organizational_unit_name,
    ub_title,
    ub_description,
    ub_business_category,
    ub_postal_line,
    ub_postal_string,
    ub_postal_code,
    ub_post_office_box,
    ub_physical_office_name,
    ub_telex_number,
    ub_country_code,
    ub_teletex_terminal_id,
    ub_telephone_number,
    ub_x121_address,
    ub_international_isdn_number,
    ub_destination_indicator,
    ub_user_password,
    ub_match,
    ub_knowledge_information,
    ub_directory_string_first_component_match,
    ub_localeContextSyntax,
    ub_pseudonym
} from "./UpperBounds";

import * as DirectoryAbstractService from "./DirectoryAbstractService";
import {
    FilterItem,
    HierarchySelections,
    SearchControlOptions,
    ServiceControlOptions,
    _decode_FilterItem,
    _encode_FilterItem,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions
} from "./DirectoryAbstractService";
export {
    FilterItem,
    HierarchySelections,
    SearchControlOptions,
    ServiceControlOptions,
    _decode_FilterItem,
    _encode_FilterItem,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions
} from "./DirectoryAbstractService";


// TODO: ObjectAssignment: knowledgeInformation

// TODO: ObjectAssignment: name

// TODO: ObjectAssignment: commonName

// TODO: ObjectAssignment: surname

// TODO: ObjectAssignment: givenName

// TODO: ObjectAssignment: initials

// TODO: ObjectAssignment: generationQualifier

// TODO: ObjectAssignment: uniqueIdentifier

// TODO: ObjectAssignment: dnQualifier

// TODO: ObjectAssignment: serialNumber

// TODO: ObjectAssignment: pseudonym

// TODO: ObjectAssignment: countryName

export type CountryName = asn1.PrintableString; // PrintableString
export const _decode_CountryName = __utils._decodePrintableString;
export const _encode_CountryName = __utils._encodePrintableString;


// TODO: ObjectAssignment: localityName

// TODO: ObjectAssignment: collectiveLocalityName

// TODO: ObjectAssignment: stateOrProvinceName

// TODO: ObjectAssignment: collectiveStateOrProvinceName

// TODO: ObjectAssignment: streetAddress

// TODO: ObjectAssignment: collectiveStreetAddress

// TODO: ObjectAssignment: houseIdentifier

// TODO: ObjectAssignment: organizationName

// TODO: ObjectAssignment: collectiveOrganizationName

// TODO: ObjectAssignment: organizationalUnitName

// TODO: ObjectAssignment: collectiveOrganizationalUnitName

// TODO: ObjectAssignment: title

// TODO: ObjectAssignment: description

// TODO: ObjectAssignment: searchGuide

export type CriteriaItem =
    { equality: AttributeType }
    | { substrings: AttributeType }
    | { greaterOrEqual: AttributeType }
    | { lessOrEqual: AttributeType }
    | { approximateMatch: AttributeType };
export const _decode_CriteriaItem = __utils._decode_inextensible_choice<CriteriaItem>({
    "CONTEXT 0": [ "equality", __utils._decode_explicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 1": [ "substrings", __utils._decode_explicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 2": [ "greaterOrEqual", __utils._decode_explicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 3": [ "lessOrEqual", __utils._decode_explicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 4": [ "approximateMatch", __utils._decode_explicit<AttributeType>(() => _decode_AttributeType) ]
});
export const _encode_CriteriaItem = __utils._encode_choice<CriteriaItem>({
    "equality": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_AttributeType, __utils.BER),
    "substrings": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_AttributeType, __utils.BER),
    "greaterOrEqual": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_AttributeType, __utils.BER),
    "lessOrEqual": __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_AttributeType, __utils.BER),
    "approximateMatch": __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_AttributeType, __utils.BER),
}, __utils.BER);


/* TODO: CHECK_RECURSIVE_DEFINITION */
export type Criteria =
    { type_: CriteriaItem }
    | { and: Criteria[] }
    | { or: Criteria[] }
    | { not: Criteria };
export const _decode_Criteria = __utils._decode_inextensible_choice<Criteria>({
    "CONTEXT 0": [ "type_", __utils._decode_explicit<CriteriaItem>(() => _decode_CriteriaItem) ],
    "CONTEXT 1": [ "and", __utils._decode_explicit<Criteria[]>(() => __utils._decodeSetOf<Criteria>(() => _decode_Criteria)) ],
    "CONTEXT 2": [ "or", __utils._decode_explicit<Criteria[]>(() => __utils._decodeSetOf<Criteria>(() => _decode_Criteria)) ],
    "CONTEXT 3": [ "not", __utils._decode_explicit<Criteria>(() => _decode_Criteria) ]
});
export const _encode_Criteria = __utils._encode_choice<Criteria>({
    "type_": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_CriteriaItem, __utils.BER),
    "and": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSetOf<Criteria>(() => _encode_Criteria, __utils.BER), __utils.BER),
    "or": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSetOf<Criteria>(() => _encode_Criteria, __utils.BER), __utils.BER),
    "not": __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_Criteria, __utils.BER),
}, __utils.BER);


export class Guide {
    constructor (
        readonly objectClass: asn1.OBJECT_IDENTIFIER | undefined,
        readonly criteria: Criteria
    ) {}
}
export const _root_component_type_list_1_spec_for_Guide: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("objectClass", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("criteria", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Guide: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Guide: __utils.ComponentSpec[] = [
    
];

export const _decode_Guide = function (el: asn1.ASN1Element): Guide {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let objectClass: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let criteria!: Criteria;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "objectClass": (_el: asn1.ASN1Element): void => { objectClass = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "criteria": (_el: asn1.ASN1Element): void => { criteria = __utils._decode_explicit<Criteria>(() => _decode_Criteria)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_Guide,
        _extension_additions_list_spec_for_Guide,
        _root_component_type_list_2_spec_for_Guide,
        undefined,
    );
    return new Guide( /* SET_CONSTRUCTOR_CALL */
        objectClass,
        criteria
    );
};
export const _encode_Guide = function (value: Guide, elGetter: __utils.ASN1Encoder<Guide>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.objectClass === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeObjectIdentifier, __utils.BER)(value.objectClass, __utils.BER)),
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Criteria, __utils.BER)(value.criteria, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: enhancedSearchGuide

export type EnhancedGuide_subset = asn1.INTEGER;
export const EnhancedGuide_subset_baseObject: EnhancedGuide_subset = 0; /* LONG_NAMED_INTEGER_VALUE */
export const baseObject: EnhancedGuide_subset = EnhancedGuide_subset_baseObject; /* SHORT_NAMED_INTEGER_VALUE */
export const EnhancedGuide_subset_oneLevel: EnhancedGuide_subset = 1; /* LONG_NAMED_INTEGER_VALUE */
export const oneLevel: EnhancedGuide_subset = EnhancedGuide_subset_oneLevel; /* SHORT_NAMED_INTEGER_VALUE */
export const EnhancedGuide_subset_wholeSubtree: EnhancedGuide_subset = 2; /* LONG_NAMED_INTEGER_VALUE */
export const wholeSubtree: EnhancedGuide_subset = EnhancedGuide_subset_wholeSubtree; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EnhancedGuide_subset = __utils._decodeInteger;
export const _encode_EnhancedGuide_subset = __utils._encodeInteger;


export class EnhancedGuide {
    constructor (
        readonly objectClass: asn1.OBJECT_IDENTIFIER,
        readonly criteria: Criteria,
        readonly subset: EnhancedGuide_subset | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_EnhancedGuide: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("objectClass", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("criteria", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("subset", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EnhancedGuide: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EnhancedGuide: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_EnhancedGuide__subset = oneLevel;
export const _decode_EnhancedGuide = function (el: asn1.ASN1Element): EnhancedGuide {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let objectClass!: asn1.OBJECT_IDENTIFIER;
    let criteria!: Criteria;
    let subset: asn1.OPTIONAL<EnhancedGuide_subset> = _default_value_for_EnhancedGuide__subset;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "objectClass": (_el: asn1.ASN1Element): void => { objectClass = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "criteria": (_el: asn1.ASN1Element): void => { criteria = __utils._decode_explicit<Criteria>(() => _decode_Criteria)(_el); },
        "subset": (_el: asn1.ASN1Element): void => { subset = __utils._decode_explicit<EnhancedGuide_subset>(() => _decode_EnhancedGuide_subset)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EnhancedGuide,
        _extension_additions_list_spec_for_EnhancedGuide,
        _root_component_type_list_2_spec_for_EnhancedGuide,
        undefined,
    );
    return new EnhancedGuide( /* SEQUENCE_CONSTRUCTOR_CALL */
        objectClass,
        criteria,
        subset
    );
};
export const _encode_EnhancedGuide = function (value: EnhancedGuide, elGetter: __utils.ASN1Encoder<EnhancedGuide>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeObjectIdentifier, __utils.BER)(value.objectClass, __utils.BER),
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Criteria, __utils.BER)(value.criteria, __utils.BER),
            /* IF_DEFAULT */ (value.subset === undefined || __utils.deepEq(value.subset, _default_value_for_EnhancedGuide__subset) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_EnhancedGuide_subset, __utils.BER)(value.subset, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: businessCategory

// TODO: ObjectAssignment: postalAddress

export type DirectoryString =
    { teletexString: asn1.TeletexString }
    | { printableString: asn1.PrintableString }
    | { universalString: asn1.UniversalString }
    | { bmpString: asn1.BMPString }
    | { uTF8String: asn1.UTF8String };
export const _decode_DirectoryString = __utils._decode_inextensible_choice<DirectoryString>({
    "UNIVERSAL 20": [ "teletexString", __utils._decodeTeletexString ],
    "UNIVERSAL 19": [ "printableString", __utils._decodePrintableString ],
    "UNIVERSAL 28": [ "universalString", __utils._decodeUniversalString ],
    "UNIVERSAL 30": [ "bmpString", __utils._decodeBMPString ],
    "UNIVERSAL 12": [ "uTF8String", __utils._decodeUTF8String ]
});
export const _encode_DirectoryString = __utils._encode_choice<DirectoryString>({
    "teletexString": __utils._encodeTeletexString,
    "printableString": __utils._encodePrintableString,
    "universalString": __utils._encodeUniversalString,
    "bmpString": __utils._encodeBMPString,
    "uTF8String": __utils._encodeUTF8String,
}, __utils.BER);


export type PostalAddress = DirectoryString[]; // SequenceOfType
export const _decode_PostalAddress = __utils._decodeSequenceOf<DirectoryString>(() => _decode_DirectoryString);
export const _encode_PostalAddress = __utils._encodeSequenceOf<DirectoryString>(() => _encode_DirectoryString, __utils.BER);


// TODO: ObjectAssignment: collectivePostalAddress

// TODO: ObjectAssignment: postalCode

// TODO: ObjectAssignment: collectivePostalCode

// TODO: ObjectAssignment: postOfficeBox

// TODO: ObjectAssignment: collectivePostOfficeBox

// TODO: ObjectAssignment: physicalDeliveryOfficeName

// TODO: ObjectAssignment: collectivePhysicalDeliveryOfficeName

// TODO: ObjectAssignment: telephoneNumber

// TODO: ObjectAssignment: collectiveTelephoneNumber

// TODO: ObjectAssignment: telexNumber

export class TelexNumber {
    constructor (
        readonly telexNumber: asn1.PrintableString,
        readonly countryCode: asn1.PrintableString,
        readonly answerback: asn1.PrintableString
    ) {}
}
export const _root_component_type_list_1_spec_for_TelexNumber: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("telexNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 19), undefined, undefined),
    new __utils.ComponentSpec("countryCode", false, __utils.hasTag(asn1.ASN1TagClass.universal, 19), undefined, undefined),
    new __utils.ComponentSpec("answerback", false, __utils.hasTag(asn1.ASN1TagClass.universal, 19), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TelexNumber: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_TelexNumber: __utils.ComponentSpec[] = [
    
];

export const _decode_TelexNumber = function (el: asn1.ASN1Element): TelexNumber {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("TelexNumber contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "telexNumber";
    sequence[1].name = "countryCode";
    sequence[2].name = "answerback";
    let telexNumber!: asn1.PrintableString;
    let countryCode!: asn1.PrintableString;
    let answerback!: asn1.PrintableString;
    telexNumber = __utils._decodePrintableString(sequence[0]);
    countryCode = __utils._decodePrintableString(sequence[1]);
    answerback = __utils._decodePrintableString(sequence[2]);
    // TODO: Validate values.
    return new TelexNumber(
        telexNumber,
        countryCode,
        answerback,

    );
};
export const _encode_TelexNumber = function (value: TelexNumber, elGetter: __utils.ASN1Encoder<TelexNumber>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodePrintableString(value.telexNumber, __utils.BER),
            /* REQUIRED   */ __utils._encodePrintableString(value.countryCode, __utils.BER),
            /* REQUIRED   */ __utils._encodePrintableString(value.answerback, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: collectiveTelexNumber

// TODO: ObjectAssignment: facsimileTelephoneNumber

// TODO: ObjectAssignment: facsimileNumberMatch

// TODO: ObjectAssignment: facsimileNumberSubstringsMatch

export type TelephoneNumber = asn1.PrintableString; // PrintableString
export const _decode_TelephoneNumber = __utils._decodePrintableString;
export const _encode_TelephoneNumber = __utils._encodePrintableString;


export class FacsimileTelephoneNumber {
    constructor (
        readonly telephoneNumber: TelephoneNumber,
        readonly parameters: G3FacsimileNonBasicParameters | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_FacsimileTelephoneNumber: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("telephoneNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 19), undefined, undefined),
    /* FIXME: parameters COULD_NOT_RESOLVE_TYPE_DEF */
];
export const _root_component_type_list_2_spec_for_FacsimileTelephoneNumber: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_FacsimileTelephoneNumber: __utils.ComponentSpec[] = [
    
];

export const _decode_FacsimileTelephoneNumber = function (el: asn1.ASN1Element): FacsimileTelephoneNumber {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let telephoneNumber!: TelephoneNumber;
    let parameters: asn1.OPTIONAL<G3FacsimileNonBasicParameters>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "telephoneNumber": (_el: asn1.ASN1Element): void => { telephoneNumber = _decode_TelephoneNumber(_el); },
        "parameters": (_el: asn1.ASN1Element): void => { parameters = _decode_G3FacsimileNonBasicParameters(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FacsimileTelephoneNumber,
        _extension_additions_list_spec_for_FacsimileTelephoneNumber,
        _root_component_type_list_2_spec_for_FacsimileTelephoneNumber,
        undefined,
    );
    return new FacsimileTelephoneNumber( /* SEQUENCE_CONSTRUCTOR_CALL */
        telephoneNumber,
        parameters
    );
};
export const _encode_FacsimileTelephoneNumber = function (value: FacsimileTelephoneNumber, elGetter: __utils.ASN1Encoder<FacsimileTelephoneNumber>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TelephoneNumber(value.telephoneNumber, __utils.BER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : _encode_G3FacsimileNonBasicParameters(value.parameters, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: collectiveFacsimileTelephoneNumber

// TODO: ObjectAssignment: x121Address

export type X121Address = asn1.NumericString; // NumericString
export const _decode_X121Address = __utils._decodeNumericString;
export const _encode_X121Address = __utils._encodeNumericString;


// TODO: ObjectAssignment: internationalISDNNumber

export type InternationalISDNNumber = asn1.NumericString; // NumericString
export const _decode_InternationalISDNNumber = __utils._decodeNumericString;
export const _encode_InternationalISDNNumber = __utils._encodeNumericString;


// TODO: ObjectAssignment: collectiveInternationalISDNNumber

// TODO: ObjectAssignment: registeredAddress

// TODO: ObjectAssignment: destinationIndicator

export type DestinationIndicator = asn1.PrintableString; // PrintableString
export const _decode_DestinationIndicator = __utils._decodePrintableString;
export const _encode_DestinationIndicator = __utils._encodePrintableString;


// TODO: ObjectAssignment: communicationsService

// TODO: ObjectAssignment: communicationsNetwork

// TODO: ObjectAssignment: preferredDeliveryMethod

export type PreferredDeliveryMethod_Item = asn1.INTEGER;
export const PreferredDeliveryMethod_Item_any_delivery_method: PreferredDeliveryMethod_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
export const any_delivery_method: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_any_delivery_method; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_mhs_delivery: PreferredDeliveryMethod_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
export const mhs_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_mhs_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_physical_delivery: PreferredDeliveryMethod_Item = 2; /* LONG_NAMED_INTEGER_VALUE */
export const physical_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_physical_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_telex_delivery: PreferredDeliveryMethod_Item = 3; /* LONG_NAMED_INTEGER_VALUE */
export const telex_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_telex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_teletex_delivery: PreferredDeliveryMethod_Item = 4; /* LONG_NAMED_INTEGER_VALUE */
export const teletex_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_teletex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_g3_facsimile_delivery: PreferredDeliveryMethod_Item = 5; /* LONG_NAMED_INTEGER_VALUE */
export const g3_facsimile_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_g3_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_g4_facsimile_delivery: PreferredDeliveryMethod_Item = 6; /* LONG_NAMED_INTEGER_VALUE */
export const g4_facsimile_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_g4_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_ia5_terminal_delivery: PreferredDeliveryMethod_Item = 7; /* LONG_NAMED_INTEGER_VALUE */
export const ia5_terminal_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_ia5_terminal_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_videotex_delivery: PreferredDeliveryMethod_Item = 8; /* LONG_NAMED_INTEGER_VALUE */
export const videotex_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_videotex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_telephone_delivery: PreferredDeliveryMethod_Item = 9; /* LONG_NAMED_INTEGER_VALUE */
export const telephone_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_telephone_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PreferredDeliveryMethod_Item = __utils._decodeInteger;
export const _encode_PreferredDeliveryMethod_Item = __utils._encodeInteger;


export type PreferredDeliveryMethod = PreferredDeliveryMethod_Item[]; // SequenceOfType
export const _decode_PreferredDeliveryMethod = __utils._decodeSequenceOf<PreferredDeliveryMethod_Item>(() => _decode_PreferredDeliveryMethod_Item);
export const _encode_PreferredDeliveryMethod = __utils._encodeSequenceOf<PreferredDeliveryMethod_Item>(() => _encode_PreferredDeliveryMethod_Item, __utils.BER);


// TODO: ObjectAssignment: presentationAddress

export class PresentationAddress {
    constructor (
        readonly pSelector: asn1.OCTET_STRING | undefined,
        readonly sSelector: asn1.OCTET_STRING | undefined,
        readonly tSelector: asn1.OCTET_STRING | undefined,
        readonly nAddresses: asn1.OCTET_STRING[]
    ) {}
}
export const _root_component_type_list_1_spec_for_PresentationAddress: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("pSelector", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("sSelector", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("tSelector", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("nAddresses", false, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PresentationAddress: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PresentationAddress: __utils.ComponentSpec[] = [
    
];

export const _decode_PresentationAddress = function (el: asn1.ASN1Element): PresentationAddress {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let pSelector: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let sSelector: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let tSelector: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let nAddresses!: asn1.OCTET_STRING[];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "pSelector": (_el: asn1.ASN1Element): void => { pSelector = __utils._decode_explicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "sSelector": (_el: asn1.ASN1Element): void => { sSelector = __utils._decode_explicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "tSelector": (_el: asn1.ASN1Element): void => { tSelector = __utils._decode_explicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "nAddresses": (_el: asn1.ASN1Element): void => { nAddresses = __utils._decode_explicit<asn1.OCTET_STRING[]>(() => __utils._decodeSetOf<asn1.OCTET_STRING>(() => __utils._decodeOctetString))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PresentationAddress,
        _extension_additions_list_spec_for_PresentationAddress,
        _root_component_type_list_2_spec_for_PresentationAddress,
        undefined,
    );
    return new PresentationAddress( /* SEQUENCE_CONSTRUCTOR_CALL */
        pSelector,
        sSelector,
        tSelector,
        nAddresses
    );
};
export const _encode_PresentationAddress = function (value: PresentationAddress, elGetter: __utils.ASN1Encoder<PresentationAddress>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pSelector === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeOctetString, __utils.BER)(value.pSelector, __utils.BER)),
            /* IF_ABSENT  */ ((value.sSelector === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeOctetString, __utils.BER)(value.sSelector, __utils.BER)),
            /* IF_ABSENT  */ ((value.tSelector === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeOctetString, __utils.BER)(value.tSelector, __utils.BER)),
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeSetOf<asn1.OCTET_STRING>(() => __utils._encodeOctetString, __utils.BER), __utils.BER)(value.nAddresses, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: supportedApplicationContext

// TODO: ObjectAssignment: protocolInformation

export class ProtocolInformation {
    constructor (
        readonly nAddress: asn1.OCTET_STRING,
        readonly profiles: asn1.OBJECT_IDENTIFIER[]
    ) {}
}
export const _root_component_type_list_1_spec_for_ProtocolInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("nAddress", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("profiles", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ProtocolInformation: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ProtocolInformation: __utils.ComponentSpec[] = [
    
];

export const _decode_ProtocolInformation = function (el: asn1.ASN1Element): ProtocolInformation {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ProtocolInformation contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "nAddress";
    sequence[1].name = "profiles";
    let nAddress!: asn1.OCTET_STRING;
    let profiles!: asn1.OBJECT_IDENTIFIER[];
    nAddress = __utils._decodeOctetString(sequence[0]);
    profiles = __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(sequence[1]);
    // TODO: Validate values.
    return new ProtocolInformation(
        nAddress,
        profiles,

    );
};
export const _encode_ProtocolInformation = function (value: ProtocolInformation, elGetter: __utils.ASN1Encoder<ProtocolInformation>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeOctetString(value.nAddress, __utils.BER),
            /* REQUIRED   */ __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER)(value.profiles, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: distinguishedName

// TODO: ObjectAssignment: member

// TODO: ObjectAssignment: uniqueMember

export type UniqueIdentifier = asn1.BIT_STRING;
export const _decode_UniqueIdentifier = __utils._decodeBitString;
export const _encode_UniqueIdentifier = __utils._encodeBitString;


export class NameAndOptionalUID {
    constructor (
        readonly dn: DistinguishedName,
        readonly uid: UniqueIdentifier | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_NameAndOptionalUID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("dn", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("uid", true, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_NameAndOptionalUID: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_NameAndOptionalUID: __utils.ComponentSpec[] = [
    
];

export const _decode_NameAndOptionalUID = function (el: asn1.ASN1Element): NameAndOptionalUID {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let dn!: DistinguishedName;
    let uid: asn1.OPTIONAL<UniqueIdentifier>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "dn": (_el: asn1.ASN1Element): void => { dn = _decode_DistinguishedName(_el); },
        "uid": (_el: asn1.ASN1Element): void => { uid = _decode_UniqueIdentifier(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NameAndOptionalUID,
        _extension_additions_list_spec_for_NameAndOptionalUID,
        _root_component_type_list_2_spec_for_NameAndOptionalUID,
        undefined,
    );
    return new NameAndOptionalUID( /* SEQUENCE_CONSTRUCTOR_CALL */
        dn,
        uid
    );
};
export const _encode_NameAndOptionalUID = function (value: NameAndOptionalUID, elGetter: __utils.ASN1Encoder<NameAndOptionalUID>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DistinguishedName(value.dn, __utils.BER),
            /* IF_ABSENT  */ ((value.uid === undefined) ? undefined : _encode_UniqueIdentifier(value.uid, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: owner

// TODO: ObjectAssignment: roleOccupant

// TODO: ObjectAssignment: seeAlso

// TODO: ObjectAssignment: dmdName

// TODO: ObjectAssignment: dSAProblem

// TODO: ObjectAssignment: searchServiceProblem

// TODO: ObjectAssignment: serviceType

// TODO: ObjectAssignment: attributeTypeList

// TODO: ObjectAssignment: filterItem

// TODO: ObjectAssignment: attributeCombinations

// TODO: ObjectAssignment: contextTypeList

// TODO: ObjectAssignment: contextList

// TODO: ObjectAssignment: hierarchySelectList

// TODO: ObjectAssignment: searchOptionsList

// TODO: ObjectAssignment: serviceControlOptionsList

// TODO: ObjectAssignment: multipleMatchingLocalities

export class MultipleMatchingLocalities {
    constructor (
        readonly matchingRuleUsed: asn1.OBJECT_IDENTIFIER | undefined,
        readonly attributeList: AttributeValueAssertion[]
    ) {}
}
export const _root_component_type_list_1_spec_for_MultipleMatchingLocalities: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("matchingRuleUsed", true, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("attributeList", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_MultipleMatchingLocalities: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_MultipleMatchingLocalities: __utils.ComponentSpec[] = [
    
];

export const _decode_MultipleMatchingLocalities = function (el: asn1.ASN1Element): MultipleMatchingLocalities {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let matchingRuleUsed: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let attributeList!: AttributeValueAssertion[];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "matchingRuleUsed": (_el: asn1.ASN1Element): void => { matchingRuleUsed = __utils._decodeObjectIdentifier(_el); },
        "attributeList": (_el: asn1.ASN1Element): void => { attributeList = __utils._decodeSequenceOf<AttributeValueAssertion>(() => _decode_AttributeValueAssertion)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MultipleMatchingLocalities,
        _extension_additions_list_spec_for_MultipleMatchingLocalities,
        _root_component_type_list_2_spec_for_MultipleMatchingLocalities,
        undefined,
    );
    return new MultipleMatchingLocalities( /* SEQUENCE_CONSTRUCTOR_CALL */
        matchingRuleUsed,
        attributeList
    );
};
export const _encode_MultipleMatchingLocalities = function (value: MultipleMatchingLocalities, elGetter: __utils.ASN1Encoder<MultipleMatchingLocalities>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.matchingRuleUsed === undefined) ? undefined : __utils._encodeObjectIdentifier(value.matchingRuleUsed, __utils.BER)),
            /* REQUIRED   */ __utils._encodeSequenceOf<AttributeValueAssertion>(() => _encode_AttributeValueAssertion, __utils.BER)(value.attributeList, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: proposedRelaxation

// TODO: ObjectAssignment: appliedRelaxation

// TODO: ObjectAssignment: caseIgnoreMatch

// TODO: ObjectAssignment: caseIgnoreOrderingMatch

// TODO: ObjectAssignment: caseIgnoreSubstringsMatch

export type SubstringAssertion_Item =
    { initial: DirectoryString }
    | { any_: DirectoryString }
    | { final: DirectoryString }
    | { control: Attribute };
export const _decode_SubstringAssertion_Item = __utils._decode_inextensible_choice<SubstringAssertion_Item>({
    "CONTEXT 0": [ "initial", __utils._decode_explicit<DirectoryString>(() => _decode_DirectoryString) ],
    "CONTEXT 1": [ "any_", __utils._decode_explicit<DirectoryString>(() => _decode_DirectoryString) ],
    "CONTEXT 2": [ "final", __utils._decode_explicit<DirectoryString>(() => _decode_DirectoryString) ],
    "UNIVERSAL 16": [ "control", _decode_Attribute ]
});
export const _encode_SubstringAssertion_Item = __utils._encode_choice<SubstringAssertion_Item>({
    "initial": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_DirectoryString, __utils.BER),
    "any_": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_DirectoryString, __utils.BER),
    "final": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_DirectoryString, __utils.BER),
    "control": _encode_Attribute,
}, __utils.BER);


export type SubstringAssertion = SubstringAssertion_Item[]; // SequenceOfType
export const _decode_SubstringAssertion = __utils._decodeSequenceOf<SubstringAssertion_Item>(() => _decode_SubstringAssertion_Item);
export const _encode_SubstringAssertion = __utils._encodeSequenceOf<SubstringAssertion_Item>(() => _encode_SubstringAssertion_Item, __utils.BER);


// TODO: ObjectAssignment: caseExactMatch

// TODO: ObjectAssignment: caseExactOrderingMatch

// TODO: ObjectAssignment: caseExactSubstringsMatch

// TODO: ObjectAssignment: numericStringMatch

// TODO: ObjectAssignment: numericStringOrderingMatch

// TODO: ObjectAssignment: numericStringSubstringsMatch

// TODO: ObjectAssignment: caseIgnoreListMatch

export type CaseIgnoreListMatch = DirectoryString[]; // SequenceOfType
export const _decode_CaseIgnoreListMatch = __utils._decodeSequenceOf<DirectoryString>(() => _decode_DirectoryString);
export const _encode_CaseIgnoreListMatch = __utils._encodeSequenceOf<DirectoryString>(() => _encode_DirectoryString, __utils.BER);


// TODO: ObjectAssignment: caseIgnoreListSubstringsMatch

// TODO: ObjectAssignment: storedPrefixMatch

// TODO: ObjectAssignment: booleanMatch

// TODO: ObjectAssignment: integerMatch

// TODO: ObjectAssignment: integerOrderingMatch

// TODO: ObjectAssignment: bitStringMatch

// TODO: ObjectAssignment: octetStringMatch

// TODO: ObjectAssignment: octetStringOrderingMatch

// TODO: ObjectAssignment: octetStringSubstringsMatch

export type OctetSubstringAssertion_Item =
    { initial: asn1.OCTET_STRING }
    | { any_: asn1.OCTET_STRING }
    | { final: asn1.OCTET_STRING };
export const _decode_OctetSubstringAssertion_Item = __utils._decode_inextensible_choice<OctetSubstringAssertion_Item>({
    "CONTEXT 0": [ "initial", __utils._decode_explicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString) ],
    "CONTEXT 1": [ "any_", __utils._decode_explicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString) ],
    "CONTEXT 2": [ "final", __utils._decode_explicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString) ]
});
export const _encode_OctetSubstringAssertion_Item = __utils._encode_choice<OctetSubstringAssertion_Item>({
    "initial": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeOctetString, __utils.BER),
    "any_": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeOctetString, __utils.BER),
    "final": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeOctetString, __utils.BER),
}, __utils.BER);


export type OctetSubstringAssertion = OctetSubstringAssertion_Item[]; // SequenceOfType
export const _decode_OctetSubstringAssertion = __utils._decodeSequenceOf<OctetSubstringAssertion_Item>(() => _decode_OctetSubstringAssertion_Item);
export const _encode_OctetSubstringAssertion = __utils._encodeSequenceOf<OctetSubstringAssertion_Item>(() => _encode_OctetSubstringAssertion_Item, __utils.BER);


// TODO: ObjectAssignment: telephoneNumberMatch

// TODO: ObjectAssignment: telephoneNumberSubstringsMatch

// TODO: ObjectAssignment: presentationAddressMatch

// TODO: ObjectAssignment: uniqueMemberMatch

// TODO: ObjectAssignment: protocolInformationMatch

// TODO: ObjectAssignment: uTCTimeMatch

// TODO: ObjectAssignment: uTCTimeOrderingMatch

// TODO: ObjectAssignment: generalizedTimeMatch

// TODO: ObjectAssignment: generalizedTimeOrderingMatch

// TODO: ObjectAssignment: integerFirstComponentMatch

// TODO: ObjectAssignment: objectIdentifierFirstComponentMatch

// TODO: ObjectAssignment: directoryStringFirstComponentMatch

// TODO: ObjectAssignment: wordMatch

// TODO: ObjectAssignment: keywordMatch

// TODO: ObjectAssignment: systemProposedMatch

// TODO: ObjectAssignment: generalWordMatch

// TODO: ObjectAssignment: sequenceMatchType

// TODO: ObjectAssignment: wordMatchTypes

// TODO: ObjectAssignment: characterMatchTypes

// TODO: ObjectAssignment: selectedContexts

// TODO: ObjectAssignment: approximateStringMatch

// TODO: ObjectAssignment: ignoreIfAbsentMatch

// TODO: ObjectAssignment: nullMatch

export type ZonalSelect = AttributeType[]; // SequenceOfType
export const _decode_ZonalSelect = __utils._decodeSequenceOf<AttributeType>(() => _decode_AttributeType);
export const _encode_ZonalSelect = __utils._encodeSequenceOf<AttributeType>(() => _encode_AttributeType, __utils.BER);


export enum ZonalResult {
    cannot_select_mapping = 0,
    zero_mappings = 2,
    multiple_mappings = 3,
}
export const ZonalResult_cannot_select_mapping: ZonalResult = ZonalResult.cannot_select_mapping; /* LONG_NAMED_ENUMERATED_VALUE */
export const cannot_select_mapping: ZonalResult = ZonalResult.cannot_select_mapping; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ZonalResult_zero_mappings: ZonalResult = ZonalResult.zero_mappings; /* LONG_NAMED_ENUMERATED_VALUE */
export const zero_mappings: ZonalResult = ZonalResult.zero_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ZonalResult_multiple_mappings: ZonalResult = ZonalResult.multiple_mappings; /* LONG_NAMED_ENUMERATED_VALUE */
export const multiple_mappings: ZonalResult = ZonalResult.multiple_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ZonalResult = __utils._decodeEnumerated;
export const _encode_ZonalResult = __utils._encodeEnumerated;


// TODO: ObjectClassAssignment: ZONAL-MATCHING

// TODO: ObjectAssignment: zonalMatch

// TODO: ObjectAssignment: languageContext

export type LanguageContextSyntax = asn1.PrintableString; // PrintableString
export const _decode_LanguageContextSyntax = __utils._decodePrintableString;
export const _encode_LanguageContextSyntax = __utils._encodePrintableString;


// TODO: ObjectAssignment: temporalContext

export class TimeSpecification_time_absolute {
    constructor (
        readonly startTime: asn1.GeneralizedTime | undefined,
        readonly endTime: asn1.GeneralizedTime | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_TimeSpecification_time_absolute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("startTime", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("endTime", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TimeSpecification_time_absolute: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_TimeSpecification_time_absolute: __utils.ComponentSpec[] = [
    
];

export const _decode_TimeSpecification_time_absolute = function (el: asn1.ASN1Element): TimeSpecification_time_absolute {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let startTime: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let endTime: asn1.OPTIONAL<asn1.GeneralizedTime>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "startTime": (_el: asn1.ASN1Element): void => { startTime = __utils._decode_explicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); },
        "endTime": (_el: asn1.ASN1Element): void => { endTime = __utils._decode_explicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TimeSpecification_time_absolute,
        _extension_additions_list_spec_for_TimeSpecification_time_absolute,
        _root_component_type_list_2_spec_for_TimeSpecification_time_absolute,
        undefined,
    );
    return new TimeSpecification_time_absolute( /* SEQUENCE_CONSTRUCTOR_CALL */
        startTime,
        endTime
    );
};
export const _encode_TimeSpecification_time_absolute = function (value: TimeSpecification_time_absolute, elGetter: __utils.ASN1Encoder<TimeSpecification_time_absolute>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.startTime === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeGeneralizedTime, __utils.BER)(value.startTime, __utils.BER)),
            /* IF_ABSENT  */ ((value.endTime === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeGeneralizedTime, __utils.BER)(value.endTime, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class DayTime {
    constructor (
        readonly hour: asn1.INTEGER,
        readonly minute: asn1.INTEGER | undefined,
        readonly second: asn1.INTEGER | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_DayTime: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("hour", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("minute", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("second", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_DayTime: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_DayTime: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_DayTime__minute = 0;
export const _default_value_for_DayTime__second = 0;
export const _decode_DayTime = function (el: asn1.ASN1Element): DayTime {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let hour!: asn1.INTEGER;
    let minute: asn1.OPTIONAL<asn1.INTEGER> = _default_value_for_DayTime__minute;
    let second: asn1.OPTIONAL<asn1.INTEGER> = _default_value_for_DayTime__second;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "hour": (_el: asn1.ASN1Element): void => { hour = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "minute": (_el: asn1.ASN1Element): void => { minute = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "second": (_el: asn1.ASN1Element): void => { second = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DayTime,
        _extension_additions_list_spec_for_DayTime,
        _root_component_type_list_2_spec_for_DayTime,
        undefined,
    );
    return new DayTime( /* SEQUENCE_CONSTRUCTOR_CALL */
        hour,
        minute,
        second
    );
};
export const _encode_DayTime = function (value: DayTime, elGetter: __utils.ASN1Encoder<DayTime>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeInteger, __utils.BER)(value.hour, __utils.BER),
            /* IF_DEFAULT */ (value.minute === undefined || __utils.deepEq(value.minute, _default_value_for_DayTime__minute) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeInteger, __utils.BER)(value.minute, __utils.BER)),
            /* IF_DEFAULT */ (value.second === undefined || __utils.deepEq(value.second, _default_value_for_DayTime__second) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeInteger, __utils.BER)(value.second, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class DayTimeBand {
    constructor (
        readonly startDayTime: DayTime | undefined,
        readonly endDayTime: DayTime | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_DayTimeBand: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("startDayTime", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("endDayTime", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_DayTimeBand: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_DayTimeBand: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_DayTimeBand__startDayTime = new asn1.ObjectIdentifier([0,], hour);
export const _default_value_for_DayTimeBand__endDayTime = /* COULD_NOT_COMPILE_DEFAULT_VALUE endDayTime */;
export const _decode_DayTimeBand = function (el: asn1.ASN1Element): DayTimeBand {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let startDayTime: asn1.OPTIONAL<DayTime> = _default_value_for_DayTimeBand__startDayTime;
    let endDayTime: asn1.OPTIONAL<DayTime> = _default_value_for_DayTimeBand__endDayTime;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "startDayTime": (_el: asn1.ASN1Element): void => { startDayTime = __utils._decode_explicit<DayTime>(() => _decode_DayTime)(_el); },
        "endDayTime": (_el: asn1.ASN1Element): void => { endDayTime = __utils._decode_explicit<DayTime>(() => _decode_DayTime)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DayTimeBand,
        _extension_additions_list_spec_for_DayTimeBand,
        _root_component_type_list_2_spec_for_DayTimeBand,
        undefined,
    );
    return new DayTimeBand( /* SEQUENCE_CONSTRUCTOR_CALL */
        startDayTime,
        endDayTime
    );
};
export const _encode_DayTimeBand = function (value: DayTimeBand, elGetter: __utils.ASN1Encoder<DayTimeBand>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.startDayTime === undefined || __utils.deepEq(value.startDayTime, _default_value_for_DayTimeBand__startDayTime) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_DayTime, __utils.BER)(value.startDayTime, __utils.BER)),
            /* IF_DEFAULT */ (value.endDayTime === undefined || __utils.deepEq(value.endDayTime, _default_value_for_DayTimeBand__endDayTime) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_DayTime, __utils.BER)(value.endDayTime, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Period_days_bitDay = asn1.BIT_STRING;
export const Period_days_bitDay_sunday: number = 0; /* LONG_NAMED_BIT */
export const sunday: number = Period_days_bitDay_sunday; /* SHORT_NAMED_BIT */
export const Period_days_bitDay_monday: number = 1; /* LONG_NAMED_BIT */
export const monday: number = Period_days_bitDay_monday; /* SHORT_NAMED_BIT */
export const Period_days_bitDay_tuesday: number = 2; /* LONG_NAMED_BIT */
export const tuesday: number = Period_days_bitDay_tuesday; /* SHORT_NAMED_BIT */
export const Period_days_bitDay_wednesday: number = 3; /* LONG_NAMED_BIT */
export const wednesday: number = Period_days_bitDay_wednesday; /* SHORT_NAMED_BIT */
export const Period_days_bitDay_thursday: number = 4; /* LONG_NAMED_BIT */
export const thursday: number = Period_days_bitDay_thursday; /* SHORT_NAMED_BIT */
export const Period_days_bitDay_friday: number = 5; /* LONG_NAMED_BIT */
export const friday: number = Period_days_bitDay_friday; /* SHORT_NAMED_BIT */
export const Period_days_bitDay_saturday: number = 6; /* LONG_NAMED_BIT */
export const saturday: number = Period_days_bitDay_saturday; /* SHORT_NAMED_BIT */
export const _decode_Period_days_bitDay = __utils._decodeBitString;
export const _encode_Period_days_bitDay = __utils._encodeBitString;


export enum NamedDay_intNamedDays {
    sunday = 1,
    monday = 2,
    tuesday = 3,
    wednesday = 4,
    thursday = 5,
    friday = 6,
    saturday = 7,
}
export const NamedDay_intNamedDays_sunday: NamedDay_intNamedDays = NamedDay_intNamedDays.sunday; /* LONG_NAMED_ENUMERATED_VALUE */
export const sunday: NamedDay_intNamedDays = NamedDay_intNamedDays.sunday; /* SHORT_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_monday: NamedDay_intNamedDays = NamedDay_intNamedDays.monday; /* LONG_NAMED_ENUMERATED_VALUE */
export const monday: NamedDay_intNamedDays = NamedDay_intNamedDays.monday; /* SHORT_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_tuesday: NamedDay_intNamedDays = NamedDay_intNamedDays.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */
export const tuesday: NamedDay_intNamedDays = NamedDay_intNamedDays.tuesday; /* SHORT_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_wednesday: NamedDay_intNamedDays = NamedDay_intNamedDays.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */
export const wednesday: NamedDay_intNamedDays = NamedDay_intNamedDays.wednesday; /* SHORT_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_thursday: NamedDay_intNamedDays = NamedDay_intNamedDays.thursday; /* LONG_NAMED_ENUMERATED_VALUE */
export const thursday: NamedDay_intNamedDays = NamedDay_intNamedDays.thursday; /* SHORT_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_friday: NamedDay_intNamedDays = NamedDay_intNamedDays.friday; /* LONG_NAMED_ENUMERATED_VALUE */
export const friday: NamedDay_intNamedDays = NamedDay_intNamedDays.friday; /* SHORT_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_saturday: NamedDay_intNamedDays = NamedDay_intNamedDays.saturday; /* LONG_NAMED_ENUMERATED_VALUE */
export const saturday: NamedDay_intNamedDays = NamedDay_intNamedDays.saturday; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NamedDay_intNamedDays = __utils._decodeEnumerated;
export const _encode_NamedDay_intNamedDays = __utils._encodeEnumerated;


export type NamedDay_bitNamedDays = asn1.BIT_STRING;
export const NamedDay_bitNamedDays_sunday: number = 0; /* LONG_NAMED_BIT */
export const sunday: number = NamedDay_bitNamedDays_sunday; /* SHORT_NAMED_BIT */
export const NamedDay_bitNamedDays_monday: number = 1; /* LONG_NAMED_BIT */
export const monday: number = NamedDay_bitNamedDays_monday; /* SHORT_NAMED_BIT */
export const NamedDay_bitNamedDays_tuesday: number = 2; /* LONG_NAMED_BIT */
export const tuesday: number = NamedDay_bitNamedDays_tuesday; /* SHORT_NAMED_BIT */
export const NamedDay_bitNamedDays_wednesday: number = 3; /* LONG_NAMED_BIT */
export const wednesday: number = NamedDay_bitNamedDays_wednesday; /* SHORT_NAMED_BIT */
export const NamedDay_bitNamedDays_thursday: number = 4; /* LONG_NAMED_BIT */
export const thursday: number = NamedDay_bitNamedDays_thursday; /* SHORT_NAMED_BIT */
export const NamedDay_bitNamedDays_friday: number = 5; /* LONG_NAMED_BIT */
export const friday: number = NamedDay_bitNamedDays_friday; /* SHORT_NAMED_BIT */
export const NamedDay_bitNamedDays_saturday: number = 6; /* LONG_NAMED_BIT */
export const saturday: number = NamedDay_bitNamedDays_saturday; /* SHORT_NAMED_BIT */
export const _decode_NamedDay_bitNamedDays = __utils._decodeBitString;
export const _encode_NamedDay_bitNamedDays = __utils._encodeBitString;


export type NamedDay =
    { intNamedDays: NamedDay_intNamedDays }
    | { bitNamedDays: NamedDay_bitNamedDays };
export const _decode_NamedDay = __utils._decode_inextensible_choice<NamedDay>({
    "UNIVERSAL 10": [ "intNamedDays", _decode_NamedDay_intNamedDays ],
    "UNIVERSAL 3": [ "bitNamedDays", _decode_NamedDay_bitNamedDays ]
});
export const _encode_NamedDay = __utils._encode_choice<NamedDay>({
    "intNamedDays": _encode_NamedDay_intNamedDays,
    "bitNamedDays": _encode_NamedDay_bitNamedDays,
}, __utils.BER);


export type XDayOf =
    { first: NamedDay }
    | { second: NamedDay }
    | { third: NamedDay }
    | { fourth: NamedDay }
    | { fifth: NamedDay };
export const _decode_XDayOf = __utils._decode_inextensible_choice<XDayOf>({
    "CONTEXT 1": [ "first", __utils._decode_explicit<NamedDay>(() => _decode_NamedDay) ],
    "CONTEXT 2": [ "second", __utils._decode_explicit<NamedDay>(() => _decode_NamedDay) ],
    "CONTEXT 3": [ "third", __utils._decode_explicit<NamedDay>(() => _decode_NamedDay) ],
    "CONTEXT 4": [ "fourth", __utils._decode_explicit<NamedDay>(() => _decode_NamedDay) ],
    "CONTEXT 5": [ "fifth", __utils._decode_explicit<NamedDay>(() => _decode_NamedDay) ]
});
export const _encode_XDayOf = __utils._encode_choice<XDayOf>({
    "first": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_NamedDay, __utils.BER),
    "second": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_NamedDay, __utils.BER),
    "third": __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_NamedDay, __utils.BER),
    "fourth": __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_NamedDay, __utils.BER),
    "fifth": __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => _encode_NamedDay, __utils.BER),
}, __utils.BER);


export type Period_days =
    { intDay: asn1.INTEGER[] }
    | { bitDay: Period_days_bitDay }
    | { dayOf: XDayOf };
export const _decode_Period_days = __utils._decode_inextensible_choice<Period_days>({
    "UNIVERSAL 17": [ "intDay", __utils._decodeSetOf<asn1.INTEGER>(() => __utils._decodeInteger) ],
    "UNIVERSAL 3": [ "bitDay", _decode_Period_days_bitDay ],
    /* NO_TAG_OR_TAG_CLASS */: [ "dayOf", _decode_XDayOf ]
});
export const _encode_Period_days = __utils._encode_choice<Period_days>({
    "intDay": __utils._encodeSetOf<asn1.INTEGER>(() => __utils._encodeInteger, __utils.BER),
    "bitDay": _encode_Period_days_bitDay,
    "dayOf": _encode_XDayOf,
}, __utils.BER);


export type Period_weeks_bitWeek = asn1.BIT_STRING;
export const Period_weeks_bitWeek_week1: number = 0; /* LONG_NAMED_BIT */
export const week1: number = Period_weeks_bitWeek_week1; /* SHORT_NAMED_BIT */
export const Period_weeks_bitWeek_week2: number = 1; /* LONG_NAMED_BIT */
export const week2: number = Period_weeks_bitWeek_week2; /* SHORT_NAMED_BIT */
export const Period_weeks_bitWeek_week3: number = 2; /* LONG_NAMED_BIT */
export const week3: number = Period_weeks_bitWeek_week3; /* SHORT_NAMED_BIT */
export const Period_weeks_bitWeek_week4: number = 3; /* LONG_NAMED_BIT */
export const week4: number = Period_weeks_bitWeek_week4; /* SHORT_NAMED_BIT */
export const Period_weeks_bitWeek_week5: number = 4; /* LONG_NAMED_BIT */
export const week5: number = Period_weeks_bitWeek_week5; /* SHORT_NAMED_BIT */
export const _decode_Period_weeks_bitWeek = __utils._decodeBitString;
export const _encode_Period_weeks_bitWeek = __utils._encodeBitString;


export type Period_weeks =
    { allWeeks: asn1.NULL }
    | { intWeek: asn1.INTEGER[] }
    | { bitWeek: Period_weeks_bitWeek };
export const _decode_Period_weeks = __utils._decode_inextensible_choice<Period_weeks>({
    "UNIVERSAL 5": [ "allWeeks", __utils._decodeNull ],
    "UNIVERSAL 17": [ "intWeek", __utils._decodeSetOf<asn1.INTEGER>(() => __utils._decodeInteger) ],
    "UNIVERSAL 3": [ "bitWeek", _decode_Period_weeks_bitWeek ]
});
export const _encode_Period_weeks = __utils._encode_choice<Period_weeks>({
    "allWeeks": __utils._encodeNull,
    "intWeek": __utils._encodeSetOf<asn1.INTEGER>(() => __utils._encodeInteger, __utils.BER),
    "bitWeek": _encode_Period_weeks_bitWeek,
}, __utils.BER);


export type Period_months_bitMonth = asn1.BIT_STRING;
export const Period_months_bitMonth_january: number = 0; /* LONG_NAMED_BIT */
export const january: number = Period_months_bitMonth_january; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_february: number = 1; /* LONG_NAMED_BIT */
export const february: number = Period_months_bitMonth_february; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_march: number = 2; /* LONG_NAMED_BIT */
export const march: number = Period_months_bitMonth_march; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_april: number = 3; /* LONG_NAMED_BIT */
export const april: number = Period_months_bitMonth_april; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_may: number = 4; /* LONG_NAMED_BIT */
export const may: number = Period_months_bitMonth_may; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_june: number = 5; /* LONG_NAMED_BIT */
export const june: number = Period_months_bitMonth_june; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_july: number = 6; /* LONG_NAMED_BIT */
export const july: number = Period_months_bitMonth_july; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_august: number = 7; /* LONG_NAMED_BIT */
export const august: number = Period_months_bitMonth_august; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_september: number = 8; /* LONG_NAMED_BIT */
export const september: number = Period_months_bitMonth_september; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_october: number = 9; /* LONG_NAMED_BIT */
export const october: number = Period_months_bitMonth_october; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_november: number = 10; /* LONG_NAMED_BIT */
export const november: number = Period_months_bitMonth_november; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_december: number = 11; /* LONG_NAMED_BIT */
export const december: number = Period_months_bitMonth_december; /* SHORT_NAMED_BIT */
export const _decode_Period_months_bitMonth = __utils._decodeBitString;
export const _encode_Period_months_bitMonth = __utils._encodeBitString;


export type Period_months =
    { allMonths: asn1.NULL }
    | { intMonth: asn1.INTEGER[] }
    | { bitMonth: Period_months_bitMonth };
export const _decode_Period_months = __utils._decode_inextensible_choice<Period_months>({
    "UNIVERSAL 5": [ "allMonths", __utils._decodeNull ],
    "UNIVERSAL 17": [ "intMonth", __utils._decodeSetOf<asn1.INTEGER>(() => __utils._decodeInteger) ],
    "UNIVERSAL 3": [ "bitMonth", _decode_Period_months_bitMonth ]
});
export const _encode_Period_months = __utils._encode_choice<Period_months>({
    "allMonths": __utils._encodeNull,
    "intMonth": __utils._encodeSetOf<asn1.INTEGER>(() => __utils._encodeInteger, __utils.BER),
    "bitMonth": _encode_Period_months_bitMonth,
}, __utils.BER);


export class Period {
    constructor (
        readonly timesOfDay: DayTimeBand[] | undefined,
        readonly days: Period_days | undefined,
        readonly weeks: Period_weeks | undefined,
        readonly months: Period_months | undefined,
        readonly years: asn1.INTEGER[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_Period: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("timesOfDay", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("days", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("weeks", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("months", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("years", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Period: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Period: __utils.ComponentSpec[] = [
    
];

export const _decode_Period = function (el: asn1.ASN1Element): Period {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let timesOfDay: asn1.OPTIONAL<DayTimeBand[]>;
    let days: asn1.OPTIONAL<Period_days>;
    let weeks: asn1.OPTIONAL<Period_weeks>;
    let months: asn1.OPTIONAL<Period_months>;
    let years: asn1.OPTIONAL<asn1.INTEGER[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "timesOfDay": (_el: asn1.ASN1Element): void => { timesOfDay = __utils._decode_explicit<DayTimeBand[]>(() => __utils._decodeSetOf<DayTimeBand>(() => _decode_DayTimeBand))(_el); },
        "days": (_el: asn1.ASN1Element): void => { days = __utils._decode_explicit<Period_days>(() => _decode_Period_days)(_el); },
        "weeks": (_el: asn1.ASN1Element): void => { weeks = __utils._decode_explicit<Period_weeks>(() => _decode_Period_weeks)(_el); },
        "months": (_el: asn1.ASN1Element): void => { months = __utils._decode_explicit<Period_months>(() => _decode_Period_months)(_el); },
        "years": (_el: asn1.ASN1Element): void => { years = __utils._decode_explicit<asn1.INTEGER[]>(() => __utils._decodeSetOf<asn1.INTEGER>(() => __utils._decodeInteger))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Period,
        _extension_additions_list_spec_for_Period,
        _root_component_type_list_2_spec_for_Period,
        undefined,
    );
    return new Period( /* SEQUENCE_CONSTRUCTOR_CALL */
        timesOfDay,
        days,
        weeks,
        months,
        years
    );
};
export const _encode_Period = function (value: Period, elGetter: __utils.ASN1Encoder<Period>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.timesOfDay === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSetOf<DayTimeBand>(() => _encode_DayTimeBand, __utils.BER), __utils.BER)(value.timesOfDay, __utils.BER)),
            /* IF_ABSENT  */ ((value.days === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Period_days, __utils.BER)(value.days, __utils.BER)),
            /* IF_ABSENT  */ ((value.weeks === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_Period_weeks, __utils.BER)(value.weeks, __utils.BER)),
            /* IF_ABSENT  */ ((value.months === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_Period_months, __utils.BER)(value.months, __utils.BER)),
            /* IF_ABSENT  */ ((value.years === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => __utils._encodeSetOf<asn1.INTEGER>(() => __utils._encodeInteger, __utils.BER), __utils.BER)(value.years, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type TimeSpecification_time =
    { absolute: TimeSpecification_time_absolute }
    | { periodic: Period[] };
export const _decode_TimeSpecification_time = __utils._decode_inextensible_choice<TimeSpecification_time>({
    "UNIVERSAL 16": [ "absolute", _decode_TimeSpecification_time_absolute ],
    "UNIVERSAL 17": [ "periodic", __utils._decodeSetOf<Period>(() => _decode_Period) ]
});
export const _encode_TimeSpecification_time = __utils._encode_choice<TimeSpecification_time>({
    "absolute": _encode_TimeSpecification_time_absolute,
    "periodic": __utils._encodeSetOf<Period>(() => _encode_Period, __utils.BER),
}, __utils.BER);


export type TimeZone = asn1.INTEGER;
export const _decode_TimeZone = __utils._decodeInteger;
export const _encode_TimeZone = __utils._encodeInteger;


export class TimeSpecification {
    constructor (
        readonly time: TimeSpecification_time,
        readonly notThisTime: asn1.BOOLEAN | undefined,
        readonly timeZone: TimeZone | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_TimeSpecification: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("time", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("notThisTime", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("timeZone", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TimeSpecification: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_TimeSpecification: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_TimeSpecification__notThisTime = false;
export const _decode_TimeSpecification = function (el: asn1.ASN1Element): TimeSpecification {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let time!: TimeSpecification_time;
    let notThisTime: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_TimeSpecification__notThisTime;
    let timeZone: asn1.OPTIONAL<TimeZone>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "time": (_el: asn1.ASN1Element): void => { time = _decode_TimeSpecification_time(_el); },
        "notThisTime": (_el: asn1.ASN1Element): void => { notThisTime = __utils._decodeBoolean(_el); },
        "timeZone": (_el: asn1.ASN1Element): void => { timeZone = _decode_TimeZone(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TimeSpecification,
        _extension_additions_list_spec_for_TimeSpecification,
        _root_component_type_list_2_spec_for_TimeSpecification,
        undefined,
    );
    return new TimeSpecification( /* SEQUENCE_CONSTRUCTOR_CALL */
        time,
        notThisTime,
        timeZone
    );
};
export const _encode_TimeSpecification = function (value: TimeSpecification, elGetter: __utils.ASN1Encoder<TimeSpecification>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TimeSpecification_time(value.time, __utils.BER),
            /* IF_DEFAULT */ (value.notThisTime === undefined || __utils.deepEq(value.notThisTime, _default_value_for_TimeSpecification__notThisTime) ? undefined : __utils._encodeBoolean(value.notThisTime, __utils.BER)),
            /* IF_ABSENT  */ ((value.timeZone === undefined) ? undefined : _encode_TimeZone(value.timeZone, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class TimeAssertion_between {
    constructor (
        readonly startTime: asn1.GeneralizedTime,
        readonly endTime: asn1.GeneralizedTime | undefined,
        readonly entirely: asn1.BOOLEAN | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_TimeAssertion_between: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("startTime", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("endTime", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("entirely", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TimeAssertion_between: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_TimeAssertion_between: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_TimeAssertion_between__entirely = false;
export const _decode_TimeAssertion_between = function (el: asn1.ASN1Element): TimeAssertion_between {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let startTime!: asn1.GeneralizedTime;
    let endTime: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let entirely: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_TimeAssertion_between__entirely;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "startTime": (_el: asn1.ASN1Element): void => { startTime = __utils._decode_explicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); },
        "endTime": (_el: asn1.ASN1Element): void => { endTime = __utils._decode_explicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); },
        "entirely": (_el: asn1.ASN1Element): void => { entirely = __utils._decodeBoolean(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TimeAssertion_between,
        _extension_additions_list_spec_for_TimeAssertion_between,
        _root_component_type_list_2_spec_for_TimeAssertion_between,
        undefined,
    );
    return new TimeAssertion_between( /* SEQUENCE_CONSTRUCTOR_CALL */
        startTime,
        endTime,
        entirely
    );
};
export const _encode_TimeAssertion_between = function (value: TimeAssertion_between, elGetter: __utils.ASN1Encoder<TimeAssertion_between>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeGeneralizedTime, __utils.BER)(value.startTime, __utils.BER),
            /* IF_ABSENT  */ ((value.endTime === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeGeneralizedTime, __utils.BER)(value.endTime, __utils.BER)),
            /* IF_DEFAULT */ (value.entirely === undefined || __utils.deepEq(value.entirely, _default_value_for_TimeAssertion_between__entirely) ? undefined : __utils._encodeBoolean(value.entirely, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type TimeAssertion =
    { now: asn1.NULL }
    | { at: asn1.GeneralizedTime }
    | { between: TimeAssertion_between };
export const _decode_TimeAssertion = __utils._decode_inextensible_choice<TimeAssertion>({
    "UNIVERSAL 5": [ "now", __utils._decodeNull ],
    "UNIVERSAL 24": [ "at", __utils._decodeGeneralizedTime ],
    "UNIVERSAL 16": [ "between", _decode_TimeAssertion_between ]
});
export const _encode_TimeAssertion = __utils._encode_choice<TimeAssertion>({
    "now": __utils._encodeNull,
    "at": __utils._encodeGeneralizedTime,
    "between": _encode_TimeAssertion_between,
}, __utils.BER);


// TODO: ObjectAssignment: localeContext

export type LocaleContextSyntax =
    { localeID1: asn1.OBJECT_IDENTIFIER }
    | { localeID2: DirectoryString };
export const _decode_LocaleContextSyntax = __utils._decode_inextensible_choice<LocaleContextSyntax>({
    "UNIVERSAL 6": [ "localeID1", __utils._decodeObjectIdentifier ],
    /* NO_TAG_OR_TAG_CLASS */: [ "localeID2", _decode_DirectoryString ]
});
export const _encode_LocaleContextSyntax = __utils._encode_choice<LocaleContextSyntax>({
    "localeID1": __utils._encodeObjectIdentifier,
    "localeID2": _encode_DirectoryString,
}, __utils.BER);


export const id_at_encryptedAliasedEntryName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
    2,
], id_at);

export const id_at_knowledgeInformation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_at);

export const id_at_commonName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_at);

export const id_at_encryptedCommonName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
    2,
], id_at);

export const id_at_surname: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_at);

export const id_at_encryptedSurname: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
    2,
], id_at);

export const id_at_serialNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_at);

export const id_at_encryptedSerialNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
    2,
], id_at);

export const id_at_countryName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_at);

export const id_at_encryptedCountryName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
    2,
], id_at);

export const id_at_localityName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_at);

export const id_at_encryptedLocalityName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
    2,
], id_at);

export const id_at_collectiveLocalityName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
    1,
], id_at);

export const id_at_encryptedCollectiveLocalityName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
    1,
    2,
], id_at);

export const id_at_stateOrProvinceName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_at);

export const id_at_encryptedStateOrProvinceName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
    2,
], id_at);

export const id_at_collectiveStateOrProvinceName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
    1,
], id_at);

export const id_at_encryptedCollectiveStateOrProvinceName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
    1,
    2,
], id_at);

export const id_at_streetAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_at);

export const id_at_encryptedStreetAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
    2,
], id_at);

export const id_at_collectiveStreetAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
    1,
], id_at);

export const id_at_encryptedCollectiveStreetAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
    1,
    2,
], id_at);

export const id_at_organizationName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
], id_at);

export const id_at_encryptedOrganizationName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
    2,
], id_at);

export const id_at_collectiveOrganizationName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
    1,
], id_at);

export const id_at_encryptedCollectiveOrganizationName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
    1,
    2,
], id_at);

export const id_at_organizationalUnitName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
], id_at);

export const id_at_encryptedOrganizationalUnitName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
    2,
], id_at);

export const id_at_collectiveOrganizationalUnitName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
    1,
], id_at);

export const id_at_encryptedCollectiveOrganizationalUnitName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
    1,
    2,
], id_at);

export const id_at_title: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    12,
], id_at);

export const id_at_encryptedTitle: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    12,
    2,
], id_at);

export const id_at_description: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    13,
], id_at);

export const id_at_encryptedDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    13,
    2,
], id_at);

export const id_at_searchGuide: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
], id_at);

export const id_at_encryptedSearchGuide: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
    2,
], id_at);

export const id_at_businessCategory: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
], id_at);

export const id_at_encryptedBusinessCategory: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
    2,
], id_at);

export const id_at_postalAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
], id_at);

export const id_at_encryptedPostalAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
    2,
], id_at);

export const id_at_collectivePostalAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
    1,
], id_at);

export const id_at_encryptedCollectivePostalAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
    1,
    2,
], id_at);

export const id_at_postalCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
], id_at);

export const id_at_encryptedPostalCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
    2,
], id_at);

export const id_at_collectivePostalCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
    1,
], id_at);

export const id_at_encryptedCollectivePostalCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
    1,
    2,
], id_at);

export const id_at_postOfficeBox: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
], id_at);

export const id_at_encryptedPostOfficeBox: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
    2,
], id_at);

export const id_at_collectivePostOfficeBox: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
    1,
], id_at);

export const id_at_encryptedCollectivePostOfficeBox: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
    1,
    2,
], id_at);

export const id_at_physicalDeliveryOfficeName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
], id_at);

export const id_at_encryptedPhysicalDeliveryOfficeName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
    2,
], id_at);

export const id_at_collectivePhysicalDeliveryOfficeName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
    1,
], id_at);

export const id_at_encryptedCollectivePhysicalDeliveryOfficeName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
    1,
    2,
], id_at);

export const id_at_telephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    20,
], id_at);

export const id_at_encryptedTelephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    20,
    2,
], id_at);

export const id_at_collectiveTelephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    20,
    1,
], id_at);

export const id_at_encryptedCollectiveTelephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    20,
    1,
    2,
], id_at);

export const id_at_telexNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    21,
], id_at);

export const id_at_encryptedTelexNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    21,
    2,
], id_at);

export const id_at_collectiveTelexNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    21,
    1,
], id_at);

export const id_at_encryptedCollectiveTelexNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    21,
    1,
    2,
], id_at);

export const id_at_facsimileTelephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    23,
], id_at);

export const id_at_encryptedFacsimileTelephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    23,
    2,
], id_at);

export const id_at_collectiveFacsimileTelephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    23,
    1,
], id_at);

export const id_at_encryptedCollectiveFacsimileTelephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    23,
    1,
    2,
], id_at);

export const id_at_x121Address: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    24,
], id_at);

export const id_at_encryptedX121Address: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    24,
    2,
], id_at);

export const id_at_internationalISDNNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    25,
], id_at);

export const id_at_encryptedInternationalISDNNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    25,
    2,
], id_at);

export const id_at_collectiveInternationalISDNNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    25,
    1,
], id_at);

export const id_at_encryptedCollectiveInternationalISDNNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    25,
    1,
    2,
], id_at);

export const id_at_registeredAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    26,
], id_at);

export const id_at_encryptedRegisteredAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    26,
    2,
], id_at);

export const id_at_destinationIndicator: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    27,
], id_at);

export const id_at_encryptedDestinationIndicator: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    27,
    2,
], id_at);

export const id_at_preferredDeliveryMethod: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    28,
], id_at);

export const id_at_encryptedPreferredDeliveryMethod: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    28,
    2,
], id_at);

export const id_at_presentationAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    29,
], id_at);

export const id_at_encryptedPresentationAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    29,
    2,
], id_at);

export const id_at_supportedApplicationContext: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    30,
], id_at);

export const id_at_encryptedSupportedApplicationContext: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    30,
    2,
], id_at);

export const id_at_member: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    31,
], id_at);

export const id_at_encryptedMember: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    31,
    2,
], id_at);

export const id_at_owner: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    32,
], id_at);

export const id_at_encryptedOwner: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    32,
    2,
], id_at);

export const id_at_roleOccupant: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    33,
], id_at);

export const id_at_encryptedRoleOccupant: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    33,
    2,
], id_at);

export const id_at_seeAlso: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    34,
], id_at);

export const id_at_encryptedSeeAlso: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    34,
    2,
], id_at);

export const id_at_encryptedUserPassword: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    35,
    2,
], id_at);

export const id_at_encryptedUserCertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    36,
    2,
], id_at);

export const id_at_encryptedCACertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    37,
    2,
], id_at);

export const id_at_encryptedAuthorityRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    38,
    2,
], id_at);

export const id_at_encryptedCertificateRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    39,
    2,
], id_at);

export const id_at_encryptedCrossCertificatePair: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    40,
    2,
], id_at);

export const id_at_name: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    41,
], id_at);

export const id_at_givenName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    42,
], id_at);

export const id_at_encryptedGivenName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    42,
    2,
], id_at);

export const id_at_initials: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    43,
], id_at);

export const id_at_encryptedInitials: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    43,
    2,
], id_at);

export const id_at_generationQualifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    44,
], id_at);

export const id_at_encryptedGenerationQualifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    44,
    2,
], id_at);

export const id_at_uniqueIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    45,
], id_at);

export const id_at_encryptedUniqueIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    45,
    2,
], id_at);

export const id_at_dnQualifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    46,
], id_at);

export const id_at_encryptedDnQualifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    46,
    2,
], id_at);

export const id_at_enhancedSearchGuide: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    47,
], id_at);

export const id_at_encryptedEnhancedSearchGuide: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    47,
    2,
], id_at);

export const id_at_protocolInformation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    48,
], id_at);

export const id_at_encryptedProtocolInformation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    48,
    2,
], id_at);

export const id_at_distinguishedName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    49,
], id_at);

export const id_at_encryptedDistinguishedName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    49,
    2,
], id_at);

export const id_at_uniqueMember: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    50,
], id_at);

export const id_at_encryptedUniqueMember: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    50,
    2,
], id_at);

export const id_at_houseIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    51,
], id_at);

export const id_at_encryptedHouseIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    51,
    2,
], id_at);

export const id_at_encryptedSupportedAlgorithms: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    52,
    2,
], id_at);

export const id_at_encryptedDeltaRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    53,
    2,
], id_at);

export const id_at_dmdName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    54,
], id_at);

export const id_at_encryptedDmdName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    54,
    2,
], id_at);

export const id_at_encryptedClearance: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    55,
    2,
], id_at);

export const id_at_encryptedDefaultDirQop: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    56,
    2,
], id_at);

export const id_at_encryptedAttributeIntegrityInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    57,
    2,
], id_at);

export const id_at_encryptedAttributeCertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    58,
    2,
], id_at);

export const id_at_encryptedAttributeCertificateRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    59,
    2,
], id_at);

export const id_at_encryptedConfKeyInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    60,
    2,
], id_at);

export const id_at_pseudonym: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    65,
], id_at);

export const id_at_communicationsService: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    66,
], id_at);

export const id_at_communicationsNetwork: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    67,
], id_at);

export const id_mr_caseIgnoreMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_mr);

export const id_mr_caseIgnoreOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_mr);

export const id_mr_caseIgnoreSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_mr);

export const id_mr_caseExactMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_mr);

export const id_mr_caseExactOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_mr);

export const id_mr_caseExactSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_mr);

export const id_mr_numericStringMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_mr);

export const id_mr_numericStringOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_mr);

export const id_mr_numericStringSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
], id_mr);

export const id_mr_caseIgnoreListMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
], id_mr);

export const id_mr_caseIgnoreListSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    12,
], id_mr);

export const id_mr_booleanMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    13,
], id_mr);

export const id_mr_integerMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
], id_mr);

export const id_mr_integerOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
], id_mr);

export const id_mr_bitStringMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
], id_mr);

export const id_mr_octetStringMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
], id_mr);

export const id_mr_octetStringOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
], id_mr);

export const id_mr_octetStringSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
], id_mr);

export const id_mr_telephoneNumberMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    20,
], id_mr);

export const id_mr_telephoneNumberSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    21,
], id_mr);

export const id_mr_presentationAddressMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    22,
], id_mr);

export const id_mr_uniqueMemberMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    23,
], id_mr);

export const id_mr_protocolInformationMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    24,
], id_mr);

export const id_mr_uTCTimeMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    25,
], id_mr);

export const id_mr_uTCTimeOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    26,
], id_mr);

export const id_mr_generalizedTimeMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    27,
], id_mr);

export const id_mr_generalizedTimeOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    28,
], id_mr);

export const id_mr_integerFirstComponentMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    29,
], id_mr);

export const id_mr_objectIdentifierFirstComponentMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    30,
], id_mr);

export const id_mr_directoryStringFirstComponentMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    31,
], id_mr);

export const id_mr_wordMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    32,
], id_mr);

export const id_mr_keywordMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    33,
], id_mr);

export const id_mr_storedPrefixMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    41,
], id_mr);

export const id_mr_systemProposedMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    47,
], id_mr);

export const id_mr_generalWordMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    48,
], id_mr);

export const id_mr_approximateStringMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    49,
], id_mr);

export const id_mr_ignoreIfAbsentMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    50,
], id_mr);

export const id_mr_nullMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    51,
], id_mr);

export const id_mr_zonalMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    52,
], id_mr);

export const id_mr_facsimileNumberMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    63,
], id_mr);

export const id_mr_facsimileNumberSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    64,
], id_mr);

export const id_avc_language: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_avc);

export const id_avc_temporal: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_avc);

export const id_avc_locale: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_avc);

export const id_pr_targetDsaUnavailable: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_pr);

export const id_pr_dataSourceUnavailable: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_pr);

export const id_pr_unidentifiedOperation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_pr);

export const id_pr_unavailableOperation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_pr);

export const id_pr_searchAttributeViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_pr);

export const id_pr_searchAttributeCombinationViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_pr);

export const id_pr_searchValueNotAllowed: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_pr);

export const id_pr_missingSearchAttribute: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_pr);

export const id_pr_searchValueViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_pr);

export const id_pr_attributeNegationViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
], id_pr);

export const id_pr_searchValueRequired: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
], id_pr);

export const id_pr_invalidSearchValue: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    12,
], id_pr);

export const id_pr_searchContextViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    13,
], id_pr);

export const id_pr_searchContextCombinationViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
], id_pr);

export const id_pr_missingSearchContext: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
], id_pr);

export const id_pr_searchContextValueViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
], id_pr);

export const id_pr_searchContextValueRequired: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
], id_pr);

export const id_pr_invalidContextSearchValue: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
], id_pr);

export const id_pr_unsupportedMatchingRule: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
], id_pr);

export const id_pr_attributeMatchingViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    20,
], id_pr);

export const id_pr_unsupportedMatchingUse: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    21,
], id_pr);

export const id_pr_matchingUseViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    22,
], id_pr);

export const id_pr_hierarchySelectForbidden: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    23,
], id_pr);

export const id_pr_invalidHierarchySelect: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    24,
], id_pr);

export const id_pr_unavailableHierarchySelect: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    25,
], id_pr);

export const id_pr_invalidSearchOptions: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    26,
], id_pr);

export const id_pr_missingSearchOptions: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    27,
], id_pr);

export const id_pr_invalidServiceControlOptions: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    28,
], id_pr);

export const id_pr_missingServiceControlOptions: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    29,
], id_pr);

export const id_pr_searchSubsetViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    30,
], id_pr);

export const id_pr_unmatchedKeyAttributes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    31,
], id_pr);

export const id_pr_ambiguousKeyAttributes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    32,
], id_pr);

export const id_not_dSAProblem: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_not);

export const id_not_searchServiceProblem: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_not);

export const id_not_serviceType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_not);

export const id_not_attributeTypeList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_not);

export const id_not_matchingRuleList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_not);

export const id_not_filterItem: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_not);

export const id_not_attributeCombinations: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_not);

export const id_not_contextTypeList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_not);

export const id_not_contextList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_not);

export const id_not_contextCombinations: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_not);

export const id_not_hierarchySelectList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
], id_not);

export const id_not_searchOptionsList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
], id_not);

export const id_not_serviceControlOptionsList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    12,
], id_not);

export const id_not_multipleMatchingLocalities: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    13,
], id_not);

export const id_not_proposedRelaxation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
], id_not);

export const id_not_appliedRelaxation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
], id_not);

export const id_not_substringRequirements: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
], id_not);

export const id_cat_sequenceMatchType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_cat);

export const id_cat_wordMatchType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_cat);

export const id_cat_characterMatchTypes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_cat);

export const id_cat_selectedContexts: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_cat);

/* END_MODULE SelectedAttributeTypes */
