import React, { useState, useEffect } from 'react';

// ============================================
// DOMAINS
// ============================================
const domains = [
  {id:1, name:"Governance Concepts", icon:"\u{1F3DB}", color:"#6366f1", weight:"15%"},
  {id:2, name:"IIQ Architecture", icon:"\u{1F3D7}", color:"#8b5cf6", weight:"15%"},
  {id:3, name:"Identity Cubes", icon:"\u{1F9CA}", color:"#06b6d4", weight:"15%"},
  {id:4, name:"App Onboarding", icon:"\u{1F50C}", color:"#10b981", weight:"10%"},
  {id:5, name:"Role Management", icon:"\u{1F465}", color:"#f59e0b", weight:"10%"},
  {id:6, name:"Policy & Compliance", icon:"\u{1F4DC}", color:"#ef4444", weight:"10%"},
  {id:7, name:"Lifecycle & Provisioning", icon:"\u{1F504}", color:"#ec4899", weight:"10%"},
  {id:8, name:"Access Reviews", icon:"\u2705", color:"#14b8a6", weight:"10%"},
  {id:9, name:"Reporting & Troubleshooting", icon:"\u{1F4CA}", color:"#f97316", weight:"5%"},
];

// ============================================
// QUESTIONS
// Domains 1-3: Step 1 (60 questions)
// Domains 4-6: Step 2 (coming)
// Domains 7-9: Step 3 (coming)
// Format: {d: domainId, q: question, o: [4 options], a: correctIndex, e: explanation}
// ============================================
const questions = [

// -------------------------------------------------------
// DOMAIN 1: Identity Governance Concepts (20 questions)
// -------------------------------------------------------
{d:1, q:"An organization needs to ensure that no single employee can both create and approve purchase orders. Which identity governance control best addresses this requirement?",
o:["Separation of Duties policy","Role-based access control","Access certification campaign","Privileged access management"],a:0,
e:"Separation of Duties (SoD) policies specifically prevent toxic combinations of access where one person could complete an entire critical business process. RBAC assigns access based on roles but doesn't inherently prevent conflicting access combinations. Access certifications review existing access periodically but don't proactively block policy violations at request time. PAM controls privileged accounts but doesn't address business-process-level conflicts."},

{d:1, q:"A company is deploying an identity governance solution and wants to reduce the number of standing access privileges across the organization. Which approach aligns with this goal?",
o:["Implementing just-in-time access provisioning","Creating more granular roles for each department","Running quarterly access certification campaigns","Deploying a single sign-on solution"],a:0,
e:"Just-in-time (JIT) provisioning grants access only when needed and revokes it afterward, directly reducing standing privileges. Creating more granular roles may improve accuracy but doesn't reduce standing access since roles still grant persistent entitlements. Quarterly certifications can revoke stale access but operate on a delayed schedule and don't prevent accumulation. SSO simplifies authentication but doesn't reduce the number of underlying entitlements."},

{d:1, q:"During an access review, a manager notices an employee has entitlements from a previous role that are no longer needed. What identity governance concept does this scenario illustrate?",
o:["Access creep","Privilege escalation","Orphan account","Entitlement sprawl"],a:0,
e:"Access creep occurs when users accumulate entitlements over time through role changes without having old access removed. Privilege escalation refers to gaining elevated permissions beyond what was intended, typically through exploitation or misconfiguration. An orphan account is one that no longer has an associated active identity. Entitlement sprawl describes the uncontrolled growth of entitlements in applications rather than accumulation on a specific user."},

{d:1, q:"An auditor asks the IT team to demonstrate that access to financial systems is reviewed regularly and compliant with SOX requirements. Which identity governance capability directly supports this?",
o:["Access certification campaigns","Automated provisioning workflows","Password management policies","Identity lifecycle management"],a:0,
e:"Access certification campaigns (access reviews) allow managers and application owners to periodically attest that user access is appropriate, directly producing SOX compliance evidence. Automated provisioning handles granting and revoking access but doesn't produce compliance attestation records. Password policies address authentication security, not access appropriateness. Lifecycle management handles joiner/mover/leaver processes but doesn't generate the audit attestation that SOX requires."},

{d:1, q:"A healthcare organization must comply with HIPAA regulations and needs to track who accessed patient records and when. Which identity governance principle is most relevant?",
o:["Audit trail and activity monitoring","Least privilege access","Segregation of duties","Role mining"],a:0,
e:"Audit trails and activity monitoring provide the who/what/when records needed for HIPAA compliance regarding PHI access. Least privilege limits access scope but doesn't track access events. SoD prevents conflicting access but isn't primarily about monitoring access to records. Role mining discovers role definitions from existing access patterns, not for tracking access activity."},

{d:1, q:"A company wants to automatically assign application access when an employee joins a specific department. Which identity governance process handles this?",
o:["Birthright provisioning","Request-based provisioning","Access certification","Entitlement remediation"],a:0,
e:"Birthright provisioning automatically grants baseline access based on identity attributes like department or job title without requiring a request. Request-based provisioning requires the user or manager to initiate an access request. Access certification reviews existing access but doesn't assign new access. Entitlement remediation removes inappropriate access found during reviews."},

{d:1, q:"An organization discovers that 40% of its application accounts cannot be linked to any current employee. What identity governance problem does this represent?",
o:["Orphan accounts","Access creep","Role explosion","Entitlement proliferation"],a:0,
e:"Orphan accounts are application accounts that have no corresponding active identity in the governance system, often from former employees whose access wasn't properly deprovisioned. Access creep is the accumulation of excessive privileges on active accounts. Role explosion is having too many roles, making governance unmanageable. Entitlement proliferation is the uncontrolled growth of fine-grained permissions within applications."},

{d:1, q:"A risk manager wants to quantify and prioritize which access combinations pose the greatest compliance risk. Which identity governance capability supports this need?",
o:["Risk-based access modeling","Access request workflows","Role engineering","Identity aggregation"],a:0,
e:"Risk-based access modeling assigns risk scores to entitlements and their combinations, allowing prioritization of governance activities based on risk level. Access request workflows manage the process of requesting and approving access but don't quantify risk. Role engineering defines roles from business needs but doesn't inherently score risk. Identity aggregation links accounts to identities but doesn't assess risk levels."},

{d:1, q:"After an acquisition, a company needs to bring 500 new employees into its identity governance platform quickly. Which capability is most critical for this scenario?",
o:["Identity lifecycle management with automated onboarding","Manual access reviews by department managers","Incremental role mining on the new population","Password synchronization across all systems"],a:0,
e:"Identity lifecycle management with automated onboarding can process large groups of new identities systematically through joiner workflows, applying birthright access and creating necessary accounts. Manual reviews would be too slow and error-prone for 500 users. Role mining is useful for discovery but is an analysis activity, not an onboarding mechanism. Password synchronization handles credentials but doesn't provision the underlying access."},

{d:1, q:"An organization implements a policy that users must request access through a portal and receive manager approval before gaining access to any application. What governance model does this describe?",
o:["Request-based access with approval workflows","Birthright provisioning","Preventive separation of duties","Attribute-based access control"],a:0,
e:"Request-based access with approval workflows requires users to submit requests that go through defined approval chains before access is granted. Birthright provisioning grants access automatically based on attributes without requests. Preventive SoD blocks conflicting access combinations but isn't a provisioning model. ABAC evaluates attributes at access time rather than requiring portal requests."},

{d:1, q:"A compliance officer needs to ensure that when employees transfer between departments, their old access is removed and new access for their new role is granted. Which governance concept addresses this?",
o:["Mover process in identity lifecycle management","Access certification campaign","Separation of duties enforcement","Privileged access review"],a:0,
e:"The mover process in identity lifecycle management specifically handles internal transfers by revoking access associated with the old role and provisioning access for the new role. Access certifications review existing access periodically but aren't triggered by transfer events. SoD enforcement prevents policy violations but doesn't handle the access transition itself. Privileged access review is limited to elevated accounts, not general role transitions."},

{d:1, q:"Which identity governance principle states that users should only be given the minimum access necessary to perform their job functions?",
o:["Least privilege","Need to know","Zero trust","Defense in depth"],a:0,
e:"Least privilege is the principle that users should have only the minimum level of access required for their job duties. Need to know is related but specifically applies to data classification and information access rather than system entitlements broadly. Zero trust is a security architecture model that requires continuous verification, not specifically about minimizing privileges. Defense in depth is a layered security approach, not an access minimization principle."},

{d:1, q:"A bank's internal audit team discovers that some users have both the ability to create vendor records and approve payments to those vendors. What type of violation has been identified?",
o:["Separation of duties violation","Excessive privilege violation","Orphan account violation","Data classification violation"],a:0,
e:"This is a separation of duties violation because one user can both create a vendor and approve payments to that vendor, enabling potential fraud. Excessive privilege means having more access than needed but doesn't specifically address the conflict between two functions. Orphan account violations involve unlinked accounts, not relevant here. Data classification violations involve mishandling data sensitivity levels."},

{d:1, q:"An organization wants to build roles by analyzing existing user-to-entitlement assignments across applications to identify common access patterns. What is this process called?",
o:["Role mining","Access certification","Policy simulation","Entitlement cataloging"],a:0,
e:"Role mining analyzes existing access assignments to discover common entitlement patterns that can be formalized as roles. Access certification is the review and attestation of existing access. Policy simulation tests what-if scenarios for policy changes. Entitlement cataloging creates an inventory of available permissions but doesn't discover role patterns from usage data."},

{d:1, q:"A company has deployed identity governance but finds that managers rubber-stamp all access reviews without actually evaluating them. What is the recommended approach to address this?",
o:["Implement risk-based certification with targeted reviews and escalation","Increase the frequency of certification campaigns","Remove managers from the certification process entirely","Reduce the number of entitlements visible in each review"],a:0,
e:"Risk-based certification focuses reviewer attention on high-risk items and can escalate unreviewed items, making reviews more meaningful and manageable. Increasing frequency worsens reviewer fatigue and rubber-stamping. Removing managers eliminates valuable business context about whether access is appropriate. Reducing visible entitlements might hide items that actually need review."},

{d:1, q:"An organization's HR system is considered the authoritative source for employee data. In identity governance, what role does this HR system play?",
o:["Authoritative source of identity","Target application for provisioning","Governance policy engine","Access certification data source"],a:0,
e:"An authoritative source (source of truth) provides the canonical identity data (names, departments, hire dates, termination status) that drives governance processes. A target application is a system where access is provisioned and managed. The governance policy engine evaluates rules and policies within the IGA platform itself. An access certification data source is not a standard governance term; certifications draw data from the IGA platform."},

{d:1, q:"What is the primary difference between detective and preventive governance controls?",
o:["Preventive controls block violations before they occur; detective controls identify violations after the fact","Preventive controls are automated; detective controls are always manual","Preventive controls apply to privileged users only; detective controls apply to all users","Preventive controls run in real-time only; detective controls are always batch-based"],a:0,
e:"Preventive controls (like SoD policy checks during access requests) block violations proactively, while detective controls (like access certifications) find existing violations after they've occurred. Both types can be automated or manual. Both apply to all user types regardless of privilege level. Detective controls can also operate in near-real-time, not just batch mode."},

{d:1, q:"An organization wants to implement a governance program in phases. Which component should typically be implemented first?",
o:["Identity aggregation and correlation from authoritative sources","Full role-based access control model with complete role hierarchy","Automated provisioning to all target applications","Advanced analytics and risk scoring"],a:0,
e:"Identity aggregation and correlation establish the foundational view of who has access to what, which is prerequisite before other governance capabilities can function effectively. A full RBAC model requires understanding current access patterns first. Automated provisioning needs identity data and potentially roles in place. Advanced analytics require aggregated identity and access data to analyze."},

{d:1, q:"What governance benefit does an access request catalog provide when it shows users only the access they are eligible to request?",
o:["It reduces inappropriate access requests and enforces policy at the request stage","It eliminates the need for access certifications entirely","It replaces separation of duties policies","It removes the requirement for manager approvals"],a:0,
e:"A curated request catalog constrains what users can request based on policies and eligibility, reducing inappropriate requests before they enter the approval workflow. Certifications are still needed to review access that was appropriately granted but may no longer be needed. SoD policies are still needed to prevent toxic combinations even within eligible items. Manager approvals remain a governance control even with a filtered catalog."},

{d:1, q:"A newly hired compliance analyst asks why the organization tracks both entitlements and roles in its governance platform. What is the best explanation?",
o:["Roles group entitlements into business-meaningful collections, making governance scalable; entitlements are the fine-grained permissions that roles contain","Roles and entitlements are different terms for the same thing and are tracked for backward compatibility","Entitlements are for IT users only while roles are for business users only","Roles are only used during access reviews while entitlements are only used during provisioning"],a:0,
e:"Roles aggregate fine-grained entitlements into business-understandable bundles (like 'Accounts Payable Clerk'), making governance manageable at scale. Roles and entitlements are distinct concepts with different granularity. Both apply to all user types. Both are used across governance processes including reviews, provisioning, and policy enforcement."},

// -------------------------------------------------------
// DOMAIN 2: IdentityIQ Architecture (20 questions)
// -------------------------------------------------------
{d:2, q:"A SailPoint consultant is designing an IdentityIQ deployment and must decide where identity data, workflow state, and configuration objects will be persisted. Which component serves as the primary persistent store?",
o:["The relational database (e.g., MySQL, Oracle, SQL Server)","The application server's file system","An in-memory identity cube cache","The SailPoint Cloud Gateway"],a:0,
e:"IdentityIQ uses a relational database as its primary persistent store for all identity data, configuration objects, workflow states, and audit logs. The application server file system stores the deployed WAR file and log files but not identity data. Identity cubes are logical objects loaded from the database, not a separate persistent cache layer. The Cloud Gateway connects to SaaS applications, not for data storage."},

{d:2, q:"A deployment engineer needs to understand the runtime environment for IdentityIQ. Which statement best describes how IdentityIQ is deployed?",
o:["As a Java web application (WAR file) on a Java application server like Tomcat","As a standalone desktop application installed on each administrator's workstation","As a microservices-based container deployment requiring Kubernetes","As a browser extension that connects directly to managed applications"],a:0,
e:"IdentityIQ is packaged as a WAR file deployed on a Java application server like Apache Tomcat. It is not a desktop application; it provides a web-based UI accessed via browser. While containers can host Tomcat, IIQ is not natively microservices-based. It is a server-side application, not a browser extension."},

{d:2, q:"An administrator notices that IdentityIQ stores its configuration, rules, and policies as XML. What are these XML-based configuration artifacts called?",
o:["SailPoint XML objects (artifacts)","SCIM resources","LDAP schema entries","SAML metadata documents"],a:0,
e:"IdentityIQ configuration is stored as SailPoint XML objects that can be imported, exported, and version-controlled. SCIM is a protocol for identity provisioning between systems, not IIQ's internal configuration format. LDAP schema entries define directory attributes. SAML metadata documents configure federated authentication, not IIQ's internal configuration."},

{d:2, q:"During installation, the IdentityIQ team must create the database schema. Which approach is used to initialize the IdentityIQ database?",
o:["Running the provided SQL schema scripts and using the iiq console import command","Using the IdentityIQ Plugin Manager GUI","Running the SailPoint Cloud Gateway installer","Calling the IdentityIQ REST API's schema endpoint"],a:0,
e:"The iiq console and bundled SQL scripts create and update the database schema during installation and upgrades. The Plugin Manager manages plugins after deployment, not the core database schema. The Cloud Gateway connects SaaS apps, not database initialization. The REST API provides integration endpoints, not database schema management."},

{d:2, q:"An architect needs to integrate IdentityIQ with a custom internal application that lacks a pre-built connector. Which component would they develop?",
o:["A custom connector using the SailPoint Connector API (openconnector framework)","A custom identity cube type","A custom database view in the IIQ database","A custom SAML identity provider"],a:0,
e:"Custom connectors implement the SailPoint openconnector API to integrate with applications that lack out-of-the-box support. Identity cubes represent identities, not application integrations. Database views in the IIQ database aren't the connector mechanism. A SAML identity provider handles SSO, not application data aggregation and provisioning."},

{d:2, q:"A performance issue occurs during large aggregation tasks. What is the correct order of aggregation processing in IdentityIQ?",
o:["Connect to application \u2192 read accounts/entitlements \u2192 correlate to identities \u2192 refresh identity cubes","Read identity cubes \u2192 push changes to applications \u2192 update database \u2192 send notifications","Import XML config \u2192 validate schema \u2192 deploy connectors \u2192 run certification","Read role definitions \u2192 calculate risk scores \u2192 generate reports \u2192 archive data"],a:0,
e:"Aggregation connects to the application via a connector, reads account and entitlement data, correlates those accounts to identities, and refreshes identity cubes with updated data. The second option describes provisioning, not aggregation. The third describes deployment tasks. The fourth describes analytics, not aggregation."},

{d:2, q:"Which IdentityIQ component is responsible for executing scheduled operations like aggregation, certification generation, and report generation?",
o:["The task scheduler and task execution framework","The identity warehouse","The connector gateway","The web browser client"],a:0,
e:"The task scheduler triggers and manages scheduled operations such as aggregations, certifications, and reports. The identity warehouse is the database where data is stored, not an execution engine. The connector gateway mediates connections to applications but doesn't schedule tasks. The browser client provides the user interface, not backend task execution."},

{d:2, q:"An administrator needs to promote configuration changes from a development environment to production. Which approach is standard practice in IdentityIQ?",
o:["Export SailPoint XML objects from dev and import them into production via a deployment pipeline","Copy the entire database from dev to production","Manually recreate all configuration in production through the UI","Use the built-in environment synchronization feature"],a:0,
e:"The standard practice is to export XML objects from development and import them into production, often through version control and a deployment pipeline. Copying the entire database would overwrite production identity data. Manual recreation is error-prone and not repeatable. There is no built-in automatic environment synchronization feature in IIQ."},

{d:2, q:"Which IdentityIQ architectural layer handles business logic such as policy evaluation, workflow execution, and role calculations?",
o:["The server-side application layer (business logic tier)","The database layer","The connector layer","The presentation layer (UI)"],a:0,
e:"The server-side application layer contains the core business logic including policy engines, workflow execution, role computation, and certification processing. The database layer stores and retrieves data but doesn't execute business logic. The connector layer handles communication with target applications. The presentation layer renders the UI and handles user interactions."},

{d:2, q:"An organization runs IdentityIQ on multiple application server nodes for high availability. How does IdentityIQ coordinate task execution across clustered nodes?",
o:["Through the shared database which manages task assignment and prevents duplicate execution","Through a dedicated message broker like RabbitMQ or Kafka","Through direct peer-to-peer communication between server nodes","Through a centralized load balancer that assigns tasks to specific nodes"],a:0,
e:"In a clustered deployment, IdentityIQ nodes coordinate through the shared database, which manages task locking and assignment to prevent duplicate execution. IIQ doesn't require a separate message broker for task coordination. Nodes don't communicate peer-to-peer for task management. Load balancers distribute HTTP requests but don't coordinate backend task execution logic."},

{d:2, q:"What is the role of ServiceDefinition XML objects in IdentityIQ?",
o:["They define background services and their execution configurations within IdentityIQ","They define REST API endpoints exposed by IdentityIQ","They store user password policies","They configure the database connection pool settings"],a:0,
e:"ServiceDefinition XML objects define background services (like the Task Scheduler service or Request Processor) and their configurations. REST API endpoints are defined by the application framework and plugins, not ServiceDefinitions. Password policies are stored as Policy objects. Database connection settings are configured in the application server's data source configuration files."},

{d:2, q:"An IdentityIQ developer needs to add a custom REST endpoint and a custom UI page. Which extension mechanism supports this?",
o:["The IdentityIQ plugin framework","The connector development kit","The XML object import mechanism","The identity refresh process"],a:0,
e:"The plugin framework allows developers to add custom REST endpoints, UI pages, service executors, and other extensions packaged as installable plugins. The connector development kit builds application connectors, not UI or REST extensions. XML import loads configuration objects but doesn't extend application functionality with new code. Identity refresh is a data processing operation, not an extension mechanism."},

{d:2, q:"Which IdentityIQ object type defines the rules for mapping account attributes from a connected application to identity attributes?",
o:["The Application object (via correlation and attribute mapping configuration)","The TaskDefinition object","The Workflow object","The Policy object"],a:0,
e:"The Application object contains the correlation configuration and attribute mappings that determine how application account attributes map to identity cube attributes. TaskDefinition defines executable tasks but not attribute mappings. Workflows define multi-step business processes. Policies define compliance rules, not attribute mappings."},

{d:2, q:"An administrator needs to debug why certain identities aren't correlating with their application accounts during aggregation. Where should they look first?",
o:["The correlation configuration on the Application object","The certification schedule","The role hierarchy definition","The email notification templates"],a:0,
e:"Correlation issues are caused by incorrect correlation rules or attribute mappings defined on the Application object. Certification schedules control review timing, not identity-to-account correlation. Role hierarchy defines role relationships, not account correlation logic. Email templates handle notifications, not data correlation."},

{d:2, q:"What is the purpose of the IdentityIQ Accelerator Pack?",
o:["It provides pre-built configuration, workflows, and best practices to speed up deployment","It is a hardware acceleration module for improving aggregation performance","It is a separate SaaS product for cloud-only deployments","It is a testing framework for automated regression testing of IIQ"],a:0,
e:"The Accelerator Pack includes pre-built workflows, lifecycle events, roles, and configuration based on best practices to reduce implementation time. It is not hardware; it's a software configuration package. It's not a separate SaaS product; it enhances on-premise IIQ. It's not a testing framework; it's deployment-ready configuration."},

{d:2, q:"In IdentityIQ's object model, what is the relationship between a Bundle and a Role?",
o:["Bundle is the internal XML object type name that represents what the UI displays as a Role","A Bundle is a collection of multiple roles grouped for certification campaigns","A Role is a specific subtype of Bundle used exclusively for IT entitlements","Bundles and Roles are completely separate and unrelated object types"],a:0,
e:"In IdentityIQ's object model, 'Bundle' is the XML object type name for what appears as 'Role' in the UI. They are the same object. Bundles are not collections of roles; each Bundle is one role. The term Bundle applies to all role types (business, IT, entitlement), not just IT. They are not separate objects."},

{d:2, q:"An organization needs IdentityIQ to process access requests asynchronously with multi-level approvals and escalation. Which component handles this?",
o:["The workflow engine","The aggregation task framework","The identity refresh task","The connector framework"],a:0,
e:"The workflow engine manages asynchronous, multi-step business processes including access requests with approvals, escalations, and provisioning actions. Aggregation tasks read data from applications. Identity refresh updates identity cube attributes and calculations. The connector framework handles connectivity to target applications, not business process orchestration."},

{d:2, q:"What is the purpose of the SystemConfiguration object in IdentityIQ?",
o:["It stores global settings that affect the behavior of the entire IdentityIQ deployment","It stores individual user preferences for the IdentityIQ UI","It defines the database schema version number","It holds the Java application server configuration"],a:0,
e:"The SystemConfiguration object stores global settings like email configuration, feature flags, and default behaviors affecting the entire IIQ instance. Individual user preferences are stored on Identity objects or UIPreferences. Database schema versions are tracked by upgrade scripts. Application server configuration is managed outside IIQ in the app server's own config files."},

{d:2, q:"An on-premises IdentityIQ deployment needs to connect to a SaaS application accessible only over the internet. Which component enables this connectivity?",
o:["The SailPoint Cloud Gateway (Virtual Appliance)","A custom JDBC database connector","The IdentityIQ plugin framework","The task scheduler"],a:0,
e:"The Cloud Gateway (Virtual Appliance) acts as a secure relay between the on-premises IdentityIQ and cloud/SaaS applications without requiring inbound firewall rules. JDBC connectors connect to databases, not SaaS applications. The plugin framework extends IIQ functionality but doesn't solve network connectivity. The task scheduler runs jobs but doesn't handle network routing to external services."},

{d:2, q:"Which IdentityIQ component manages the complete access request lifecycle from submission through approval to provisioning plan generation?",
o:["The Lifecycle Manager (LCM)","The Compliance Manager","The Role Modeler (Role Editor)","The Report Generator"],a:0,
e:"The Lifecycle Manager handles the complete access request lifecycle from submission through approval workflows to provisioning plan execution. The Compliance Manager handles policy enforcement and certifications. The Role Modeler provides tools for role definition and analysis. The Report Generator creates reports but doesn't manage request lifecycles."},

// -------------------------------------------------------
// DOMAIN 3: Identity Cubes & Identity Management (20 questions)
// -------------------------------------------------------
{d:3, q:"A SailPoint administrator discovers that aggregation brought in 500 new accounts but only 350 were automatically linked to existing identities. What determines whether an account is correlated to an identity?",
o:["The correlation configuration and rules defined on the Application object","The number of available IdentityIQ licenses","The identity cube refresh schedule frequency","The role assignment criteria on Bundle objects"],a:0,
e:"Correlation configuration on the Application object defines the rules for matching application accounts to identities (e.g., matching account username to employee ID). Licensing doesn't affect correlation logic. The refresh schedule determines when cubes are recalculated, not how accounts are matched. Role assignment criteria define who gets roles, not how accounts link to identities."},

{d:3, q:"An identity cube in IdentityIQ shows a user has accounts on Active Directory, SAP, and ServiceNow. What does the identity cube represent?",
o:["A unified view of a single person with all their linked accounts, entitlements, roles, and attributes","A single application account record with its entitlements","A database table containing all users in the organization","A role-to-entitlement mapping definition"],a:0,
e:"An identity cube is the central representation of a person in IIQ, aggregating all their accounts, entitlements, roles, and attributes from across connected applications into one unified view. It is not a single account record; it contains multiple accounts as Links. It's not a database table; it's a logical identity object. It's not limited to role mappings; it includes all identity data."},

{d:3, q:"During aggregation, a new account from an HR application created a new identity rather than correlating to an existing one. What is the most likely cause?",
o:["The correlation rule could not find a matching identity based on the configured matching attributes","The identity cube storage has reached its maximum capacity","The application connector timed out during the aggregation process","The role model was not properly configured for the HR application"],a:0,
e:"When correlation fails to find a matching identity, IIQ creates a new identity for the uncorrelated account. This usually means matching attributes (like employee ID or email) don't align between the source and existing identities. There is no identity cube capacity limit that causes this. A connector timeout would fail the aggregation entirely, not create new identities. Role configuration doesn't affect identity correlation."},

{d:3, q:"An administrator needs to add a custom attribute to track each employee's cost center on their identity. What is the correct approach?",
o:["Define the attribute in the ObjectConfig for Identity and configure a mapping from the authoritative source","Create a separate database table for cost center data outside of IIQ","Modify the Identity Java class source code directly","Add a column directly to the spt_identity database table"],a:0,
e:"Custom identity attributes are defined in the Identity ObjectConfig XML, and values are populated through attribute mappings from authoritative sources. Creating separate tables bypasses IIQ's data model and won't be visible in the UI. IIQ's Java classes are compiled and not meant to be modified directly. Adding columns directly to the database breaks IIQ's ORM layer and will be overwritten during upgrades."},

{d:3, q:"What is the difference between a standard identity attribute and an extended identity attribute in IdentityIQ?",
o:["Standard attributes have dedicated database columns; extended attributes use a flexible storage mechanism","Standard attributes come from HR systems; extended attributes come from IT systems","Standard attributes are read-only; extended attributes are editable by end users","There is no difference; the terms are interchangeable"],a:0,
e:"Standard attributes (firstname, lastname, email, manager) have dedicated columns in the spt_identity table for efficient querying. Extended attributes use a flexible storage mechanism (like CLOBs or configurable extended columns) for custom data. Both can come from any authoritative source. Both can be configured as read-only or editable. They are architecturally different in how they're stored and indexed."},

{d:3, q:"An identity refresh task runs nightly. What is the primary purpose of the identity refresh in IdentityIQ?",
o:["To recalculate identity attributes, role assignments, policy violations, and risk scores based on current data","To aggregate accounts from all connected applications","To permanently delete inactive identities from the system","To synchronize passwords across all connected applications"],a:0,
e:"Identity refresh recalculates derived identity data including attribute mappings, role assignments (via assignment rules), policy violation checks, and risk scores using the latest aggregated data. Aggregation is a separate task that reads data from applications. Identity refresh doesn't delete identities. Password synchronization is handled by password management features, not identity refresh."},

{d:3, q:"A manager reports that an employee's department attribute in IdentityIQ doesn't match the HR system, even though aggregation completed successfully. What should the administrator check?",
o:["The identity attribute mapping configuration to ensure department is correctly mapped from the authoritative source","The email notification template configuration","The certification campaign schedule","The password complexity policy"],a:0,
e:"If an attribute doesn't reflect the authoritative source after aggregation, the attribute mapping is likely incorrect, missing, or pointing to the wrong source attribute. Email templates don't affect identity data. Certification schedules don't impact attribute values. Password policies are completely unrelated to identity attribute mapping."},

{d:3, q:"An administrator needs to prevent duplicate identities when employees have accounts across multiple applications. Which feature prevents this?",
o:["Identity correlation rules that match accounts from different applications to the same identity","Application-level password policies","The certification revocation process","Role mining algorithms"],a:0,
e:"Correlation rules match accounts from various applications to a single identity based on matching attributes (like employee ID), preventing duplicates. Password policies control password requirements, not identity uniqueness. Certification revocation removes access, not duplicate identities. Role mining discovers role patterns from access data, not identity duplicates."},

{d:3, q:"An organization has an authoritative source (HR system) and several target applications. During identity creation, which source's data takes precedence for core attributes?",
o:["The authoritative source (HR system)","The most recently aggregated application","The application with the most user accounts","All sources are weighted equally by default"],a:0,
e:"The authoritative source (typically HR) takes precedence for core identity attributes like name, department, and manager since it's the source of truth for employee data. Aggregation order doesn't determine attribute precedence. Account count doesn't affect source authority. Attribute sources are explicitly prioritized in the mapping configuration, not equally weighted."},

{d:3, q:"When a terminated employee's record is removed from the authoritative HR system, what happens to their identity in IdentityIQ?",
o:["The identity can be marked as inactive, triggering leaver workflows that deprovision associated accounts","The identity and all associated data are immediately and permanently deleted","The identity remains completely unchanged until an administrator manually updates it","Only the identity's password is reset while all access remains intact"],a:0,
e:"When the authoritative source no longer contains a record, IIQ can detect this during aggregation, mark the identity inactive, and trigger leaver lifecycle events that disable or remove accounts. IIQ doesn't permanently delete identities immediately; it manages them through configurable lifecycle processes. The identity isn't simply left unchanged; disappearance from the authoritative source is a trackable event. Password reset alone wouldn't properly handle a termination."},

{d:3, q:"An administrator is configuring identity correlation for a legacy application where account names follow a pattern of 'first initial + last name + department code.' Standard attribute matching won't work. What should they configure?",
o:["A custom correlation rule written in BeanShell or Java that parses the account name pattern","A direct SQL join between the IIQ database and the legacy application database","A manual CSV import mapping each account to its corresponding identity","A SAML assertion configuration to link accounts to identities"],a:0,
e:"A custom correlation rule (BeanShell or Java) can implement complex matching logic like parsing proprietary naming patterns to extract matching criteria. Direct SQL joins between databases bypass IIQ's architecture and are not supported for correlation. CSV imports could work as a one-time manual fix but aren't sustainable for ongoing correlation. SAML is an authentication federation protocol, not a correlation mechanism."},

{d:3, q:"What information is stored in the Links section of an identity cube?",
o:["The application accounts that are correlated to (linked with) the identity","Hyperlinks to external documentation about the employee","References to the identity's management chain hierarchy","URLs of the applications the identity can access"],a:0,
e:"In IIQ, a Link is an application account correlated to an identity. The Links section shows all application accounts belonging to that person with their attributes and entitlements. They are not hyperlinks or URLs. Manager relationships are stored as identity attributes (the manager reference). Application URLs are stored on Application objects, not as identity Links."},

{d:3, q:"An organization wants to automatically calculate each identity's risk score based on the sensitivity of their entitlements. Which IdentityIQ feature supports this?",
o:["Composite risk scoring using entitlement and application risk weights","Password expiration policy enforcement","Certification campaign scheduling","Application schema discovery"],a:0,
e:"Composite risk scoring aggregates risk values assigned to individual entitlements and applications to calculate an overall identity risk score automatically. Password expiration policies manage credential lifecycle, not risk scoring. Certification scheduling determines review timing, not risk computation. Application schema discovery reads application data structures, not risk values."},

{d:3, q:"An aggregation detects that several accounts have been removed from a target application. How does IdentityIQ handle these missing accounts?",
o:["The accounts can be marked as removed or their links deleted from identities based on aggregation configuration","IdentityIQ immediately re-creates the accounts in the target application","IdentityIQ ignores missing accounts and takes no action by default","New identities are automatically created for each missing account"],a:0,
e:"When aggregation detects missing accounts, IIQ can mark them as removed, delete the link from the identity, or trigger remediation based on the application's aggregation configuration. IIQ doesn't re-create accounts in target systems during aggregation. IIQ does track and act on missing accounts through configurable behaviors. Missing accounts don't trigger new identity creation."},

{d:3, q:"What is the purpose of identity attribute mappings in IdentityIQ?",
o:["To define which application or source attributes populate which identity cube attributes","To create a visual org chart of all identities in the organization","To map physical office locations to identity records","To define the relationship between roles and their contained entitlements"],a:0,
e:"Identity attribute mappings define the rules for how source attributes (like HR department, title, email) flow into identity cube attributes. They don't create org charts; manager relationships are just one attribute. They don't map physical locations unless specifically configured as an attribute. Role-to-entitlement relationships are defined in role (Bundle) profiles, not identity attribute mappings."},

{d:3, q:"A contractor's identity in IdentityIQ should only be active during their contract period. Which identity management feature supports this?",
o:["Lifecycle events triggered by contract start and end dates from the authoritative source","Manual account creation and deletion by the helpdesk for each contract","Password rotation policies that expire after the contract period","Application-level account expiration settings on each individual system"],a:0,
e:"Lifecycle events can be configured to activate and deactivate identities based on date attributes (like contract start/end dates) from the authoritative source, providing automated governance. Manual management is error-prone and unscalable. Password rotation doesn't control identity activation status. Application-level settings only affect individual applications, not centralized identity lifecycle governance."},

{d:3, q:"What is the difference between account aggregation and entitlement aggregation in IdentityIQ?",
o:["Account aggregation reads user accounts and their assignments; entitlement aggregation reads the catalog of available permissions from an application","Account aggregation is always faster than entitlement aggregation","Account aggregation runs only daily; entitlement aggregation runs only weekly","There is no difference; they are the same operation with different names"],a:0,
e:"Account aggregation reads individual user accounts and their current entitlement assignments. Entitlement aggregation reads the catalog of available entitlements (like AD groups, SAP roles) from the application, populating IIQ's entitlement catalog. Speed depends on data volume, not aggregation type. Both can be scheduled at any frequency. They are distinct operations with different purposes and results."},

{d:3, q:"An administrator needs to merge two identity cubes that represent the same person. What is the recommended approach?",
o:["Use the identity merge capability to combine accounts and history onto the surviving identity","Delete both identities and re-aggregate from all sources","Create a third identity and manually reassign all accounts to it","Wait for the next aggregation cycle to automatically detect and merge duplicates"],a:0,
e:"IdentityIQ provides identity merge functionality to consolidate duplicate identities, preserving all account links and historical data on the surviving identity. Deleting both and re-aggregating risks data loss and creates disruption. Creating a third identity adds complexity. Aggregation doesn't automatically detect or merge duplicate identities; correlation only runs for new or updated accounts."},

{d:3, q:"What does the 'inactive' flag on an identity indicate in IdentityIQ?",
o:["The person is no longer active (e.g., terminated or on extended leave) and their access may be restricted","The identity record is corrupted and needs database repair","The identity has never logged into the IdentityIQ web interface","The identity's application accounts are locked due to failed password attempts"],a:0,
e:"The inactive flag indicates the person is no longer in an active employment state, typically triggering leaver processes to disable or remove their access across systems. It doesn't indicate data corruption. It's unrelated to whether someone has logged into IIQ's UI. Application-level account lockouts are managed separately and don't set the identity-level inactive flag."},

{d:3, q:"After aggregation, some identity cube attributes are being overwritten by values from a non-authoritative application. What should the administrator check?",
o:["The attribute mapping source priority to ensure the authoritative source has the highest precedence","The application's connector type and version","The aggregation task schedule timing","The role assignment rule definitions"],a:0,
e:"Attribute mappings can have multiple sources with priority ordering. If a non-authoritative source has higher priority (or the authoritative source mapping is missing), its values will overwrite correct values. The connector type doesn't determine attribute priority. The aggregation schedule affects timing but not which source wins for attributes. Role assignment rules determine role membership, not identity attribute source precedence."},

// -------------------------------------------------------
// DOMAIN 4: Application Onboarding & Connectors (20 questions)
// -------------------------------------------------------
{d:4, q:"A SailPoint administrator needs to connect IdentityIQ to an on-premises Active Directory environment. Which connector type is most appropriate?",
o:["The native Active Directory connector","The JDBC database connector","The DelimitedFile (flat file) connector","The Web Services connector"],a:0,
e:"The native Active Directory connector is purpose-built for AD, supporting LDAP operations, group management, and AD-specific features like delta aggregation. JDBC connects to relational databases, not LDAP directories. DelimitedFile reads CSV/delimited text files, not live directories. Web Services connectors interact with REST/SOAP APIs, not LDAP."},

{d:4, q:"During application onboarding, an administrator needs to define how IdentityIQ reads account data from a connected application. What does the application schema define?",
o:["The structure of accounts and entitlements (attribute names, types, and relationships) readable from the application","The visual layout of the application in the IdentityIQ UI","The scheduling frequency for aggregation tasks against this application","The approval workflow for access requests to this application"],a:0,
e:"The application schema defines the account and group (entitlement) attributes that IIQ knows about, including data types, multi-value flags, and entitlement designations. UI layout is not part of the schema. Scheduling is configured on task objects. Approval workflows are defined separately in workflow objects."},

{d:4, q:"An organization has a legacy HR system that exports employee data to a CSV file nightly. How should IdentityIQ import this data?",
o:["Use the DelimitedFile connector pointing to the CSV file location","Use the Active Directory connector","Use the JDBC database connector to read the CSV directly","Use the SCIM 2.0 connector"],a:0,
e:"The DelimitedFile connector reads CSV and other delimited text files, making it ideal for file-based exports. The AD connector is for LDAP directories. JDBC connects to relational databases, not flat files. SCIM is for cloud identity provisioning APIs, not file imports."},

{d:4, q:"What is the purpose of schema discovery during application onboarding in IdentityIQ?",
o:["To automatically detect the account and entitlement attributes available in the connected application","To discover all identities that should exist in the system","To find policy violations already present in the application","To identify roles that should be created from the application's data"],a:0,
e:"Schema discovery connects to the application and reads its metadata to determine what account and entitlement attributes are available, populating the application schema. It doesn't discover identities; that's aggregation and correlation. Policy violations are found by policy scans. Role discovery comes from role mining, not schema discovery."},

{d:4, q:"After connecting a new application, the administrator runs account aggregation but no accounts appear in IdentityIQ. What is the most likely first troubleshooting step?",
o:["Test the application connection and verify connector configuration (credentials, base DN, search filters)","Restart the IdentityIQ application server immediately","Delete and recreate all existing identities in IIQ","Run an identity refresh task before aggregation"],a:0,
e:"Connection and configuration issues (wrong credentials, incorrect base DN, overly restrictive search filters) are the most common reasons aggregation returns no data. Restarting the app server is unlikely to fix a configuration problem. Deleting identities would be destructive and unrelated. Identity refresh operates on already-aggregated data, not raw application data."},

{d:4, q:"An IdentityIQ deployment needs to connect to a SaaS application that provides a REST API for user management. Which connector type is most appropriate?",
o:["The Web Services connector","The JDBC connector","The LDAP connector","The DelimitedFile connector"],a:0,
e:"The Web Services connector is designed for REST and SOAP API integrations, ideal for SaaS applications with API-based user management. JDBC is for relational database connections. LDAP is for directory services protocols. DelimitedFile reads exported text files, not live REST APIs."},

{d:4, q:"During application onboarding, an administrator configures a correlation rule on the application. What does this accomplish?",
o:["It defines how incoming application accounts are matched to existing identities during aggregation","It determines the order in which multiple applications are aggregated","It sets the application's password complexity requirements","It defines which of the application's entitlements are considered high-risk"],a:0,
e:"The correlation rule defines the logic for matching accounts from the application to identities in IIQ (e.g., matching account username to identity employee ID). Aggregation order is controlled by task scheduling. Password policies are separate configuration objects. Entitlement risk classification is configured independently from correlation."},

{d:4, q:"An administrator needs IdentityIQ to not only read data from an application but also create, modify, and disable accounts in it. What additional configuration is needed beyond aggregation?",
o:["Provisioning must be configured on the application including supported operations and provisioning policies","Only account aggregation configuration is sufficient for full management","A separate provisioning server must be installed alongside IdentityIQ","The application must first be converted to a SaaS deployment"],a:0,
e:"To write changes back to an application (CRUD operations on accounts), provisioning must be explicitly enabled and configured on the application object. Aggregation alone only enables reading data. No separate provisioning server is needed; IIQ provisions through its connectors. Both on-premise and SaaS applications can be provisioned."},

{d:4, q:"What is the purpose of running entitlement aggregation separately from account aggregation when onboarding an application?",
o:["To read the catalog of available entitlements (groups, roles, permissions) from the application into IIQ's entitlement catalog","To assign entitlements to users automatically based on their roles","To remove unused entitlements from the target application","To create new entitlements in the target application"],a:0,
e:"Entitlement aggregation reads the list of available entitlements (like AD groups, SAP roles) from the application, populating IIQ's entitlement catalog for governance. Account aggregation captures which entitlements each account has. It doesn't assign entitlements to users. It doesn't create or remove entitlements in the source application."},

{d:4, q:"A company has 50 applications to onboard into IdentityIQ. The governance team wants to prioritize. Which applications should typically be onboarded first?",
o:["The authoritative source (HR system) and high-risk, high-visibility applications","The smallest applications with the fewest user accounts","Applications that are scheduled for decommissioning within a year","Applications that already have their own robust access management"],a:0,
e:"The authoritative source must be onboarded first to establish the identity population that all governance processes depend on. High-risk applications follow to maximize governance value quickly. Small applications provide less governance benefit initially. Decommissioning applications are low priority. Applications with existing access management still need governance but aren't the first priority."},

{d:4, q:"What is a provisioning policy in the context of application configuration in IdentityIQ?",
o:["A set of rules defining default attribute values and behaviors when creating or modifying accounts on the application","A policy that restricts which applications can be added to IdentityIQ","An approval workflow template for onboarding new applications","A report template showing provisioning activity history"],a:0,
e:"Provisioning policies define defaults and rules for account operations on a specific application (e.g., default home directory, account naming format, required attributes). They don't restrict which applications can be onboarded. Onboarding approvals are project decisions. Provisioning reports are separate objects."},

{d:4, q:"An administrator configures account aggregation with deleted account detection enabled. What happens when IIQ detects an account in its database that no longer exists in the application?",
o:["The account link can be removed from the identity or flagged, based on the application's aggregation configuration","The account is automatically recreated in the target application","IdentityIQ silently ignores the discrepancy until manually resolved","The entire identity associated with that account is deleted"],a:0,
e:"When deleted account detection finds missing accounts, IIQ can remove the Link, mark it as deleted, or trigger remediation depending on configuration. IIQ doesn't recreate accounts during aggregation reads. IIQ acts on detected deletions rather than ignoring them. The identity is never deleted just because one of its accounts disappeared from one application."},

{d:4, q:"Which connector capability allows IdentityIQ to read only changes since the last aggregation rather than reading all accounts?",
o:["Delta (incremental) aggregation","Full aggregation with result caching","Schema discovery with change tracking","Provisioning plan execution"],a:0,
e:"Delta (incremental) aggregation reads only accounts that changed since the last run, reducing processing time and system load significantly. Full aggregation always reads everything regardless of caching. Schema discovery reads metadata structure, not account changes. Provisioning writes to applications, not reads."},

{d:4, q:"An IdentityIQ administrator needs to connect to a database-backed application where user accounts are stored in relational tables. Which connector is appropriate?",
o:["The JDBC connector","The LDAP connector","The Active Directory connector","The DelimitedFile connector"],a:0,
e:"The JDBC connector connects directly to relational databases using SQL queries to read account and entitlement data from tables and views. LDAP is for directory services. Active Directory is a specific LDAP directory connector. DelimitedFile reads exported text files, not live databases."},

{d:4, q:"An application owner reports that after onboarding their application, IIQ shows incorrect entitlement names. Where should the administrator investigate?",
o:["The application schema configuration, specifically the entitlement attribute mapping and display name settings","The identity refresh task configuration","The certification campaign settings for this application","The global SystemConfiguration object"],a:0,
e:"Entitlement display names are controlled by the application schema, specifically which attribute is designated as the display name or description for entitlements. Identity refresh doesn't control entitlement display. Certification settings control review processes. SystemConfiguration holds global settings, not per-application entitlement display."},

{d:4, q:"What is the role of a customization rule on an application during aggregation?",
o:["It transforms or enriches account data as it is read from the application before it is processed by IIQ","It customizes the visual theme of the application's page in the IIQ interface","It defines custom approval workflows for access requests to this application","It restricts which identities can see this application in the access request catalog"],a:0,
e:"A customization rule executes during aggregation to transform, filter, or enrich account data before IIQ processes it (e.g., normalizing values, computing derived attributes). It doesn't affect the IIQ interface appearance. Approval workflows are separate workflow objects. Catalog visibility is controlled by scoping and authorization."},

{d:4, q:"An administrator is onboarding an application and needs to handle accounts that exist in the application but cannot be correlated to any identity. What are these called?",
o:["Uncorrelated accounts","Orphan identities","Phantom entitlements","Stale links"],a:0,
e:"Accounts in an application that can't be matched to an identity during correlation are called uncorrelated accounts. Orphan identities have no authoritative source record (the reverse situation). Phantom entitlements and stale links are not standard IIQ terminology for this scenario."},

{d:4, q:"What must be true about a connector before IdentityIQ can provision (write) accounts to a target application?",
o:["The connector must implement provisioning operations and those features must be enabled on the application object","Only read-only aggregation support is required for all management operations","A separate provisioning agent must be installed on the target application's server","The application must expose a SCIM-compliant API"],a:0,
e:"Provisioning requires the connector to implement write operations (create, update, delete, enable, disable) and those operations must be enabled in the application configuration. Read-only connectors cannot provision. No separate agent is needed on the target server. Connectors support many protocols beyond SCIM."},

{d:4, q:"During application onboarding, the administrator notices entitlement duplicates in the IIQ catalog after repeated aggregation runs. What is the likely cause?",
o:["The entitlement unique identifier (key attribute) is not properly configured, causing new entries instead of updates","The identity refresh task created duplicate entries in the catalog","The certification campaign generated extra entitlement records","The workflow engine duplicated provisioning requests"],a:0,
e:"Entitlement duplication typically occurs when the unique key for entitlements isn't properly configured, so aggregation creates new entries instead of matching and updating existing ones. Identity refresh doesn't create entitlement catalog entries. Certifications don't create entitlements. Workflows handle requests, not catalog management."},

{d:4, q:"A SailPoint administrator needs to integrate IdentityIQ with a mainframe application using a proprietary protocol that no pre-built connector supports. What is the recommended approach?",
o:["Develop a custom connector using the SailPoint openconnector framework","Export mainframe data to Active Directory and use the AD connector","Configure the JDBC connector to talk the proprietary protocol","Use the SCIM connector with protocol translation"],a:0,
e:"The openconnector framework allows development of custom connectors for any application or protocol. Exporting to AD adds unnecessary complexity and indirection. JDBC only speaks SQL/database protocols. The SCIM connector is designed for SCIM-compliant APIs and doesn't support arbitrary protocol translation."},

// -------------------------------------------------------
// DOMAIN 5: Role Management (20 questions)
// -------------------------------------------------------
{d:5, q:"An IdentityIQ administrator is setting up the role model. Which role type represents a business function like 'Accounts Payable Clerk'?",
o:["Business role","IT role","Organizational role","Entitlement role"],a:0,
e:"Business roles represent job functions understood by business users (like 'Accounts Payable Clerk') and typically inherit or require IT roles that contain specific entitlements. IT roles group technical application entitlements. Organizational roles are based on organizational structure (department, location). Entitlement roles wrap individual application permissions."},

{d:5, q:"What is the primary difference between an IT role and a business role in IdentityIQ?",
o:["IT roles group specific application entitlements; business roles represent higher-level job functions that may contain IT roles","IT roles are for the IT department only; business roles are for all other departments","IT roles are assigned manually; business roles are always assigned automatically","IT roles are more important than business roles in the role hierarchy"],a:0,
e:"IT roles group specific application entitlements at the technical level (e.g., 'SAP Finance Access'), while business roles represent broader job functions (e.g., 'Financial Analyst') and may contain multiple IT roles. Both can apply to any department. Both can be assigned manually or automatically. The hierarchy is about abstraction level, not importance."},

{d:5, q:"An organization wants to define a role hierarchy where business roles contain IT roles, which in turn reference specific entitlements. What does this hierarchy enable?",
o:["Layered governance where business users manage business roles while IT manages technical entitlement mappings","Automatic deletion of lower-level roles when higher-level roles are removed","Complete elimination of the need for access certifications","Real-time synchronization between all role levels"],a:0,
e:"A layered role hierarchy separates business-level governance from technical entitlement management, letting business owners manage business roles while IT maintains the underlying entitlement mappings in IT roles. Removing a parent role doesn't delete child roles; it removes the inheritance relationship. Certifications are still needed for ongoing attestation. Role changes propagate during refresh, not in real-time."},

{d:5, q:"What is a role profile in IdentityIQ?",
o:["The set of entitlements (application permissions) that a role grants to its members","The demographic information stored on a role object","The list of users who currently hold the role","The approval workflow configuration for requesting the role"],a:0,
e:"A role profile defines the specific application entitlements that are provisioned when the role is assigned (e.g., AD group memberships, SAP transactions). It doesn't store demographic data. The list of role holders is derived from identity data, not stored on the role profile. Approval workflows are configured separately from the role's entitlement profile."},

{d:5, q:"An administrator configures a role assignment rule that automatically assigns a role to all identities in the Finance department. What type of role assignment is this?",
o:["Automatic assignment via an assignment rule based on identity attributes","Manual assignment by a manager through the access request portal","Detected assignment based on existing entitlements found during aggregation","Inherited assignment from a parent role in the hierarchy"],a:0,
e:"Assignment rules automatically assign roles based on identity attributes (department, location, job title), enabling birthright access. Manual assignment requires an explicit request. Detected roles are found because a user already has the matching entitlements. Inherited assignment comes from parent-child role relationships, not attribute-based rules."},

{d:5, q:"During a role mining exercise, IdentityIQ analyzes existing access patterns and suggests potential roles. What is the input to this process?",
o:["Current user-to-entitlement assignments across applications","A predefined role hierarchy designed by business analysts","The certification campaign results from the last quarter","Password policy compliance data from all applications"],a:0,
e:"Role mining analyzes actual user-to-entitlement assignments (who has what access) to identify common patterns that could be formalized as roles. It doesn't start from a predefined hierarchy; that's top-down role modeling. Certification results show review outcomes, not access patterns for mining. Password data is unrelated to role discovery."},

{d:5, q:"What is the difference between a 'detected' role and an 'assigned' role in IdentityIQ?",
o:["A detected role is found because the user already has all entitlements in the role profile; an assigned role is explicitly granted to the user","A detected role is temporary; an assigned role is permanent","A detected role applies to contractors only; an assigned role applies to employees","A detected role is a role that was deleted; an assigned role is a role that still exists"],a:0,
e:"A detected role means IIQ discovered the user has all the entitlements that match a role's profile (bottom-up). An assigned role was explicitly granted (top-down), and IIQ ensures the user gets its entitlements. Detection doesn't imply temporary status. Both apply to any identity type. Detection doesn't relate to role deletion."},

{d:5, q:"An organization's role model has grown to over 5,000 roles, making governance difficult. What problem does this represent and how should it be addressed?",
o:["Role explosion, addressed by consolidating roles and using a proper hierarchy with inheritance","Normal growth that requires no action since more roles means better governance","A database capacity issue that requires upgrading the IIQ database server","An authentication problem that requires resetting all role assignments"],a:0,
e:"Role explosion occurs when too many fine-grained roles make governance unmanageable. Consolidation, proper hierarchy, and inheritance reduce the number of roles while maintaining coverage. More roles doesn't mean better governance; it often means worse because reviewers can't meaningfully evaluate them. It's not a database issue. It's unrelated to authentication."},

{d:5, q:"What does a 'permitted' role relationship mean in IdentityIQ's role model?",
o:["A role that members of the parent role are allowed to request but is not automatically assigned","A role that is automatically assigned to all members of the parent role","A role that has been approved by the compliance team","A role that is only visible to administrators"],a:0,
e:"A permitted role relationship means holders of the parent role may request the child role through the access request process, but it's not automatic. Automatic assignment uses a 'required' relationship, not permitted. Compliance approval is a separate concept. Visibility is controlled by scoping, not permitted relationships."},

{d:5, q:"What does a 'required' role relationship mean in IdentityIQ's role model?",
o:["A role that is automatically included when the parent role is assigned to an identity","A role that must be reviewed in every certification campaign","A role that every identity in the organization must hold","A role that requires special approval from the CISO before assignment"],a:0,
e:"A required role is automatically inherited when the parent role is assigned - the identity gets both the parent and the required child role's entitlements. It doesn't relate to certification requirements. It doesn't mean every identity must have it. CISO approval is a workflow concern, not a role hierarchy concept."},

{d:5, q:"An administrator needs to define a role that is based on organizational attributes and serves as a container for business roles. Which role type is most appropriate?",
o:["Organizational role","IT role","Entitlement role","Application role"],a:0,
e:"Organizational roles are based on organizational structure (department, location, job code) and serve as high-level containers that can require or permit business roles. IT roles group application-specific entitlements. Entitlement roles wrap individual permissions. Application role is not a standard IIQ role type."},

{d:5, q:"A role modeler wants to test the impact of a new role before deploying it. Which IdentityIQ capability supports this?",
o:["Role impact analysis showing which identities would be affected by the new role definition","Provisioning simulation that creates temporary accounts in all target applications","Automatic rollback of any role deployed in the last 24 hours","Certification preview that shows future review results"],a:0,
e:"Role impact analysis simulates the effect of a role definition change, showing how many identities would gain, lose, or retain access. IIQ doesn't create temporary test accounts in target systems. There's no automatic 24-hour rollback feature. Certification previews don't predict future results based on hypothetical role changes."},

{d:5, q:"Why is it important to assign a role owner to each role in IdentityIQ?",
o:["Role owners are responsible for reviewing, maintaining, and attesting to the appropriateness of their role's definition and membership","Role owners are the only people who can be assigned the role","Role owners automatically receive all entitlements in the role","Role owners are required by IIQ to start the application server"],a:0,
e:"Role owners take responsibility for their role's governance: reviewing the role definition, certifying membership, and ensuring the role stays aligned with business needs. Anyone eligible can be assigned a role, not just the owner. Owners don't automatically get the role's entitlements. Role ownership has no relation to server operations."},

{d:5, q:"An employee has a business role assigned but is found to have additional entitlements beyond what the role grants. What does this indicate?",
o:["The employee has additional access beyond their role (exception access), which should be reviewed during certification","The role definition is automatically updated to include the extra entitlements","The role model is invalid and must be rebuilt from scratch","The employee's identity is corrupted and must be recreated"],a:0,
e:"Entitlements beyond what roles grant are called exception access or additional access. This is common and should be reviewed during certifications to determine if it's appropriate. IIQ doesn't automatically update role definitions based on individual access. Extra access doesn't invalidate the entire role model. It doesn't indicate identity corruption."},

{d:5, q:"What is the benefit of using role-based access control (RBAC) versus granting individual entitlements to each user?",
o:["Roles simplify governance by grouping entitlements into manageable business-meaningful bundles, reducing review complexity","RBAC is required by law in all regulated industries","RBAC eliminates the need for any access reviews or certifications","RBAC prevents all possible security vulnerabilities"],a:0,
e:"RBAC bundles entitlements into roles that align with job functions, making it easier to assign, review, and certify access. Reviewers evaluate role assignments rather than hundreds of individual entitlements. RBAC isn't legally mandated (though it supports compliance). Certifications are still needed. No access model prevents all vulnerabilities."},

{d:5, q:"An administrator wants to automatically assign a 'Global Employee' role to every active identity in the organization. How should this be configured?",
o:["Create a role assignment rule with a condition that matches all active identities (e.g., where inactive is false)","Manually assign the role to each identity through the UI","Create a certification campaign that assigns the role","Configure the application connector to inject the role"],a:0,
e:"An assignment rule with a broad condition (like inactive=false) will automatically assign the role to all matching active identities during identity refresh. Manual assignment doesn't scale. Certifications review access, they don't assign roles. Connectors aggregate application data, not IIQ role assignments."},

{d:5, q:"During role modeling, the team discovers that two departments need identical application access but have different job titles. How should this be modeled?",
o:["Create one IT role with the shared entitlements and assign it to the business or organizational roles for both departments","Create duplicate IT roles with identical entitlements for each department","Grant the entitlements individually to every user without using roles","Create a policy exception for the second department"],a:0,
e:"Shared access should be modeled as a single IT role that multiple business or organizational roles can reference, following DRY principles and ensuring consistency. Duplicating roles leads to role explosion and maintenance burden. Individual grants bypass governance. Policy exceptions are for violations, not for modeling shared access."},

{d:5, q:"What happens when a business role is revoked from an identity in IdentityIQ?",
o:["The entitlements granted by that role (and its required child roles) are deprovisioned unless they are also granted by another role","Only the role label is removed but all underlying entitlements remain permanently","The identity is immediately deleted from all connected applications","All other roles assigned to the identity are also automatically revoked"],a:0,
e:"When a role is revoked, IIQ removes the entitlements from the role's profile unless those same entitlements are also provided by another active role on the identity. Only the revoked role's unique entitlements are removed. The identity isn't deleted. Other role assignments are independent and unaffected."},

{d:5, q:"What is the purpose of role certification (role composition certification) in IdentityIQ?",
o:["To review and attest that a role's definition, entitlements, and membership are still appropriate","To automatically assign roles to new employees during onboarding","To generate new roles based on current access patterns","To synchronize role data between IdentityIQ and target applications"],a:0,
e:"Role certification allows role owners and stakeholders to review and attest that a role's composition (its entitlements and policies), membership, and purpose remain valid and appropriate. It doesn't assign roles. Role generation is done through role mining. Role synchronization to target applications is done through provisioning."},

{d:5, q:"An organization uses SailPoint IdentityIQ and wants to implement a 'top-down' approach to role modeling. What does this mean?",
o:["Starting with business functions and organizational structure to define roles, then mapping entitlements to those roles","Starting with raw entitlement data and using algorithms to discover roles automatically","Assigning the most privileged roles first and working down to basic access","Defining roles based only on what users currently have without business input"],a:0,
e:"Top-down role modeling starts with business requirements: defining roles based on job functions, organizational structure, and business processes, then mapping the necessary entitlements. Bottom-up (role mining) starts with raw entitlement data. Top-down doesn't mean starting with privileged access. Top-down explicitly incorporates business input rather than relying solely on current access."},

// -------------------------------------------------------
// DOMAIN 6: Policy & Compliance (20 questions)
// -------------------------------------------------------
{d:6, q:"A compliance officer wants IdentityIQ to prevent users from having both 'Create Vendor' and 'Approve Payment' entitlements simultaneously. Which policy type should be configured?",
o:["Separation of Duties (SoD) policy","Account policy","Activity policy","Password policy"],a:0,
e:"SoD policies define forbidden combinations of entitlements, roles, or permissions that represent compliance risks. An account policy governs account-level settings like password rules and lockout behavior. An activity policy monitors user behavior patterns. A password policy controls password complexity and lifecycle."},

{d:6, q:"An IdentityIQ administrator configures a SoD policy and sets it to 'preventive' mode. What does this mean?",
o:["The policy will block access requests that would create a violation before access is granted","The policy will detect existing violations and generate reports but not block requests","The policy will automatically remediate all current violations by revoking access","The policy will send an email notification but take no enforcement action"],a:0,
e:"Preventive SoD enforcement blocks access requests that would create a policy violation at request time, stopping violations before they occur. Detective mode identifies existing violations without blocking. Automatic remediation would require additional workflow configuration. Notifications alone are informational, not preventive enforcement."},

{d:6, q:"During a scheduled policy scan, IdentityIQ detects 50 new SoD violations across the organization. What is the next step in the compliance workflow?",
o:["Generate policy violation records and route them to violation owners or designated remediators for action","Automatically revoke all violating entitlements without any human review","Delete the identities that have violations from the system","Ignore the violations until the next certification campaign"],a:0,
e:"Policy violations create records that are routed to designated owners or remediators who decide the appropriate action (remediate, allow with exception, or escalate). Automatic mass revocation without review could disrupt business operations. Identities aren't deleted for policy violations. Violations should be addressed promptly, not deferred to certification cycles."},

{d:6, q:"What is the purpose of an account policy in IdentityIQ?",
o:["To define account-level rules such as password requirements, inactive account handling, and account attribute constraints","To define which accounts are allowed to exist in the system","To specify the maximum number of accounts an identity can have","To create new accounts in target applications automatically"],a:0,
e:"Account policies govern account-level behaviors including password strength rules, inactive account detection, and attribute-based constraints. They don't control which accounts are 'allowed' to exist. Account count limits aren't a standard account policy feature. Account creation is handled by provisioning, not account policies."},

{d:6, q:"An organization needs to track and flag identities whose risk score exceeds a certain threshold. Which IdentityIQ capability supports this?",
o:["Risk-based policies that evaluate identity risk scores and generate alerts or violations when thresholds are exceeded","Account policies that track login attempts","Password policies that require stronger passwords for high-risk users","Certification campaigns that only include high-risk applications"],a:0,
e:"Risk-based policies can monitor identity risk scores and take action (alert, flag, or create violations) when thresholds are exceeded. Account policies handle account-level settings, not risk scoring thresholds. Password policies manage credential requirements. Certifications can be scoped by risk but don't monitor risk thresholds in real-time."},

{d:6, q:"A manager requests an exception for an employee's SoD violation because it is temporarily needed for a critical project. How does IdentityIQ handle this?",
o:["The violation can be acknowledged with a documented exception, including the business justification and an expiration date","Exceptions are not possible; all SoD violations must be immediately remediated","The entire SoD policy must be disabled to allow the exception","The employee's identity must be duplicated to separate the conflicting access"],a:0,
e:"IIQ supports policy violation exceptions with documentation, justification, and optional expiration dates, allowing temporary deviations with governance oversight. Exceptions are a standard governance capability. Disabling the entire policy would remove protection for all users. Duplicating identities creates governance problems rather than solving them."},

{d:6, q:"What is the difference between a policy violation and a certification revocation in IdentityIQ?",
o:["A policy violation is an automated detection of a rule breach; a certification revocation is a manual decision by a reviewer to remove access","Policy violations are more severe than certification revocations","Policy violations only apply to SoD; certification revocations apply to all access","There is no difference; they are the same concept"],a:0,
e:"Policy violations are system-generated when automated policy scans detect rule breaches (like SoD conflicts). Certification revocations occur when a human reviewer decides during an access review that access should be removed. Severity depends on context, not the mechanism. Policy violations can include types beyond SoD (risk, activity, etc.). They are distinct governance mechanisms."},

{d:6, q:"An auditor asks for evidence that all SoD violations in the past year were either remediated or had documented exceptions. Which IdentityIQ feature provides this?",
o:["Policy violation audit history and reports showing all violations, their resolutions, and any active exceptions","The aggregation task execution log","The application connector configuration export","The identity refresh task history"],a:0,
e:"IIQ maintains a complete audit trail of policy violations including detection, remediation actions, exceptions granted, and their justifications. Aggregation logs show data import activities. Connector configurations show technical setup. Identity refresh history shows processing details, not compliance resolution tracking."},

{d:6, q:"What is the purpose of a policy simulation in IdentityIQ?",
o:["To preview how many violations a new or modified policy would detect before activating it in production","To simulate user login behavior for security testing","To test application connector performance under load","To preview certification campaign scope before launching it"],a:0,
e:"Policy simulation runs a proposed policy against current identity data to show how many violations it would detect, allowing administrators to evaluate impact before activation. It doesn't simulate logins. It doesn't test connector performance. Certification scope preview is a separate feature."},

{d:6, q:"An administrator needs to create a policy that flags identities who have not logged into any system in over 90 days. Which policy type is most appropriate?",
o:["An activity-based policy checking for account inactivity","A separation of duties policy","A password complexity policy","A role composition policy"],a:0,
e:"Activity-based policies can evaluate patterns of activity (or inactivity) to identify dormant accounts or identities. SoD policies address conflicting access combinations. Password policies govern credential requirements. Role composition policies check role structure, not user activity patterns."},

{d:6, q:"What remediation options are typically available when a policy violation is detected in IdentityIQ?",
o:["Revoke the violating access, allow with a documented exception, or reassign the violation to another reviewer","Only automatic revocation with no human intervention possible","Only ignoring the violation until the next certification","Only escalation to the CEO for final decision"],a:0,
e:"Standard remediation options include revoking violating access, creating an exception with business justification, delegating to another reviewer, or escalating. Multiple options exist, not just automatic revocation. Violations shouldn't simply be ignored. Escalation has multiple levels, not just the CEO."},

{d:6, q:"An organization needs to ensure that every identity with access to a classified system has completed security clearance verification. Which approach in IdentityIQ supports this?",
o:["A policy that checks whether identities with the classified system entitlement have a 'clearance verified' attribute set to true","A password policy requiring longer passwords for classified system users","An account naming convention that includes clearance level","A certification campaign limited to the classified system application"],a:0,
e:"A policy can cross-reference entitlement assignments with identity attributes, flagging violations when someone has classified access without the verified clearance attribute. Password length doesn't verify clearance. Naming conventions don't enforce governance requirements. Certifications review access appropriateness but don't automatically check attribute prerequisites."},

{d:6, q:"What is the relationship between policies and certifications in IdentityIQ's compliance framework?",
o:["Policies automatically detect violations through rules; certifications engage human reviewers to attest access appropriateness","Policies replace the need for certifications in all compliance frameworks","Certifications automatically generate policies based on review outcomes","Policies and certifications are identical features with different names"],a:0,
e:"Policies and certifications are complementary: policies use automated rules to detect violations (SoD, risk, activity), while certifications involve human judgment to review and attest access. Policies don't replace certifications; both are needed. Certifications don't generate policies. They are distinct features serving different governance purposes."},

{d:6, q:"An IdentityIQ administrator wants to define an SoD policy at the entitlement level across two different applications. Is this possible?",
o:["Yes, SoD policies in IIQ can define conflicting combinations across entitlements from different applications","No, SoD policies can only check conflicts within a single application","No, SoD policies only work at the role level, not the entitlement level","Yes, but only if both applications use the same connector type"],a:0,
e:"IIQ's SoD policies can define cross-application entitlement conflicts (e.g., an entitlement in SAP conflicting with one in Oracle). They are not limited to single applications. SoD works at both role and entitlement levels. The connector type doesn't affect policy capability."},

{d:6, q:"What is the purpose of the compliance dashboard in IdentityIQ?",
o:["To provide an overview of policy violations, certification status, and risk metrics across the organization","To manage application connector configurations","To configure the database connection settings","To create new identities in the system"],a:0,
e:"The compliance dashboard gives stakeholders visibility into the organization's governance posture: outstanding violations, certification completion rates, risk distribution, and compliance trends. Connector configuration is done in application settings. Database settings are in server configuration. Identity creation happens through lifecycle processes."},

{d:6, q:"An organization is subject to SOX, HIPAA, and PCI-DSS regulations. How does IdentityIQ help manage compliance across multiple regulatory frameworks?",
o:["Through configurable policies, certifications, and reports that can be tailored to each regulation's specific requirements","By automatically determining which regulations apply to each identity","By replacing the need for external auditors with automated compliance certification","By storing the full text of each regulation and mapping it to access controls"],a:0,
e:"IIQ provides flexible governance tools (policies, certifications, reports) that can be configured to address specific requirements of different regulations. IIQ doesn't automatically determine regulatory applicability; that's a business decision. External auditors are still required; IIQ provides evidence for them. IIQ doesn't store regulation text; it implements controls."},

{d:6, q:"What happens when a policy violation's exception expires in IdentityIQ?",
o:["The violation is reactivated and routed for remediation again, requiring a new decision","The violation is permanently closed and never revisited","The identity associated with the violation is automatically deactivated","The expired exception is automatically renewed for another period"],a:0,
e:"When an exception expires, the violation becomes active again and re-enters the remediation workflow, ensuring that temporary exceptions don't become permanent. Violations aren't permanently closed after exception expiry. Identity deactivation is not triggered by exception expiry. Exceptions don't auto-renew; they require explicit re-approval."},

{d:6, q:"An administrator wants to generate an audit report showing all policy violations created in the last quarter, their current status, and who remediated them. Where should they look?",
o:["The policy violation report or audit reports section in IdentityIQ","The aggregation task log files on the application server","The application connector debug output","The identity cube XML export"],a:0,
e:"IIQ provides built-in policy violation reports and audit reports with filtering by date, status, remediator, and other criteria. Aggregation logs show data import activity. Connector debug output shows technical integration details. Identity XML exports show individual identity data, not cross-organizational compliance reports."},

{d:6, q:"A risk assessment reveals that certain entitlements carry higher compliance risk than others. How should this be reflected in IdentityIQ's governance model?",
o:["Assign risk scores (weights) to high-risk entitlements so they factor into identity risk calculations and targeted governance activities","Remove high-risk entitlements from all applications entirely","Only allow administrators to hold high-risk entitlements","Create a separate IIQ instance for high-risk entitlements"],a:0,
e:"Assigning risk scores to entitlements allows IIQ to calculate identity-level composite risk scores, enabling risk-based certifications, targeted reviews, and risk-aware access decisions. Removing all high-risk entitlements may not be feasible if they're needed for business operations. Risk-based governance doesn't restrict access to administrators only. A separate instance adds unnecessary complexity."},

{d:6, q:"What is the role of the remediation workflow when a policy violation is detected in IdentityIQ?",
o:["It routes the violation to the appropriate reviewer with options to remediate, allow with exception, or escalate","It automatically deletes the violating identity from all systems","It disables the policy that detected the violation","It sends a single email notification and takes no further action"],a:0,
e:"The remediation workflow orchestrates the response to a violation: notifying the right people, presenting remediation options (revoke access, grant exception, delegate), and tracking the resolution. It doesn't delete identities. It doesn't disable the detecting policy. It provides a complete governance process, not just a notification."},

// Domains 7-9 questions will be added in Step 3.
];

// ============================================
// FLASHCARDS (Coming in Step 3)
// Format: {d: domainId, t: term, def: definition}
// ============================================
const flashcards = [];

// ============================================
// REACT COMPONENT
// ============================================
export default function SailPointIIQStudyApp() {
  const [view, setView] = useState("home");
  const [selected, setSelected] = useState(domains.map(d => d.id));
  const [quiz, setQuiz] = useState([]);
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [timer, setTimer] = useState(null);
  const [cards, setCards] = useState([]);
  const [cardIdx, setCardIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessions, setSessions] = useState(() => {
    try { return JSON.parse(localStorage.getItem("sailpoint_iiq_sessions") || "[]"); } catch { return []; }
  });
  const [practiceCount, setPracticeCount] = useState(20);

  useEffect(() => {
    try { localStorage.setItem("sailpoint_iiq_sessions", JSON.stringify(sessions)); } catch {}
  }, [sessions]);

  useEffect(() => {
    if (timer > 0 && view === "quiz") {
      const t = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(t);
    }
    if (timer === 0) setView("results");
  }, [timer, view]);

  const shuffleOptions = (q) => {
    const indices = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    return { options: indices.map(i => q.o[i]), correctIdx: indices.indexOf(q.a), map: indices };
  };

  const startQuiz = (count, timed) => {
    const filtered = questions.filter(q => selected.includes(q.d));
    if (filtered.length === 0) return;
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, Math.min(count, filtered.length));
    const withShuffled = shuffled.map(q => {
      const s = shuffleOptions(q);
      return { ...q, so: s.options, sa: s.correctIdx, sm: s.map };
    });
    setQuiz(withShuffled);
    setIdx(0);
    setAnswer(null);
    setScore(0);
    setHistory([]);
    setTimer(timed ? 90 * 60 : null); // 90 minutes for exam mode
    setView("quiz");
  };

  const pick = (i) => {
    if (answer !== null) return;
    setAnswer(i);
    const correct = i === quiz[idx].sa;
    if (correct) setScore(s => s + 1);
    setHistory(h => [...h, {q: quiz[idx], ans: i, ok: correct}]);
  };

  const next = () => {
    if (idx < quiz.length - 1) {
      setIdx(idx + 1);
      setAnswer(null);
    } else {
      setSessions(s => [...s, {date: new Date().toLocaleString(), score, total: quiz.length, pct: Math.round(score / quiz.length * 100), domains: [...new Set(quiz.map(q => q.d))]}]);
      setView("results");
    }
  };

  const startCards = () => {
    const filtered = flashcards.filter(f => selected.includes(f.d));
    if (filtered.length === 0) return;
    setCards([...filtered].sort(() => Math.random() - 0.5));
    setCardIdx(0);
    setFlipped(false);
    setView("cards");
  };

  const bg = "#0f172a";
  const card = {background:"#1e293b",borderRadius:12,padding:20,marginBottom:12};
  const filteredQ = questions.filter(q => selected.includes(q.d));
  const filteredF = flashcards.filter(f => selected.includes(f.d));

  // ---- HOME ----
  if (view === "home") {
    return (
      <div style={{minHeight:"100vh",background:bg,color:"#fff",padding:20,fontFamily:"system-ui"}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{textAlign:"center",padding:"30px 0"}}>
            <div style={{fontSize:48}}>{"\u{1F6E1}\uFE0F"}</div>
            <h1 style={{margin:"10px 0 5px"}}>SailPoint IIQ Study App</h1>
            <p style={{color:"#94a3b8",margin:0}}>IdentityIQ Associate - Complete Exam Prep</p>
            <p style={{color:"#64748b",margin:"5px 0"}}>{filteredQ.length} questions {"\u2022"} {filteredF.length} flashcards</p>
            <p style={{color:"#475569",margin:"2px 0",fontSize:12}}>60 questions {"\u2022"} 90 minutes {"\u2022"} 70% to pass</p>
          </div>

          <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:14}}>
            {[20, 40, 0].map(c => (
              <button key={c} onClick={() => setPracticeCount(c)}
                style={{padding:"6px 16px",borderRadius:6,border:"2px solid " + (practiceCount===c?"#6366f1":"#334155"),background:practiceCount===c?"#6366f1":"transparent",color:"#fff",cursor:"pointer",fontWeight:600,fontSize:13}}>
                {c === 0 ? "All" : c}
              </button>
            ))}
            <span style={{alignSelf:"center",color:"#64748b",fontSize:12,marginLeft:4}}>practice Qs</span>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}}>
            <button onClick={() => startQuiz(practiceCount || filteredQ.length, false)} style={{...card,cursor:"pointer",border:"none",color:"#fff",textAlign:"center"}}>
              <div style={{fontSize:28}}>{"\u{1F9E0}"}</div>
              <div style={{fontWeight:600}}>Practice</div>
              <div style={{fontSize:12,color:"#94a3b8"}}>{practiceCount || "All"} questions</div>
            </button>
            <button onClick={() => startQuiz(60, true)} style={{...card,cursor:"pointer",border:"none",color:"#fff",textAlign:"center"}}>
              <div style={{fontSize:28}}>{"\u23F1\uFE0F"}</div>
              <div style={{fontWeight:600}}>Exam Sim</div>
              <div style={{fontSize:12,color:"#94a3b8"}}>60 Qs, 90 min</div>
            </button>
            <button onClick={startCards} style={{...card,cursor:"pointer",border:"none",color:"#fff",textAlign:"center"}}>
              <div style={{fontSize:28}}>{"\u{1F4D6}"}</div>
              <div style={{fontWeight:600}}>Flashcards</div>
              <div style={{fontSize:12,color:"#94a3b8"}}>{filteredF.length} cards</div>
            </button>
            <button onClick={() => setView("stats")} style={{...card,cursor:"pointer",border:"none",color:"#fff",textAlign:"center"}}>
              <div style={{fontSize:28}}>{"\u{1F4CA}"}</div>
              <div style={{fontWeight:600}}>Stats</div>
              <div style={{fontSize:12,color:"#94a3b8"}}>Progress</div>
            </button>
          </div>

          <p style={{textAlign:"center",color:"#64748b",fontSize:12,margin:"0 0 10px"}}>Select domains to study:</p>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"}}>
            {domains.map(d => (
              <button key={d.id} onClick={() => setSelected(s => s.includes(d.id) ? s.filter(x => x !== d.id) : [...s, d.id])}
                style={{padding:"8px 14px",borderRadius:8,border:"2px solid " + d.color,background:selected.includes(d.id)?d.color:"transparent",color:selected.includes(d.id)?"#000":"#fff",cursor:"pointer",fontWeight:600,fontSize:13,transition:"all 0.2s"}}>
                {d.icon} {d.name}
              </button>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:10}}>
            <button onClick={() => setSelected(selected.length === domains.length ? [] : domains.map(d=>d.id))}
              style={{background:"transparent",border:"1px solid #475569",color:"#94a3b8",padding:"6px 14px",borderRadius:6,cursor:"pointer",fontSize:12}}>
              {selected.length === domains.length ? "Deselect All" : "Select All"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- QUIZ ----
  if (view === "quiz") {
    const q = quiz[idx];
    const dom = domains.find(d => d.id === q.d);
    return (
      <div style={{minHeight:"100vh",background:bg,color:"#fff",padding:20,fontFamily:"system-ui"}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:15}}>
            <button onClick={() => setView("home")} style={{background:"#334155",border:"none",color:"#fff",padding:"8px 14px",borderRadius:8,cursor:"pointer"}}>{"\u2190"} Stop</button>
            <span style={{color:"#94a3b8"}}>{idx + 1} / {quiz.length}</span>
            {timer !== null && <span style={{color:"#f87171"}}>{"\u23F1"} {Math.floor(timer/60)}:{String(timer%60).padStart(2,"0")}</span>}
            <span style={{color:"#4ade80"}}>{"\u2713"} {score}</span>
          </div>

          <div style={{height:4,background:"#334155",borderRadius:2,marginBottom:20}}>
            <div style={{height:"100%",width:(idx+1)/quiz.length*100+"%",background:"#6366f1",borderRadius:2,transition:"width 0.3s"}}/>
          </div>

          <div style={card}>
            <div style={{display:"inline-block",padding:"4px 10px",borderRadius:6,fontSize:11,fontWeight:600,background:dom?dom.color:"#6366f1",color:"#000",marginBottom:15}}>{dom?dom.name:q.d}</div>
            <h2 style={{fontSize:17,lineHeight:1.5,margin:"0 0 20px",fontWeight:500}}>{q.q}</h2>

            {q.so.map((opt, i) => {
              let optBg = "#334155";
              let border = "#475569";
              if (answer !== null) {
                if (i === q.sa) { optBg = "rgba(34,197,94,0.2)"; border = "#22c55e"; }
                else if (i === answer) { optBg = "rgba(239,68,68,0.2)"; border = "#ef4444"; }
              }
              return (
                <button key={i} onClick={() => pick(i)} disabled={answer !== null}
                  style={{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"14px 16px",marginBottom:8,background:optBg,border:"2px solid " + border,borderRadius:8,cursor:answer===null?"pointer":"default",color:"#fff",textAlign:"left",fontSize:14}}>
                  <span style={{width:28,height:28,borderRadius:6,background:"#475569",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:12,flexShrink:0}}>{String.fromCharCode(65+i)}</span>
                  <span style={{flex:1,lineHeight:1.4}}>{opt}</span>
                </button>
              );
            })}

            {answer !== null && (
              <div style={{marginTop:15,padding:14,background:answer===q.sa?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)",borderRadius:8,borderLeft:"3px solid " + (answer===q.sa?"#22c55e":"#ef4444")}}>
                <div style={{fontWeight:600,marginBottom:5,fontSize:14}}>{answer === q.sa ? "\u2705 Correct!" : "\u274C Incorrect"}</div>
                <div style={{fontSize:13,color:"#cbd5e1",lineHeight:1.5}}>{q.e}</div>
              </div>
            )}

            {answer !== null && (
              <button onClick={next} style={{width:"100%",marginTop:15,padding:12,background:"#6366f1",border:"none",borderRadius:8,color:"#fff",fontWeight:600,cursor:"pointer",fontSize:14}}>
                {idx < quiz.length - 1 ? "Next \u2192" : "View Results"}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---- RESULTS ----
  if (view === "results") {
    const pct = quiz.length ? Math.round(score / quiz.length * 100) : 0;
    const pass = pct >= 70;
    return (
      <div style={{minHeight:"100vh",background:bg,color:"#fff",padding:20,fontFamily:"system-ui"}}>
        <div style={{maxWidth:500,margin:"0 auto",textAlign:"center"}}>
          <div style={{fontSize:60,marginBottom:15}}>{pass ? "\u{1F3C6}" : "\u{1F4DA}"}</div>
          <h1 style={{fontSize:42,margin:"0 0 5px"}}>{pct}%</h1>
          <p style={{color:"#94a3b8",margin:"0 0 5px"}}>{score} / {quiz.length} correct</p>
          <p style={{color:pass?"#22c55e":"#f87171",margin:"0 0 25px"}}>{pass ? "Passed!" : "Keep studying (70% needed)"}</p>

          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={() => startQuiz(quiz.length, timer !== null)} style={{padding:"10px 20px",background:"#6366f1",border:"none",borderRadius:8,color:"#fff",fontWeight:600,cursor:"pointer"}}>{"\u{1F504}"} Retry</button>
            <button onClick={() => setView("review")} style={{padding:"10px 20px",background:"#334155",border:"none",borderRadius:8,color:"#fff",fontWeight:600,cursor:"pointer"}}>{"\u{1F4D6}"} Review</button>
            <button onClick={() => setView("home")} style={{padding:"10px 20px",background:"#334155",border:"none",borderRadius:8,color:"#fff",fontWeight:600,cursor:"pointer"}}>{"\u{1F3E0}"} Home</button>
          </div>
        </div>
      </div>
    );
  }

  // ---- REVIEW ----
  if (view === "review") {
    return (
      <div style={{minHeight:"100vh",background:bg,color:"#fff",padding:20,fontFamily:"system-ui"}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <button onClick={() => setView("results")} style={{background:"#334155",border:"none",color:"#fff",padding:"8px 14px",borderRadius:8,cursor:"pointer",marginBottom:15}}>{"\u2190"} Back</button>
          <h2 style={{margin:"0 0 15px"}}>Review Answers</h2>

          {history.map((h, i) => {
            const hdom = domains.find(d=>d.id===h.q.d);
            return (
              <div key={i} style={{...card,borderLeft:"3px solid " + (h.ok?"#22c55e":"#ef4444")}}>
                <div style={{fontSize:12,color:"#64748b",marginBottom:5}}>{hdom?hdom.name:h.q.d} {"\u2022"} {h.ok?"\u2713":"\u2717"}</div>
                <p style={{margin:"0 0 10px",fontWeight:500,lineHeight:1.4}}>{h.q.q}</p>
                <p style={{margin:0,fontSize:13,color:h.ok?"#22c55e":"#ef4444"}}>Your answer: {h.q.so[h.ans]}</p>
                {!h.ok && <p style={{margin:"5px 0 0",fontSize:13,color:"#22c55e"}}>Correct: {h.q.so[h.q.sa]}</p>}
                <p style={{margin:"10px 0 0",fontSize:12,color:"#94a3b8",padding:10,background:"#0f172a",borderRadius:6}}>{h.q.e}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ---- FLASHCARDS ----
  if (view === "cards") {
    if (!cards.length) {
      return (
        <div style={{minHeight:"100vh",background:bg,color:"#fff",padding:20,fontFamily:"system-ui",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{textAlign:"center"}}>
            <p style={{color:"#94a3b8"}}>No flashcards yet (coming in Step 3)</p>
            <button onClick={() => setView("home")} style={{marginTop:15,padding:"8px 16px",background:"#6366f1",border:"none",borderRadius:8,color:"#fff",cursor:"pointer"}}>Back</button>
          </div>
        </div>
      );
    }
    const c = cards[cardIdx];
    const dom = domains.find(d => d.id === c.d);
    return (
      <div style={{minHeight:"100vh",background:bg,color:"#fff",padding:20,fontFamily:"system-ui"}}>
        <div style={{maxWidth:500,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:20}}>
            <button onClick={() => setView("home")} style={{background:"#334155",border:"none",color:"#fff",padding:"8px 14px",borderRadius:8,cursor:"pointer"}}>{"\u2190"}</button>
            <span style={{color:"#94a3b8"}}>{cardIdx + 1} / {cards.length}</span>
            <button onClick={() => {setCards([...cards].sort(() => Math.random() - 0.5)); setCardIdx(0); setFlipped(false);}} style={{background:"#334155",border:"none",color:"#fff",padding:"8px 14px",borderRadius:8,cursor:"pointer"}}>{"\u{1F500}"}</button>
          </div>

          <div onClick={() => setFlipped(!flipped)} style={{minHeight:220,borderRadius:12,padding:25,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",background:flipped?"#1e293b":(dom?dom.color:"#6366f1"),color:flipped?"#fff":"#000",transition:"background 0.3s"}}>
            <div style={{fontSize:11,marginBottom:12,opacity:0.7}}>{dom?dom.name:c.d}</div>
            <div style={{fontSize:flipped?15:18,fontWeight:600,lineHeight:1.5}}>{flipped ? c.def : c.t}</div>
            <div style={{fontSize:11,marginTop:15,opacity:0.5}}>Click to flip</div>
          </div>

          <div style={{display:"flex",justifyContent:"center",gap:12,marginTop:20}}>
            <button onClick={() => {if(cardIdx > 0) {setCardIdx(cardIdx-1); setFlipped(false);}}} disabled={cardIdx===0} style={{width:44,height:44,borderRadius:"50%",background:"#334155",border:"none",color:"#fff",cursor:cardIdx===0?"default":"pointer",opacity:cardIdx===0?0.3:1}}>{"\u2190"}</button>
            <button onClick={() => {if(cardIdx < cards.length-1) {setCardIdx(cardIdx+1); setFlipped(false);}}} disabled={cardIdx===cards.length-1} style={{width:44,height:44,borderRadius:"50%",background:"#334155",border:"none",color:"#fff",cursor:cardIdx===cards.length-1?"default":"pointer",opacity:cardIdx===cards.length-1?0.3:1}}>{"\u2192"}</button>
          </div>
        </div>
      </div>
    );
  }

  // ---- STATS ----
  if (view === "stats") {
    const domainStats = domains.map(d => {
      const domQ = questions.filter(q => q.d === d.id);
      return {...d, count: domQ.length};
    });
    return (
      <div style={{minHeight:"100vh",background:bg,color:"#fff",padding:20,fontFamily:"system-ui"}}>
        <div style={{maxWidth:500,margin:"0 auto"}}>
          <button onClick={() => setView("home")} style={{background:"#334155",border:"none",color:"#fff",padding:"8px 14px",borderRadius:8,cursor:"pointer",marginBottom:15}}>{"\u2190"} Back</button>
          <h2 style={{margin:"0 0 20px"}}>{"\u{1F4CA}"} Study Statistics</h2>

          <div style={card}>
            <h3 style={{margin:"0 0 10px",fontSize:15}}>Question Distribution</h3>
            <p style={{color:"#64748b",fontSize:12,margin:"0 0 15px"}}>{questions.length} total questions across {domains.length} domains</p>
            {domainStats.map(d => (
              <div key={d.id} style={{marginBottom:10}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:4}}>
                  <span>{d.icon} {d.name} ({d.weight})</span>
                  <span style={{color:"#94a3b8"}}>{d.count} questions</span>
                </div>
                <div style={{height:6,background:"#334155",borderRadius:3}}>
                  <div style={{height:"100%",width:d.count/Math.max(questions.length,1)*100+"%",background:d.color,borderRadius:3}}/>
                </div>
              </div>
            ))}
          </div>

          {sessions.length > 0 && (
            <div style={card}>
              <h3 style={{margin:"0 0 10px",fontSize:15}}>Session History</h3>
              {sessions.map((s, i) => (
                <div key={i} style={{padding:10,background:"#0f172a",borderRadius:8,marginBottom:8}}>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:13}}>
                    <span style={{color:"#94a3b8"}}>{s.date}</span>
                    <span style={{color:s.pct>=70?"#22c55e":"#f87171",fontWeight:600}}>{s.pct}%</span>
                  </div>
                  <div style={{fontSize:12,color:"#64748b",marginTop:4}}>{s.score}/{s.total} correct</div>
                </div>
              ))}
            </div>
          )}

          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <button onClick={() => startQuiz(practiceCount || filteredQ.length, false)} style={{flex:1,padding:"10px 18px",background:"#6366f1",border:"none",borderRadius:8,color:"#fff",cursor:"pointer",fontWeight:600}}>Start Practice</button>
            <button onClick={() => startQuiz(60, true)} style={{flex:1,padding:"10px 18px",background:"#334155",border:"none",borderRadius:8,color:"#fff",cursor:"pointer",fontWeight:600}}>Start Exam</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
