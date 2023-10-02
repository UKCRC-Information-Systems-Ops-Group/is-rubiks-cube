var colors = ['blue', 'green', 'white', 'yellow', 'orange', 'red'],
		pieces = document.getElementsByClassName('piece');

var cube_item_text = "";
var cube_topic_text = "";

var ukcrc_is_content = {
	Collaboration: {
		title: "Collaboration",
		summary: "IS Team collaboration with other groups involved in clinical trials is essential. IS Team must work closely together with these groups to understand requirements, context and priorities whilst communicating IS perspective. When this happens well, we achieve safe, quality data and research from the successful, setup, running and closing of clinical trials.",
		icon:"https://static.thenounproject.com/png/661478-200.png",
		items:{
			item1 : {
				title:"Trial Management Team",
				summary:"The Trial Management Team (TMT) have multiple responsibilities including project management of the trial. IS Teams liaise with TMT to ensure the timely delivery of Electronical Data Capture (EDC) development and all the Data Management functions throughout the trial.",
				icon: "https://static.thenounproject.com/png/1168379-200.png",
			},	
			item2 : {
				title:"Statisticians",
				summary:"IS Teams have a close relationship with the trial statisticians throughout the lifetime of a study. Starting with identifying the data to be collected, designing the CRFs, what edit checks and validation needs to be created and building the randomisation process.  Then during the trial helping with continuous data quality checks, providing data extracts and reports. Help with any CRF amendments that are identified. And finally at database lock and study closure.",
				icon: "https://static.thenounproject.com/png/3257159-200.png",
			},
			item3 : {
				title:"Chief Investigators",
				summary:"Chief Investigators (CI) are the overall lead researchers for a given project.  As part of the wider research team, they are responsible for the conduct of the trial. CIs liaise with IS Teams in clinical trials units to develop a specification of what technical support is required for the project. Most of these requirements would be derived from the trial protocol.",
				icon: "https://static.thenounproject.com/png/3118554-200.png",
			},
			item4 : {
				title:"NHS Sites",
				summary:"Collaboration with trials sites, especially NHS Trusts is vital for a lot of studies, particularly in secondary care. IT solutions often must be fitted into closed NHS infrastructure, separate servers must be maintained and ways found to move data from NHS to University servers. IS Teams must liaise with research nurses and doctors to specify software and train users. Linking to different NHS data sources requires negotiation and careful consideration to keep data protection in place.",
				icon: "https://static.thenounproject.com/png/1709022-200.png",
			},		 
			item5 : {
				title:"Regulators",
				summary:"Regulators facilitate and harmonise how clinical trials and medical research are performed and ensure that regulatory processes are followed in clinical trials to ensure participant safety and data integrity. When working in clinical trials, IS Teams need to understanding of the various regulatory standards that apply to clinical data and Electronic Data Systems (EDC) and demonstrate and communicate how these regulatory standards are met within their own CTU.",
				icon: "https://static.thenounproject.com/png/1595412-200.png",
			},		 
			item6 : {
				title:"Quality Assurance Team",
				summary:"Quality Assurance ensures that clinical trials are performed to meet the requirements of Good Clinical Practice, (GCP). The IS Team liaise closely with the QA team to ensure that the IS applications and infrastructure adhere to all the regulatory requirements. The IT Standard Operating Procedures (SOPs) are written and kept up to date and all development is performed according to these SOPs.",
				icon: "https://static.thenounproject.com/png/1862733-200.png",
			},		 
			item7 : {
				title:"IT Suppliers",
				summary:"IT Suppliers include IT departments of host organisation and 3rd parties. IT suppliers provide a variety of services to clients, which can include various aspects of hardware and software. IS Teams help to source and procure the necessary services of a supplier and monitor these services through the use of a Service Level Agreement (SLA)",
				icon: "https://static.thenounproject.com/png/3631603-200.png",
			},		
			item8 : {
				title:"Archivists",
				summary:"Archivists are information professional who assesses, collects, organizes, preserves, maintains control over, and provides access to records and archives. IS Teams liaise with archivists, as data must be stored so it can be accurately reported, interpreted and verified. Retention of essential documents is crucial, complete and legible trial data and results must be readily available to enable reconstruction of the trial; digital data should be future-proofed for archiving; expiration dates may need to be applied to data, with data securely destroyed afterwards.",
				icon: "https://static.thenounproject.com/png/3728735-200.png",
			},		 
			item9 : {
				title:"General Support Functions",
				summary:"IS support functions are essential for quality delivery and the ongoing operations of clinical trials. IS Teams often provide 1st, 2nd and 3rd line support functions for users of trial IT Systems and linked tools, and also act as a primary contact for any 3rd party supplier. Providing support and training for all elements covered in these areas.",
				icon: "https://static.thenounproject.com/png/3883014-200.png",
			},		  		 		 	 
		},
										},
	Software_Dev :{
		title: "Software Development",
		summary: "IS Teams involved in software development need to understand and communicate the software development life cycle: Planning and requirements analysis; design; implementation; testing and integration; maintenance and change control. Within a clinical setting there are addition considerations, around medical regulations, security and validation.",
		icon:"https://static.thenounproject.com/png/575613-200.png",
		items:{
			item1 : {
				title:"Technologies",
				summary:"CTUs often have a mixture of cutting-edge technologies for new innovative trials as well as legacy systems supporting older trials. CTU IS Teams and developers need to be able to understand and support a broad range of technologies to ensure that trials can run for extended periods of time without interruption. IS Teams are responsible for understanding a trials needs and implementing the most appropriate technologies to meet them. This requires teams to stay up to date with the constant changes in technology and identify solutions that will remain viable for the lifetime of the trial.",
				icon: "https://static.thenounproject.com/png/3156376-200.png",
			},	
			item2 : {
				title:"Bespoke Development",
				summary:"As CTUs grow so does the need to become increasingly efficient. Bespoke development allows CTU IS Team to deliver customised systems that automate repetitive tasks to both speed them up and remove human error. Having the capability to develop software within the CTU allows trials to not only become more efficient but also to develop entirely new systems to address the needs of complex trials. To deal with the increasing demand for bespoke development a developer must understand how to utilise version control systems, implement continuous integration pipelines and automate the testing of code. These skills aren’t visible to end users but are vital for IS Teams to efficiently deliver bespoke software.",
				icon: "https://static.thenounproject.com/png/1932989-200.png",
			},
			item3 : {
				title:"3rd Party EDC Systems",
				summary:"EDC systems are the core of every CTU and as such developers need understand how the data is structured in these systems so that they can extract data from them for reporting or data management systems. IS Teams are also responsible for building entire studies in EDC systems and work with trial teams to advise on the best way to structure forms within the capabilities of the system being used. Both the development of integrations into EDC systems and the implementation of eCRFs are vital to a trials integrity and as such the IS Teams carrying out the work must understand the regulatory requirements for working on these systems. ",
				icon: "https://static.thenounproject.com/png/754074-200.png",
			},
			item4 : {
				title:"Integrating Systems",
				summary:"CTUs can run a mixture of 3rd party “off the shelf” systems and internal bespoke applications. To be as efficient as possible these systems need to be able to transfer data between each other automatically. IS Teams needs to be able to work with a variety of 3rd party systems hosted either by the CTU or a project collaborator to understand how to interact with them to get data in and out of them. By integrating these systems it allows for simplified trial workflows and removes the need for data to be manually exported from one system and imported into another.",
				icon: "https://static.thenounproject.com/png/2715698-200.png",
			},		 
			item5 : {
				title:"Application Security",
				summary:"Clinical trials often collect highly confidential medical data and as such all public facing systems need to be appropriately secured to protect the data they hold. IS Teams need to understand and implement industry best practices from the initial design stages through to implementation. Once a service is live the developer needs to maintain awareness of vulnerabilities that may arise in the code they have written or 3rd party toolkits they have utilised. These need to be identified, remediated and then deployed in an ongoing basis throughout the life of the trial to keep this data secure.",
				icon: "https://static.thenounproject.com/png/4073082-200.png",
			},		 
			item6 : {
				title:"Testing and Validation",
				summary:"A trials outcome is only as valuable as the validity of the data it is built on. IT Systems built to process and store trial data need to have robust validation and testing to ensure that the integrity of the data remains consistent throughout the trial lifecycle. Unlike most applications where developers can ship products quickly and fix errors later a CTU developer must have a verifiably high degree of confidence that their code will perform as intended under a variety of use cases. It is not sufficient to release software that works a CTU developer must be able to evidence that the software worked in testing and how each feature of the application was requested and implemented.",
				icon: "https://static.thenounproject.com/png/1079403-200.png",
			},		 
			item7 : {
				title:"Training and Support",
				summary:"Software developed by commercial companies will often have teams of staff dedicated to producing training materials. CTUs don’t have these teams so a CTU a developer must take on multiple roles one of which is to document how to use the systems they build as well as to develop and often deliver training to other CTU staff. In addition to documenting and training a developer also needs to work with end users to support the systems they have built. Issues that are reported need to be logged, investigated and if required have code changes made to resolve the user’s problem. ",
				icon: "https://static.thenounproject.com/png/1912161-200.png",
			},		
			item8 : {
				title:"Data Management and Reporting",
				summary:"As trials grow in complexity so has the volume and diversity of data they collect. IS Teams need to provide ways for trial teams to understand and interpret this data. This can range from carrying out one off exports of data to build entire bespoke reporting systems to provide teams quick access to carry out their own data extracts or run reports based on configurable parameters. A CTU developer needs to understand the underlying data, how to combine the data from different trial systems and produce an accurate presentation of that data for trial teams to make use of. These can include reports on the safety of the intervention so a developer is responsible for ensuring the accuracy of the data and that appropriate testing is in place.",
				icon: "https://static.thenounproject.com/png/1391119-200.png",
			},		 
			item9 : {
				title:"Trial Management Systems",
				summary:"Trial teams need a way to manage not just the data collected about trial participants but also data about who is supporting the trial. IS Teams need to build and maintain complex trial management systems to record the staff working on trials at sites, the role and responsibilities they have and how this changes throughout the lifetime of the trial. The systems are often augmented with functionality not present in the core EDC system and differ between units. Developers are key to understanding the gaps in the EDC system and identifying functionality that can be added to a TMS to enhance trial workflows.",
				icon: "https://static.thenounproject.com/png/3049447-200.png",
			},		  		 		 	 
		},
										},
	Data: {
		title: "Data",
		summary: "Research and clinical trials can only be as good as its data. Managing and maintaining data and data integrity not only impacts the quality of research, also impacts the reputation of clinical trials unit and host institutes but ultimately impacts people's health.<br> Data Management must align with ALCOA+ Principles; a set of principles that ensures data integrity, introduced and used by the Food and Drug Administration (FDA):<br> <strong>A</strong> – Attributable; <strong>L</strong> – Legible, <strong>C</strong> – Contemporaneous, <strong>O</strong>- Original, <strong>A</strong> – Accurate <br>Plus: <strong>C</strong> - Complete, <strong>C</strong> – Consistent, <strong>E</strong> – Enduring, <strong>A</strong> – Available. ",
		icon:"https://static.thenounproject.com/png/2500462-200.png",
		items:{
			item1 : {
				title:"Data Integrity",
				summary:"Data integrity refers to the reliability and trustworthiness of data throughout its lifecycle. Ensuring accurate data is entered in the first place by using validation checks e.g. valid dates in a date field, ranges in a number field. That the data are stored and displayed without erroneous interpretation.  An audit trail is maintained so that the history of the data is clear. And that extraction methods do not alter the data in any way. For example, Excel often makes its own interpretation and makes unwanted conversions (such as ‘01 – 03’ is often translated to ‘01-Mar’).",
				icon: "https://static.thenounproject.com/png/2301608-200.png",
			},
			item2 : {
				title:"Reports",
				summary:"Being able to produce and run reports against the data is a critical tool in managing a study in an effective and efficient manner. It enables the trial team to identify missing CRFs and data, identify trends, reports necessary for TMGs, DSMC etc., make decisions on recruitment, patient safety and many other critical aspects of a successful study. IS Teams are either involved in producing these reports or providing tools for the trial team to produce the reports themselves.",
				icon: "https://static.thenounproject.com/png/2715255-200.png",
			},
			item3 : {
				title:"Data Cleaning",
				summary:"Whilst the use of up-front edit checks and validation has helped reduce the need for a retrospective ‘Data Cleaning’ phase, it is still a vital step in ensuring the quality of the data. It is often only during this phase that errors in longitudinal data are identified and resolved. And complex relationships between data can be checked and confirmed.",
				icon: "https://static.thenounproject.com/png/2942558-200.png",
			},
			item4 : {
				title:"Archiving",
				summary:"Good clinical practice (GCP) states that clinical trial information must be stored in such a way that it can be accurately reported, interpreted and verified. Therefore, retention of all essential documents after trial closure is crucial. Complete and legible trial data and results must be readily available to enable reconstruction of the trial.  Archiving digital data must be done in such a way that it is ‘future-proof’ and can be accessed many years in the future. Expiration dates might need to be applied to the data, reminders sent out when the data or parts of the data must be destroyed.",
				icon: "https://static.thenounproject.com/png/989773-200.png",
			},
			item5 : {
				title:"Data Monitoring",
				summary:"A robust process must be in place to query data that has been entered, report on the queries that have been entered, chase outstanding queries, identify trends, and finally resolve and close queries. Source Data Verification (SDV) is another aspect of monitoring that the IS Teams are involved in, identifying the data that needs to be verified, tracking the data and queries raised, producing monitoring reports and generally help manage the process.",
				icon: "https://static.thenounproject.com/png/3325779-200.png",
			},
			item6 : {
				title:"Data Sharing",
				summary:"The value and utility of research outputs increases the more broadly they are available to be considered and used by others, including scholars, businesses and charities around the globe, as well as society in general. Therefore, data management must also take into account processes for sharing data within the wider research community to provide opportunities to accelerate the progress of research and improvements in health. IS Teams help in ensuring that the data is secure, anonymised appropriately, is tracked, formatting the data and tracking consent.",
				icon: "https://static.thenounproject.com/png/3215056-200.png",
			},
			item7 : {
				title:"Data Management Plan",
				summary:"Data Management is a series of critical tasks performed on clinical trial data to ensure data integrity for use in statistical analysis. A Data Management Plan (DMP) is a written document of these tasks, that describes the plans for the collection and management of data throughout the lifecycle of a clinical trial. Depending on a CTU’s setup IS Teams will author or contribute to DMP creation and enacting and maintaining tasks identified in the DMP.",
				icon: "https://static.thenounproject.com/png/1186269-200.png",
			},
			item8 : {
				title:"Data Locks",
				summary:"There various types of datalock taken for a variety of reasons, e.g. admin data locks for data cleaning purposes, interim data locks for interim analysis, safety analysis, DSMC, TMGs, APRs, DSURs etc. And of course the Final data lock taken at the end of the trial for the final analysis after which the database will be locked and all edit access revoked. The IS and DM teams will be heavily involved in all of these, identifying the when, how and why of the datalock.",
				icon: "https://static.thenounproject.com/png/2939479-200.png",
			},
			item9 : {
				title:"User Management",
				summary:"Authentication is whether you can access the system and that you are who you say you are, whereas Authorisation is whether you should have access to a particular part of the system. Both are integral to a secure and auditable system and needs to be managed in a robust and systematic way. IS Teams can help in this by identifying user activity, login and password failures, expired accounts and other unusual activity.",
				icon: "https://static.thenounproject.com/png/1057671-200.png",
			},
								 
		},
										},
	Infrastructure: {
		title: "Infrastructure",
		summary: "IT Infrastructure are the components required to operate and manage IT environments, such as servers, databases web applications. This can vary from CTU hosted to outsourced (to host institutes IT department or a cloud providers like Microsoft). IS Teams require knowledge and skills to either directly manage or liase and coordinate the management of infrastructure.",
		icon:"https://static.thenounproject.com/png/117239-200.png",
		items:{
			item1 : {
				title:"Servers",
				summary:"These are pieces of computer hardware or software that provide functionality for other software or devices to access, referred to as ‘clients’. Servers can be used for various tasks, such as hosting databases and websites, storage of files, email exchange, etc.",
				icon: "https://static.thenounproject.com/png/736733-200.png",
			},	
			item2 : {
				title:"Backups",
				summary:"These are copies of computer data which are taken and stored elsewhere. This would then be used to restore the original data after a data loss event occurs. Backing up data forms an integral part of service delivery in all organisations.",
				icon: "https://static.thenounproject.com/png/1081851-200.png",
			},
			item3 : {
				title:"SLA / Disaster Recovery",
				summary:"A service-level agreement (SLA) is a commitment between a client and a service provider. Various aspects of what the service provider is providing e.g., responsibilities, maintenance, etc. are agreed with the client. This commitment forms part of a CTU's disaster recovery, which is an CTU’s method of regaining access and functionality to its IT infrastructure after a significant event, such as a natural disaster or a cyber-attack.",
				icon: "https://static.thenounproject.com/png/1719081-200.png",
			},
			item4 : {
				title:"Maintenance",
				summary:"This is the task of keeping computer hardware or software operational. Maintenance on computer hardware can include activities such as replacing faulty disk drives, upgrading server components, replacing server racks, etc. Maintenance for computer software can include updating operating systems with the latest updates, security patches, bug fixes for a web site, etc.",
				icon: "https://static.thenounproject.com/png/2490291-200.png",
			},		 
			item5 : {
				title:"Support",
				summary:"This is a service provided by organisations to help and assist its users with issues concerning the computer hardware and software they use. IT infrastructure is supported by local IT Teams who are in turn supported by the service provide they use e.g., Microsoft.",
				icon: "https://static.thenounproject.com/png/818016-200.png",
			},		 
			item6 : {
				title:"Server Admin",
				summary:"Servers have to be configured in the correct way to allow them to perform their required tasks. These are usually configured and maintained by a server administrator. A server administrator can help to perform other tasks, such as disaster recovery, maintenance, etc.",
				icon: "https://static.thenounproject.com/png/1864885-200.png",
			},		 
			item7 : {
				title:"Database Admin",
				summary:"Like servers, database server must be configured correctly to suit the organisation’s needs. These are usually configured and maintained by a database administrator. Many of the tasks related to database administration are like a server administrator but this is more confined to the database software itself. Tasks can include maintenance of existing database, extraction of data, database backups, query maintenance, etc.",
				icon: "https://static.thenounproject.com/png/2017306-200.png",
			},		
			item8 : {
				title:"Hosting",
				summary:"This is a service which is provided by an organisation which allows for the storage of data on a server which is meant to be accessed via the Internet. A common service is a web hosting service, which allows a client to make a web site available on the world wide web. Cloud Services is another type of hosting which is available e.g., e.g., Microsoft Azure, Amazon Web Services, etc.",
				icon: "https://static.thenounproject.com/png/2556840-200.png",
			},		 
			item9 : {
				title:"Security",
				summary:"Because IT infrastructure is crucial to the delivery of business for an organisation, it is very important that security is considered. This helps to prevent from any unwanted access into critical systems and protects any sensitive data that may be stored within the infrastructure. Some examples of security are two-factor authentication and one time passwords.",
				icon: "https://static.thenounproject.com/png/957672-200.png",
			},		  		 		 	 
		},
										},
	Regulations : {
		title: "Regulations",
		summary: "The data collected for a clinical trial is the most important aspect in research; without accurate and compliant data, the research question cannot be answered. IS Teams must ensure regulations are followed for all systems they support. This not only applies the GCP regulations around clinical data systems and system validation but also around legal regulation for systems about handling data and security and other regulations such accessibility of web applications.",
		icon:"https://static.thenounproject.com/png/3194419-200.png",
		items:{
			item1 : {
				title:"Good Clinical Practice",
				summary:"Good Clinical Practice (GCP) is the international ethical, scientific and practical standard to which all clinical research is conducted.  GCP protects the rights, safety and wellbeing of study participants.  Collecting compliant data ensures the safety and eligibility of the participant, demonstrates compliance with study procedures and drug safety and adherence to GCP. ",
				icon: "https://static.thenounproject.com/png/1067176-200.png",
			},	
			item2 : {
				title:"MHRA",
				summary:"The Medicines and Healthcare products Regulatory Agency (MHRA) regulates medicines and medical devices in the UK.  When working in clinical trials, IS/IT staff need a good understanding of the various regulatory standards that apply to clinical data and Electronic Data Systems (EDC) to ensure data are of a high quality and robust data integrity.   Electronic Case Report Forms (eCRFs) should be designed aligned with ALCOA+ Principles; a set of principles that ensures data integrity, introduced and used by the Food and Drug Administration (FDA):<br> <strong>A</strong> – Attributable; <strong>L</strong> – Legible, <strong>C</strong> – Contemporaneous, <strong>O</strong>- Original, <strong>A</strong> – Accurate Plus: <strong>C</strong> - Complete, <strong>C</strong> – Consistent, <strong>E</strong> – Enduring, <strong>A</strong> – Available. <br>The eCRF must comply with ALCOA+ principles and facilitate good data management.  The layout and design of individual eCRFs should be designed to ensure robust and accurate data collection.  Data can be deleted or changed within the EDC, however, this must always be recorded in the audit trail",
				icon: "https://static.thenounproject.com/png/3967870-200.png",
			},
			item3 : {
				title:"NHS DPST",
				summary:"The Data Security and Protection Toolkit (DPST) is an online self-assessment tool that allows organisations to measure their performance against the National Data Guardian’s 10 data security standards. <br> All organisations that have access to NHS patient data and systems must use this toolkit to provide assurance that they are practising good data security and that personal information is handled correctly. <br> This system is subject to ongoing development. It is important to have a broad understanding of the clinical trial process including the application process and ethics approvals.  The NHS toolkit helps with the overall development of the EDC used for data collection.",
				icon: "https://static.thenounproject.com/png/2012616-200.png",
			},
			item4 : {
				title:"GDPR and DPA",
				summary:"The Data Protection Act 2018 (the UK’s implementation of the GDPR) controls how your personal information is used by organisations, businesses or the government. User management is crucial for maintaining data integrity and security of the data and system.   EDCs must have robust back up procedures in place and servers are situated in secure locations, with data being collected in accordance with GDPR (i.e. UK based servers). Data needs to be regularly viewed and cleaned, and ultimately, extracted for analysis.  Any reporting and data extract tools must ensure the correct data are viewed.",
				icon: "https://static.thenounproject.com/png/2592896-200.png",
			},		 
			item5 : {
				title:"SOP",
				summary:"When working with clinical data, it is quality assurance working in accordance with Standard Operation Systems (SOPs) and Working Instructions (WI).  SOPs define the process that demonstrate how GCP is adhered to and is part of any regulatory inspection or audit. The final and approved protocol design, including the workflow, is incorporated into the study design within the EDC.",
				icon: "https://static.thenounproject.com/png/1661080-200.png",
			},		 
			item6 : {
				title:"Audits",
				summary:"By following principles of good Data Management ensures robust data collection, statistical analysis and reporting.   There are many IT aspects that would be considered as part of an audit or inspection. Some key aspects include ensuring clinical data are only entered and accessed by trained individuals, who are assigned specific role-based access to the EDC; key data eCRFs (e.g. Serious Adverse Events) are reviewed and signed off by qualified clinical individuals; EDCs have an audit trail that cannot be edit or deleted; randomisation within a study may be accommodated within or outside of the EDC and is an integral part of the study design, therefore the IT systems that facilitate randomisation must ensure that participants are randomised correctly, in accordance with any defined stratification to prevent unbiased allocation of treatments. A compliant randomisation system will facilitate the emergency unblinding of participants and at the end of the study during statistical analysis.",
				icon: "https://static.thenounproject.com/png/1634556-200.png",
			},		 
			item7 : {
				title:"World Wide Web Regulations",
				summary:"Trial information and activities are increasingly being provided online and facilitating participant access is therefore crucial to running a successful modern trial.  IS Teams use standards such as those included in the Web Content Accessibility Guidelines (known as WCAG) to improve web accessibility and ensure that content is Perceivable, Operable, Understandable, and Robust.",
				icon: "https://static.thenounproject.com/png/2373772-200.png",
			},		
			item8 : {
				title:"Risk Assessments",
				summary:"For any Electronic Data Capture (EDC) systems and other IT systems used in clinical trials, risk assessments must be performed by IS Teams to define the level of Computer System Validation (CSV) required for a system or part of a procurement activity for new IT solutions.",
				icon: "https://static.thenounproject.com/png/3732359-200.png",
			},		 
			item9 : {
				title:"Computer System Validation",
				summary:"Any Electronic Data Capture (EDC) system that is used for clinical trial data collection can only be used if implemented in accordance with Computer System Validation principles (CSV).  This ensures that the data that are entered into the EDC are the same as the data extracted from the system for data analysis.  With the advent of new technological solutions, any EDC integrations, use of routine data or other methods of incorporating data within the EDC must be fully validated to ensure the process results in correct and accurate data.",
				icon: "https://static.thenounproject.com/png/167672-200.png",
			},		  		 		 	 
		},
										},
	Trial_Design : {
		title: "Trial Design",
		summary: "The IS team are required to provide guidance or action a wide number of tasks with regards to trial design, including: understanding and interpreting user requirements; facilitating use of a trial management system; providing access to validated, cleaned data extracts; maintaining systems, servers and processes; keeping up-to-date with technologies for a variety of applications; archiving paper and electronic data; providing realistic costings; contributing to, understanding and working within protocols; engaging with a wide variety of audiences and improving patient experience of the trial process.",
		icon:"https://static.thenounproject.com/png/1779791-200.png",
		items:{
			item1 : {
				title:"Requirements",
				summary:"Business analysis skills are required to interpret user requirements into workable solutions. Trials are often novel or are testing new ways of working by their nature, necessitating creating new functionality for existing systems. A basic setup will be a standard cost (in both price and time), with additional functionality, equipment and integrations all extra. Examples of non-standard requirements include eConsent, eSignatures, data imports (e.g. CSV), integration with external systems, large volumes of data (e.g. MRI scans) and management of IMPs (drugs).",
				icon: "https://static.thenounproject.com/png/3430242-200.png",
			},	
			item2 : {
				title:"Technologies",
				summary:"Technology is a constantly evolving area which needs to be kept up-to-date with, none more so than for staff in the IS world. Data can be collected via copious methods – written CRFs, diaries, telephone, mobile, email, face-to-face, wearables, social media, patient records… These can be collectively categorised to paper or electronic data. They may be collected by researchers, health professionals or from the participant themselves, referred to as PROMS or ePROMS (electronic patient reported outcome measures). The language and development environment of the data collection, IMP management, randomisation and CTMS also needs to be considered, particularly as aging technologies come to end-of-life.",
				icon: "https://static.thenounproject.com/png/3156376-200.png",
			},
			item3 : {
				title:"Costings",
				summary:"The financial cost of project delivery requires accounting for staff salaries (full time, part time, changing of staffing and costs throughout), buildings infrastructure costs, data capture through various mediums (printing and postage, SMS, online hosting, software and licencing) and additional costs for the time taken to bespoke trial design and SWATs.",
				icon: "https://static.thenounproject.com/png/3428234-200.png",
			},
			item4 : {
				title:"Maintenance",
				summary:"The trial lifecycle evolves through the feasibility, pilot and main phases, meaning changes are never too far away in the world of IS. These tend to be managed through the change request process, which involves analysis and translation of requests into actionable tasks (systems analysis). Underlying systems must also be kept patched and up-to-date in order to keep them running and secure. Multiple environments are usually required to separate development from training/staging and production. This often involves a duplication of work to ensure changes will not adversely affect live data.",
				icon: "https://static.thenounproject.com/png/2490291-200.png",
			},		 
			item5 : {
				title:"Archiving",
				summary:"Data created as part of a trial, where electronic or paper-based, will require storage, archiving and/or destruction. Consideration needs to be made for security of said data, including access and where/how it is stored and the safety of the chosen location. Data may need to be anonymised and compartmentalised depending on the sensitivity of the contents – this could include anonymisation or pseudonymisation. Thought must also be given for the volume of data to be stored – physical data will take up floor space and will need to be protected (e.g. pest control, fire and water damage). Electronic data must be accessible for future retrieval – standardised data formats are required for long-term storage.",
				icon: "https://static.thenounproject.com/png/3012925-200.png",
			},		 
			item6 : {
				title:"Audience / PPI / UX",
				summary:"In is esstenial to have patient and public involvement (PPI) to understand the audience and their user experience (UX) when designing information systems for trials.<br> IS processes and outputs are under continual change and improvement to meet the demands and respond to the feedback of the end users and their representatives, whilst improving inclusivity and widening research cohorts. IT systems have had to become mobile friendly and include more integration to external services to encompass novel trial design which allows for more patient choice. As with all software solutions they must be continually upgraded to use the latest security protocols and be maintainable long term. Data capture has to be changed in a similar fashion with numerous methods for electronic data capture gradually replacing paper-based systems. The engagement of participants is also studied and boosting these rates through incentives is constantly included and remove through trials.",
				icon: "https://static.thenounproject.com/png/2215586-200.png",
			},		 
			item7 : {
				title:"Protocol",
				summary:"The protocol determines every implementation of a data management process that is undertaken. In the first instance the protocol is interpreted for a trial synopsis followed by an interpretation of the requirements for randomisation and capturing both routine and ad-hoc data. Randomisation information contains the method of allocation, the point at which randomisation occurs, the allocations and stratification factors. All of which need to be captured as inputs, used by a randomisation service or possibly returned to a researcher/user. Routine data collection timelines and flowcharts are converted into discrete elements of data capture (a paper or CRF, a responsive text, a phone call etc) to be used throughout the lifecycle and ad-hoc events and they data they produce are handled through forms and or TMS.",
				icon: "https://static.thenounproject.com/png/3060751-200.png",
			},		
			item8 : {
				title:"Data Extracts",
				summary:"Data created as part of a trial needs to be validated, cleaned and exported. Extracts will be required throughout the trial lifecycle for TMGs, TSCs and DMECs for interim analyses and, ultimately, final analysis. Data may also be required on an ad hoc basis. In order for data to be requested, the person asking must understand what is available – a data dictionary will be created to facilitate this. The format of the data and the software used to read this will also need to be considered, along with the method of transfer (encrypted, large dataset, standardised format?)",
				icon: "https://static.thenounproject.com/png/2326859-200.png",
			},		 
			item9 : {
				title:"Trial Management System",
				summary:"For a trial to be successfully run, a TMS must be provided. This may be an off-the-shelf product (MACRO, OpenClinica, REDCap) or a bespoke system may be required. A TMS usually contains features for managing sites/centres, users (linked to the delegation log), recruitment, screening, consent, randomisation and follow-ups. It may also include functionality for printing letters, exporting data, SWATs (studies within a trial), text messaging, emails and data querying and as well as other novel functionality. It will need to be provided before sites are setup and will exists throughout the length of the trial.",
				icon: "https://static.thenounproject.com/png/3049447-200.png",


			},		  		 		 	 
		},
										},
};


// Returns j-th adjacent face of i-th face
function mx(i, j) {
	return ([2, 4, 3, 5][j % 4 |0] + i % 2 * ((j|0) % 4 * 2 + 3) + 2 * (i / 2 |0)) % 6;
}

function getAxis(face) {
	return String.fromCharCode('X'.charCodeAt(0) + face / 2); // X, Y or Z
}

// Moves each of 26 pieces to their places, assigns IDs and attaches stickers
function assembleCube() {
	function moveto(face) {
		old_id = id;
		id = id + (1 << face);
	//	console.log('moveto: '+id);
		var ukcrc_rc_topic = "";
		var ukcrc_rc_item = "";
		var item = "";
		
		switch (colors[face]) {
			case 'blue':
				ukcrc_rc_topic = "Trial_Design";
				break;
			case 'green':
				ukcrc_rc_topic = "Data";
				break;
			case 'white':
				ukcrc_rc_topic = "Software_Dev";
				break;
			case 'yellow':
				ukcrc_rc_topic = "Infrastructure";
				break;
			case 'orange':
				ukcrc_rc_topic = "Collaboration";
				break;
			case 'red':
				ukcrc_rc_topic = "Regulations";
				break;
		}
		
		var cube_face = colors[face] + "_" + i;
		
		switch (cube_face) {
			case "white_23":
				/* [Software Dev] Item 1 */
				ukcrc_rc_item = "SoftwareDev_Item_1";
				item = "item1";
				break;
			case "white_14":
				/* [Software Dev] Item 2 */
				ukcrc_rc_item = "SoftwareDev_Item_2";
				item = "item2";
				break;
			case "white_20":
				/* [Software Dev] Item 3 */
				ukcrc_rc_item = "SoftwareDev_Item_3";
				item = "item3";
				break;
			case "white_7":
				/* [Software Dev] Item 4 */
				ukcrc_rc_item = "SoftwareDev_Item_4";
				item = "item4";
				break;
			case "white_2":
				/* [Software Dev] Item 5 */
				ukcrc_rc_item = "SoftwareDev_Item_5";
				item = "item5";
				break;
			case "white_12":
				/* [Software Dev] Item 6 */
				ukcrc_rc_item = "SoftwareDev_Item_6";
				item = "item6";
				break;
			case "white_25":
				/* [Software Dev] Item 7 */
				ukcrc_rc_item = "SoftwareDev_Item_7";
				item = "item7";
				break;
			case "white_8":
				/* [Software Dev] Item 8 */
				ukcrc_rc_item = "SoftwareDev_Item_8";
				item = "item8";
				break;
			case "white_18":
				/* [Software Dev] Item 9 */
				ukcrc_rc_item = "SoftwareDev_Item_9";
				item = "item9";
				break;
			case "green_23":
				/* [Data] Item 1 */
				ukcrc_rc_item = "Data_Item_1";
				item = "item1";
				break;
			case "green_7":
				/* [Data] Item 2 */
				ukcrc_rc_item = "Data_Item_2";
				item = "item2";
				break;
			case "green_25":
				/* [Data] Item 3 */
				ukcrc_rc_item = "Data_Item_3";
				item = "item3";
				break;
			case "green_17":
				/* [Data] Item 4 */
				ukcrc_rc_item = "Data_Item_4";
				item = "item4";
				break;
			case "green_1":
				/* [Data] Item 5 */
				ukcrc_rc_item = "Data_Item_5";
				item = "item5";
				break;
			case "green_10":
				/* [Data] Item 6 */
				ukcrc_rc_item = "Data_Item_6";
				item = "item6";
				break;
			case "green_19":
				/* [Data] Item 7 */
				ukcrc_rc_item = "Data_Item_7";
				item = "item7";
				break;
			case "green_13":
				/* [Data] Item 8 */
				ukcrc_rc_item = "Data_Item_8";
				item = "item8";
				break;
			case "green_21":
				/* [Data] Item 9 */
				ukcrc_rc_item = "Data_Item_9";
				item = "item9";
				break;
			case "orange_25":
				/* [Collaboration] Item 1 */
				ukcrc_rc_item = "Collaboration_Item_1";
				item = "item1";
				break;
			case "orange_8":
				/* [Collaboration] Item 2 */
				ukcrc_rc_item = "Collaboration_Item_2";
				item = "item2";
				break;
			case "orange_18":
				/* [Collaboration] Item 3 */
				ukcrc_rc_item = "Collaboration_Item_3";
				item = "item3";
				break;
			case "orange_10":
				/* [Collaboration] Item 4 */
				ukcrc_rc_item = "Collaboration_Item_4";
				item = "item4";
				break;
			case "orange_4":
				/* [Collaboration] Item 5 */
				ukcrc_rc_item = "Collaboration_Item_5";
				item = "item5";
				break;
			case "orange_16":
				/* [Collaboration] Item 6 */
				ukcrc_rc_item = "Collaboration_Item_6";
				item = "item6";
				break;
			case "orange_21":
				/* [Collaboration] Item 7 */
				ukcrc_rc_item = "Collaboration_Item_7";
				item = "item7";
				break;
			case "orange_15":
				/* [Collaboration] Item 8 */
				ukcrc_rc_item = "Collaboration_Item_8";
				item = "item8";
				break;
			case "orange_22":
				/* [Collaboration] Item 9 */
				ukcrc_rc_item = "Collaboration_Item_9";
				item = "item9";
				break;
			case "blue_18":
				/* [Trial Design] Item 1 */
				ukcrc_rc_item = "TrialDesign_Item_1";
				item = "item1";
				break;
			case "blue_12":
				/* [Trial Design] Item 2 */
				ukcrc_rc_item = "TrialDesign_Item_2";
				item = "item2";
				break;
			case "blue_20":
				/* [Trial Design] Item 3 */
				ukcrc_rc_item = "TrialDesign_Item_3";
				item = "item3";
				break;
			case "blue_16":
				/* [Trial Design] Item 4 */
				ukcrc_rc_item = "TrialDesign_Item_4";
				item = "item4";
				break;
			case "blue_0":
				/* [Trial Design] Item 5 */
				ukcrc_rc_item = "TrialDesign_Item_5";
				item = "item5";
				break;
			case "blue_11":
				/* [Trial Design] Item 6 */
				ukcrc_rc_item = "TrialDesign_Item_6";
				item = "item6";
				break;
			case "blue_22":
				/* [Trial Design] Item 7 */
				ukcrc_rc_item = "TrialDesign_Item_7";
				item = "item7";
				break;
			case "blue_6":
				/* [Trial Design] Item 8 */
				ukcrc_rc_item = "TrialDesign_Item_8";
				item = "item8";
				break;
			case "blue_24":
				/* [Trial Design] Item 9 */
				ukcrc_rc_item = "TrialDesign_Item_9";
				item = "item9";
				break;
			case "red_20":
				/* [Regulations] Item 1 */
				ukcrc_rc_item = "Regulations_Item_1";
				item = "item1";
				break;
			case "red_14":
				/* [Regulations] Item 2 */
				ukcrc_rc_item = "Regulations_Item_2";
				item = "item2";
				break;
			case "red_23":
				/* [Regulations] Item 3 */
				ukcrc_rc_item = "Regulations_Item_3";
				item = "item3";
				break;
			case "red_11":
				/* [Regulations] Item 4 */
				ukcrc_rc_item = "Regulations_Item_4";
				item = "item4";
				break;
			case "red_5":
				/* [Regulations] Item 5 */
				ukcrc_rc_item = "Regulations_Item_5";
				item = "item5";
				break;
			case "red_17":
				/* [Regulations] Item 6 */
				ukcrc_rc_item = "Regulations_Item_6";
				item = "item6";
				break;
			case "red_24":
				/* [Regulations] Item 7 */
				ukcrc_rc_item = "Regulations_Item_7";
				item = "item7";
				break;
			case "red_9":
				/* [Regulations] Item 8 */
				ukcrc_rc_item = "Regulations_Item_8";
				item = "item8";
				break;
			case "red_19":
				/* [Regulations] Item 9 */
				ukcrc_rc_item = "Regulations_Item_9";
				item = "item9";
				break;
			case "yellow_21":
				/* [Infrastructure] Item 1 */
				ukcrc_rc_item = "Infrastructure_Item_1";
				item = "item1";
				break;
			case "yellow_15":
				/* [Infrastructure] Item 2 */
				ukcrc_rc_item = "Infrastructure_Item_2";
				item = "item2";
				break;
			case "yellow_22":
				/* [Infrastructure] Item 3 */
				ukcrc_rc_item = "Infrastructure_Item_3";
				item = "item3";
				break;
			case "yellow_13":
				/* [Infrastructure] Item 4 */
				ukcrc_rc_item = "Infrastructure_Item_4";
				item = "item4";
				break;
			case "yellow_3":
				/* [Infrastructure] Item 5 */
				ukcrc_rc_item = "Infrastructure_Item_5";
				item = "item5";
				break;
			case "yellow_6":
				/* [Infrastructure] Item 6 */
				ukcrc_rc_item = "Infrastructure_Item_6";
				item = "item6";
				break;
			case "yellow_19":
				/* [Infrastructure] Item 7 */
				ukcrc_rc_item = "Infrastructure_Item_7";
				item = "item7";
				break;
			case "yellow_9":
				/* [Infrastructure] Item 8 */
				ukcrc_rc_item = "Infrastructure_Item_8";
				item = "item8";
				break;
			case "yellow_24":
				/* [Infrastructure] Item 9 */
				ukcrc_rc_item = "Infrastructure_Item_9";
				item = "item9";
				break;
		}
		var new_div = document.createElement('div');
		new_div.setAttribute('class', 'sticker ' + colors[face] + ' ' + i + " " + ukcrc_rc_topic + ' ' + ukcrc_rc_item);
		new_div.setAttribute('ukcrc_item', item);
		new_div.setAttribute('ukcrc_topic', ukcrc_rc_topic);
		pieces[i].children[face].appendChild(new_div);
			
			
		return 'translate' + getAxis(face) + '(' + (face % 2 * 4 - 2) + 'em)';
	}
	for (var id, x, i = 0; id = 0, i < 26; i++) {
		x = mx(i, i % 18);
		pieces[i].style.transform = 'rotateX(0deg)' + moveto(i % 6) +
			(i > 5 ? moveto(x) + (i > 17 ? moveto(mx(x, x + 2)) : '') : '');
		pieces[i].setAttribute('id', 'piece' + id);
//		console.log(id);
	}
}

function getPieceBy(face, index, corner) {
	return document.getElementById('piece' +
		((1 << face) + (1 << mx(face, index)) + (1 << mx(face, index + 1)) * corner));
}

// Swaps stickers of the face (by clockwise) stated times, thereby rotates the face
function swapPieces(face, times) {
	for (var i = 0; i < 6 * times; i++) {
		var piece1 = getPieceBy(face, i / 2, i % 2),
				piece2 = getPieceBy(face, i / 2 + 1, i % 2);
		for (var j = 0; j < 5; j++) {
			var sticker1 = piece1.children[j < 4 ? mx(face, j) : face].firstChild,
					sticker2 = piece2.children[j < 4 ? mx(face, j + 1) : face].firstChild,
					className = sticker1 ? sticker1.className : '';
			console.log(className);
			if (className) {
				sticker1.className = sticker2.className;
				sticker2.className = className;
				var temp_item = sticker1.getAttribute('ukcrc_item');
				var temp_topic = sticker1.getAttribute('ukcrc_topic')
			  sticker1.setAttribute('ukcrc_item',sticker2.getAttribute('ukcrc_item'));
		    sticker1.setAttribute('ukcrc_topic', sticker2.getAttribute('ukcrc_topic'));
				sticker2.setAttribute('ukcrc_item',temp_item);
		    sticker2.setAttribute('ukcrc_topic', temp_topic);
			}
		}
	}
}

// Animates rotation of the face (by clockwise if cw), and then swaps stickers
function animateRotation(face, cw, currentTime) {
	var k = .3 * (face % 2 * 2 - 1) * (2 * cw - 1),
			qubes = Array(9).fill(pieces[face]).map(function (value, index) {
				return index ? getPieceBy(face, index / 2, index % 2) : value;
			});
	(function rotatePieces() {
		var passed = Date.now() - currentTime,
				style = 'rotate' + getAxis(face) + '(' + k * passed * (passed < 300) + 'deg)';
		qubes.forEach(function (piece) {
			piece.style.transform = piece.style.transform.replace(/rotate.\(\S+\)/, style);
		});
		if (passed >= 300)
			return swapPieces(face, 3 - 2 * cw);
		requestAnimationFrame(rotatePieces);
	})();
}

// Events
function mousedown(md_e) {
	var startXY = pivot.style.transform.match(/-?\d+\.?\d*/g).map(Number),
			element = md_e.target.closest('.element'),
			face = [].indexOf.call((element || cube).parentNode.children, element);
	function mousemove(mm_e) {
		if (element) {
			var gid = /\d/.exec(document.elementFromPoint(mm_e.pageX, mm_e.pageY).id);
			if (gid && gid.input.includes('anchor')) {
				mouseup();
				var e = element.parentNode.children[mx(face, Number(gid) + 3)].hasChildNodes();
				animateRotation(mx(face, Number(gid) + 1 + 2 * e), e, Date.now());
			}
		} else pivot.style.transform =
			'rotateX(' + (startXY[0] - (mm_e.pageY - md_e.pageY) / 2) + 'deg)' +
			'rotateY(' + (startXY[1] + (mm_e.pageX - md_e.pageX) / 2) + 'deg)';
	}
	function mouseup() {
		document.body.appendChild(guide);
		scene.removeEventListener('mousemove', mousemove);
		scene.removeEventListener('touchmove', mousemove);
		document.removeEventListener('mouseup', mouseup);
		document.removeEventListener('touchend', mouseup);
		scene.addEventListener('mousedown', mousedown);
		scene.addEventListener('touchstart', mousedown);
	}

	(element || document.body).appendChild(guide);
	scene.addEventListener('mousemove', mousemove);
	scene.addEventListener('touchmove', mousemove);
	document.addEventListener('mouseup', mouseup);
	document.addEventListener('touchend', mouseup);
	scene.removeEventListener('mousedown', mousedown);
	scene.removeEventListener('touchstart', mousedown);
}

document.ondragstart = function() { return false; }
window.addEventListener('load', assembleCube);
scene.addEventListener('mousedown', mousedown);
scene.addEventListener('touchstart', mousedown);
build_activities_list();

var elements = document.getElementsByClassName("element");

var cubeclick = function() {
    var Elementclass = this.className;
	 var parentId = this.parentElement.getAttribute("id");
	var clicked_cube_face = this.getElementsByClassName("sticker")[0];
	 var childClass = clicked_cube_face.className;
	
	var item = clicked_cube_face.getAttribute("ukcrc_item");
	var topic = clicked_cube_face.getAttribute("ukcrc_topic");
	build_content(topic, item);
	cube_item_text = parentId +" "+Elementclass +" "+childClass;
	cube_topic_text = parentId +" "+Elementclass +" "+childClass;
	
	//console.log(this.parentElement.getAttribute("id"));
   // alert(parentId +" "+Elementclass);
	
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', cubeclick, false);
}

function build_content (topic, item)
{
	
	var local_topic = ukcrc_is_content[topic];
	var local_item = ukcrc_is_content[topic].items[item];
	
//	console.log(topic);
//	console.log(ukcrc_is_content[topic].title);
	document.getElementById("ukcrc-item-title").innerHTML = local_item.title;
	document.getElementById("ukcrc-item-icon").innerHTML = '<img width="100" src="'+local_item.icon+'" >';
	document.getElementById("ukcrc-item-summary").innerHTML = local_item.summary;
	
	document.getElementById("ukcrc-topic-title").innerHTML = local_topic.title;
	document.getElementById("ukcrc-topic-icon").innerHTML = '<img width="100" src="'+local_topic.icon+'" >';
	document.getElementById("ukcrc-topic-summary").innerHTML = local_topic.summary;
	
	var key_col = "";
	var sec_col = "";
	
	switch (topic) {
			case 'Trial_Design':
				sec_col = "#65afff";
				break;
			case 'Data':
				sec_col = "#44d661";
				break;
			case 'Software_Dev':
				sec_col = "#FFFFFF";
				break;
			case 'Infrastructure':
				sec_col = "#ECCC60";
				break;
			case 'Collaboration':
				sec_col = "#FF7C40";
				break;
			case 'Regulations':
				sec_col = "#FF8380";
				break;
	}
			
			var bg_style = "height: 100%; overflow: hidden; background: radial-gradient(circle, "+ sec_col+", rgba("+key_col+" , 1)) { color: #888; blend-mode: overlay; };";
//	console.log(bg_style);
//	document.getElementsByTagName("head").style.background = bg_style;
	document.body.style.background  = sec_col;
	
}

function build_activities_list()
{
	var activities_list_content ="";

	
	activities_list_content += build_catorgy(ukcrc_is_content['Regulations'], "#FF8380");
	activities_list_content += build_catorgy(ukcrc_is_content['Trial_Design'], "#65afff");
	activities_list_content += build_catorgy(ukcrc_is_content['Collaboration'], "#FF7C40");
	activities_list_content += build_catorgy(ukcrc_is_content['Data'], "#44d661");
	activities_list_content += build_catorgy(ukcrc_is_content['Software_Dev'], "#ECCC60");
	activities_list_content += build_catorgy(ukcrc_is_content['Infrastructure'], "#FFFFFF");

	
	document.getElementById("activities-list").innerHTML = activities_list_content;
}

function build_catorgy(catorgy, color)
{
	 var heading = build_div(catorgy, 'h2');
		var items = '';
	items += build_div(catorgy['items']['item1'],'h5');
	items += build_div(catorgy['items']['item2'],'h5');
	items += build_div(catorgy['items']['item3'],'h5');
	items += build_div(catorgy['items']['item4'],'h5');
	items += build_div(catorgy['items']['item5'],'h5');
	items += build_div(catorgy['items']['item6'],'h5');
	items += build_div(catorgy['items']['item7'],'h5');
	items += build_div(catorgy['items']['item8'],'h5');
	items += build_div(catorgy['items']['item9'],'h5');

	
//	ukcrc_is_content[topic].items
				
				return '<div class="activities-cat"style="background-color:'+color+'">'+ heading + '<div class="activities-cat">'+ items +'</div></div>'
}

function build_div(item, header)
{
	return '<div class="activities-header"><img src="'+item['icon']+'">'+'<'+header+'>' + item['title'] + '</'+header+'></div><div style="clear: left;"><p>'+ item['summary'] +'</p></div>';
}




/*

.header img {
  float: left;
  width: 100px;
  height: 100px;
  background: #555;
}

.header h1 {
  position: relative;
  top: 18px;
  left: 10px;
}

			title: "Collaboration",
		summary: "IS Team collaboration with other groups involved in clinical trials is essential. IS Team must work closely together with these groups to understand requirements, context and priorities whilst communicating IS perspective. When this happens well, we achieve safe, quality data and research from the successful, setup, running and closing of clinical trials.",
		icon:"https://static.thenounproject.com/png/661478-200.png",
		items:{
			item1 : {
			*/