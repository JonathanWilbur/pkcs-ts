/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKCS-10/AlgorithmIdentifier.ta";
import {
    CertificationRequestInfo,
    _decode_CertificationRequestInfo,
    _encode_CertificationRequestInfo,
} from "../PKCS-10/CertificationRequestInfo.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKCS-10/AlgorithmIdentifier.ta";
export {
    CertificationRequestInfo,
    _decode_CertificationRequestInfo,
    _encode_CertificationRequestInfo,
} from "../PKCS-10/CertificationRequestInfo.ta";

/* START_OF_SYMBOL_DEFINITION CertificationRequest */
/**
 * @summary CertificationRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationRequest ::= SEQUENCE {
 *         certificationRequestInfo CertificationRequestInfo,
 *         signatureAlgorithm AlgorithmIdentifier{{ SignatureAlgorithms }},
 *         signature          BIT STRING
 * }
 * ```
 *
 * @class
 */
export class CertificationRequest {
    constructor(
        /**
         * @summary `certificationRequestInfo`.
         * @public
         * @readonly
         */
        readonly certificationRequestInfo: CertificationRequestInfo,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a CertificationRequest
     * @description
     *
     * This takes an `object` and converts it to a `CertificationRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificationRequest`.
     * @returns {CertificationRequest}
     */
    public static _from_object(
        _o: { [_K in keyof CertificationRequest]: CertificationRequest[_K] }
    ): CertificationRequest {
        return new CertificationRequest(
            _o.certificationRequestInfo,
            _o.signatureAlgorithm,
            _o.signature
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertificationRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificationRequest */
/**
 * @summary The Leading Root Component Types of CertificationRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificationRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificationRequestInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signatureAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificationRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificationRequest */
/**
 * @summary The Trailing Root Component Types of CertificationRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificationRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificationRequest */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificationRequest */
/**
 * @summary The Extension Addition Component Types of CertificationRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificationRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificationRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationRequest */
let _cached_decoder_for_CertificationRequest: $.ASN1Decoder<CertificationRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationRequest */

/* START_OF_SYMBOL_DEFINITION _decode_CertificationRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificationRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificationRequest} The decoded data structure.
 */
export function _decode_CertificationRequest(el: _Element) {
    if (!_cached_decoder_for_CertificationRequest) {
        _cached_decoder_for_CertificationRequest = function (
            el: _Element
        ): CertificationRequest {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "CertificationRequest contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "certificationRequestInfo";
            sequence[1].name = "signatureAlgorithm";
            sequence[2].name = "signature";
            let certificationRequestInfo!: CertificationRequestInfo;
            let signatureAlgorithm!: AlgorithmIdentifier;
            let signature!: BIT_STRING;
            certificationRequestInfo = _decode_CertificationRequestInfo(
                sequence[0]
            );
            signatureAlgorithm = _decode_AlgorithmIdentifier(sequence[1]);
            signature = $._decodeBitString(sequence[2]);
            return new CertificationRequest(
                certificationRequestInfo,
                signatureAlgorithm,
                signature
            );
        };
    }
    return _cached_decoder_for_CertificationRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificationRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationRequest */
let _cached_encoder_for_CertificationRequest: $.ASN1Encoder<CertificationRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationRequest */

/* START_OF_SYMBOL_DEFINITION _encode_CertificationRequest */
/**
 * @summary Encodes a(n) CertificationRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationRequest, encoded as an ASN.1 Element.
 */
export function _encode_CertificationRequest(
    value: CertificationRequest,
    elGetter: $.ASN1Encoder<CertificationRequest>
) {
    if (!_cached_encoder_for_CertificationRequest) {
        _cached_encoder_for_CertificationRequest = function (
            value: CertificationRequest,
            elGetter: $.ASN1Encoder<CertificationRequest>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CertificationRequestInfo(
                            value.certificationRequestInfo,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.signatureAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.signature,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertificationRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificationRequest */

/* eslint-enable */
