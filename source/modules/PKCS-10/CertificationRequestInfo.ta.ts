/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "x500-ts/dist/node/modules/InformationFramework/Name.ta";
import {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../PKCS-10/Attributes.ta";
import {
    CertificationRequestInfo_version,
    _decode_CertificationRequestInfo_version,
    _encode_CertificationRequestInfo_version,
} from "../PKCS-10/CertificationRequestInfo-version.ta";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "../PKCS-10/SubjectPublicKeyInfo.ta";

/* START_OF_SYMBOL_DEFINITION CertificationRequestInfo */
/**
 * @summary CertificationRequestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationRequestInfo ::= SEQUENCE {
 *         version       INTEGER { v1(0) } (v1,...),
 *         subject       Name,
 *         subjectPKInfo SubjectPublicKeyInfo{{ PKInfoAlgorithms }},
 *         attributes    [0] Attributes{{ CRIAttributes }}
 * }
 * ```
 *
 * @class
 */
export class CertificationRequestInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CertificationRequestInfo_version,
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `subjectPKInfo`.
         * @public
         * @readonly
         */
        readonly subjectPKInfo: SubjectPublicKeyInfo,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: Attributes
    ) {}

    /**
     * @summary Restructures an object into a CertificationRequestInfo
     * @description
     *
     * This takes an `object` and converts it to a `CertificationRequestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificationRequestInfo`.
     * @returns {CertificationRequestInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof CertificationRequestInfo]: CertificationRequestInfo[_K];
        }
    ): CertificationRequestInfo {
        return new CertificationRequestInfo(
            _o.version,
            _o.subject,
            _o.subjectPKInfo,
            _o.attributes
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertificationRequestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificationRequestInfo */
/**
 * @summary The Leading Root Component Types of CertificationRequestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificationRequestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "subjectPKInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificationRequestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificationRequestInfo */
/**
 * @summary The Trailing Root Component Types of CertificationRequestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificationRequestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificationRequestInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificationRequestInfo */
/**
 * @summary The Extension Addition Component Types of CertificationRequestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificationRequestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificationRequestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationRequestInfo */
let _cached_decoder_for_CertificationRequestInfo: $.ASN1Decoder<CertificationRequestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationRequestInfo */

/* START_OF_SYMBOL_DEFINITION _decode_CertificationRequestInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificationRequestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificationRequestInfo} The decoded data structure.
 */
export function _decode_CertificationRequestInfo(el: _Element) {
    if (!_cached_decoder_for_CertificationRequestInfo) {
        _cached_decoder_for_CertificationRequestInfo = function (
            el: _Element
        ): CertificationRequestInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "CertificationRequestInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            sequence[1].name = "subject";
            sequence[2].name = "subjectPKInfo";
            sequence[3].name = "attributes";
            let version!: CertificationRequestInfo_version;
            let subject!: Name;
            let subjectPKInfo!: SubjectPublicKeyInfo;
            let attributes!: Attributes;
            version = _decode_CertificationRequestInfo_version(sequence[0]);
            subject = _decode_Name(sequence[1]);
            subjectPKInfo = _decode_SubjectPublicKeyInfo(sequence[2]);
            attributes = $._decode_implicit<Attributes>(
                () => _decode_Attributes
            )(sequence[3]);
            return new CertificationRequestInfo(
                version,
                subject,
                subjectPKInfo,
                attributes
            );
        };
    }
    return _cached_decoder_for_CertificationRequestInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificationRequestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationRequestInfo */
let _cached_encoder_for_CertificationRequestInfo: $.ASN1Encoder<CertificationRequestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationRequestInfo */

/* START_OF_SYMBOL_DEFINITION _encode_CertificationRequestInfo */
/**
 * @summary Encodes a(n) CertificationRequestInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationRequestInfo, encoded as an ASN.1 Element.
 */
export function _encode_CertificationRequestInfo(
    value: CertificationRequestInfo,
    elGetter: $.ASN1Encoder<CertificationRequestInfo>
) {
    if (!_cached_encoder_for_CertificationRequestInfo) {
        _cached_encoder_for_CertificationRequestInfo = function (
            value: CertificationRequestInfo,
            elGetter: $.ASN1Encoder<CertificationRequestInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CertificationRequestInfo_version(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                        /* REQUIRED   */ _encode_SubjectPublicKeyInfo(
                            value.subjectPKInfo,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_Attributes,
                            $.BER
                        )(value.attributes, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertificationRequestInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificationRequestInfo */

/* eslint-enable */
