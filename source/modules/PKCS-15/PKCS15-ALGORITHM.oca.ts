/* eslint-disable */
import { INTEGER, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { Operations } from "../PKCS-15/Operations.ta";
export {
    compute_checksum /* IMPORTED_SHORT_NAMED_BIT */,
    compute_signature /* IMPORTED_SHORT_NAMED_BIT */,
    decipher /* IMPORTED_SHORT_NAMED_BIT */,
    encipher /* IMPORTED_SHORT_NAMED_BIT */,
    generate_key /* IMPORTED_SHORT_NAMED_BIT */,
    hash /* IMPORTED_SHORT_NAMED_BIT */,
    Operations,
    Operations_compute_checksum /* IMPORTED_LONG_NAMED_BIT */,
    Operations_compute_signature /* IMPORTED_LONG_NAMED_BIT */,
    Operations_decipher /* IMPORTED_LONG_NAMED_BIT */,
    Operations_encipher /* IMPORTED_LONG_NAMED_BIT */,
    Operations_generate_key /* IMPORTED_LONG_NAMED_BIT */,
    Operations_hash /* IMPORTED_LONG_NAMED_BIT */,
    Operations_verify_checksum /* IMPORTED_LONG_NAMED_BIT */,
    Operations_verify_signature /* IMPORTED_LONG_NAMED_BIT */,
    verify_checksum /* IMPORTED_SHORT_NAMED_BIT */,
    verify_signature /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Operations,
    _encode_Operations,
} from "../PKCS-15/Operations.ta";

/* START_OF_SYMBOL_DEFINITION PKCS15_ALGORITHM */
/**
 * @summary PKCS15_ALGORITHM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS15-ALGORITHM ::= CLASS {
 *     &id INTEGER UNIQUE,
 *     &Parameters,
 *     &Operations Operations,
 *     &objectIdentifier OBJECT IDENTIFIER OPTIONAL
 * } WITH SYNTAX {
 *     PARAMETERS &Parameters
 *     OPERATIONS &Operations
 *     ID &id
 *     [OID &objectIdentifier]
 * }
 * ```
 *
 * @interface
 */
export interface PKCS15_ALGORITHM<
    Parameters = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "PKCS15-ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof PKCS15_ALGORITHM<Parameters>]: $.ASN1Decoder<
                PKCS15_ALGORITHM<Parameters>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof PKCS15_ALGORITHM<Parameters>]: $.ASN1Encoder<
                PKCS15_ALGORITHM<Parameters>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: INTEGER;
    /**
     * @summary &Parameters
     */
    readonly "&Parameters": Parameters;
    /**
     * @summary &Operations
     */
    readonly "&Operations"?: Operations;
    /**
     * @summary &objectIdentifier
     */
    readonly "&objectIdentifier"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION PKCS15_ALGORITHM */

/* eslint-enable */
