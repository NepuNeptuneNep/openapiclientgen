import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Acl {

		/** ETag of the collection. */
		etag?: string | null;

		/** List of rules on the access control list. */
		items?: Array<AclRule>;

		/** Type of the collection ("calendar#acl"). */
		kind?: string | null;

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken?: string | null;

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken?: string | null;
	}
	export interface AclFormProperties {

		/** ETag of the collection. */
		etag: FormControl<string | null | undefined>,

		/** Type of the collection ("calendar#acl"). */
		kind: FormControl<string | null | undefined>,

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken: FormControl<string | null | undefined>,
	}
	export function CreateAclFormGroup() {
		return new FormGroup<AclFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			nextSyncToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AclRule {

		/** ETag of the resource. */
		etag?: string | null;

		/** Identifier of the Access Control List (ACL) rule. See Sharing calendars. */
		id?: string | null;

		/** Type of the resource ("calendar#aclRule"). */
		kind?: string | null;

		/**
		 * The role assigned to the scope. Possible values are:
		 * - "none" - Provides no access.
		 * - "freeBusyReader" - Provides read access to free/busy information.
		 * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
		 * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
		 * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
		 */
		role?: string | null;

		/** The extent to which calendar access is granted by this ACL rule. */
		scope?: AclRuleScope;
	}
	export interface AclRuleFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifier of the Access Control List (ACL) rule. See Sharing calendars. */
		id: FormControl<string | null | undefined>,

		/** Type of the resource ("calendar#aclRule"). */
		kind: FormControl<string | null | undefined>,

		/**
		 * The role assigned to the scope. Possible values are:
		 * - "none" - Provides no access.
		 * - "freeBusyReader" - Provides read access to free/busy information.
		 * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
		 * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
		 * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
		 */
		role: FormControl<string | null | undefined>,
	}
	export function CreateAclRuleFormGroup() {
		return new FormGroup<AclRuleFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AclRuleScope {

		/**
		 * The type of the scope. Possible values are:
		 * - "default" - The public scope. This is the default value.
		 * - "user" - Limits the scope to a single user.
		 * - "group" - Limits the scope to a group.
		 * - "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.
		 */
		type?: string | null;

		/** The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default". */
		value?: string | null;
	}
	export interface AclRuleScopeFormProperties {

		/**
		 * The type of the scope. Possible values are:
		 * - "default" - The public scope. This is the default value.
		 * - "user" - Limits the scope to a single user.
		 * - "group" - Limits the scope to a group.
		 * - "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.
		 */
		type: FormControl<string | null | undefined>,

		/** The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default". */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAclRuleScopeFormGroup() {
		return new FormGroup<AclRuleScopeFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Calendar {
		conferenceProperties?: ConferenceProperties;

		/** Description of the calendar. Optional. */
		description?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** Identifier of the calendar. To retrieve IDs call the calendarList.list() method. */
		id?: string | null;

		/** Type of the resource ("calendar#calendar"). */
		kind?: string | null;

		/** Geographic location of the calendar as free-form text. Optional. */
		location?: string | null;

		/** Title of the calendar. */
		summary?: string | null;

		/** The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional. */
		timeZone?: string | null;
	}
	export interface CalendarFormProperties {

		/** Description of the calendar. Optional. */
		description: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifier of the calendar. To retrieve IDs call the calendarList.list() method. */
		id: FormControl<string | null | undefined>,

		/** Type of the resource ("calendar#calendar"). */
		kind: FormControl<string | null | undefined>,

		/** Geographic location of the calendar as free-form text. Optional. */
		location: FormControl<string | null | undefined>,

		/** Title of the calendar. */
		summary: FormControl<string | null | undefined>,

		/** The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateCalendarFormGroup() {
		return new FormGroup<CalendarFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConferenceProperties {

		/**
		 * The types of conference solutions that are supported for this calendar.
		 * The possible values are:
		 * - "eventHangout"
		 * - "eventNamedHangout"
		 * - "hangoutsMeet"  Optional.
		 */
		allowedConferenceSolutionTypes?: Array<string>;
	}
	export interface ConferencePropertiesFormProperties {
	}
	export function CreateConferencePropertiesFormGroup() {
		return new FormGroup<ConferencePropertiesFormProperties>({
		});

	}

	export interface CalendarList {

		/** ETag of the collection. */
		etag?: string | null;

		/** Calendars that are present on the user's calendar list. */
		items?: Array<CalendarListEntry>;

		/** Type of the collection ("calendar#calendarList"). */
		kind?: string | null;

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken?: string | null;

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken?: string | null;
	}
	export interface CalendarListFormProperties {

		/** ETag of the collection. */
		etag: FormControl<string | null | undefined>,

		/** Type of the collection ("calendar#calendarList"). */
		kind: FormControl<string | null | undefined>,

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken: FormControl<string | null | undefined>,
	}
	export function CreateCalendarListFormGroup() {
		return new FormGroup<CalendarListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			nextSyncToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CalendarListEntry {

		/**
		 * The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
		 * - "freeBusyReader" - Provides read access to free/busy information.
		 * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
		 * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
		 * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
		 */
		accessRole?: string | null;

		/** The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional. */
		backgroundColor?: string | null;

		/** The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional. */
		colorId?: string | null;
		conferenceProperties?: ConferenceProperties;

		/** The default reminders that the authenticated user has for this calendar. */
		defaultReminders?: Array<EventReminder>;

		/** Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False. */
		deleted?: boolean | null;

		/** Description of the calendar. Optional. Read-only. */
		description?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional. */
		foregroundColor?: string | null;

		/** Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is true. */
		hidden?: boolean | null;

		/** Identifier of the calendar. */
		id?: string | null;

		/** Type of the resource ("calendar#calendarListEntry"). */
		kind?: string | null;

		/** Geographic location of the calendar as free-form text. Optional. Read-only. */
		location?: string | null;

		/** The notifications that the authenticated user is receiving for this calendar. */
		notificationSettings?: CalendarListEntryNotificationSettings;

		/** Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False. */
		primary?: boolean | null;

		/** Whether the calendar content shows up in the calendar UI. Optional. The default is False. */
		selected?: boolean | null;

		/** Title of the calendar. Read-only. */
		summary?: string | null;

		/** The summary that the authenticated user has set for this calendar. Optional. */
		summaryOverride?: string | null;

		/** The time zone of the calendar. Optional. Read-only. */
		timeZone?: string | null;
	}
	export interface CalendarListEntryFormProperties {

		/**
		 * The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
		 * - "freeBusyReader" - Provides read access to free/busy information.
		 * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
		 * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
		 * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
		 */
		accessRole: FormControl<string | null | undefined>,

		/** The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional. */
		backgroundColor: FormControl<string | null | undefined>,

		/** The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional. */
		colorId: FormControl<string | null | undefined>,

		/** Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False. */
		deleted: FormControl<boolean | null | undefined>,

		/** Description of the calendar. Optional. Read-only. */
		description: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional. */
		foregroundColor: FormControl<string | null | undefined>,

		/** Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is true. */
		hidden: FormControl<boolean | null | undefined>,

		/** Identifier of the calendar. */
		id: FormControl<string | null | undefined>,

		/** Type of the resource ("calendar#calendarListEntry"). */
		kind: FormControl<string | null | undefined>,

		/** Geographic location of the calendar as free-form text. Optional. Read-only. */
		location: FormControl<string | null | undefined>,

		/** Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False. */
		primary: FormControl<boolean | null | undefined>,

		/** Whether the calendar content shows up in the calendar UI. Optional. The default is False. */
		selected: FormControl<boolean | null | undefined>,

		/** Title of the calendar. Read-only. */
		summary: FormControl<string | null | undefined>,

		/** The summary that the authenticated user has set for this calendar. Optional. */
		summaryOverride: FormControl<string | null | undefined>,

		/** The time zone of the calendar. Optional. Read-only. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateCalendarListEntryFormGroup() {
		return new FormGroup<CalendarListEntryFormProperties>({
			accessRole: new FormControl<string | null | undefined>(undefined),
			backgroundColor: new FormControl<string | null | undefined>(undefined),
			colorId: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			foregroundColor: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			selected: new FormControl<boolean | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			summaryOverride: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventReminder {

		/**
		 * The method used by this reminder. Possible values are:
		 * - "email" - Reminders are sent via email.
		 * - "popup" - Reminders are sent via a UI popup.
		 * Required when adding a reminder.
		 */
		method?: string | null;

		/**
		 * Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
		 * Required when adding a reminder.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes?: number | null;
	}
	export interface EventReminderFormProperties {

		/**
		 * The method used by this reminder. Possible values are:
		 * - "email" - Reminders are sent via email.
		 * - "popup" - Reminders are sent via a UI popup.
		 * Required when adding a reminder.
		 */
		method: FormControl<string | null | undefined>,

		/**
		 * Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
		 * Required when adding a reminder.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes: FormControl<number | null | undefined>,
	}
	export function CreateEventReminderFormGroup() {
		return new FormGroup<EventReminderFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CalendarListEntryNotificationSettings {

		/** The list of notifications set for this calendar. */
		notifications?: Array<CalendarNotification>;
	}
	export interface CalendarListEntryNotificationSettingsFormProperties {
	}
	export function CreateCalendarListEntryNotificationSettingsFormGroup() {
		return new FormGroup<CalendarListEntryNotificationSettingsFormProperties>({
		});

	}

	export interface CalendarNotification {

		/**
		 * The method used to deliver the notification. The possible value is:
		 * - "email" - Notifications are sent via email.
		 * Required when adding a notification.
		 */
		method?: string | null;

		/**
		 * The type of notification. Possible values are:
		 * - "eventCreation" - Notification sent when a new event is put on the calendar.
		 * - "eventChange" - Notification sent when an event is changed.
		 * - "eventCancellation" - Notification sent when an event is cancelled.
		 * - "eventResponse" - Notification sent when an attendee responds to the event invitation.
		 * - "agenda" - An agenda with the events of the day (sent out in the morning).
		 * Required when adding a notification.
		 */
		type?: string | null;
	}
	export interface CalendarNotificationFormProperties {

		/**
		 * The method used to deliver the notification. The possible value is:
		 * - "email" - Notifications are sent via email.
		 * Required when adding a notification.
		 */
		method: FormControl<string | null | undefined>,

		/**
		 * The type of notification. Possible values are:
		 * - "eventCreation" - Notification sent when a new event is put on the calendar.
		 * - "eventChange" - Notification sent when an event is changed.
		 * - "eventCancellation" - Notification sent when an event is cancelled.
		 * - "eventResponse" - Notification sent when an attendee responds to the event invitation.
		 * - "agenda" - An agenda with the events of the day (sent out in the morning).
		 * Required when adding a notification.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCalendarNotificationFormGroup() {
		return new FormGroup<CalendarNotificationFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Channel {

		/** The address where notifications are delivered for this channel. */
		address?: string | null;

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration?: string | null;

		/** A UUID or similar unique string that identifies this channel. */
		id?: string | null;

		/** Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel". */
		kind?: string | null;

		/** Additional parameters controlling delivery channel behavior. Optional. */
		params?: {[id: string]: string };

		/** A Boolean value to indicate whether payload is wanted. Optional. */
		payload?: boolean | null;

		/** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
		resourceId?: string | null;

		/** A version-specific identifier for the watched resource. */
		resourceUri?: string | null;

		/** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
		token?: string | null;

		/** The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook"). Both values refer to a channel where Http requests are used to deliver messages. */
		type?: string | null;
	}
	export interface ChannelFormProperties {

		/** The address where notifications are delivered for this channel. */
		address: FormControl<string | null | undefined>,

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration: FormControl<string | null | undefined>,

		/** A UUID or similar unique string that identifies this channel. */
		id: FormControl<string | null | undefined>,

		/** Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel". */
		kind: FormControl<string | null | undefined>,

		/** Additional parameters controlling delivery channel behavior. Optional. */
		params: FormControl<{[id: string]: string } | null | undefined>,

		/** A Boolean value to indicate whether payload is wanted. Optional. */
		payload: FormControl<boolean | null | undefined>,

		/** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
		resourceId: FormControl<string | null | undefined>,

		/** A version-specific identifier for the watched resource. */
		resourceUri: FormControl<string | null | undefined>,

		/** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
		token: FormControl<string | null | undefined>,

		/** The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook"). Both values refer to a channel where Http requests are used to deliver messages. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			payload: new FormControl<boolean | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ColorDefinition {

		/** The background color associated with this color definition. */
		background?: string | null;

		/** The foreground color that can be used to write on top of a background with 'background' color. */
		foreground?: string | null;
	}
	export interface ColorDefinitionFormProperties {

		/** The background color associated with this color definition. */
		background: FormControl<string | null | undefined>,

		/** The foreground color that can be used to write on top of a background with 'background' color. */
		foreground: FormControl<string | null | undefined>,
	}
	export function CreateColorDefinitionFormGroup() {
		return new FormGroup<ColorDefinitionFormProperties>({
			background: new FormControl<string | null | undefined>(undefined),
			foreground: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Colors {

		/** A global palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to one of these color IDs in its colorId field. Read-only. */
		calendar?: {[id: string]: ColorDefinition };

		/** A global palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of these color IDs in its colorId field. Read-only. */
		event?: {[id: string]: ColorDefinition };

		/** Type of the resource ("calendar#colors"). */
		kind?: string | null;

		/** Last modification time of the color palette (as a RFC3339 timestamp). Read-only. */
		updated?: Date | null;
	}
	export interface ColorsFormProperties {

		/** A global palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to one of these color IDs in its colorId field. Read-only. */
		calendar: FormControl<{[id: string]: ColorDefinition } | null | undefined>,

		/** A global palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of these color IDs in its colorId field. Read-only. */
		event: FormControl<{[id: string]: ColorDefinition } | null | undefined>,

		/** Type of the resource ("calendar#colors"). */
		kind: FormControl<string | null | undefined>,

		/** Last modification time of the color palette (as a RFC3339 timestamp). Read-only. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateColorsFormGroup() {
		return new FormGroup<ColorsFormProperties>({
			calendar: new FormControl<{[id: string]: ColorDefinition } | null | undefined>(undefined),
			event: new FormControl<{[id: string]: ColorDefinition } | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ConferenceData {

		/**
		 * The ID of the conference.
		 * Can be used by developers to keep track of conferences, should not be displayed to users.
		 * The ID value is formed differently for each conference solution type:
		 * - eventHangout: ID is not set. (This conference type is deprecated.)
		 * - eventNamedHangout: ID is the name of the Hangout. (This conference type is deprecated.)
		 * - hangoutsMeet: ID is the 10-letter meeting code, for example aaa-bbbb-ccc.
		 * - addOn: ID is defined by the third-party provider.  Optional.
		 */
		conferenceId?: string | null;
		conferenceSolution?: ConferenceSolution;
		createRequest?: CreateConferenceRequest;

		/**
		 * Information about individual conference entry points, such as URLs or phone numbers.
		 * All of them must belong to the same conference.
		 * Either conferenceSolution and at least one entryPoint, or createRequest is required.
		 */
		entryPoints?: Array<EntryPoint>;

		/** Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional. */
		notes?: string | null;
		parameters?: ConferenceParameters;

		/**
		 * The signature of the conference data.
		 * Generated on server side.
		 * Unset for a conference with a failed create request.
		 * Optional for a conference with a pending create request.
		 */
		signature?: string | null;
	}
	export interface ConferenceDataFormProperties {

		/**
		 * The ID of the conference.
		 * Can be used by developers to keep track of conferences, should not be displayed to users.
		 * The ID value is formed differently for each conference solution type:
		 * - eventHangout: ID is not set. (This conference type is deprecated.)
		 * - eventNamedHangout: ID is the name of the Hangout. (This conference type is deprecated.)
		 * - hangoutsMeet: ID is the 10-letter meeting code, for example aaa-bbbb-ccc.
		 * - addOn: ID is defined by the third-party provider.  Optional.
		 */
		conferenceId: FormControl<string | null | undefined>,

		/** Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional. */
		notes: FormControl<string | null | undefined>,

		/**
		 * The signature of the conference data.
		 * Generated on server side.
		 * Unset for a conference with a failed create request.
		 * Optional for a conference with a pending create request.
		 */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateConferenceDataFormGroup() {
		return new FormGroup<ConferenceDataFormProperties>({
			conferenceId: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConferenceSolution {

		/** The user-visible icon for this solution. */
		iconUri?: string | null;
		key?: ConferenceSolutionKey;

		/** The user-visible name of this solution. Not localized. */
		name?: string | null;
	}
	export interface ConferenceSolutionFormProperties {

		/** The user-visible icon for this solution. */
		iconUri: FormControl<string | null | undefined>,

		/** The user-visible name of this solution. Not localized. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConferenceSolutionFormGroup() {
		return new FormGroup<ConferenceSolutionFormProperties>({
			iconUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConferenceSolutionKey {

		/**
		 * The conference solution type.
		 * If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications.
		 * The possible values are:
		 * - "eventHangout" for Hangouts for consumers (deprecated; existing events may show this conference solution type but new conferences cannot be created)
		 * - "eventNamedHangout" for classic Hangouts for Google Workspace users (deprecated; existing events may show this conference solution type but new conferences cannot be created)
		 * - "hangoutsMeet" for Google Meet (http://meet.google.com)
		 * - "addOn" for 3P conference providers
		 */
		type?: string | null;
	}
	export interface ConferenceSolutionKeyFormProperties {

		/**
		 * The conference solution type.
		 * If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications.
		 * The possible values are:
		 * - "eventHangout" for Hangouts for consumers (deprecated; existing events may show this conference solution type but new conferences cannot be created)
		 * - "eventNamedHangout" for classic Hangouts for Google Workspace users (deprecated; existing events may show this conference solution type but new conferences cannot be created)
		 * - "hangoutsMeet" for Google Meet (http://meet.google.com)
		 * - "addOn" for 3P conference providers
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateConferenceSolutionKeyFormGroup() {
		return new FormGroup<ConferenceSolutionKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConferenceRequest {
		conferenceSolutionKey?: ConferenceSolutionKey;

		/**
		 * The client-generated unique ID for this request.
		 * Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored.
		 */
		requestId?: string | null;
		status?: ConferenceRequestStatus;
	}
	export interface CreateConferenceRequestFormProperties {

		/**
		 * The client-generated unique ID for this request.
		 * Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored.
		 */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateConferenceRequestFormGroup() {
		return new FormGroup<CreateConferenceRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConferenceRequestStatus {

		/**
		 * The current status of the conference create request. Read-only.
		 * The possible values are:
		 * - "pending": the conference create request is still being processed.
		 * - "success": the conference create request succeeded, the entry points are populated.
		 * - "failure": the conference create request failed, there are no entry points.
		 */
		statusCode?: string | null;
	}
	export interface ConferenceRequestStatusFormProperties {

		/**
		 * The current status of the conference create request. Read-only.
		 * The possible values are:
		 * - "pending": the conference create request is still being processed.
		 * - "success": the conference create request succeeded, the entry points are populated.
		 * - "failure": the conference create request failed, there are no entry points.
		 */
		statusCode: FormControl<string | null | undefined>,
	}
	export function CreateConferenceRequestStatusFormGroup() {
		return new FormGroup<ConferenceRequestStatusFormProperties>({
			statusCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntryPoint {

		/**
		 * The access code to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		accessCode?: string | null;

		/** Features of the entry point, such as being toll or toll-free. One entry point can have multiple features. However, toll and toll-free cannot be both set on the same entry point. */
		entryPointFeatures?: Array<string>;

		/**
		 * The type of the conference entry point.
		 * Possible values are:
		 * - "video" - joining a conference over HTTP. A conference can have zero or one video entry point.
		 * - "phone" - joining a conference by dialing a phone number. A conference can have zero or more phone entry points.
		 * - "sip" - joining a conference over SIP. A conference can have zero or one sip entry point.
		 * - "more" - further conference joining instructions, for example additional phone numbers. A conference can have zero or one more entry point. A conference with only a more entry point is not a valid conference.
		 */
		entryPointType?: string | null;

		/**
		 * The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.
		 * Examples:
		 * - for video: meet.google.com/aaa-bbbb-ccc
		 * - for phone: +1 123 268 2601
		 * - for sip: 12345678@altostrat.com
		 * - for more: should not be filled
		 * Optional.
		 */
		label?: string | null;

		/**
		 * The meeting code to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		meetingCode?: string | null;

		/**
		 * The passcode to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 */
		passcode?: string | null;

		/**
		 * The password to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		password?: string | null;

		/**
		 * The PIN to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		pin?: string | null;

		/**
		 * The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.
		 * Calendar backend will populate this field only for EntryPointType.PHONE.
		 */
		regionCode?: string | null;

		/**
		 * The URI of the entry point. The maximum length is 1300 characters.
		 * Format:
		 * - for video, http: or https: schema is required.
		 * - for phone, tel: schema is required. The URI should include the entire dial sequence (e.g., tel:+12345678900,,,123456789;1234).
		 * - for sip, sip: schema is required, e.g., sip:12345678@myprovider.com.
		 * - for more, http: or https: schema is required.
		 */
		uri?: string | null;
	}
	export interface EntryPointFormProperties {

		/**
		 * The access code to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		accessCode: FormControl<string | null | undefined>,

		/**
		 * The type of the conference entry point.
		 * Possible values are:
		 * - "video" - joining a conference over HTTP. A conference can have zero or one video entry point.
		 * - "phone" - joining a conference by dialing a phone number. A conference can have zero or more phone entry points.
		 * - "sip" - joining a conference over SIP. A conference can have zero or one sip entry point.
		 * - "more" - further conference joining instructions, for example additional phone numbers. A conference can have zero or one more entry point. A conference with only a more entry point is not a valid conference.
		 */
		entryPointType: FormControl<string | null | undefined>,

		/**
		 * The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.
		 * Examples:
		 * - for video: meet.google.com/aaa-bbbb-ccc
		 * - for phone: +1 123 268 2601
		 * - for sip: 12345678@altostrat.com
		 * - for more: should not be filled
		 * Optional.
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The meeting code to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		meetingCode: FormControl<string | null | undefined>,

		/**
		 * The passcode to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 */
		passcode: FormControl<string | null | undefined>,

		/**
		 * The password to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * The PIN to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		pin: FormControl<string | null | undefined>,

		/**
		 * The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.
		 * Calendar backend will populate this field only for EntryPointType.PHONE.
		 */
		regionCode: FormControl<string | null | undefined>,

		/**
		 * The URI of the entry point. The maximum length is 1300 characters.
		 * Format:
		 * - for video, http: or https: schema is required.
		 * - for phone, tel: schema is required. The URI should include the entire dial sequence (e.g., tel:+12345678900,,,123456789;1234).
		 * - for sip, sip: schema is required, e.g., sip:12345678@myprovider.com.
		 * - for more, http: or https: schema is required.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateEntryPointFormGroup() {
		return new FormGroup<EntryPointFormProperties>({
			accessCode: new FormControl<string | null | undefined>(undefined),
			entryPointType: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			meetingCode: new FormControl<string | null | undefined>(undefined),
			passcode: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			pin: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConferenceParameters {
		addOnParameters?: ConferenceParametersAddOnParameters;
	}
	export interface ConferenceParametersFormProperties {
	}
	export function CreateConferenceParametersFormGroup() {
		return new FormGroup<ConferenceParametersFormProperties>({
		});

	}

	export interface ConferenceParametersAddOnParameters {
		parameters?: {[id: string]: string };
	}
	export interface ConferenceParametersAddOnParametersFormProperties {
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateConferenceParametersAddOnParametersFormGroup() {
		return new FormGroup<ConferenceParametersAddOnParametersFormProperties>({
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface Error {

		/** Domain, or broad category, of the error. */
		domain?: string | null;

		/**
		 * Specific reason for the error. Some of the possible values are:
		 * - "groupTooBig" - The group of users requested is too large for a single query.
		 * - "tooManyCalendarsRequested" - The number of calendars requested is too large for a single query.
		 * - "notFound" - The requested resource was not found.
		 * - "internalError" - The API service has encountered an internal error.  Additional error types may be added in the future, so clients should gracefully handle additional error statuses not included in this list.
		 */
		reason?: string | null;
	}
	export interface ErrorFormProperties {

		/** Domain, or broad category, of the error. */
		domain: FormControl<string | null | undefined>,

		/**
		 * Specific reason for the error. Some of the possible values are:
		 * - "groupTooBig" - The group of users requested is too large for a single query.
		 * - "tooManyCalendarsRequested" - The number of calendars requested is too large for a single query.
		 * - "notFound" - The requested resource was not found.
		 * - "internalError" - The API service has encountered an internal error.  Additional error types may be added in the future, so clients should gracefully handle additional error statuses not included in this list.
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Event {

		/** Whether anyone can invite themselves to the event (deprecated). Optional. The default is False. */
		anyoneCanAddSelf?: boolean | null;

		/**
		 * File attachments for the event.
		 * In order to modify attachments the supportsAttachments request parameter should be set to true.
		 * There can be at most 25 attachments per event,
		 */
		attachments?: Array<EventAttachment>;

		/** The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users. Service accounts need to use domain-wide delegation of authority to populate the attendee list. */
		attendees?: Array<EventAttendee>;

		/** Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False. */
		attendeesOmitted?: boolean | null;

		/** The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional. */
		colorId?: string | null;
		conferenceData?: ConferenceData;

		/** Creation time of the event (as a RFC3339 timestamp). Read-only. */
		created?: Date | null;

		/** The creator of the event. Read-only. */
		creator?: EventCreator;

		/** Description of the event. Can contain HTML. Optional. */
		description?: string | null;
		end?: EventDateTime;

		/** Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False. */
		endTimeUnspecified?: boolean | null;

		/** ETag of the resource. */
		etag?: string | null;

		/**
		 * Specific type of the event. This cannot be modified after the event is created. Possible values are:
		 * - "default" - A regular event or not further specified.
		 * - "outOfOffice" - An out-of-office event.
		 * - "focusTime" - A focus-time event.
		 * - "workingLocation" - A working location event.  Currently, only "default " and "workingLocation" events can be created using the API. Extended support for other event types will be made available in later releases.
		 */
		eventType?: string | null;

		/** Extended properties of the event. */
		extendedProperties?: EventExtendedProperties;
		focusTimeProperties?: EventFocusTimeProperties;

		/** A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata. */
		gadget?: EventGadget;

		/** Whether attendees other than the organizer can invite others to the event. Optional. The default is True. */
		guestsCanInviteOthers?: boolean | null;

		/** Whether attendees other than the organizer can modify the event. Optional. The default is False. */
		guestsCanModify?: boolean | null;

		/** Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True. */
		guestsCanSeeOtherGuests?: boolean | null;

		/** An absolute link to the Google Hangout associated with this event. Read-only. */
		hangoutLink?: string | null;

		/** An absolute link to this event in the Google Calendar Web UI. Read-only. */
		htmlLink?: string | null;

		/**
		 * Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
		 * Note that the iCalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same iCalUIDs. To retrieve an event using its iCalUID, call the events.list method using the iCalUID parameter. To retrieve an event using its id, call the events.get method.
		 */
		iCalUID?: string | null;

		/**
		 * Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
		 * - characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
		 * - the length of the ID must be between 5 and 1024 characters
		 * - the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
		 * If you do not specify an ID, it will be automatically generated by the server.
		 * Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.
		 */
		id?: string | null;

		/** Type of the resource ("calendar#event"). */
		kind?: string | null;

		/** Geographic location of the event as free-form text. Optional. */
		location?: string | null;

		/** Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only. */
		locked?: boolean | null;

		/** The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event. */
		organizer?: EventOrganizer;
		originalStartTime?: EventDateTime;
		outOfOfficeProperties?: EventOutOfOfficeProperties;

		/** If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False. */
		privateCopy?: boolean | null;

		/** List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events. */
		recurrence?: Array<string>;

		/** For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable. */
		recurringEventId?: string | null;

		/** Information about the event's reminders for the authenticated user. */
		reminders?: EventReminders;

		/**
		 * Sequence number as per iCalendar.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sequence?: number | null;

		/** Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event. */
		source?: EventSource;
		start?: EventDateTime;

		/**
		 * Status of the event. Optional. Possible values are:
		 * - "confirmed" - The event is confirmed. This is the default status.
		 * - "tentative" - The event is tentatively confirmed.
		 * - "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
		 * A cancelled status represents two different states depending on the event type:
		 * - Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
		 * Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
		 * - All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
		 * Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
		 * If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.
		 */
		status?: string | null;

		/** Title of the event. */
		summary?: string | null;

		/**
		 * Whether the event blocks time on the calendar. Optional. Possible values are:
		 * - "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
		 * - "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.
		 */
		transparency?: string | null;

		/** Last modification time of the event (as a RFC3339 timestamp). Read-only. */
		updated?: Date | null;

		/**
		 * Visibility of the event. Optional. Possible values are:
		 * - "default" - Uses the default visibility for events on the calendar. This is the default value.
		 * - "public" - The event is public and event details are visible to all readers of the calendar.
		 * - "private" - The event is private and only event attendees may view event details.
		 * - "confidential" - The event is private. This value is provided for compatibility reasons.
		 */
		visibility?: string | null;
		workingLocationProperties?: EventWorkingLocationProperties;
	}
	export interface EventFormProperties {

		/** Whether anyone can invite themselves to the event (deprecated). Optional. The default is False. */
		anyoneCanAddSelf: FormControl<boolean | null | undefined>,

		/** Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False. */
		attendeesOmitted: FormControl<boolean | null | undefined>,

		/** The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional. */
		colorId: FormControl<string | null | undefined>,

		/** Creation time of the event (as a RFC3339 timestamp). Read-only. */
		created: FormControl<Date | null | undefined>,

		/** Description of the event. Can contain HTML. Optional. */
		description: FormControl<string | null | undefined>,

		/** Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False. */
		endTimeUnspecified: FormControl<boolean | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/**
		 * Specific type of the event. This cannot be modified after the event is created. Possible values are:
		 * - "default" - A regular event or not further specified.
		 * - "outOfOffice" - An out-of-office event.
		 * - "focusTime" - A focus-time event.
		 * - "workingLocation" - A working location event.  Currently, only "default " and "workingLocation" events can be created using the API. Extended support for other event types will be made available in later releases.
		 */
		eventType: FormControl<string | null | undefined>,

		/** Whether attendees other than the organizer can invite others to the event. Optional. The default is True. */
		guestsCanInviteOthers: FormControl<boolean | null | undefined>,

		/** Whether attendees other than the organizer can modify the event. Optional. The default is False. */
		guestsCanModify: FormControl<boolean | null | undefined>,

		/** Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True. */
		guestsCanSeeOtherGuests: FormControl<boolean | null | undefined>,

		/** An absolute link to the Google Hangout associated with this event. Read-only. */
		hangoutLink: FormControl<string | null | undefined>,

		/** An absolute link to this event in the Google Calendar Web UI. Read-only. */
		htmlLink: FormControl<string | null | undefined>,

		/**
		 * Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
		 * Note that the iCalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same iCalUIDs. To retrieve an event using its iCalUID, call the events.list method using the iCalUID parameter. To retrieve an event using its id, call the events.get method.
		 */
		iCalUID: FormControl<string | null | undefined>,

		/**
		 * Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
		 * - characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
		 * - the length of the ID must be between 5 and 1024 characters
		 * - the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
		 * If you do not specify an ID, it will be automatically generated by the server.
		 * Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.
		 */
		id: FormControl<string | null | undefined>,

		/** Type of the resource ("calendar#event"). */
		kind: FormControl<string | null | undefined>,

		/** Geographic location of the event as free-form text. Optional. */
		location: FormControl<string | null | undefined>,

		/** Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only. */
		locked: FormControl<boolean | null | undefined>,

		/** If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False. */
		privateCopy: FormControl<boolean | null | undefined>,

		/** For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable. */
		recurringEventId: FormControl<string | null | undefined>,

		/**
		 * Sequence number as per iCalendar.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sequence: FormControl<number | null | undefined>,

		/**
		 * Status of the event. Optional. Possible values are:
		 * - "confirmed" - The event is confirmed. This is the default status.
		 * - "tentative" - The event is tentatively confirmed.
		 * - "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
		 * A cancelled status represents two different states depending on the event type:
		 * - Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
		 * Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
		 * - All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
		 * Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
		 * If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.
		 */
		status: FormControl<string | null | undefined>,

		/** Title of the event. */
		summary: FormControl<string | null | undefined>,

		/**
		 * Whether the event blocks time on the calendar. Optional. Possible values are:
		 * - "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
		 * - "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.
		 */
		transparency: FormControl<string | null | undefined>,

		/** Last modification time of the event (as a RFC3339 timestamp). Read-only. */
		updated: FormControl<Date | null | undefined>,

		/**
		 * Visibility of the event. Optional. Possible values are:
		 * - "default" - Uses the default visibility for events on the calendar. This is the default value.
		 * - "public" - The event is public and event details are visible to all readers of the calendar.
		 * - "private" - The event is private and only event attendees may view event details.
		 * - "confidential" - The event is private. This value is provided for compatibility reasons.
		 */
		visibility: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			anyoneCanAddSelf: new FormControl<boolean | null | undefined>(undefined),
			attendeesOmitted: new FormControl<boolean | null | undefined>(undefined),
			colorId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endTimeUnspecified: new FormControl<boolean | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
			guestsCanInviteOthers: new FormControl<boolean | null | undefined>(undefined),
			guestsCanModify: new FormControl<boolean | null | undefined>(undefined),
			guestsCanSeeOtherGuests: new FormControl<boolean | null | undefined>(undefined),
			hangoutLink: new FormControl<string | null | undefined>(undefined),
			htmlLink: new FormControl<string | null | undefined>(undefined),
			iCalUID: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			locked: new FormControl<boolean | null | undefined>(undefined),
			privateCopy: new FormControl<boolean | null | undefined>(undefined),
			recurringEventId: new FormControl<string | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			transparency: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			visibility: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventAttachment {

		/**
		 * ID of the attached file. Read-only.
		 * For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.
		 */
		fileId?: string | null;

		/**
		 * URL link to the attachment.
		 * For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API.
		 * Required when adding an attachment.
		 */
		fileUrl?: string | null;

		/** URL link to the attachment's icon. This field can only be modified for custom third-party attachments. */
		iconLink?: string | null;

		/** Internet media type (MIME type) of the attachment. */
		mimeType?: string | null;

		/** Attachment title. */
		title?: string | null;
	}
	export interface EventAttachmentFormProperties {

		/**
		 * ID of the attached file. Read-only.
		 * For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.
		 */
		fileId: FormControl<string | null | undefined>,

		/**
		 * URL link to the attachment.
		 * For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API.
		 * Required when adding an attachment.
		 */
		fileUrl: FormControl<string | null | undefined>,

		/** URL link to the attachment's icon. This field can only be modified for custom third-party attachments. */
		iconLink: FormControl<string | null | undefined>,

		/** Internet media type (MIME type) of the attachment. */
		mimeType: FormControl<string | null | undefined>,

		/** Attachment title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateEventAttachmentFormGroup() {
		return new FormGroup<EventAttachmentFormProperties>({
			fileId: new FormControl<string | null | undefined>(undefined),
			fileUrl: new FormControl<string | null | undefined>(undefined),
			iconLink: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventAttendee {

		/**
		 * Number of additional guests. Optional. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		additionalGuests?: number | null;

		/** The attendee's response comment. Optional. */
		comment?: string | null;

		/** The attendee's name, if available. Optional. */
		displayName?: string | null;

		/**
		 * The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.
		 * Required when adding an attendee.
		 */
		email?: string | null;

		/** The attendee's Profile ID, if available. */
		id?: string | null;

		/** Whether this is an optional attendee. Optional. The default is False. */
		optional?: boolean | null;

		/** Whether the attendee is the organizer of the event. Read-only. The default is False. */
		organizer?: boolean | null;

		/** Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False. */
		resource?: boolean | null;

		/**
		 * The attendee's response status. Possible values are:
		 * - "needsAction" - The attendee has not responded to the invitation (recommended for new events).
		 * - "declined" - The attendee has declined the invitation.
		 * - "tentative" - The attendee has tentatively accepted the invitation.
		 * - "accepted" - The attendee has accepted the invitation.  Warning: If you add an event using the values declined, tentative, or accepted, attendees with the "Add invitations to my calendar" setting set to "When I respond to invitation in email" won't see an event on their calendar unless they choose to change their invitation response in the event invitation email.
		 */
		responseStatus?: string | null;

		/** Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False. */
		self?: boolean | null;
	}
	export interface EventAttendeeFormProperties {

		/**
		 * Number of additional guests. Optional. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		additionalGuests: FormControl<number | null | undefined>,

		/** The attendee's response comment. Optional. */
		comment: FormControl<string | null | undefined>,

		/** The attendee's name, if available. Optional. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.
		 * Required when adding an attendee.
		 */
		email: FormControl<string | null | undefined>,

		/** The attendee's Profile ID, if available. */
		id: FormControl<string | null | undefined>,

		/** Whether this is an optional attendee. Optional. The default is False. */
		optional: FormControl<boolean | null | undefined>,

		/** Whether the attendee is the organizer of the event. Read-only. The default is False. */
		organizer: FormControl<boolean | null | undefined>,

		/** Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False. */
		resource: FormControl<boolean | null | undefined>,

		/**
		 * The attendee's response status. Possible values are:
		 * - "needsAction" - The attendee has not responded to the invitation (recommended for new events).
		 * - "declined" - The attendee has declined the invitation.
		 * - "tentative" - The attendee has tentatively accepted the invitation.
		 * - "accepted" - The attendee has accepted the invitation.  Warning: If you add an event using the values declined, tentative, or accepted, attendees with the "Add invitations to my calendar" setting set to "When I respond to invitation in email" won't see an event on their calendar unless they choose to change their invitation response in the event invitation email.
		 */
		responseStatus: FormControl<string | null | undefined>,

		/** Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False. */
		self: FormControl<boolean | null | undefined>,
	}
	export function CreateEventAttendeeFormGroup() {
		return new FormGroup<EventAttendeeFormProperties>({
			additionalGuests: new FormControl<number | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
			organizer: new FormControl<boolean | null | undefined>(undefined),
			resource: new FormControl<boolean | null | undefined>(undefined),
			responseStatus: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EventCreator {

		/** The creator's name, if available. */
		displayName?: string | null;

		/** The creator's email address, if available. */
		email?: string | null;

		/** The creator's Profile ID, if available. */
		id?: string | null;

		/** Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False. */
		self?: boolean | null;
	}
	export interface EventCreatorFormProperties {

		/** The creator's name, if available. */
		displayName: FormControl<string | null | undefined>,

		/** The creator's email address, if available. */
		email: FormControl<string | null | undefined>,

		/** The creator's Profile ID, if available. */
		id: FormControl<string | null | undefined>,

		/** Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False. */
		self: FormControl<boolean | null | undefined>,
	}
	export function CreateEventCreatorFormGroup() {
		return new FormGroup<EventCreatorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EventDateTime {

		/**
		 * The date, in the format "yyyy-mm-dd", if this is an all-day event.
		 * Type: DateOnly
		 */
		date?: Date | null;

		/** The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone. */
		dateTime?: Date | null;

		/** The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end. */
		timeZone?: string | null;
	}
	export interface EventDateTimeFormProperties {

		/**
		 * The date, in the format "yyyy-mm-dd", if this is an all-day event.
		 * Type: DateOnly
		 */
		date: FormControl<Date | null | undefined>,

		/** The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone. */
		dateTime: FormControl<Date | null | undefined>,

		/** The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateEventDateTimeFormGroup() {
		return new FormGroup<EventDateTimeFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			dateTime: new FormControl<Date | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventExtendedProperties {

		/** Properties that are private to the copy of the event that appears on this calendar. */
		private?: {[id: string]: string };

		/** Properties that are shared between copies of the event on other attendees' calendars. */
		shared?: {[id: string]: string };
	}
	export interface EventExtendedPropertiesFormProperties {

		/** Properties that are private to the copy of the event that appears on this calendar. */
		private: FormControl<{[id: string]: string } | null | undefined>,

		/** Properties that are shared between copies of the event on other attendees' calendars. */
		shared: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateEventExtendedPropertiesFormGroup() {
		return new FormGroup<EventExtendedPropertiesFormProperties>({
			private: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			shared: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface EventFocusTimeProperties {

		/** Whether to decline meeting invitations which overlap Focus Time events. Valid values are declineNone, meaning that no meeting invitations are declined; declineAllConflictingInvitations, meaning that all conflicting meeting invitations that conflict with the event are declined; and declineOnlyNewConflictingInvitations, meaning that only new conflicting meeting invitations which arrive while the Focus Time event is present are to be declined. */
		autoDeclineMode?: string | null;

		/** The status to mark the user in Chat and related products. This can be available or doNotDisturb. */
		chatStatus?: string | null;

		/** Response message to set if an existing event or new invitation is automatically declined by Calendar. */
		declineMessage?: string | null;
	}
	export interface EventFocusTimePropertiesFormProperties {

		/** Whether to decline meeting invitations which overlap Focus Time events. Valid values are declineNone, meaning that no meeting invitations are declined; declineAllConflictingInvitations, meaning that all conflicting meeting invitations that conflict with the event are declined; and declineOnlyNewConflictingInvitations, meaning that only new conflicting meeting invitations which arrive while the Focus Time event is present are to be declined. */
		autoDeclineMode: FormControl<string | null | undefined>,

		/** The status to mark the user in Chat and related products. This can be available or doNotDisturb. */
		chatStatus: FormControl<string | null | undefined>,

		/** Response message to set if an existing event or new invitation is automatically declined by Calendar. */
		declineMessage: FormControl<string | null | undefined>,
	}
	export function CreateEventFocusTimePropertiesFormGroup() {
		return new FormGroup<EventFocusTimePropertiesFormProperties>({
			autoDeclineMode: new FormControl<string | null | undefined>(undefined),
			chatStatus: new FormControl<string | null | undefined>(undefined),
			declineMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventGadget {

		/**
		 * The gadget's display mode. Deprecated. Possible values are:
		 * - "icon" - The gadget displays next to the event's title in the calendar view.
		 * - "chip" - The gadget displays when the event is clicked.
		 */
		display?: string | null;

		/**
		 * The gadget's height in pixels. The height must be an integer greater than 0. Optional. Deprecated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** The gadget's icon URL. The URL scheme must be HTTPS. Deprecated. */
		iconLink?: string | null;

		/** The gadget's URL. The URL scheme must be HTTPS. Deprecated. */
		link?: string | null;

		/** Preferences. */
		preferences?: {[id: string]: string };

		/** The gadget's title. Deprecated. */
		title?: string | null;

		/** The gadget's type. Deprecated. */
		type?: string | null;

		/**
		 * The gadget's width in pixels. The width must be an integer greater than 0. Optional. Deprecated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface EventGadgetFormProperties {

		/**
		 * The gadget's display mode. Deprecated. Possible values are:
		 * - "icon" - The gadget displays next to the event's title in the calendar view.
		 * - "chip" - The gadget displays when the event is clicked.
		 */
		display: FormControl<string | null | undefined>,

		/**
		 * The gadget's height in pixels. The height must be an integer greater than 0. Optional. Deprecated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** The gadget's icon URL. The URL scheme must be HTTPS. Deprecated. */
		iconLink: FormControl<string | null | undefined>,

		/** The gadget's URL. The URL scheme must be HTTPS. Deprecated. */
		link: FormControl<string | null | undefined>,

		/** Preferences. */
		preferences: FormControl<{[id: string]: string } | null | undefined>,

		/** The gadget's title. Deprecated. */
		title: FormControl<string | null | undefined>,

		/** The gadget's type. Deprecated. */
		type: FormControl<string | null | undefined>,

		/**
		 * The gadget's width in pixels. The width must be an integer greater than 0. Optional. Deprecated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateEventGadgetFormGroup() {
		return new FormGroup<EventGadgetFormProperties>({
			display: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			iconLink: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			preferences: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EventOrganizer {

		/** The organizer's name, if available. */
		displayName?: string | null;

		/** The organizer's email address, if available. It must be a valid email address as per RFC5322. */
		email?: string | null;

		/** The organizer's Profile ID, if available. */
		id?: string | null;

		/** Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False. */
		self?: boolean | null;
	}
	export interface EventOrganizerFormProperties {

		/** The organizer's name, if available. */
		displayName: FormControl<string | null | undefined>,

		/** The organizer's email address, if available. It must be a valid email address as per RFC5322. */
		email: FormControl<string | null | undefined>,

		/** The organizer's Profile ID, if available. */
		id: FormControl<string | null | undefined>,

		/** Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False. */
		self: FormControl<boolean | null | undefined>,
	}
	export function CreateEventOrganizerFormGroup() {
		return new FormGroup<EventOrganizerFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EventOutOfOfficeProperties {

		/** Whether to decline meeting invitations which overlap Out of office events. Valid values are declineNone, meaning that no meeting invitations are declined; declineAllConflictingInvitations, meaning that all conflicting meeting invitations that conflict with the event are declined; and declineOnlyNewConflictingInvitations, meaning that only new conflicting meeting invitations which arrive while the Out of office event is present are to be declined. */
		autoDeclineMode?: string | null;

		/** Response message to set if an existing event or new invitation is automatically declined by Calendar. */
		declineMessage?: string | null;
	}
	export interface EventOutOfOfficePropertiesFormProperties {

		/** Whether to decline meeting invitations which overlap Out of office events. Valid values are declineNone, meaning that no meeting invitations are declined; declineAllConflictingInvitations, meaning that all conflicting meeting invitations that conflict with the event are declined; and declineOnlyNewConflictingInvitations, meaning that only new conflicting meeting invitations which arrive while the Out of office event is present are to be declined. */
		autoDeclineMode: FormControl<string | null | undefined>,

		/** Response message to set if an existing event or new invitation is automatically declined by Calendar. */
		declineMessage: FormControl<string | null | undefined>,
	}
	export function CreateEventOutOfOfficePropertiesFormGroup() {
		return new FormGroup<EventOutOfOfficePropertiesFormProperties>({
			autoDeclineMode: new FormControl<string | null | undefined>(undefined),
			declineMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventReminders {

		/** If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5. */
		overrides?: Array<EventReminder>;

		/** Whether the default reminders of the calendar apply to the event. */
		useDefault?: boolean | null;
	}
	export interface EventRemindersFormProperties {

		/** Whether the default reminders of the calendar apply to the event. */
		useDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateEventRemindersFormGroup() {
		return new FormGroup<EventRemindersFormProperties>({
			useDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EventSource {

		/** Title of the source; for example a title of a web page or an email subject. */
		title?: string | null;

		/** URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS. */
		url?: string | null;
	}
	export interface EventSourceFormProperties {

		/** Title of the source; for example a title of a web page or an email subject. */
		title: FormControl<string | null | undefined>,

		/** URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEventSourceFormGroup() {
		return new FormGroup<EventSourceFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventWorkingLocationProperties {

		/** If present, specifies that the user is working from a custom location. */
		customLocation?: EventWorkingLocationPropertiesCustomLocation;

		/** If present, specifies that the user is working at home. */
		homeOffice?: any;

		/** If present, specifies that the user is working from an office. */
		officeLocation?: EventWorkingLocationPropertiesOfficeLocation;

		/**
		 * Type of the working location. Possible values are:
		 * - "homeOffice" - The user is working at home.
		 * - "officeLocation" - The user is working from an office.
		 * - "customLocation" - The user is working from a custom location.  Any details are specified in a sub-field of the specified name, but this field may be missing if empty. Any other fields are ignored.
		 * Required when adding working location properties.
		 */
		type?: string | null;
	}
	export interface EventWorkingLocationPropertiesFormProperties {

		/** If present, specifies that the user is working at home. */
		homeOffice: FormControl<any | null | undefined>,

		/**
		 * Type of the working location. Possible values are:
		 * - "homeOffice" - The user is working at home.
		 * - "officeLocation" - The user is working from an office.
		 * - "customLocation" - The user is working from a custom location.  Any details are specified in a sub-field of the specified name, but this field may be missing if empty. Any other fields are ignored.
		 * Required when adding working location properties.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEventWorkingLocationPropertiesFormGroup() {
		return new FormGroup<EventWorkingLocationPropertiesFormProperties>({
			homeOffice: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventWorkingLocationPropertiesCustomLocation {

		/** An optional extra label for additional information. */
		label?: string | null;
	}
	export interface EventWorkingLocationPropertiesCustomLocationFormProperties {

		/** An optional extra label for additional information. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateEventWorkingLocationPropertiesCustomLocationFormGroup() {
		return new FormGroup<EventWorkingLocationPropertiesCustomLocationFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventWorkingLocationPropertiesOfficeLocation {

		/** An optional building identifier. This should reference a building ID in the organization's Resources database. */
		buildingId?: string | null;

		/** An optional desk identifier. */
		deskId?: string | null;

		/** An optional floor identifier. */
		floorId?: string | null;

		/** An optional floor section identifier. */
		floorSectionId?: string | null;

		/** The office name that's displayed in Calendar Web and Mobile clients. We recommend you reference a building name in the organization's Resources database. */
		label?: string | null;
	}
	export interface EventWorkingLocationPropertiesOfficeLocationFormProperties {

		/** An optional building identifier. This should reference a building ID in the organization's Resources database. */
		buildingId: FormControl<string | null | undefined>,

		/** An optional desk identifier. */
		deskId: FormControl<string | null | undefined>,

		/** An optional floor identifier. */
		floorId: FormControl<string | null | undefined>,

		/** An optional floor section identifier. */
		floorSectionId: FormControl<string | null | undefined>,

		/** The office name that's displayed in Calendar Web and Mobile clients. We recommend you reference a building name in the organization's Resources database. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateEventWorkingLocationPropertiesOfficeLocationFormGroup() {
		return new FormGroup<EventWorkingLocationPropertiesOfficeLocationFormProperties>({
			buildingId: new FormControl<string | null | undefined>(undefined),
			deskId: new FormControl<string | null | undefined>(undefined),
			floorId: new FormControl<string | null | undefined>(undefined),
			floorSectionId: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Events {

		/**
		 * The user's access role for this calendar. Read-only. Possible values are:
		 * - "none" - The user has no access.
		 * - "freeBusyReader" - The user has read access to free/busy information.
		 * - "reader" - The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
		 * - "writer" - The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
		 * - "owner" - The user has ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
		 */
		accessRole?: string | null;

		/** The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True). */
		defaultReminders?: Array<EventReminder>;

		/** Description of the calendar. Read-only. */
		description?: string | null;

		/** ETag of the collection. */
		etag?: string | null;

		/** List of events on the calendar. */
		items?: Array<Event>;

		/** Type of the collection ("calendar#events"). */
		kind?: string | null;

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken?: string | null;

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken?: string | null;

		/** Title of the calendar. Read-only. */
		summary?: string | null;

		/** The time zone of the calendar. Read-only. */
		timeZone?: string | null;

		/** Last modification time of the calendar (as a RFC3339 timestamp). Read-only. */
		updated?: Date | null;
	}
	export interface EventsFormProperties {

		/**
		 * The user's access role for this calendar. Read-only. Possible values are:
		 * - "none" - The user has no access.
		 * - "freeBusyReader" - The user has read access to free/busy information.
		 * - "reader" - The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
		 * - "writer" - The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
		 * - "owner" - The user has ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
		 */
		accessRole: FormControl<string | null | undefined>,

		/** Description of the calendar. Read-only. */
		description: FormControl<string | null | undefined>,

		/** ETag of the collection. */
		etag: FormControl<string | null | undefined>,

		/** Type of the collection ("calendar#events"). */
		kind: FormControl<string | null | undefined>,

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken: FormControl<string | null | undefined>,

		/** Title of the calendar. Read-only. */
		summary: FormControl<string | null | undefined>,

		/** The time zone of the calendar. Read-only. */
		timeZone: FormControl<string | null | undefined>,

		/** Last modification time of the calendar (as a RFC3339 timestamp). Read-only. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateEventsFormGroup() {
		return new FormGroup<EventsFormProperties>({
			accessRole: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			nextSyncToken: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FreeBusyCalendar {

		/** List of time ranges during which this calendar should be regarded as busy. */
		busy?: Array<TimePeriod>;

		/** Optional error(s) (if computation for the calendar failed). */
		errors?: Array<Error>;
	}
	export interface FreeBusyCalendarFormProperties {
	}
	export function CreateFreeBusyCalendarFormGroup() {
		return new FormGroup<FreeBusyCalendarFormProperties>({
		});

	}

	export interface TimePeriod {

		/** The (exclusive) end of the time period. */
		end?: Date | null;

		/** The (inclusive) start of the time period. */
		start?: Date | null;
	}
	export interface TimePeriodFormProperties {

		/** The (exclusive) end of the time period. */
		end: FormControl<Date | null | undefined>,

		/** The (inclusive) start of the time period. */
		start: FormControl<Date | null | undefined>,
	}
	export function CreateTimePeriodFormGroup() {
		return new FormGroup<TimePeriodFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FreeBusyGroup {

		/** List of calendars' identifiers within a group. */
		calendars?: Array<string>;

		/** Optional error(s) (if computation for the group failed). */
		errors?: Array<Error>;
	}
	export interface FreeBusyGroupFormProperties {
	}
	export function CreateFreeBusyGroupFormGroup() {
		return new FormGroup<FreeBusyGroupFormProperties>({
		});

	}

	export interface FreeBusyRequest {

		/**
		 * Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calendarExpansionMax?: number | null;

		/**
		 * Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		groupExpansionMax?: number | null;

		/** List of calendars and/or groups to query. */
		items?: Array<FreeBusyRequestItem>;

		/** The end of the interval for the query formatted as per RFC3339. */
		timeMax?: Date | null;

		/** The start of the interval for the query formatted as per RFC3339. */
		timeMin?: Date | null;

		/** Time zone used in the response. Optional. The default is UTC. */
		timeZone?: string | null;
	}
	export interface FreeBusyRequestFormProperties {

		/**
		 * Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calendarExpansionMax: FormControl<number | null | undefined>,

		/**
		 * Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		groupExpansionMax: FormControl<number | null | undefined>,

		/** The end of the interval for the query formatted as per RFC3339. */
		timeMax: FormControl<Date | null | undefined>,

		/** The start of the interval for the query formatted as per RFC3339. */
		timeMin: FormControl<Date | null | undefined>,

		/** Time zone used in the response. Optional. The default is UTC. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateFreeBusyRequestFormGroup() {
		return new FormGroup<FreeBusyRequestFormProperties>({
			calendarExpansionMax: new FormControl<number | null | undefined>(undefined),
			groupExpansionMax: new FormControl<number | null | undefined>(undefined),
			timeMax: new FormControl<Date | null | undefined>(undefined),
			timeMin: new FormControl<Date | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FreeBusyRequestItem {

		/** The identifier of a calendar or a group. */
		id?: string | null;
	}
	export interface FreeBusyRequestItemFormProperties {

		/** The identifier of a calendar or a group. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFreeBusyRequestItemFormGroup() {
		return new FormGroup<FreeBusyRequestItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FreeBusyResponse {

		/** List of free/busy information for calendars. */
		calendars?: {[id: string]: FreeBusyCalendar };

		/** Expansion of groups. */
		groups?: {[id: string]: FreeBusyGroup };

		/** Type of the resource ("calendar#freeBusy"). */
		kind?: string | null;

		/** The end of the interval. */
		timeMax?: Date | null;

		/** The start of the interval. */
		timeMin?: Date | null;
	}
	export interface FreeBusyResponseFormProperties {

		/** List of free/busy information for calendars. */
		calendars: FormControl<{[id: string]: FreeBusyCalendar } | null | undefined>,

		/** Expansion of groups. */
		groups: FormControl<{[id: string]: FreeBusyGroup } | null | undefined>,

		/** Type of the resource ("calendar#freeBusy"). */
		kind: FormControl<string | null | undefined>,

		/** The end of the interval. */
		timeMax: FormControl<Date | null | undefined>,

		/** The start of the interval. */
		timeMin: FormControl<Date | null | undefined>,
	}
	export function CreateFreeBusyResponseFormGroup() {
		return new FormGroup<FreeBusyResponseFormProperties>({
			calendars: new FormControl<{[id: string]: FreeBusyCalendar } | null | undefined>(undefined),
			groups: new FormControl<{[id: string]: FreeBusyGroup } | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			timeMax: new FormControl<Date | null | undefined>(undefined),
			timeMin: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Setting {

		/** ETag of the resource. */
		etag?: string | null;

		/** The id of the user setting. */
		id?: string | null;

		/** Type of the resource ("calendar#setting"). */
		kind?: string | null;

		/** Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters. */
		value?: string | null;
	}
	export interface SettingFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The id of the user setting. */
		id: FormControl<string | null | undefined>,

		/** Type of the resource ("calendar#setting"). */
		kind: FormControl<string | null | undefined>,

		/** Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSettingFormGroup() {
		return new FormGroup<SettingFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Settings {

		/** Etag of the collection. */
		etag?: string | null;

		/** List of user settings. */
		items?: Array<Setting>;

		/** Type of the collection ("calendar#settings"). */
		kind?: string | null;

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken?: string | null;

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken?: string | null;
	}
	export interface SettingsFormProperties {

		/** Etag of the collection. */
		etag: FormControl<string | null | undefined>,

		/** Type of the collection ("calendar#settings"). */
		kind: FormControl<string | null | undefined>,

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken: FormControl<string | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			nextSyncToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a secondary calendar.
		 * Post calendars
		 * @return {Calendar} Successful response
		 */
		Calendar_calendars_insert(requestBody: Calendar): Observable<Calendar> {
			return this.http.post<Calendar>(this.baseUri + 'calendars', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
		 * Delete calendars/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {void} Successful response
		 */
		Calendar_calendars_delete(calendarId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata for a calendar.
		 * Get calendars/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {Calendar} Successful response
		 */
		Calendar_calendars_get(calendarId: string): Observable<Calendar> {
			return this.http.get<Calendar>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), {});
		}

		/**
		 * Updates metadata for a calendar. This method supports patch semantics.
		 * Patch calendars/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {Calendar} Successful response
		 */
		Calendar_calendars_patch(calendarId: string, requestBody: Calendar): Observable<Calendar> {
			return this.http.patch<Calendar>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates metadata for a calendar.
		 * Put calendars/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {Calendar} Successful response
		 */
		Calendar_calendars_update(calendarId: string, requestBody: Calendar): Observable<Calendar> {
			return this.http.put<Calendar>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the rules in the access control list for the calendar.
		 * Get calendars/{calendarId}/acl
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 *     Minimum: 1
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {boolean} showDeleted Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {Acl} Successful response
		 */
		Calendar_acl_list(calendarId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined, syncToken: string | null | undefined): Observable<Acl> {
			return this.http.get<Acl>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), {});
		}

		/**
		 * Creates an access control rule.
		 * Post calendars/{calendarId}/acl
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {boolean} sendNotifications Whether to send notifications about the calendar sharing change. Optional. The default is True.
		 * @return {AclRule} Successful response
		 */
		Calendar_acl_insert(calendarId: string, sendNotifications: boolean | null | undefined, requestBody: AclRule): Observable<AclRule> {
			return this.http.post<AclRule>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl&sendNotifications=' + sendNotifications, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Watch for changes to ACL resources.
		 * Post calendars/{calendarId}/acl/watch
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 *     Minimum: 1
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {boolean} showDeleted Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {Channel} Successful response
		 */
		Calendar_acl_watch(calendarId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined, syncToken: string | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl/watch&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an access control rule.
		 * Delete calendars/{calendarId}/acl/{ruleId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} ruleId ACL rule identifier.
		 * @return {void} Successful response
		 */
		Calendar_acl_delete(calendarId: string, ruleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl/' + (ruleId == null ? '' : encodeURIComponent(ruleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an access control rule.
		 * Get calendars/{calendarId}/acl/{ruleId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} ruleId ACL rule identifier.
		 * @return {AclRule} Successful response
		 */
		Calendar_acl_get(calendarId: string, ruleId: string): Observable<AclRule> {
			return this.http.get<AclRule>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl/' + (ruleId == null ? '' : encodeURIComponent(ruleId)), {});
		}

		/**
		 * Updates an access control rule. This method supports patch semantics.
		 * Patch calendars/{calendarId}/acl/{ruleId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} ruleId ACL rule identifier.
		 * @param {boolean} sendNotifications Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
		 * @return {AclRule} Successful response
		 */
		Calendar_acl_patch(calendarId: string, ruleId: string, sendNotifications: boolean | null | undefined, requestBody: AclRule): Observable<AclRule> {
			return this.http.patch<AclRule>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl/' + (ruleId == null ? '' : encodeURIComponent(ruleId)) + '&sendNotifications=' + sendNotifications, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an access control rule.
		 * Put calendars/{calendarId}/acl/{ruleId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} ruleId ACL rule identifier.
		 * @param {boolean} sendNotifications Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
		 * @return {AclRule} Successful response
		 */
		Calendar_acl_update(calendarId: string, ruleId: string, sendNotifications: boolean | null | undefined, requestBody: AclRule): Observable<AclRule> {
			return this.http.put<AclRule>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl/' + (ruleId == null ? '' : encodeURIComponent(ruleId)) + '&sendNotifications=' + sendNotifications, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
		 * Post calendars/{calendarId}/clear
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {void} Successful response
		 */
		Calendar_calendars_clear(calendarId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/clear', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns events on the specified calendar.
		 * Get calendars/{calendarId}/events
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {Array<string>} eventTypes Event types to return. Optional. Possible values are: 
		 * - "default" 
		 * - "focusTime" 
		 * - "outOfOffice" 
		 * - "workingLocation"This parameter can be repeated multiple times to return events of different types. The default is ["default", "focusTime", "outOfOffice"].
		 * @param {string} iCalUID Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID.
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 *     Minimum: 1
		 * @param {number} maxResults Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
		 *     Minimum: 1
		 * @param {Calendar_events_listOrderBy} orderBy The order of the events returned in the result. Optional. The default is an unspecified, stable order.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {Array<string>} privateExtendedProperty Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
		 * @param {string} q Free text search terms to find events that match these terms in the following fields:
		 * - summary 
		 * - description 
		 * - location 
		 * - attendee's displayName 
		 * - attendee's email 
		 * - workingLocationProperties.officeLocation.buildingId 
		 * - workingLocationProperties.officeLocation.deskId 
		 * - workingLocationProperties.officeLocation.label 
		 * - workingLocationProperties.customLocation.label 
		 * These search terms also match predefined keywords against all display title translations of working location, out-of-office, and focus-time events. For example, searching for "Office" or "Bureau" returns working location events of type officeLocation, whereas searching for "Out of office" or "Abwesend" returns out-of-office events. Optional.
		 * @param {Array<string>} sharedExtendedProperty Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
		 * @param {boolean} showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
		 * @param {boolean} showHiddenInvitations Whether to include hidden invitations in the result. Optional. The default is False.
		 * @param {boolean} singleEvents Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
		 * There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
		 * These are: 
		 * - iCalUID 
		 * - orderBy 
		 * - privateExtendedProperty 
		 * - q 
		 * - sharedExtendedProperty 
		 * - timeMin 
		 * - timeMax 
		 * - updatedMin All other query parameters should be the same as for the initial synchronization to avoid undefined behavior. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @param {string} timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.
		 * @param {string} timeMin Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.
		 * @param {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
		 * @param {string} updatedMin Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
		 * @return {Events} Successful response
		 */
		Calendar_events_list(calendarId: string, alwaysIncludeEmail: boolean | null | undefined, eventTypes: Array<string> | null | undefined, iCalUID: string | null | undefined, maxAttendees: number | null | undefined, maxResults: number | null | undefined, orderBy: Calendar_events_listOrderBy | null | undefined, pageToken: string | null | undefined, privateExtendedProperty: Array<string> | null | undefined, q: string | null | undefined, sharedExtendedProperty: Array<string> | null | undefined, showDeleted: boolean | null | undefined, showHiddenInvitations: boolean | null | undefined, singleEvents: boolean | null | undefined, syncToken: string | null | undefined, timeMax: string | null | undefined, timeMin: string | null | undefined, timeZone: string | null | undefined, updatedMin: string | null | undefined): Observable<Events> {
			return this.http.get<Events>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events&alwaysIncludeEmail=' + alwaysIncludeEmail + '&' + eventTypes?.map(z => `eventTypes=${encodeURIComponent(z)}`).join('&') + '&iCalUID=' + (iCalUID == null ? '' : encodeURIComponent(iCalUID)) + '&maxAttendees=' + maxAttendees + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + privateExtendedProperty?.map(z => `privateExtendedProperty=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + sharedExtendedProperty?.map(z => `sharedExtendedProperty=${encodeURIComponent(z)}`).join('&') + '&showDeleted=' + showDeleted + '&showHiddenInvitations=' + showHiddenInvitations + '&singleEvents=' + singleEvents + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)) + '&timeMax=' + (timeMax == null ? '' : encodeURIComponent(timeMax)) + '&timeMin=' + (timeMin == null ? '' : encodeURIComponent(timeMin)) + '&timeZone=' + (timeZone == null ? '' : encodeURIComponent(timeZone)) + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)), {});
		}

		/**
		 * Creates an event.
		 * Post calendars/{calendarId}/events
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {number} conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
		 *     Minimum: 0    Maximum: 1
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 *     Minimum: 1
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false.
		 * @param {boolean} supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
		 * @return {Event} Successful response
		 */
		Calendar_events_insert(calendarId: string, conferenceDataVersion: number | null | undefined, maxAttendees: number | null | undefined, sendNotifications: boolean | null | undefined, sendUpdates: Calendar_events_insertSendUpdates | null | undefined, supportsAttachments: boolean | null | undefined, requestBody: Event): Observable<Event> {
			return this.http.post<Event>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events&conferenceDataVersion=' + conferenceDataVersion + '&maxAttendees=' + maxAttendees + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates + '&supportsAttachments=' + supportsAttachments, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports an event. This operation is used to add a private copy of an existing event to a calendar.
		 * Post calendars/{calendarId}/events/import
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {number} conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
		 *     Minimum: 0    Maximum: 1
		 * @param {boolean} supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
		 * @return {Event} Successful response
		 */
		Calendar_events_import(calendarId: string, conferenceDataVersion: number | null | undefined, supportsAttachments: boolean | null | undefined, requestBody: Event): Observable<Event> {
			return this.http.post<Event>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/import&conferenceDataVersion=' + conferenceDataVersion + '&supportsAttachments=' + supportsAttachments, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an event based on a simple text string.
		 * Post calendars/{calendarId}/events/quickAdd
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} text The text describing the event to be created.
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Guests who should receive notifications about the creation of the new event.
		 * @return {Event} Successful response
		 */
		Calendar_events_quickAdd(calendarId: string, text: string, sendNotifications: boolean | null | undefined, sendUpdates: Calendar_events_insertSendUpdates | null | undefined): Observable<Event> {
			return this.http.post<Event>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/quickAdd&text=' + (text == null ? '' : encodeURIComponent(text)) + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates, null, {});
		}

		/**
		 * Watch for changes to Events resources.
		 * Post calendars/{calendarId}/events/watch
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {Array<string>} eventTypes Event types to return. Optional. Possible values are: 
		 * - "default" 
		 * - "focusTime" 
		 * - "outOfOffice" 
		 * - "workingLocation"This parameter can be repeated multiple times to return events of different types. The default is ["default", "focusTime", "outOfOffice"].
		 * @param {string} iCalUID Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID.
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 *     Minimum: 1
		 * @param {number} maxResults Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
		 *     Minimum: 1
		 * @param {Calendar_events_listOrderBy} orderBy The order of the events returned in the result. Optional. The default is an unspecified, stable order.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {Array<string>} privateExtendedProperty Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
		 * @param {string} q Free text search terms to find events that match these terms in the following fields:
		 * - summary 
		 * - description 
		 * - location 
		 * - attendee's displayName 
		 * - attendee's email 
		 * - workingLocationProperties.officeLocation.buildingId 
		 * - workingLocationProperties.officeLocation.deskId 
		 * - workingLocationProperties.officeLocation.label 
		 * - workingLocationProperties.customLocation.label 
		 * These search terms also match predefined keywords against all display title translations of working location, out-of-office, and focus-time events. For example, searching for "Office" or "Bureau" returns working location events of type officeLocation, whereas searching for "Out of office" or "Abwesend" returns out-of-office events. Optional.
		 * @param {Array<string>} sharedExtendedProperty Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
		 * @param {boolean} showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
		 * @param {boolean} showHiddenInvitations Whether to include hidden invitations in the result. Optional. The default is False.
		 * @param {boolean} singleEvents Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
		 * There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
		 * These are: 
		 * - iCalUID 
		 * - orderBy 
		 * - privateExtendedProperty 
		 * - q 
		 * - sharedExtendedProperty 
		 * - timeMin 
		 * - timeMax 
		 * - updatedMin All other query parameters should be the same as for the initial synchronization to avoid undefined behavior. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @param {string} timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.
		 * @param {string} timeMin Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.
		 * @param {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
		 * @param {string} updatedMin Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
		 * @return {Channel} Successful response
		 */
		Calendar_events_watch(calendarId: string, alwaysIncludeEmail: boolean | null | undefined, eventTypes: Array<string> | null | undefined, iCalUID: string | null | undefined, maxAttendees: number | null | undefined, maxResults: number | null | undefined, orderBy: Calendar_events_listOrderBy | null | undefined, pageToken: string | null | undefined, privateExtendedProperty: Array<string> | null | undefined, q: string | null | undefined, sharedExtendedProperty: Array<string> | null | undefined, showDeleted: boolean | null | undefined, showHiddenInvitations: boolean | null | undefined, singleEvents: boolean | null | undefined, syncToken: string | null | undefined, timeMax: string | null | undefined, timeMin: string | null | undefined, timeZone: string | null | undefined, updatedMin: string | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/watch&alwaysIncludeEmail=' + alwaysIncludeEmail + '&' + eventTypes?.map(z => `eventTypes=${encodeURIComponent(z)}`).join('&') + '&iCalUID=' + (iCalUID == null ? '' : encodeURIComponent(iCalUID)) + '&maxAttendees=' + maxAttendees + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + privateExtendedProperty?.map(z => `privateExtendedProperty=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + sharedExtendedProperty?.map(z => `sharedExtendedProperty=${encodeURIComponent(z)}`).join('&') + '&showDeleted=' + showDeleted + '&showHiddenInvitations=' + showHiddenInvitations + '&singleEvents=' + singleEvents + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)) + '&timeMax=' + (timeMax == null ? '' : encodeURIComponent(timeMax)) + '&timeMin=' + (timeMin == null ? '' : encodeURIComponent(timeMin)) + '&timeZone=' + (timeZone == null ? '' : encodeURIComponent(timeZone)) + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an event.
		 * Delete calendars/{calendarId}/events/{eventId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} eventId Event identifier.
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Guests who should receive notifications about the deletion of the event.
		 * @return {void} Successful response
		 */
		Calendar_events_delete(calendarId: string, eventId: string, sendNotifications: boolean | null | undefined, sendUpdates: Calendar_events_insertSendUpdates | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
		 * Get calendars/{calendarId}/events/{eventId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} eventId Event identifier.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 *     Minimum: 1
		 * @param {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
		 * @return {Event} Successful response
		 */
		Calendar_events_get(calendarId: string, eventId: string, alwaysIncludeEmail: boolean | null | undefined, maxAttendees: number | null | undefined, timeZone: string | null | undefined): Observable<Event> {
			return this.http.get<Event>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '&alwaysIncludeEmail=' + alwaysIncludeEmail + '&maxAttendees=' + maxAttendees + '&timeZone=' + (timeZone == null ? '' : encodeURIComponent(timeZone)), {});
		}

		/**
		 * Updates an event. This method supports patch semantics.
		 * Patch calendars/{calendarId}/events/{eventId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} eventId Event identifier.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {number} conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
		 *     Minimum: 0    Maximum: 1
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 *     Minimum: 1
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Guests who should receive notifications about the event update (for example, title changes, etc.).
		 * @param {boolean} supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
		 * @return {Event} Successful response
		 */
		Calendar_events_patch(calendarId: string, eventId: string, alwaysIncludeEmail: boolean | null | undefined, conferenceDataVersion: number | null | undefined, maxAttendees: number | null | undefined, sendNotifications: boolean | null | undefined, sendUpdates: Calendar_events_insertSendUpdates | null | undefined, supportsAttachments: boolean | null | undefined, requestBody: Event): Observable<Event> {
			return this.http.patch<Event>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '&alwaysIncludeEmail=' + alwaysIncludeEmail + '&conferenceDataVersion=' + conferenceDataVersion + '&maxAttendees=' + maxAttendees + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates + '&supportsAttachments=' + supportsAttachments, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an event.
		 * Put calendars/{calendarId}/events/{eventId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} eventId Event identifier.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {number} conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
		 *     Minimum: 0    Maximum: 1
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 *     Minimum: 1
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Guests who should receive notifications about the event update (for example, title changes, etc.).
		 * @param {boolean} supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
		 * @return {Event} Successful response
		 */
		Calendar_events_update(calendarId: string, eventId: string, alwaysIncludeEmail: boolean | null | undefined, conferenceDataVersion: number | null | undefined, maxAttendees: number | null | undefined, sendNotifications: boolean | null | undefined, sendUpdates: Calendar_events_insertSendUpdates | null | undefined, supportsAttachments: boolean | null | undefined, requestBody: Event): Observable<Event> {
			return this.http.put<Event>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '&alwaysIncludeEmail=' + alwaysIncludeEmail + '&conferenceDataVersion=' + conferenceDataVersion + '&maxAttendees=' + maxAttendees + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates + '&supportsAttachments=' + supportsAttachments, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns instances of the specified recurring event.
		 * Get calendars/{calendarId}/events/{eventId}/instances
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} eventId Recurring event identifier.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 *     Minimum: 1
		 * @param {number} maxResults Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
		 *     Minimum: 1
		 * @param {string} originalStart The original start time of the instance in the result. Optional.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {boolean} showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.
		 * @param {string} timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.
		 * @param {string} timeMin Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.
		 * @param {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
		 * @return {Events} Successful response
		 */
		Calendar_events_instances(calendarId: string, eventId: string, alwaysIncludeEmail: boolean | null | undefined, maxAttendees: number | null | undefined, maxResults: number | null | undefined, originalStart: string | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined, timeMax: string | null | undefined, timeMin: string | null | undefined, timeZone: string | null | undefined): Observable<Events> {
			return this.http.get<Events>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/instances&alwaysIncludeEmail=' + alwaysIncludeEmail + '&maxAttendees=' + maxAttendees + '&maxResults=' + maxResults + '&originalStart=' + (originalStart == null ? '' : encodeURIComponent(originalStart)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&timeMax=' + (timeMax == null ? '' : encodeURIComponent(timeMax)) + '&timeMin=' + (timeMin == null ? '' : encodeURIComponent(timeMin)) + '&timeZone=' + (timeZone == null ? '' : encodeURIComponent(timeZone)), {});
		}

		/**
		 * Moves an event to another calendar, i.e. changes an event's organizer. Note that only default events can be moved; outOfOffice, focusTime and workingLocation events cannot be moved.
		 * Post calendars/{calendarId}/events/{eventId}/move
		 * @param {string} calendarId Calendar identifier of the source calendar where the event currently is on.
		 * @param {string} eventId Event identifier.
		 * @param {string} destination Calendar identifier of the target calendar where the event is to be moved to.
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the change of the event's organizer. Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Guests who should receive notifications about the change of the event's organizer.
		 * @return {Event} Successful response
		 */
		Calendar_events_move(calendarId: string, eventId: string, destination: string, sendNotifications: boolean | null | undefined, sendUpdates: Calendar_events_insertSendUpdates | null | undefined): Observable<Event> {
			return this.http.post<Event>(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/move&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates, null, {});
		}

		/**
		 * Stop watching resources through this channel
		 * Post channels/stop
		 * @return {void} Successful response
		 */
		Calendar_channels_stop(requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the color definitions for calendars and events.
		 * Get colors
		 * @return {Colors} Successful response
		 */
		Calendar_colors_get(): Observable<Colors> {
			return this.http.get<Colors>(this.baseUri + 'colors', {});
		}

		/**
		 * Returns free/busy information for a set of calendars.
		 * Post freeBusy
		 * @return {FreeBusyResponse} Successful response
		 */
		Calendar_freebusy_query(requestBody: FreeBusyRequest): Observable<FreeBusyResponse> {
			return this.http.post<FreeBusyResponse>(this.baseUri + 'freeBusy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the calendars on the user's calendar list.
		 * Get users/me/calendarList
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 *     Minimum: 1
		 * @param {Calendar_calendarList_listMinAccessRole} minAccessRole The minimum access role for the user in the returned entries. Optional. The default is no restriction.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {boolean} showDeleted Whether to include deleted calendar list entries in the result. Optional. The default is False.
		 * @param {boolean} showHidden Whether to show hidden entries. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
		 * To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {CalendarList} Successful response
		 */
		Calendar_calendarList_list(maxResults: number | null | undefined, minAccessRole: Calendar_calendarList_listMinAccessRole | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined, showHidden: boolean | null | undefined, syncToken: string | null | undefined): Observable<CalendarList> {
			return this.http.get<CalendarList>(this.baseUri + 'users/me/calendarList?maxResults=' + maxResults + '&minAccessRole=' + minAccessRole + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&showHidden=' + showHidden + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), {});
		}

		/**
		 * Inserts an existing calendar into the user's calendar list.
		 * Post users/me/calendarList
		 * @param {boolean} colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
		 * @return {CalendarListEntry} Successful response
		 */
		Calendar_calendarList_insert(colorRgbFormat: boolean | null | undefined, requestBody: CalendarListEntry): Observable<CalendarListEntry> {
			return this.http.post<CalendarListEntry>(this.baseUri + 'users/me/calendarList?colorRgbFormat=' + colorRgbFormat, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Watch for changes to CalendarList resources.
		 * Post users/me/calendarList/watch
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 *     Minimum: 1
		 * @param {Calendar_calendarList_listMinAccessRole} minAccessRole The minimum access role for the user in the returned entries. Optional. The default is no restriction.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {boolean} showDeleted Whether to include deleted calendar list entries in the result. Optional. The default is False.
		 * @param {boolean} showHidden Whether to show hidden entries. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
		 * To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {Channel} Successful response
		 */
		Calendar_calendarList_watch(maxResults: number | null | undefined, minAccessRole: Calendar_calendarList_listMinAccessRole | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined, showHidden: boolean | null | undefined, syncToken: string | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'users/me/calendarList/watch?maxResults=' + maxResults + '&minAccessRole=' + minAccessRole + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&showHidden=' + showHidden + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a calendar from the user's calendar list.
		 * Delete users/me/calendarList/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {void} Successful response
		 */
		Calendar_calendarList_delete(calendarId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/me/calendarList/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a calendar from the user's calendar list.
		 * Get users/me/calendarList/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {CalendarListEntry} Successful response
		 */
		Calendar_calendarList_get(calendarId: string): Observable<CalendarListEntry> {
			return this.http.get<CalendarListEntry>(this.baseUri + 'users/me/calendarList/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), {});
		}

		/**
		 * Updates an existing calendar on the user's calendar list. This method supports patch semantics.
		 * Patch users/me/calendarList/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {boolean} colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
		 * @return {CalendarListEntry} Successful response
		 */
		Calendar_calendarList_patch(calendarId: string, colorRgbFormat: boolean | null | undefined, requestBody: CalendarListEntry): Observable<CalendarListEntry> {
			return this.http.patch<CalendarListEntry>(this.baseUri + 'users/me/calendarList/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '&colorRgbFormat=' + colorRgbFormat, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing calendar on the user's calendar list.
		 * Put users/me/calendarList/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {boolean} colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
		 * @return {CalendarListEntry} Successful response
		 */
		Calendar_calendarList_update(calendarId: string, colorRgbFormat: boolean | null | undefined, requestBody: CalendarListEntry): Observable<CalendarListEntry> {
			return this.http.put<CalendarListEntry>(this.baseUri + 'users/me/calendarList/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '&colorRgbFormat=' + colorRgbFormat, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all user settings for the authenticated user.
		 * Get users/me/settings
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 *     Minimum: 1
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {Settings} Successful response
		 */
		Calendar_settings_list(maxResults: number | null | undefined, pageToken: string | null | undefined, syncToken: string | null | undefined): Observable<Settings> {
			return this.http.get<Settings>(this.baseUri + 'users/me/settings?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), {});
		}

		/**
		 * Watch for changes to Settings resources.
		 * Post users/me/settings/watch
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 *     Minimum: 1
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {Channel} Successful response
		 */
		Calendar_settings_watch(maxResults: number | null | undefined, pageToken: string | null | undefined, syncToken: string | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'users/me/settings/watch?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a single user setting.
		 * Get users/me/settings/{setting}
		 * @param {string} setting The id of the user setting.
		 * @return {Setting} Successful response
		 */
		Calendar_settings_get(setting: string): Observable<Setting> {
			return this.http.get<Setting>(this.baseUri + 'users/me/settings/' + (setting == null ? '' : encodeURIComponent(setting)), {});
		}
	}

	export enum Calendar_events_listOrderBy { startTime = 'startTime', updated = 'updated' }

	export enum Calendar_events_insertSendUpdates { all = 'all', externalOnly = 'externalOnly', none = 'none' }

	export enum Calendar_calendarList_listMinAccessRole { freeBusyReader = 'freeBusyReader', owner = 'owner', reader = 'reader', writer = 'writer' }

}

