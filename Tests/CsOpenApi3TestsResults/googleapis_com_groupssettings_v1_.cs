//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using System.Text.Json;
	using System.Text.Json.Serialization;
	using Fonlow.Net.Http;
	
	
	/// <summary>
	/// JSON template for Group resource
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Groups
	{
		
		/// <summary>
		/// Identifies whether members external to your organization can join the group. Possible values are:  
		///- true: G Suite users external to your organization can become members of this group. 
		///- false: Users not belonging to the organization are not allowed to become members of this group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="allowExternalMembers")]
		public string AllowExternalMembers { get; set; }
		
		/// <summary>
		/// Deprecated. Allows Google to contact administrator of the group.  
		///- true: Allow Google to contact managers of this group. Occasionally Google may send updates on the latest features, ask for input on new features, or ask for permission to highlight your group. 
		///- false: Google can not contact managers of this group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="allowGoogleCommunication")]
		public string AllowGoogleCommunication { get; set; }
		
		/// <summary>
		/// Allows posting from web. Possible values are:  
		///- true: Allows any member to post to the group forum. 
		///- false: Members only use Gmail to communicate with the group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="allowWebPosting")]
		public string AllowWebPosting { get; set; }
		
		/// <summary>
		/// Allows the group to be archived only. Possible values are:  
		///- true: Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browseable and searchable.  
		///- If true, the whoCanPostMessage property is set to NONE_CAN_POST.  
		///- If reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.  
		///- false: The group is active and can receive messages.  
		///- When false, updating whoCanPostMessage to NONE_CAN_POST, results in an error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="archiveOnly")]
		public string ArchiveOnly { get; set; }
		
		/// <summary>
		/// Set the content of custom footer text. The maximum number of characters is 1,000.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="customFooterText")]
		public string CustomFooterText { get; set; }
		
		/// <summary>
		/// An email address used when replying to a message if the replyTo property is set to REPLY_TO_CUSTOM. This address is defined by an account administrator.  
		///- When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds a custom email address used when replying to a message. 
		///- If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a text value or an error is returned.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="customReplyTo")]
		public string CustomReplyTo { get; set; }
		
		/// <summary>
		/// Specifies whether the group has a custom role that's included in one of the settings being merged. This field is read-only and update/patch requests to it are ignored. Possible values are:  
		///- true 
		///- false
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="customRolesEnabledForSettingsToBeMerged")]
		public string CustomRolesEnabledForSettingsToBeMerged { get; set; }
		
		/// <summary>
		/// When a message is rejected, this is text for the rejection notification sent to the message's author. By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Note: Requires sendMessageDenyNotification property to be true.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="defaultMessageDenyNotificationText")]
		public string DefaultMessageDenyNotificationText { get; set; }
		
		/// <summary>
		/// Default sender for members who can post messages as the group. Possible values are: - `DEFAULT_SELF`: By default messages will be sent from the user - `GROUP`: By default messages will be sent from the group
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="default_sender")]
		public string Default_sender { get; set; }
		
		/// <summary>
		/// Description of the group. This property value may be an empty string if no group description has been entered. If entered, the maximum group description is no more than 300 characters.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// The group's email address. This property can be updated using the Directory API. Note: Only a group owner can change a group's email address. A group manager can't do this.
		///When you change your group's address using the Directory API or the control panel, you are changing the address your subscribers use to send email and the web address people use to access your group. People can't reach your group by visiting the old address.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		/// <summary>
		/// Specifies whether a collaborative inbox will remain turned on for the group. Possible values are:  
		///- true 
		///- false
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="enableCollaborativeInbox")]
		public string EnableCollaborativeInbox { get; set; }
		
		/// <summary>
		/// Indicates if favorite replies should be displayed above other replies.  
		///- true: Favorite replies will be displayed above other replies. 
		///- false: Favorite replies will not be displayed above other replies.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="favoriteRepliesOnTop")]
		public string FavoriteRepliesOnTop { get; set; }
		
		/// <summary>
		/// Whether to include custom footer. Possible values are:  
		///- true 
		///- false
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="includeCustomFooter")]
		public string IncludeCustomFooter { get; set; }
		
		/// <summary>
		/// Enables the group to be included in the Global Address List. For more information, see the help center. Possible values are:  
		///- true: Group is included in the Global Address List. 
		///- false: Group is not included in the Global Address List.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="includeInGlobalAddressList")]
		public string IncludeInGlobalAddressList { get; set; }
		
		/// <summary>
		/// Allows the Group contents to be archived. Possible values are:  
		///- true: Archive messages sent to the group. 
		///- false: Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isArchived")]
		public string IsArchived { get; set; }
		
		/// <summary>
		/// The type of the resource. It is always groupsSettings#groups.
		/// </summary>
		[System.ComponentModel.DefaultValue("groupsSettings#groups")]
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; } = "groupsSettings#groups";
		
		/// <summary>
		/// Deprecated. The maximum size of a message is 25Mb.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="maxMessageBytes")]
		public System.Nullable<System.Int32> MaxMessageBytes { get; set; }
		
		/// <summary>
		/// Enables members to post messages as the group. Possible values are:  
		///- true: Group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Note: When true, any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. 
		///- false: Members can not post in behalf of the group's email address.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="membersCanPostAsTheGroup")]
		public string MembersCanPostAsTheGroup { get; set; }
		
		/// <summary>
		/// Deprecated. The default message display font always has a value of "DEFAULT_FONT".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="messageDisplayFont")]
		public string MessageDisplayFont { get; set; }
		
		/// <summary>
		/// Moderation level of incoming messages. Possible values are:  
		///- MODERATE_ALL_MESSAGES: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group. 
		///- MODERATE_NON_MEMBERS: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group. 
		///- MODERATE_NEW_MEMBERS: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group. 
		///- MODERATE_NONE: No moderator approval is required. Messages are delivered directly to the group. Note: When the whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.
		///When memberCanPostAsTheGroup is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="messageModerationLevel")]
		public string MessageModerationLevel { get; set; }
		
		/// <summary>
		/// Name of the group, which has a maximum size of 75 characters.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The primary language for group. For a group's primary language use the language tags from the G Suite languages found at G Suite Email Settings API Email Language Tags.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="primaryLanguage")]
		public string PrimaryLanguage { get; set; }
		
		/// <summary>
		/// Specifies who receives the default reply. Possible values are:  
		///- REPLY_TO_CUSTOM: For replies to messages, use the group's custom email address.
		///When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds the custom email address used when replying to a message. If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a value. Otherwise an error is returned.
		/// 
		///- REPLY_TO_SENDER: The reply sent to author of message. 
		///- REPLY_TO_LIST: This reply message is sent to the group. 
		///- REPLY_TO_OWNER: The reply is sent to the owner(s) of the group. This does not include the group's managers. 
		///- REPLY_TO_IGNORE: Group users individually decide where the message reply is sent. 
		///- REPLY_TO_MANAGERS: This reply message is sent to the group's managers, which includes all managers and the group owner.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="replyTo")]
		public string ReplyTo { get; set; }
		
		/// <summary>
		/// Allows a member to be notified if the member's message to the group is denied by the group owner. Possible values are:  
		///- true: When a message is rejected, send the deny message notification to the message author.
		///The defaultMessageDenyNotificationText property is dependent on the sendMessageDenyNotification property being true.
		/// 
		///- false: When a message is rejected, no notification is sent.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sendMessageDenyNotification")]
		public string SendMessageDenyNotification { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanDiscoverGroup setting. Allows the group to be visible in the Groups Directory. Possible values are:  
		///- true: All groups in the account are listed in the Groups directory. 
		///- false: All groups in the account are not listed in the directory.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="showInGroupDirectory")]
		public string ShowInGroupDirectory { get; set; }
		
		/// <summary>
		/// Specifies moderation levels for messages detected as spam. Possible values are:  
		///- ALLOW: Post the message to the group. 
		///- MODERATE: Send the message to the moderation queue. This is the default. 
		///- SILENTLY_MODERATE: Send the message to the moderation queue, but do not send notification to moderators. 
		///- REJECT: Immediately reject the message.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="spamModerationLevel")]
		public string SpamModerationLevel { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to add members. Possible values are:  
		///- ALL_MEMBERS_CAN_ADD: Managers and members can directly add new members. 
		///- ALL_MANAGERS_CAN_ADD: Only managers can directly add new members. this includes the group's owner. 
		///- ALL_OWNERS_CAN_ADD: Only owners can directly add new members. 
		///- NONE_CAN_ADD: No one can directly add new members.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanAdd")]
		public string WhoCanAdd { get; set; }
		
		/// <summary>
		/// Deprecated. This functionality is no longer supported in the Google Groups UI. The value is always "NONE".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanAddReferences")]
		public string WhoCanAddReferences { get; set; }
		
		/// <summary>
		/// Specifies who can approve members who ask to join groups. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:  
		///- ALL_MEMBERS_CAN_APPROVE 
		///- ALL_MANAGERS_CAN_APPROVE 
		///- ALL_OWNERS_CAN_APPROVE 
		///- NONE_CAN_APPROVE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanApproveMembers")]
		public string WhoCanApproveMembers { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can approve pending messages in the moderation queue. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanApproveMessages")]
		public string WhoCanApproveMessages { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanAssistContent setting. Permission to assign topics in a forum to another user. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- MANAGERS_ONLY 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanAssignTopics")]
		public string WhoCanAssignTopics { get; set; }
		
		/// <summary>
		/// Specifies who can moderate metadata. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- MANAGERS_ONLY 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanAssistContent")]
		public string WhoCanAssistContent { get; set; }
		
		/// <summary>
		/// Specifies who can deny membership to users. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanBanUsers")]
		public string WhoCanBanUsers { get; set; }
		
		/// <summary>
		/// Permission to contact owner of the group via web UI. Possible values are:  
		///- ALL_IN_DOMAIN_CAN_CONTACT 
		///- ALL_MANAGERS_CAN_CONTACT 
		///- ALL_MEMBERS_CAN_CONTACT 
		///- ANYONE_CAN_CONTACT 
		///- ALL_OWNERS_CAN_CONTACT
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanContactOwner")]
		public string WhoCanContactOwner { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete replies to topics. (Authors can always delete their own posts). Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanDeleteAnyPost")]
		public string WhoCanDeleteAnyPost { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete topics. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanDeleteTopics")]
		public string WhoCanDeleteTopics { get; set; }
		
		/// <summary>
		/// Specifies the set of users for whom this group is discoverable. Possible values are:  
		///- ANYONE_CAN_DISCOVER 
		///- ALL_IN_DOMAIN_CAN_DISCOVER 
		///- ALL_MEMBERS_CAN_DISCOVER
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanDiscoverGroup")]
		public string WhoCanDiscoverGroup { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanAssistContent setting. Permission to enter free form tags for topics in a forum. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- MANAGERS_ONLY 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanEnterFreeFormTags")]
		public string WhoCanEnterFreeFormTags { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can hide posts by reporting them as abuse. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanHideAbuse")]
		public string WhoCanHideAbuse { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to invite new members. Possible values are:  
		///- ALL_MEMBERS_CAN_INVITE: Managers and members can invite a new member candidate. 
		///- ALL_MANAGERS_CAN_INVITE: Only managers can invite a new member. This includes the group's owner. 
		///- ALL_OWNERS_CAN_INVITE: Only owners can invite a new member. 
		///- NONE_CAN_INVITE: No one can invite a new member candidate.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanInvite")]
		public string WhoCanInvite { get; set; }
		
		/// <summary>
		/// Permission to join group. Possible values are:  
		///- ANYONE_CAN_JOIN: Anyone in the account domain can join. This includes accounts with multiple domains. 
		///- ALL_IN_DOMAIN_CAN_JOIN: Any Internet user who is outside your domain can access your Google Groups service and view the list of groups in your Groups directory. Warning: Group owners can add external addresses, outside of the domain to their groups. They can also allow people outside your domain to join their groups. If you later disable this option, any external addresses already added to users' groups remain in those groups. 
		///- INVITED_CAN_JOIN: Candidates for membership can be invited to join.  
		///- CAN_REQUEST_TO_JOIN: Non members can request an invitation to join.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanJoin")]
		public string WhoCanJoin { get; set; }
		
		/// <summary>
		/// Permission to leave the group. Possible values are:  
		///- ALL_MANAGERS_CAN_LEAVE 
		///- ALL_MEMBERS_CAN_LEAVE 
		///- NONE_CAN_LEAVE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanLeaveGroup")]
		public string WhoCanLeaveGroup { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can prevent users from posting replies to topics. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanLockTopics")]
		public string WhoCanLockTopics { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can make topics appear at the top of the topic list. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanMakeTopicsSticky")]
		public string WhoCanMakeTopicsSticky { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as a duplicate of another topic. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- MANAGERS_ONLY 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanMarkDuplicate")]
		public string WhoCanMarkDuplicate { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark any other user's post as a favorite reply. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- MANAGERS_ONLY 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanMarkFavoriteReplyOnAnyTopic")]
		public string WhoCanMarkFavoriteReplyOnAnyTopic { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a post for a topic they started as a favorite reply. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- MANAGERS_ONLY 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanMarkFavoriteReplyOnOwnTopic")]
		public string WhoCanMarkFavoriteReplyOnOwnTopic { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as not needing a response. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- MANAGERS_ONLY 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanMarkNoResponseNeeded")]
		public string WhoCanMarkNoResponseNeeded { get; set; }
		
		/// <summary>
		/// Specifies who can moderate content. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanModerateContent")]
		public string WhoCanModerateContent { get; set; }
		
		/// <summary>
		/// Specifies who can manage members. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanModerateMembers")]
		public string WhoCanModerateMembers { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateMembers setting. Specifies who can change group members' roles. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanModifyMembers")]
		public string WhoCanModifyMembers { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanAssistContent setting. Permission to change tags and categories. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- MANAGERS_ONLY 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanModifyTagsAndCategories")]
		public string WhoCanModifyTagsAndCategories { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics into the group or forum. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanMoveTopicsIn")]
		public string WhoCanMoveTopicsIn { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics out of the group or forum. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanMoveTopicsOut")]
		public string WhoCanMoveTopicsOut { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can post announcements, a special topic type. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanPostAnnouncements")]
		public string WhoCanPostAnnouncements { get; set; }
		
		/// <summary>
		/// Permissions to post messages. Possible values are:  
		///- NONE_CAN_POST: The group is disabled and archived. No one can post a message to this group.  
		///- When archiveOnly is false, updating whoCanPostMessage to NONE_CAN_POST, results in an error. 
		///- If archiveOnly is reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.  
		///- ALL_MANAGERS_CAN_POST: Managers, including group owners, can post messages. 
		///- ALL_MEMBERS_CAN_POST: Any group member can post a message. 
		///- ALL_OWNERS_CAN_POST: Only group owners can post a message. 
		///- ALL_IN_DOMAIN_CAN_POST: Anyone in the account can post a message.  
		///- ANYONE_CAN_POST: Any Internet user who outside your account can access your Google Groups service and post a message. Note: When whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanPostMessage")]
		public string WhoCanPostMessage { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanAssistContent setting. Permission to take topics in a forum. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- MANAGERS_ONLY 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanTakeTopics")]
		public string WhoCanTakeTopics { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unassign any topic in a forum. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- MANAGERS_ONLY 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanUnassignTopic")]
		public string WhoCanUnassignTopic { get; set; }
		
		/// <summary>
		/// Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unmark any post from a favorite reply. Possible values are:  
		///- ALL_MEMBERS 
		///- OWNERS_AND_MANAGERS 
		///- MANAGERS_ONLY 
		///- OWNERS_ONLY 
		///- NONE
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanUnmarkFavoriteReplyOnAnyTopic")]
		public string WhoCanUnmarkFavoriteReplyOnAnyTopic { get; set; }
		
		/// <summary>
		/// Permissions to view group messages. Possible values are:  
		///- ANYONE_CAN_VIEW: Any Internet user can view the group's messages.  
		///- ALL_IN_DOMAIN_CAN_VIEW: Anyone in your account can view this group's messages. 
		///- ALL_MEMBERS_CAN_VIEW: All group members can view the group's messages. 
		///- ALL_MANAGERS_CAN_VIEW: Any group manager can view this group's messages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanViewGroup")]
		public string WhoCanViewGroup { get; set; }
		
		/// <summary>
		/// Permissions to view membership. Possible values are:  
		///- ALL_IN_DOMAIN_CAN_VIEW: Anyone in the account can view the group members list.
		///If a group already has external members, those members can still send email to this group.
		/// 
		///- ALL_MEMBERS_CAN_VIEW: The group members can view the group members list. 
		///- ALL_MANAGERS_CAN_VIEW: The group managers can view group members list.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="whoCanViewMembership")]
		public string WhoCanViewMembership { get; set; }
	}
	
	public partial class Misc
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerOptions jsonSerializerSettings;
		
		public Misc(System.Net.Http.HttpClient httpClient, JsonSerializerOptions jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Gets one resource by id.
		/// GroupsSettings_groups_get {groupUniqueId}
		/// </summary>
		/// <param name="groupUniqueId">The group's email address.</param>
		/// <returns>Successful response</returns>
		public async Task<Groups> GroupsSettings_groups_getAsync(string groupUniqueId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (groupUniqueId==null? "" : System.Uri.EscapeDataString(groupUniqueId));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Groups>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Updates an existing resource. This method supports patch semantics.
		/// GroupsSettings_groups_patch {groupUniqueId}
		/// </summary>
		/// <param name="groupUniqueId">The group's email address.</param>
		/// <returns>Successful response</returns>
		public async Task<Groups> GroupsSettings_groups_patchAsync(string groupUniqueId, Groups requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (groupUniqueId==null? "" : System.Uri.EscapeDataString(groupUniqueId));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Groups>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Updates an existing resource.
		/// GroupsSettings_groups_update {groupUniqueId}
		/// </summary>
		/// <param name="groupUniqueId">The group's email address.</param>
		/// <returns>Successful response</returns>
		public async Task<Groups> GroupsSettings_groups_updateAsync(string groupUniqueId, Groups requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (groupUniqueId==null? "" : System.Uri.EscapeDataString(groupUniqueId));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Groups>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
}

namespace Fonlow.Net.Http
{
	using System.Net.Http;

	public class WebApiRequestException : HttpRequestException
	{
		public new System.Net.HttpStatusCode StatusCode { get; private set; }

		public string Response { get; private set; }

		public System.Net.Http.Headers.HttpResponseHeaders Headers { get; private set; }

		public System.Net.Http.Headers.MediaTypeHeaderValue ContentType { get; private set; }

		public WebApiRequestException(string message, System.Net.HttpStatusCode statusCode, string response, System.Net.Http.Headers.HttpResponseHeaders headers, System.Net.Http.Headers.MediaTypeHeaderValue contentType) : base(message)
		{
			StatusCode = statusCode;
			Response = response;
			Headers = headers;
			ContentType = contentType;
		}
	}

	public static class ResponseMessageExtensions
	{
		public static void EnsureSuccessStatusCodeEx(this HttpResponseMessage responseMessage)
		{
			if (!responseMessage.IsSuccessStatusCode)
			{
				var responseText = responseMessage.Content.ReadAsStringAsync().Result;
				var contentType = responseMessage.Content.Headers.ContentType;
				throw new WebApiRequestException(responseMessage.ReasonPhrase, responseMessage.StatusCode, responseText, responseMessage.Headers, contentType);
			}
		}
	}
}