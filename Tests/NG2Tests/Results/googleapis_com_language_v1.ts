import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The entity analysis request message. */
	export interface AnalyzeEntitiesRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;
	}

	/** The entity analysis request message. */
	export interface AnalyzeEntitiesRequestFormProperties {

		/** The encoding type used by the API to calculate offsets. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnalyzeEntitiesRequestFormGroup() {
		return new FormGroup<AnalyzeEntitiesRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/**
	 * ################################################################ #
	 * Represents the input to API methods.
	 */
	export interface Document {

		/**
		 * The content of the input in string format.
		 * Cloud audit logging exempt since it is based on user data.
		 */
		content?: string | null;

		/**
		 * The Google Cloud Storage URI where the file content is located.
		 * This URI must be of the form: gs://bucket_name/object_name. For more
		 * details, see https://cloud.google.com/storage/docs/reference-uris.
		 * NOTE: Cloud Storage object versioning is not supported.
		 */
		gcsContentUri?: string | null;

		/**
		 * The language of the document (if not specified, the language is
		 * automatically detected). Both ISO and BCP-47 language codes are
		 * accepted.<br>
		 * [Language
		 * Support](https://cloud.google.com/natural-language/docs/languages) lists
		 * currently supported languages for each API method. If the language (either
		 * specified by the caller or automatically detected) is not supported by the
		 * called API method, an `INVALID_ARGUMENT` error is returned.
		 */
		language?: string | null;

		/**
		 * Required. If the type is not set or is `TYPE_UNSPECIFIED`,
		 * returns an `INVALID_ARGUMENT` error.
		 */
		type?: DocumentType | null;
	}

	/**
	 * ################################################################ #
	 * Represents the input to API methods.
	 */
	export interface DocumentFormProperties {

		/**
		 * The content of the input in string format.
		 * Cloud audit logging exempt since it is based on user data.
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * The Google Cloud Storage URI where the file content is located.
		 * This URI must be of the form: gs://bucket_name/object_name. For more
		 * details, see https://cloud.google.com/storage/docs/reference-uris.
		 * NOTE: Cloud Storage object versioning is not supported.
		 */
		gcsContentUri: FormControl<string | null | undefined>,

		/**
		 * The language of the document (if not specified, the language is
		 * automatically detected). Both ISO and BCP-47 language codes are
		 * accepted.<br>
		 * [Language
		 * Support](https://cloud.google.com/natural-language/docs/languages) lists
		 * currently supported languages for each API method. If the language (either
		 * specified by the caller or automatically detected) is not supported by the
		 * called API method, an `INVALID_ARGUMENT` error is returned.
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * Required. If the type is not set or is `TYPE_UNSPECIFIED`,
		 * returns an `INVALID_ARGUMENT` error.
		 */
		type: FormControl<DocumentType | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			gcsContentUri: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DocumentType | null | undefined>(undefined),
		});

	}

	export enum DocumentType { TYPE_UNSPECIFIED = 0, PLAIN_TEXT = 1, HTML = 2 }

	export enum AnalyzeEntitiesRequestEncodingType { NONE = 0, UTF8 = 1, UTF16 = 2, UTF32 = 3 }


	/** The entity analysis response message. */
	export interface AnalyzeEntitiesResponse {

		/** The recognized entities in the input document. */
		entities?: Array<Entity>;

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language?: string | null;
	}

	/** The entity analysis response message. */
	export interface AnalyzeEntitiesResponseFormProperties {

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeEntitiesResponseFormGroup() {
		return new FormGroup<AnalyzeEntitiesResponseFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a phrase in the text that is a known entity, such as
	 * a person, an organization, or location. The API associates information, such
	 * as salience and mentions, with entities.
	 */
	export interface Entity {

		/**
		 * The mentions of this entity in the input document. The API currently
		 * supports proper noun mentions.
		 */
		mentions?: Array<EntityMention>;

		/**
		 * Metadata associated with the entity.
		 * For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`)
		 * and Knowledge Graph MID (`mid`), if they are available. For the metadata
		 * associated with other entity types, see the Type table below.
		 */
		metadata?: {[id: string]: string };

		/** The representative name for the entity. */
		name?: string | null;

		/**
		 * The salience score associated with the entity in the [0, 1.0] range.
		 * The salience score for an entity provides information about the
		 * importance or centrality of that entity to the entire document text.
		 * Scores closer to 0 are less salient, while scores closer to 1.0 are highly
		 * salient.
		 */
		salience?: number | null;

		/**
		 * Represents the feeling associated with the entire text or entities in
		 * the text.
		 */
		sentiment?: Sentiment;

		/** The entity type. */
		type?: EntityType | null;
	}

	/**
	 * Represents a phrase in the text that is a known entity, such as
	 * a person, an organization, or location. The API associates information, such
	 * as salience and mentions, with entities.
	 */
	export interface EntityFormProperties {

		/**
		 * Metadata associated with the entity.
		 * For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`)
		 * and Knowledge Graph MID (`mid`), if they are available. For the metadata
		 * associated with other entity types, see the Type table below.
		 */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The representative name for the entity. */
		name: FormControl<string | null | undefined>,

		/**
		 * The salience score associated with the entity in the [0, 1.0] range.
		 * The salience score for an entity provides information about the
		 * importance or centrality of that entity to the entire document text.
		 * Scores closer to 0 are less salient, while scores closer to 1.0 are highly
		 * salient.
		 */
		salience: FormControl<number | null | undefined>,

		/** The entity type. */
		type: FormControl<EntityType | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			salience: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<EntityType | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a mention for an entity in the text. Currently, proper noun
	 * mentions are supported.
	 */
	export interface EntityMention {

		/**
		 * Represents the feeling associated with the entire text or entities in
		 * the text.
		 */
		sentiment?: Sentiment;

		/** Represents an output piece of text. */
		text?: TextSpan;

		/** The type of the entity mention. */
		type?: EntityMentionType | null;
	}

	/**
	 * Represents a mention for an entity in the text. Currently, proper noun
	 * mentions are supported.
	 */
	export interface EntityMentionFormProperties {

		/** The type of the entity mention. */
		type: FormControl<EntityMentionType | null | undefined>,
	}
	export function CreateEntityMentionFormGroup() {
		return new FormGroup<EntityMentionFormProperties>({
			type: new FormControl<EntityMentionType | null | undefined>(undefined),
		});

	}


	/**
	 * Represents the feeling associated with the entire text or entities in
	 * the text.
	 */
	export interface Sentiment {

		/**
		 * A non-negative number in the [0, +inf) range, which represents
		 * the absolute magnitude of sentiment regardless of score (positive or
		 * negative).
		 */
		magnitude?: number | null;

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0
		 * (positive sentiment).
		 */
		score?: number | null;
	}

	/**
	 * Represents the feeling associated with the entire text or entities in
	 * the text.
	 */
	export interface SentimentFormProperties {

		/**
		 * A non-negative number in the [0, +inf) range, which represents
		 * the absolute magnitude of sentiment regardless of score (positive or
		 * negative).
		 */
		magnitude: FormControl<number | null | undefined>,

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0
		 * (positive sentiment).
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateSentimentFormGroup() {
		return new FormGroup<SentimentFormProperties>({
			magnitude: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an output piece of text. */
	export interface TextSpan {

		/**
		 * The API calculates the beginning offset of the content in the original
		 * document according to the EncodingType specified in the API request.
		 */
		beginOffset?: number | null;

		/** The content of the output text. */
		content?: string | null;
	}

	/** Represents an output piece of text. */
	export interface TextSpanFormProperties {

		/**
		 * The API calculates the beginning offset of the content in the original
		 * document according to the EncodingType specified in the API request.
		 */
		beginOffset: FormControl<number | null | undefined>,

		/** The content of the output text. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateTextSpanFormGroup() {
		return new FormGroup<TextSpanFormProperties>({
			beginOffset: new FormControl<number | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EntityMentionType { TYPE_UNKNOWN = 0, PROPER = 1, COMMON = 2 }

	export enum EntityType { UNKNOWN = 0, PERSON = 1, LOCATION = 2, ORGANIZATION = 3, EVENT = 4, WORK_OF_ART = 5, CONSUMER_GOOD = 6, OTHER = 7, PHONE_NUMBER = 8, ADDRESS = 9, DATE = 10, NUMBER = 11, PRICE = 12 }


	/** The entity-level sentiment analysis request message. */
	export interface AnalyzeEntitySentimentRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;
	}

	/** The entity-level sentiment analysis request message. */
	export interface AnalyzeEntitySentimentRequestFormProperties {

		/** The encoding type used by the API to calculate offsets. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnalyzeEntitySentimentRequestFormGroup() {
		return new FormGroup<AnalyzeEntitySentimentRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/** The entity-level sentiment analysis response message. */
	export interface AnalyzeEntitySentimentResponse {

		/** The recognized entities in the input document with associated sentiments. */
		entities?: Array<Entity>;

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language?: string | null;
	}

	/** The entity-level sentiment analysis response message. */
	export interface AnalyzeEntitySentimentResponseFormProperties {

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeEntitySentimentResponseFormGroup() {
		return new FormGroup<AnalyzeEntitySentimentResponseFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The sentiment analysis request message. */
	export interface AnalyzeSentimentRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;

		/** The encoding type used by the API to calculate sentence offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;
	}

	/** The sentiment analysis request message. */
	export interface AnalyzeSentimentRequestFormProperties {

		/** The encoding type used by the API to calculate sentence offsets. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnalyzeSentimentRequestFormGroup() {
		return new FormGroup<AnalyzeSentimentRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/** The sentiment analysis response message. */
	export interface AnalyzeSentimentResponse {

		/**
		 * Represents the feeling associated with the entire text or entities in
		 * the text.
		 */
		documentSentiment?: Sentiment;

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language?: string | null;

		/** The sentiment for all the sentences in the document. */
		sentences?: Array<Sentence>;
	}

	/** The sentiment analysis response message. */
	export interface AnalyzeSentimentResponseFormProperties {

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeSentimentResponseFormGroup() {
		return new FormGroup<AnalyzeSentimentResponseFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a sentence in the input document. */
	export interface Sentence {

		/**
		 * Represents the feeling associated with the entire text or entities in
		 * the text.
		 */
		sentiment?: Sentiment;

		/** Represents an output piece of text. */
		text?: TextSpan;
	}

	/** Represents a sentence in the input document. */
	export interface SentenceFormProperties {
	}
	export function CreateSentenceFormGroup() {
		return new FormGroup<SentenceFormProperties>({
		});

	}


	/** The syntax analysis request message. */
	export interface AnalyzeSyntaxRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;
	}

	/** The syntax analysis request message. */
	export interface AnalyzeSyntaxRequestFormProperties {

		/** The encoding type used by the API to calculate offsets. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnalyzeSyntaxRequestFormGroup() {
		return new FormGroup<AnalyzeSyntaxRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/** The syntax analysis response message. */
	export interface AnalyzeSyntaxResponse {

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language?: string | null;

		/** Sentences in the input document. */
		sentences?: Array<Sentence>;

		/** Tokens, along with their syntactic information, in the input document. */
		tokens?: Array<Token>;
	}

	/** The syntax analysis response message. */
	export interface AnalyzeSyntaxResponseFormProperties {

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeSyntaxResponseFormGroup() {
		return new FormGroup<AnalyzeSyntaxResponseFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the smallest syntactic building block of the text. */
	export interface Token {

		/**
		 * Represents dependency parse tree information for a token. (For more
		 * information on dependency labels, see
		 * http://www.aclweb.org/anthology/P13-2017
		 */
		dependencyEdge?: DependencyEdge;

		/** [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token. */
		lemma?: string | null;

		/**
		 * Represents part of speech information for a token. Parts of speech
		 * are as defined in
		 * http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
		 */
		partOfSpeech?: PartOfSpeech;

		/** Represents an output piece of text. */
		text?: TextSpan;
	}

	/** Represents the smallest syntactic building block of the text. */
	export interface TokenFormProperties {

		/** [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token. */
		lemma: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			lemma: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents dependency parse tree information for a token. (For more
	 * information on dependency labels, see
	 * http://www.aclweb.org/anthology/P13-2017
	 */
	export interface DependencyEdge {

		/**
		 * Represents the head of this token in the dependency tree.
		 * This is the index of the token which has an arc going to this token.
		 * The index is the position of the token in the array of tokens returned
		 * by the API method. If this token is a root token, then the
		 * `head_token_index` is its own index.
		 */
		headTokenIndex?: number | null;

		/** The parse label for the token. */
		label?: DependencyEdgeLabel | null;
	}

	/**
	 * Represents dependency parse tree information for a token. (For more
	 * information on dependency labels, see
	 * http://www.aclweb.org/anthology/P13-2017
	 */
	export interface DependencyEdgeFormProperties {

		/**
		 * Represents the head of this token in the dependency tree.
		 * This is the index of the token which has an arc going to this token.
		 * The index is the position of the token in the array of tokens returned
		 * by the API method. If this token is a root token, then the
		 * `head_token_index` is its own index.
		 */
		headTokenIndex: FormControl<number | null | undefined>,

		/** The parse label for the token. */
		label: FormControl<DependencyEdgeLabel | null | undefined>,
	}
	export function CreateDependencyEdgeFormGroup() {
		return new FormGroup<DependencyEdgeFormProperties>({
			headTokenIndex: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<DependencyEdgeLabel | null | undefined>(undefined),
		});

	}

	export enum DependencyEdgeLabel { UNKNOWN = 0, ABBREV = 1, ACOMP = 2, ADVCL = 3, ADVMOD = 4, AMOD = 5, APPOS = 6, ATTR = 7, AUX = 8, AUXPASS = 9, CC = 10, CCOMP = 11, CONJ = 12, CSUBJ = 13, CSUBJPASS = 14, DEP = 15, DET = 16, DISCOURSE = 17, DOBJ = 18, EXPL = 19, GOESWITH = 20, IOBJ = 21, MARK = 22, MWE = 23, MWV = 24, NEG = 25, NN = 26, NPADVMOD = 27, NSUBJ = 28, NSUBJPASS = 29, NUM = 30, NUMBER = 31, P = 32, PARATAXIS = 33, PARTMOD = 34, PCOMP = 35, POBJ = 36, POSS = 37, POSTNEG = 38, PRECOMP = 39, PRECONJ = 40, PREDET = 41, PREF = 42, PREP = 43, PRONL = 44, PRT = 45, PS = 46, QUANTMOD = 47, RCMOD = 48, RCMODREL = 49, RDROP = 50, REF = 51, REMNANT = 52, REPARANDUM = 53, ROOT = 54, SNUM = 55, SUFF = 56, TMOD = 57, TOPIC = 58, VMOD = 59, VOCATIVE = 60, XCOMP = 61, SUFFIX = 62, TITLE = 63, ADVPHMOD = 64, AUXCAUS = 65, AUXVV = 66, DTMOD = 67, FOREIGN = 68, KW = 69, LIST = 70, NOMC = 71, NOMCSUBJ = 72, NOMCSUBJPASS = 73, NUMC = 74, COP = 75, DISLOCATED = 76, ASP = 77, GMOD = 78, GOBJ = 79, INFMOD = 80, MES = 81, NCOMP = 82 }


	/**
	 * Represents part of speech information for a token. Parts of speech
	 * are as defined in
	 * http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
	 */
	export interface PartOfSpeech {

		/** The grammatical aspect. */
		aspect?: PartOfSpeechAspect | null;

		/** The grammatical case. */
		case?: PartOfSpeechCase | null;

		/** The grammatical form. */
		form?: PartOfSpeechForm | null;

		/** The grammatical gender. */
		gender?: PartOfSpeechGender | null;

		/** The grammatical mood. */
		mood?: PartOfSpeechMood | null;

		/** The grammatical number. */
		number?: PartOfSpeechNumber | null;

		/** The grammatical person. */
		person?: PartOfSpeechPerson | null;

		/** The grammatical properness. */
		proper?: PartOfSpeechProper | null;

		/** The grammatical reciprocity. */
		reciprocity?: PartOfSpeechReciprocity | null;

		/** The part of speech tag. */
		tag?: PartOfSpeechTag | null;

		/** The grammatical tense. */
		tense?: PartOfSpeechTense | null;

		/** The grammatical voice. */
		voice?: PartOfSpeechVoice | null;
	}

	/**
	 * Represents part of speech information for a token. Parts of speech
	 * are as defined in
	 * http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
	 */
	export interface PartOfSpeechFormProperties {

		/** The grammatical aspect. */
		aspect: FormControl<PartOfSpeechAspect | null | undefined>,

		/** The grammatical case. */
		case: FormControl<PartOfSpeechCase | null | undefined>,

		/** The grammatical form. */
		form: FormControl<PartOfSpeechForm | null | undefined>,

		/** The grammatical gender. */
		gender: FormControl<PartOfSpeechGender | null | undefined>,

		/** The grammatical mood. */
		mood: FormControl<PartOfSpeechMood | null | undefined>,

		/** The grammatical number. */
		number: FormControl<PartOfSpeechNumber | null | undefined>,

		/** The grammatical person. */
		person: FormControl<PartOfSpeechPerson | null | undefined>,

		/** The grammatical properness. */
		proper: FormControl<PartOfSpeechProper | null | undefined>,

		/** The grammatical reciprocity. */
		reciprocity: FormControl<PartOfSpeechReciprocity | null | undefined>,

		/** The part of speech tag. */
		tag: FormControl<PartOfSpeechTag | null | undefined>,

		/** The grammatical tense. */
		tense: FormControl<PartOfSpeechTense | null | undefined>,

		/** The grammatical voice. */
		voice: FormControl<PartOfSpeechVoice | null | undefined>,
	}
	export function CreatePartOfSpeechFormGroup() {
		return new FormGroup<PartOfSpeechFormProperties>({
			aspect: new FormControl<PartOfSpeechAspect | null | undefined>(undefined),
			case: new FormControl<PartOfSpeechCase | null | undefined>(undefined),
			form: new FormControl<PartOfSpeechForm | null | undefined>(undefined),
			gender: new FormControl<PartOfSpeechGender | null | undefined>(undefined),
			mood: new FormControl<PartOfSpeechMood | null | undefined>(undefined),
			number: new FormControl<PartOfSpeechNumber | null | undefined>(undefined),
			person: new FormControl<PartOfSpeechPerson | null | undefined>(undefined),
			proper: new FormControl<PartOfSpeechProper | null | undefined>(undefined),
			reciprocity: new FormControl<PartOfSpeechReciprocity | null | undefined>(undefined),
			tag: new FormControl<PartOfSpeechTag | null | undefined>(undefined),
			tense: new FormControl<PartOfSpeechTense | null | undefined>(undefined),
			voice: new FormControl<PartOfSpeechVoice | null | undefined>(undefined),
		});

	}

	export enum PartOfSpeechAspect { ASPECT_UNKNOWN = 0, PERFECTIVE = 1, IMPERFECTIVE = 2, PROGRESSIVE = 3 }

	export enum PartOfSpeechCase { CASE_UNKNOWN = 0, ACCUSATIVE = 1, ADVERBIAL = 2, COMPLEMENTIVE = 3, DATIVE = 4, GENITIVE = 5, INSTRUMENTAL = 6, LOCATIVE = 7, NOMINATIVE = 8, OBLIQUE = 9, PARTITIVE = 10, PREPOSITIONAL = 11, REFLEXIVE_CASE = 12, RELATIVE_CASE = 13, VOCATIVE = 14 }

	export enum PartOfSpeechForm { FORM_UNKNOWN = 0, ADNOMIAL = 1, AUXILIARY = 2, COMPLEMENTIZER = 3, FINAL_ENDING = 4, GERUND = 5, REALIS = 6, IRREALIS = 7, SHORT = 8, LONG = 9, ORDER = 10, SPECIFIC = 11 }

	export enum PartOfSpeechGender { GENDER_UNKNOWN = 0, FEMININE = 1, MASCULINE = 2, NEUTER = 3 }

	export enum PartOfSpeechMood { MOOD_UNKNOWN = 0, CONDITIONAL_MOOD = 1, IMPERATIVE = 2, INDICATIVE = 3, INTERROGATIVE = 4, JUSSIVE = 5, SUBJUNCTIVE = 6 }

	export enum PartOfSpeechNumber { NUMBER_UNKNOWN = 0, SINGULAR = 1, PLURAL = 2, DUAL = 3 }

	export enum PartOfSpeechPerson { PERSON_UNKNOWN = 0, FIRST = 1, SECOND = 2, THIRD = 3, REFLEXIVE_PERSON = 4 }

	export enum PartOfSpeechProper { PROPER_UNKNOWN = 0, PROPER = 1, NOT_PROPER = 2 }

	export enum PartOfSpeechReciprocity { RECIPROCITY_UNKNOWN = 0, RECIPROCAL = 1, NON_RECIPROCAL = 2 }

	export enum PartOfSpeechTag { UNKNOWN = 0, ADJ = 1, ADP = 2, ADV = 3, CONJ = 4, DET = 5, NOUN = 6, NUM = 7, PRON = 8, PRT = 9, PUNCT = 10, VERB = 11, X = 12, AFFIX = 13 }

	export enum PartOfSpeechTense { TENSE_UNKNOWN = 0, CONDITIONAL_TENSE = 1, FUTURE = 2, PAST = 3, PRESENT = 4, IMPERFECT = 5, PLUPERFECT = 6 }

	export enum PartOfSpeechVoice { VOICE_UNKNOWN = 0, ACTIVE = 1, CAUSATIVE = 2, PASSIVE = 3 }


	/**
	 * The request message for the text annotation API, which can perform multiple
	 * analysis types (sentiment, entities, and syntax) in one call.
	 */
	export interface AnnotateTextRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;

		/**
		 * All available features for sentiment, syntax, and semantic analysis.
		 * Setting each one to true will enable that specific analysis for the input.
		 */
		features?: Features;
	}

	/**
	 * The request message for the text annotation API, which can perform multiple
	 * analysis types (sentiment, entities, and syntax) in one call.
	 */
	export interface AnnotateTextRequestFormProperties {

		/** The encoding type used by the API to calculate offsets. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnnotateTextRequestFormGroup() {
		return new FormGroup<AnnotateTextRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/**
	 * All available features for sentiment, syntax, and semantic analysis.
	 * Setting each one to true will enable that specific analysis for the input.
	 */
	export interface Features {

		/** Classify the full document into categories. */
		classifyText?: boolean | null;

		/** Extract document-level sentiment. */
		extractDocumentSentiment?: boolean | null;

		/** Extract entities. */
		extractEntities?: boolean | null;

		/** Extract entities and their associated sentiment. */
		extractEntitySentiment?: boolean | null;

		/** Extract syntax information. */
		extractSyntax?: boolean | null;
	}

	/**
	 * All available features for sentiment, syntax, and semantic analysis.
	 * Setting each one to true will enable that specific analysis for the input.
	 */
	export interface FeaturesFormProperties {

		/** Classify the full document into categories. */
		classifyText: FormControl<boolean | null | undefined>,

		/** Extract document-level sentiment. */
		extractDocumentSentiment: FormControl<boolean | null | undefined>,

		/** Extract entities. */
		extractEntities: FormControl<boolean | null | undefined>,

		/** Extract entities and their associated sentiment. */
		extractEntitySentiment: FormControl<boolean | null | undefined>,

		/** Extract syntax information. */
		extractSyntax: FormControl<boolean | null | undefined>,
	}
	export function CreateFeaturesFormGroup() {
		return new FormGroup<FeaturesFormProperties>({
			classifyText: new FormControl<boolean | null | undefined>(undefined),
			extractDocumentSentiment: new FormControl<boolean | null | undefined>(undefined),
			extractEntities: new FormControl<boolean | null | undefined>(undefined),
			extractEntitySentiment: new FormControl<boolean | null | undefined>(undefined),
			extractSyntax: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The text annotations response message. */
	export interface AnnotateTextResponse {

		/** Categories identified in the input document. */
		categories?: Array<ClassificationCategory>;

		/**
		 * Represents the feeling associated with the entire text or entities in
		 * the text.
		 */
		documentSentiment?: Sentiment;

		/**
		 * Entities, along with their semantic information, in the input document.
		 * Populated if the user enables
		 * AnnotateTextRequest.Features.extract_entities.
		 */
		entities?: Array<Entity>;

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language?: string | null;

		/**
		 * Sentences in the input document. Populated if the user enables
		 * AnnotateTextRequest.Features.extract_syntax.
		 */
		sentences?: Array<Sentence>;

		/**
		 * Tokens, along with their syntactic information, in the input document.
		 * Populated if the user enables
		 * AnnotateTextRequest.Features.extract_syntax.
		 */
		tokens?: Array<Token>;
	}

	/** The text annotations response message. */
	export interface AnnotateTextResponseFormProperties {

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language: FormControl<string | null | undefined>,
	}
	export function CreateAnnotateTextResponseFormGroup() {
		return new FormGroup<AnnotateTextResponseFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a category returned from the text classifier. */
	export interface ClassificationCategory {

		/**
		 * The classifier's confidence of the category. Number represents how certain
		 * the classifier is that this category represents the given text.
		 */
		confidence?: number | null;

		/**
		 * The name of the category representing the document, from the [predefined
		 * taxonomy](https://cloud.google.com/natural-language/docs/categories).
		 */
		name?: string | null;
	}

	/** Represents a category returned from the text classifier. */
	export interface ClassificationCategoryFormProperties {

		/**
		 * The classifier's confidence of the category. Number represents how certain
		 * the classifier is that this category represents the given text.
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * The name of the category representing the document, from the [predefined
		 * taxonomy](https://cloud.google.com/natural-language/docs/categories).
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateClassificationCategoryFormGroup() {
		return new FormGroup<ClassificationCategoryFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The document classification request message. */
	export interface ClassifyTextRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;
	}

	/** The document classification request message. */
	export interface ClassifyTextRequestFormProperties {
	}
	export function CreateClassifyTextRequestFormGroup() {
		return new FormGroup<ClassifyTextRequestFormProperties>({
		});

	}


	/** The document classification response message. */
	export interface ClassifyTextResponse {

		/** Categories representing the input document. */
		categories?: Array<ClassificationCategory>;
	}

	/** The document classification response message. */
	export interface ClassifyTextResponseFormProperties {
	}
	export function CreateClassifyTextResponseFormGroup() {
		return new FormGroup<ClassifyTextResponseFormProperties>({
		});

	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Finds named entities (currently proper names and common nouns) in the text
		 * along with entity types, salience, mentions for each entity, and
		 * other properties.
		 * Post v1/documents:analyzeEntities
		 * @return {void} Successful response
		 */
		Language_documents_analyzeEntities(requestBody: AnalyzeEntitiesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:analyzeEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Finds entities, similar to AnalyzeEntities in the text and analyzes
		 * sentiment associated with each entity and its mentions.
		 * Post v1/documents:analyzeEntitySentiment
		 * @return {void} Successful response
		 */
		Language_documents_analyzeEntitySentiment(requestBody: AnalyzeEntitySentimentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:analyzeEntitySentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Analyzes the sentiment of the provided text.
		 * Post v1/documents:analyzeSentiment
		 * @return {void} Successful response
		 */
		Language_documents_analyzeSentiment(requestBody: AnalyzeSentimentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:analyzeSentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Analyzes the syntax of the text and provides sentence boundaries and
		 * tokenization along with part of speech tags, dependency trees, and other
		 * properties.
		 * Post v1/documents:analyzeSyntax
		 * @return {void} Successful response
		 */
		Language_documents_analyzeSyntax(requestBody: AnalyzeSyntaxRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:analyzeSyntax', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * A convenience method that provides all the features that analyzeSentiment,
		 * analyzeEntities, and analyzeSyntax provide in one call.
		 * Post v1/documents:annotateText
		 * @return {void} Successful response
		 */
		Language_documents_annotateText(requestBody: AnnotateTextRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:annotateText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Classifies a document into categories.
		 * Post v1/documents:classifyText
		 * @return {void} Successful response
		 */
		Language_documents_classifyText(requestBody: ClassifyTextRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:classifyText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}
