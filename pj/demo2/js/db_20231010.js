$.db =
{
  "awsSAP": [
    {
      "no": 1,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 2,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 3,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 4,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 6,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 7,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 8,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "C,E",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 10,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 13,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 16,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 17,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 18,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 20,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 21,
      "q": "A company built an application based on AWS Lambda deployed in an AWS CloudFormation stack. The last production release of the web application introduced an issue that resulted in an outage lasting several minutes. A solutions architect must adjust the deployment process to support a canary release.\nWhich solution will meet these requirements?",
      "a": [
        "A.Create an alias for every new deployed version of the Lambda function. Use the AWS CLI update-alias command with the routing-config parameter to distribute the load.",
        "B.Deploy the application into a new CloudFormation stack. Use an Amazon Route 53 weighted routing policy to distribute the load.",
        "C.Create a version for every new deployed Lambda function. Use the AWS CLI update-function-configuration command with the routing-config parameter to distribute the load.",
        "D.Configure AWS CodeDeploy and use CodeDeployDefault.OneAtATime in the Deployment configuration to distribute the load."
      ],
      "q_cn": "一家公司基于 AWS CloudFormation 堆栈中部署的 AWS Lambda 构建了一个应用程序。Web 应用程序的最后一个生产版本引入了一个问题，导致中断持续几分钟。解决方案架构师必须调整部署过程以支持金丝雀版本。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "CloudFormation stack,issue,outage lasting several minutes",
      "aK": ["alias"]
    },
    {
      "no": 22,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 23,
      "q": "A solutions architect needs to advise a company on how to migrate its on-premises data processing application to the AWS Cloud. Currently, users upload input files through a web portal. The web server then stores the uploaded files on NAS and messages the processing server over a message queue. Each media file can take up to 1 hour to process. The company has determined that the number of media files awaiting processing is significantly higher during business hours, with the number of files rapidly declining after business hours.\nWhat is the MOST cost- effective migration recommendation ?",
      "a": [
        "A.Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in an Amazon S3 bucket.",
        "B.Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, create a new Amazon EC2 instance to pull requests from the queue and process the files. Store the processed files in Amazon EFS. Shut down the EC2 instance after the task is complete.",
        "C.Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in Amazon EFS.",
        "D.Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. Use Amazon EC2 instances in an EC2 Auto Seating group to pull requests from the queue and process the files. Scale the EC2 instances based on the SQS queue length. Store the processed files in an Amazon S3 bucket."
      ],
      "q_cn": "解决方案架构师需要就如何将本地数据处理应用程序迁移到 AWS 云向公司提供建议。目前，用户通过 Web 门户上传输入文件。然后，Web 服务器将上载的文件存储在 NAS 上，并通过消息队列向处理服务器发送消息。每个媒体文件最多可能需要 1 小时来处理。该公司已确定，在工作时间等待处理的媒体文件数量明显增加，而文件数量在工作时间后迅速下降。\n什么是最具成本效益的迁移建议？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "NAS",
      "aK": ["SQS,queue length,EC2,S3"]
    },
    {
      "no": 24,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 25,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 26,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 27,
      "q": "A company has an on-premises monitoring solution using a PostgreSQL database for persistence of events. The database is unable to scale due to heavy ingestion and it frequently runs out of storage.\nThe company wants to create a hybrid solution and has already set up a VPN connection between its network and AWS.The solution should include the following attributes:\n - Managed AWS services to minimize operational complexity.\n - A buffer that automatically scales to match the throughput of data and requires no ongoing administration.\n - A visualization tool to create dashboards to observe events in near- real time.\n - Support for semi-structured JSON data and dynamic schemas.\nWhich combination of components will enable the company to create a monitoring solution that will satisfy these requirements?(Choose two.) ",
      "a": [
        "A.Use Amazon Kinesis Data Firehose to buffer events. Create an AWS Lambda function to process and transform events.",
        "B.Create an Amazon Kinesis data stream to buffer events. Create an AWS Lambda function to process and transform events.",
        "C.Configure an Amazon Aurora PostgreSQL DB cluster to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.",
        "D.Configure Amazon Elasticsearch Service (Amazon ES) to receive events. Use the Kibana endpoint deployed with Amazon ES to create near-real-time visualizations and dashboards.",
        "E.Configure an Amazon Neptune DB instance to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards."
      ],
      "q_cn": "一家公司有一个本地监视解决方案，该解决方案使用 PostgreSQL 数据库来实现事件的持久性。由于大量摄取，数据库无法扩展，并且经常耗尽存储空间。\n该公司希望创建一个混合解决方案，并且已经在其网络和 AWS 之间建立了 VPN 连接。该解决方案应包括以下属性：\n - 托管 AWS 服务，以最大程度地降低操作复杂性。\n - 自动扩展以匹配数据吞吐量且无需持续管理的缓冲区。\n - 用于创建控制面板以近乎实时地观察事件的可视化工具。\n - 支持半结构化 JSON 数据和动态架构。\n哪种组件组合将使公司能够创建满足这些要求的监控解决方案？（选择两个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,D",
      "qK": "on-premises monitoring,PostgreSQL",
      "aK": ["Kinesis Data Firehose,Elasticsearch Service,ES"]
    },
    {
      "no": 29,
      "q": "A life sciences company is using a combination of open source tools to manage data analysis workflows and Docker containers running on servers in its on-premises data center to process genomics data. Sequencing data is generated and stored on a local storage area network (SAN), and then the data is processed.\nThe research and development teams are running into capacity issues and have decided to re-architect their genomics analysis platform on AWS to scale based on workload demands and reduce the turnaround time from weeks to days.\nThe company has a high-speed AWS Direct Connect connection.Sequencers will generate around 200 GB of data for each genome, and individual jobs can take several hours to process the data with ideal compute capacity.The end result will be stored in Amazon S3.The company is expecting 10-15 job requests each day.\nWhich solution meets these requirements?",
      "a": [
        "A. Use regularly scheduled AWS Snowball Edge devices to transfer the sequencing data into AWS. When AWS receives the Snowball Edge device and the data is loaded into Amazon S3, use S3 events to trigger an AWS Lambda function to process the data.",
        "B. Use AWS Data Pipeline to transfer the sequencing data to Amazon S3. Use S3 events to trigger an Amazon EC2 Auto Scaling group to launch custom-AMI EC2 instances running the Docker containers to process the data.",
        "C. Use AWS DataSync to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Lambda function that starts an AWS Step Functions workflow. Store the Docker images in Amazon Elastic Container Registry (Amazon ECR) and trigger AWS Batch to run the container and process the sequencing data.",
        "D. Use an AWS Storage Gateway file gateway to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Batch job that executes on Amazon EC2 instances running the Docker containers to process the data."
      ],
      "q_cn": "一家生命科学公司正在使用开源工具来管理数据分析工作流，并在其本地数据中心的服务器上运行Docker容器来处理基因组学数据。排序数据生成并存储在本地存储区域网络 （SAN） 上，然后处理数据。\n研发团队遇到了容量问题，并决定在 AWS 上重新构建其基因组学分析平台，以便根据工作负载需求进行扩展，并将周转时间从数周缩短到数天。\n该公司拥有高速AWS Direct Connect连接。测序仪将为每个基因组生成大约 200 GB 的数据，单个作业可能需要几个小时才能以理想的计算能力处理数据。最终结果将存储在 Amazon S3 中。该公司预计每天有10- 15个工作请求。\n哪种解决方案满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "Docker,(SAN),200 GB,10-15 job",
      "aK": ["DataSync,ECR"]
    },
    {
      "no": 39,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 40,
      "q": "A company runs a proprietary stateless ETL application on an Amazon EC2 Linux instances. The application is a Linux binary, and the source code cannot be modified. The application is single-threaded, uses 2 GB of RAM, and is highly CPU intensive. The application is scheduled to run every 4 hours and runs for up to 20 minutes.A solutions architect wants to revise the architecture for the solution.\nWhich strategy should the solutions architect use?",
      "a": [
        "A.Use AWS Lambda to run the application. Use Amazon CloudWatch Logs to invoke the Lambda function every 4 hours.",
        "B.Use AWS Batch to run the application. Use an AWS Step Functions state machine to invoke the AWS Batch job every 4 hours.",
        "C.Use AWS Fargate to run the application. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke the Fargate task every 4 hours.",
        "D.Use Amazon EC2 Spot Instances to run the application. Use AWS CodeDeploy to deploy and run the application every 4 hours."
      ],
      "q_cn": "一家公司在 Amazon EC2 Linux 实例上运行专有的无状态 ETL 应用程序。该应用程序是 Linux 二进制文件，无法修改源代码。该应用程序是单线程的，使用 2 GB 的 RAM，并且占用大量 CPU。应用程序计划每 4 小时运行一次，运行时间最长可达20分钟。解决方案架构师想要修改解决方案的体系结构。\n解决方案架构师应使用哪种策略？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "ETL,Linux binary,source code cannot be modified",
      "aK": ["Fargate,EventBridge"]
    },
    {
      "no": 41,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,C",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 42,
      "q": "A finance company hosts a data lake in Amazon S3. The company receives financial data records over SFTP each night from several third parties. The company runs its own SFTP server on an Amazon EC2 instance in a public subnet of a VPC. After the files are uploaded, they are moved to the data lake by a cron job that runs on the same instance. The SFTP server is reachable on DNS sftp.example.com through the use of Amazon Route 53.\nWhat should a solutions architect do to improve the reliability and scalability of the SFTP solution?",
      "a": [
        "A.Move the EC2 instance into an Auto Scaling group. Place the EC2 instance behind an Application Load Balancer (ALB). Update the DNS record sftp.example.com in Route 53 to point to the ALB.",
        "B.Migrate the SFTP server to AWS Transfer for SFTP. Update the DNS record sftp.example.com in Route 53 to point to the server endpoint hostname.",
        "C.Migrate the SFTP server to a file gateway in AWS Storage Gateway. Update the DNS record sftp.example.com in Route 53 to point to the file gateway endpoint.",
        "D.Place the EC2 instance behind a Network Load Balancer (NLB). Update the DNS record sftp.example.com in Route 53 to point to the NLB."
      ],
      "q_cn": "一家金融公司在 Amazon S3 中托管了一个数据湖。该公司每晚都会通过SFTP从多个第三方接收财务数据记录。该公司在 VPC 的公有子网中的 Amazon EC2 实例上运行自己的 SFTP 服务器。上传文件后，它们会通过在同一实例上运行的 cron 作业移动到数据湖。SFTP 服务器可通过使用 Amazon Route 53 在 DNS sftp.example.com 上访问。\n解决方案架构师应如何提高 SFTP 解决方案的可靠性和可伸缩性？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "data lake,S3,SFTP,sftp.example.com",
      "aK": ["AWS Transfer for SFTP"]
    },
    {
      "no": 46,
      "q": "A company has an organization in AWS Organizations that has a large number of AWS accounts. One of the AWS accounts is designated as a transit account and has a transit gateway that is shared with all of the other AWS accounts. AWS Site-to-Site VPN connections are configured between all of the company's global offices and the transit account. The company has AWS Config enabled on all of its accounts.\nThe company's networking team needs to centrally manage a list of internal IP address ranges that belong to the global offices. Developers will reference this list to gain access to their applications securely.\nWhich solution meets these requirements with the LEAST amount of operational overhead?",
      "a": [
        "A.Create a JSON file that is hosted in Amazon S3 and that lists all of the internal IP address ranges. Configure an Amazon Simple Notification Service (Amazon SNS) topic in each of the accounts that can be invoked when the JSON file is updated. Subscribe an AWS Lambda function to the SNS topic to update all relevant security group rules with the updated IP address ranges.",
        "B.Create a new AWS Config managed rule that contains all of the internal IP address ranges. Use the rule to check the security groups in each of the accounts to ensure compliance with the list of IP address ranges. Configure the rule to automatically remediate any noncompliant security group that is detected.",
        "C.In the transit account, create a VPC prefix list with all of the internal IP address ranges. Use AWS Resource Access Manager to share the prefix list with all of the other accounts. Use the shared prefix list to configure security group rules in the other accounts.",
        "D.In the transit account, create a security group with all of the internal IP address ranges. Configure the security groups in the other accounts to reference the transit account's security group by using a nested security group reference of \"<transit-account-id>/sg-1a2b3c4d\"."
      ],
      "q_cn": "一家公司在 AWS Organizations 中有一个拥有大量 AWS 账户的组织。其中一个 AWS 账户被指定为中转账户，并具有与所有其他 AWS 账户共享的中转网关。AWS 站点到站点 VPN 连接在公司的所有全球办事处和传输账户之间配置。该公司在其所有账户上都启用了 AWS Config。\n公司的网络团队需要集中管理属于全球办事处的内部 IP 地址范围列表。开发人员将引用此列表以安全地访问其应用程序\n哪种解决方案以最少的运营开销满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "large number of AWS accounts,shared with all of the other,VPN",
      "aK": ["Resource Access Manager"]
    },
    {
      "no": 47,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "B,D,E",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 50,
      "q": "A company is running an application on several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The load on the application varies throughout the day, and EC2 instances are scaled in and out on a regular basis. Log files from the EC2 instances are copied to a central Amazon S3 bucket every 15 minutes.The security team discovers that log files are missing from some of the terminated EC2 instances.\nWhich set of actions will ensure that log files are copied to the central S3 bucket from the terminated EC2 instances?",
      "a": [
        "A.Create a script to copy log files to Amazon S3, and store the script in a file on the EC2 instance. Create an Auto Scaling lifecycle hook and an Amazon EventBridge (Amazon CloudWatch Events) rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to send ABANDON to the Auto Scaling group to prevent termination, run the script to copy the log files, and terminate the instance using the AWS SDK.",
        "B.Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook and an Amazon EventBridge (Amazon CloudWatch Events) rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send CONTINUE to the Auto Scaling group to terminate the instance.",
        "C.Change the log delivery rate to every 5 minutes. Create a script to copy log files to Amazon S3, and add the script to EC2 instance user data. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect EC2 instance termination. Invoke an AWS Lambda function from the EventBridge (CloudWatch Events) rule that uses the AWS CLI to run the user-data script to copy the log files and terminate the instance.",
        "D.Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook that publishes a message to an Amazon Simple Notification Service (Amazon SNS) topic. From the SNS notification, call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send ABANDON to the Auto Scaling group to terminate the instance."
      ],
      "q_cn": "一家公司在应用程序负载均衡器后面的 Auto Scaling 组中的多个 Amazon EC2 实例上运行应用程序。应用程序上的负载在一天中各不相同，EC2 实例会定期扩展和缩减。将 EC2 实例中的日志文件复制到中央Amazon S3 存储桶每 15 分钟一次。安全团队发现某些已终止的 EC2 实例中缺少日志文件。\n哪组操作将确保将日志文件从终止的 EC2 实例复制到中央 S3 存储桶？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "Log,copied to a central Amazon S3 bucket,15 minutes",
      "aK": ["Systems Manager document,EventBridge"]
    },
    {
      "no": 51,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 52,
      "q": "A company has an on-premises website application that provides real estate information for potential renters and buyers. The website uses a Java backend and a NoSQL MongoDB database to store subscriber data website uses a JavaThe company needs to migrate the entire application to AWS with a similar structure.The application must be deployed for high availability, and the company cannot make changes to the application.Which solution will meet these requirements?",
      "a": [
        "A.Use an Amazon Aurora DB cluster as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application.",
        "B.Use MongoDB on Amazon EC2 instances as the database for the subscriber data. Deploy EC2 instances in an Auto Scaling group in a single Availability Zone for the Java backend application.",
        "C.Configure Amazon DocumentDB (with MongoDB compatibility) with appropriately sized instances in multiple Availability Zones as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application.",
        "D.Configure Amazon DocumentDB (with MongoDB compatibility) in on-demand capacity mode in multiple Availability Zones as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application."
      ],
      "q_cn": "一家公司有一个本地网站应用程序，为潜在的租户和买家提供房地产信息。该网站使用Java后端和NoSQL MongoDB数据库来存储订户数据网站使用Java的公司需要将整个应用程序迁移到具有类似结构的AWS。必须部署应用程序以实现高可用性，并且公司无法对应用程序进行更改。哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "Java backend,NoSQL MongoDB",
      "aK": [
        "DocumentDB (with MongoDB,appropriately sized"
      ]
    },
    {
      "no": 54,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [""]
    },
    {
      "no": 236,
      "q": "A company has applications in an AWS account that is named Source. The account is in an organization in AWS Organizations. One of the applications uses AWS Lambda functions and stores inventory data in an Amazon Aurora database. The application deploys the Lambda functions by using a deployment package. The company has configured automated backups for Aurora.\nThe company wants to migrate the Lambda functions and the Aurora database to a new AWS account that is named Target.The application processes critical data, so the company must minimize downtime.\nWhich solution will meet these requirements?",
      "a": [
        "A.Download the Lambda function deployment package from the Source account. Use the deployment package and create new Lambda functions in the Target account. Share the automated Aurora DB cluster snapshot with the Target account.",
        "B.Download the Lambda function deployment package from the Source account. Use the deployment package and create new Lambda functions in the Target account. Share the Aurora DB cluster with the Target account by using AWS Resource Access Manager {AWS RAM). Grant the Target account permission to clone the Aurora DB cluster.",
        "C.Use AWS Resource Access Manager (AWS RAM) to share the Lambda functions and the Aurora DB cluster with the Target account. Grant the Target account permission to clone the Aurora DB cluster.",
        "D.Use AWS Resource Access Manager (AWS RAM) to share the Lambda functions with the Target account. Share the automated Aurora DB cluster snapshot with the Target account."
      ],
      "q_cn": "一家公司在名为 Source 的 AWS 账户中具有应用程序。该账户位于 AWS 组织的组织中。其中一个应用程序使用 AWS Lambda 函数并将清单数据存储在 Amazon Aurora 数据库中。应用程序使用部署程序包部署 Lambda 函数。该公司已为 Aurora 配置了自动备份。\n该公司希望将 Lambda 函数和 Aurora 数据库迁移到名为 Target 的新 AWS 账户。应用程序处理关键数据，因此公司必须最大限度地减少停机时间。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "Lambda functions by using a deployment package,automated backups for Aurora",
      "aK": [
        "RAM,clone"
      ]
    },
    {
      "no": 114,
      "q": "An international delivery company hosts a delivery management system on AWS. Drivers use the system to upload confirmation of delivery. Confirmation includes the recipient's signature or a photo of the package with the recipient. The driver's handheld device uploads signatures and photos through FTP to a single Amazon EC2 instance. Each handheld device saves a file in a directory based on the signed-in user, and the file name matches the delivery number. The EC2 instance then adds metadata to the file after querying a central database to pull delivery information. The file is then placed in Amazon S3 for archiving.\nAs the company expands, drivers report that the system is rejecting connections.The FTP server is having problems because of dropped connections and memory issues.In response to these problems, a system engineer schedules a cron task to reboot the EC2 instance every 30 minutes.The billing team reports that files are not always in the archive and that the central system is not always updated.\nA solutions architect needs to design a solution that maximizes scalability to ensure that the archive always receives the files and that systems are always updated.The handheld devices cannot be modified, so the company cannot deploy a new application.\nWhich solution will meet these requirements?",
      "a": [
        "A.Create an AMI of the existing EC2 instance. Create an Auto Scaling group of EC2 instances behind an Application Load Balancer. Configure the Auto Scaling group to have a minimum of three instances.",
        "B.Use AWS Transfer Family to create an FTP server that places the files in Amazon Elastic File System (Amazon EFS). Mount the EFS volume to the existing EC2 instance. Point the EC2 instance to the new path for file processing.",
        "C.Use AWS Transfer Family to create an FTP server that places the files in Amazon S3. Use an S3 event notification through Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system.",
        "D.Update the handheld devices to place the files directly in Amazon S3. Use an S3 event notification through Amazon Simple Queue Service (Amazon SQS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system."
      ],
      "q_cn": "一家国际快递公司在 AWS 上托管了一个配送管理系统。司机使用系统上传交货确认。确认包括收件人的签名或包裹与收件人的照片。驾驶员的手持设备通过 FTP 将签名和照片上传到单个 Amazon EC2 实例。每个手持设备都会根据登录用户将文件保存在目录中，文件名与交付编号匹配。然后，EC2 实例在查询中央数据库以提取交付信息后将元数据添加到文件中。然后将该文件放入 Amazon S3 中进行存档。\n随着公司的扩张，司机报告说系统拒绝连接。由于连接断开和内存问题，FTP 服务器出现问题。为了解决这些问题，系统工程师计划每 30 分钟重新启动一次 EC2 实例的 cron 任务。计费团队报告文件并不总是在存档中，并且中央系统并不总是更新。\n解决方案架构师需要设计一个能够最大限度地提高可伸缩性的解决方案，以确保归档始终接收文件并始终更新系统。手持设备无法修改，因此公司无法部署新应用程序。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "30 minutes,international delivery company,files are not always in the archive and that the central system is not always updated",
      "aK": [
        "SNS"
      ]
    },
    {
      "no": 282,
      "q": "A company is planning to migrate an Amazon RDS for Oracle database to an RDS for PostgreSQL DB instance in another AWS account. A solutions architect needs to design a migration strategy that will require no downtime and that will minimize the amount of time necessary to complete the migration. The migration strategy must replicate all existing data and any new data that is created during the migration. The target database must be identical to the source database at completion of the migration process.\nAll applications currently use an Amazon Route 53 CNAME record as their endpoint for communication with the RDS for Oracle DB instance.The RDS for Oracle DB instance is in a private subnet.\nWhich combination of steps should the solutions architect take to meet these requirements?(Choose three.) ",
      "a": [
        "A.Create a new RDS for PostgreSQL DB instance in the target account. Use the AWS Schema Conversion Tool (AWS SCT) to migrate the database schema from the source database to the target database.",
        "B.Use the AWS Schema Conversion Tool (AWS SCT) to create a new RDS for PostgreSQL DB instance in the target account with the schema and initial data from the source database.",
        "C.Configure VPC peering between the VPCs in the two AWS accounts to provide connectivity to both DB instances from the target account. Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account.",
        "D.Temporarily allow the source DB instance to be publicly accessible to provide connectivity from the VPC in the target account. Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account.",
        "E.Use AWS Database Migration Service (AWS DMS) in the target account to perform a full load plus change data capture (CDC) migration from the source database to the target database. When the migration is complete, change the CNAME record to point to the target DB instance endpoint.",
        "F.Use AWS Database Migration Service (AWS DMS) in the target account to perform a change data capture (CDC) migration from the source database to the target database. When the migration is complete, change the CNAME record to point to the target DB instance endpoint."
      ],
      "q_cn": "一家公司计划将 Amazon RDS for Oracle 数据库迁移到另一个 AWS 账户中的 RDS for PostgreSQL 数据库实例。解决方案架构师需要设计一个迁移策略，该策略不需要停机，并且将最大限度地减少完成迁移所需的时间。迁移策略必须复制所有现有数据和迁移期间创建的任何新数据。迁移过程完成后，目标数据库必须与源数据库相同。\n所有应用程序当前都使用 Amazon Route 53 别名记录作为与适用于 Oracle 的 RDS 数据库实例进行通信的终端节点。适用于 Oracle 数据库的 RDS 实例位于私有子网中。\n解决方案架构师应采取哪些步骤组合来满足这些要求？（选择三个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,C,E",
      "qK": "migrate,RDS for Oracle,RDS for PostgreSQL,another AWS account",
      "aK": [
        "SCT,Configure VPC peering,DMS,full load plus,CDC,Create a new RDS"
      ]
    },
    {
      "no": 31,
      "q": "A company needs to architect a hybrid DNS solution. This solution will use an Amazon Route 53 private hosted zone for the domain cloud.example.com for the resources stored within VPCs. The company has the following DNS resolution requirements: on-premises systems should be able to resolve and connect to cloud.example.com.All VPCs should be able to resolve cloud.example.com.There is already an AWS Direct Connect connection between the on-premises corporate network and AWS Transit Gateway.Which architecture should the company use to meet these requirements with the HIGHEST performance?",
      "a": [
        "A.Associate the private hosted zone to all the VPCs. Create a Route 53 inbound resolver in the shared services VPC. Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.",
        "B.Associate the private hosted zone to all the VPCs.Deploy an Amazon EC2 conditional forwarder in the shared services VPC.Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the conditional forwarder.",
        "C.Associate the private hosted zone to the shared services VPC.Create a Route 53 outbound resolver in the shared services VPC.Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the outbound resolver.",
        "D.Associate the private hosted zone to the shared services VPC.Create a Route 53 inbound resolver in the shared services VPC.Attach the shared services VPC to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver."
      ],
      "q_cn": "公司需要构建混合 DNS 解决方案。此解决方案将对 VPC 中存储的资源的域 cloud.example.com 使用 Amazon Route 53 私有托管区域。 该公司有以下 DNS 解析要求： 本地系统应该能够解析并连接到 cloud.example.com。所有 VPC 都应该能够解析 cloud.example.com。本地企业网络和 AWS Transit 网关之间已存在 AWS Direct Connect 连接。      公司应该使用哪种架构来满足这些要求，并具有最高的性能？",
      "a_cn": [
        "A.将私有托管区域关联到所有 VPC。 在共享服务 VPC 中创建 Route 53 入站解析程序。将所有 VPC 附加到中转网关，并在本地 DNS 服务器中为指向入站解析程序 cloud.example.com 创建转发规则。",
        "B.将私有托管区域关联到所有 VPC。 在共享服务 VPC 中部署 Amazon EC2 条件转发器。将所有 VPC 附加到中转网关，并在本地 DNS 服务器中为指向条件转发器的 cloud.example.com 创建转发规则。",
        "C.将私有托管区域关联到共享服务 VPC。在共享服务 VPC 中创建 Route 53 出站解析程序。将所有 VPC 附加到中转网关，并在本地 DNS 服务器中为指向出站解析程序 cloud.example.com 创建转发规则。",
        "D.将私有托管区域关联到共享服务 VPC。在共享服务 VPC 中创建 Route 53 入站解析程序。将共享服务 VPC 附加到中转网关，并在本地 DNS 服务器中为指向入站解析程序 cloud.example.com 创建转发规则。"
      ],
      "aa": "A",
      "qK": "hybird DNS",
      "aK": [
        "all the VPCs,all VPCs,inbound"
      ]
    },
    {
      "no": 136,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "B,D,E",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 218,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 322,
      "q": "A company has an on-premises website application that provides real estate information for potential renters and buyers. The website uses a Java backend and a NoSQL MongoDB database to store subscriber data website uses a JavaThe company needs to migrate the entire application to AWS with a similar structure.The application must be deployed for high availability, and the company cannot make changes to the application.Which solution will meet these requirements?",
      "a": [
        "A.Use an Amazon Aurora DB cluster as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application.",
        "B.Use MongoDB on Amazon EC2 instances as the database for the subscriber data. Deploy EC2 instances in an Auto Scaling group in a single Availability Zone for the Java backend application.",
        "C.Configure Amazon DocumentDB (with MongoDB compatibility) with appropriately sized instances in multiple Availability Zones as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application.",
        "D.Configure Amazon DocumentDB (with MongoDB compatibility) in on-demand capacity mode in multiple Availability Zones as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application."
      ],
      "q_cn": "一家公司有一个本地网站应用程序，为潜在的租户和买家提供房地产信息。该网站使用Java后端和NoSQL MongoDB数据库来存储订户数据网站使用Java的公司需要将整个应用程序迁移到具有类似结构的AWS。必须部署应用程序以实现高可用性，并且公司无法对应用程序进行更改。哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "Java backend,NoSQL MongoDB",
      "aK": [
        "DocumentDB (with MongoDB,appropriately sized"
      ]
    },
    {
      "no": 220,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "B,D,E",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 89,
      "q": "A company has several AWS accounts. A development team is building an automation framework for cloud governance and remediation processes. The automation framework uses AWS Lambda functions in a centralized account. A solutions architect must implement a least privilege permissions policy that allows the Lambda functions to run in each of the company's AWS accounts.\nWhich combination of steps will meet these requirements?(Choose two.) ",
      "a": [
        "A.In the centralized account, create an IAM role that has the Lambda service as a trusted entity. Add an inline policy to assume the roles of the other AWS accounts.",
        "B.In the other AWS accounts, create an IAM role that has minimal permissions.Add the centralized account's Lambda IAM role as a trusted entity.",
        "C.In the centralized account, create an IAM role that has roles of the other accounts as trusted entities.Provide minimal permissions.",
        "D.In the other AWS accounts, create an IAM role that has permissions to assume the role of the centralized account.Add the Lambda service as a trusted entity.",
        "E.In the other AWS accounts, create an IAM role that has minimal permissions.Add the Lambda service as a trusted entity."
      ],
      "q_cn": "一家公司有多个 AWS 账户。开发团队正在为云治理和修正过程构建自动化框架。自动化框架在集中式账户中使用 AWS Lambda 函数。解决方案架构师必须实施最低权限策略，以允许 Lambda 函数在公司的每个 AWS 账户中运行。\n哪些步骤组合将满足这些要求？（选择两个。",
      "a_cn": [
        "A.在集中式账户中，创建一个将 Lambda 服务作为可信实体的 IAM 角色。添加内联策略以代入其他 AWS 账户的角色。",
        "B.在其他 AWS 账户中，创建具有最低权限的 IAM 角色。将集中式账户的 Lambda IAM 角色添加为可信实体。",
        "C.在集中式账户中，创建一个 IAM 角色，该角色将其他账户的角色作为可信实体。提供最低权限。",
        "D.在其他 AWS 账户中，创建一个有权代入集中账户角色的 IAM 角色。将 Lambda 服务添加为可信实体。",
        "E.在其他 AWS 账户中，创建具有最低权限的 IAM 角色。将 Lambda 服务添加为可信实体。"
      ],
      "aa": "A,B",
      "qK": "automation framework for cloud governance and remediation processes",
      "aK": [
        "[centralized account],IAM role that has the Lambda,inline policy",
        "[other AWS accounts],[minimal permissions],centralized account's Lambda IAM role"
      ]
    },
    {
      "no": 88,
      "q": "An application is using an Amazon RDS for MySQL Multi-AZ DB instance in the us-east-1 Region. After a failover test, the application lost the connections to the database and could not re-establish the connections. After a restart of the application, the application re-established the connections.\nA solutions architect must implement a solution so that the application can re-establish connections to the database without requiring a restart.\nWhich solution will meet these requirements ? ",
      "a": [
        "A.Create an Amazon Aurora MySQL Serverless v1 DB instance. Migrate the RDS DB instance to the Aurora Serverless v1 DB instance. Update the connection settings in the application to point to the Aurora reader endpoint.",
        "B.Create an RDS proxy.Configure the existing RDS endpoint as a target.Update the connection settings in the application to point to the RDS proxy endpoint.",
        "C.Create a two-node Amazon Aurora MySQL DB cluster.Migrate the RDS DB instance to the Aurora DB cluster.Create an RDS proxy.Configure the existing RDS endpoint as a target.Update the connection settings in the application to point to the RDS proxy endpoint.",
        "D.Create an Amazon S3 bucket.Export the database to Amazon S3 by using AWS Database Migration Service(AWS DMS).Configure Amazon Athena to use the S3 bucket as a data store.Install the latest Open Database Connectivity(ODBC) driver for the application.Update the connection settings in the application to point to the Athena endpoint"
      ],
      "q_cn": "应用程序正在使用 us-east-1 区域中的 Amazon RDS for MySQL 多可用区数据库实例。故障转移测试后，应用程序丢失了与数据库的连接，并且无法重新建立连接。重新启动应用程序后，应用程序将重新建立连接。\n解决方案架构师必须实现解决方案，以便应用程序可以重新建立与数据库的连接，而无需重新启动。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.创建 Amazon Aurora MySQL Serverless v1 数据库实例。将 RDS 数据库实例迁移到 Aurora 无服务器 v1 数据库实例。更新应用程序中的连接设置以指向 Aurora 读取器终端节点。",
        "B.创建 RDS 代理。将现有 RDS 终端节点配置为目标。更新应用程序中的连接设置以指向 RDS 代理终端节点。",
        "C.创建双节点 Amazon Aurora MySQL 数据库集群。将 RDS 数据库实例迁移到 Aurora 数据库集群。创建 RDS 代理。将现有 RDS 终端节点配置为目标。更新应用程序中的连接设置以指向 RDS 代理终端节点。",
        "D.创建 Amazon S3 存储桶。使用 AWS Database Migration Service （AWS DMS） 将数据库导出到 Amazon S3。将 Amazon Athena 配置为使用 S3 存储桶作为数据存储。为应用程序安装最新的开放式数据库连接 （ODBC） 驱动程序。更新应用程序中的连接设置以指向 Athena 端点"
      ],
      "aa": "B",
      "qK": "RDS for MySQL,failover test,restart,re-established the connections",
      "aK": [
        "Create an RDS proxy"
      ]
    },
    {
      "no": 204,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "BEF",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 251,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 126,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 198,
      "q": "A company's solutions architect is analyzing costs of a multi-application environment. The environment is deployed across multiple Availability Zones in a single AWS Region.After a recent acquisition, the company manages two organizations in AWS Organizations.The company has created multiple service provider applications as AWS PrivateLink-powered VPC endpoint services in one organization.The company has created multiple service consumer applications in the other organization.\nData transfer charges are much higher than the company expected, and the solutions architect needs to reduce the costs.The solutions architect must recommend guidelines for developers to follow when they deploy services.These guidelines must minimize data transfer charges for the whole environment.\nWhich guidelines meet these requirements?(Choose two.)",
      "a": [
        "A.Use AWS Resource Access Manager to share the subnets that host the service provider applications with other accounts in the organization.",
        "B.Place the service provider applications and the service consumer applications in AWS accounts in the same organization.",
        "C.Turn off cross-zone load balancing for the Network Load Balancer in all service provider application deployments.",
        "D.Ensure that service consumer compute resources use the Availability Zone-specific endpoint service by using the endpoint's local DNS name.",
        "E.Create a Savings Plan that provides adequate coverage for the organization's planned inter-Availability Zone data transfer usage."
      ],
      "q_cn": "公司的解决方案架构师正在分析多应用程序环境的成本。环境在单个可用区中跨多个可用区部署AWS 区域。在最近的一次收购之后，该公司在 AWS 组织中管理着两个组织。该公司在一个组织中创建了多个服务提供商应用程序作为 AWS PrivateLink 支持的 VPC 终端节点服务。该公司已在另一个组织中创建了多个服务使用者应用程序。\n数据传输费用远高于公司的预期，解决方案架构师需要降低成本。解决方案架构师必须为开发人员在部署服务时推荐要遵循的准则。这些准则必须最大程度地减少整个环境的数据传输费用。\n  哪些指南符合这些要求？（选择两个。",
      "a_cn": [
        "A.使用 AWS 资源访问管理器与组织中的其他账户共享托管服务提供商应用程序的子网。",
        "B.将服务提供商应用程序和服务使用者应用程序放在同一组织的 AWS 账户中。",
        "C.在所有服务提供商应用程序部署中关闭网络负载均衡器的跨区域负载平衡。",
        "D.通过使用终端节点的本地 DNS 名称，确保服务使用者计算资源使用特定于可用区的终端节点服务。",
        "E.创建一个节省计划，为组织计划的可用区间数据传输使用情况提供足够的覆盖范围。"
      ],
      "aa": "A,D",
      "qK": "multi-application environment",
      "aK": [
        "Resource Access Manager",
        "local DNS"
      ]
    },
    {
      "no": 139,
      "q": "A company runs a customer service center that accepts calls and automatically sends all customers a managed, interactive, two-way experience survey by text message. The applications that support the customer service center run on machines that the company hosts in an on-premises data center. The hardware that the company uses is old, and the company is experiencing downtime with the system. The company wants to migrate the system to AWS to improve reliability.\nWhich solution will meet these requirements with the LEAST ongoing operational overhead?",
      "a": [
        "A.Use Amazon Connect to replace the old call center hardware. Use Amazon Pinpoint to send text message surveys to customers.",
        "B.Use Amazon Connect to replace the old call center hardware.Use Amazon Simple Notification Service(Amazon SNS) to send text message surveys to customers.",
        "C.Migrate the call center software to Amazon EC2 instances that are in an Auto Scaling group.Use the EC2 instances to send text message surveys to customers.",
        "D.Use Amazon Pinpoint to replace the old call center hardware and to send text message surveys to customers."
      ],
      "q_cn": "一家公司运营一个客户服务中心，该中心接受呼叫并通过短信自动向所有客户发送托管、交互式、双向体验调查。支持客户服务中心的应用程序在公司在本地数据中心托管的计算机上运行。该公司使用的硬件很旧，并且公司正在经历系统停机。该公司希望将系统迁移到 AWS 以提高可靠性。\n哪种解决方案能够以最少的日常运营开销满足这些要求？",
      "a_cn": [
        "A.使用 Amazon Connect 替换旧的呼叫中心硬件。使用 Amazon Pinpoint 向客户发送短信调查。",
        "B.使用 Amazon Connect 替换旧的呼叫中心硬件。使用 Amazon Simple Notification Service （Amazon SNS） 向客户发送短信调查。",
        "C.将呼叫中心软件迁移到 Auto Scaling 组中的 Amazon EC2 实例。使用 EC2 实例向客户发送文本消息调查。",
        "D.使用 Amazon Pinpoint 替换旧的呼叫中心硬件，并向客户发送短信调查。"
      ],
      "aa": "A",
      "qK": "customer service center",
      "aK": [
        "Amazon Connect,Pinpoint"
      ]
    },
    {
      "no": 291,
      "q": "A company is migrating its development and production workloads to a new organization in AWS Organizations. The company has created a separate member account for development and a separate member account for production. Consolidated billing is inked to the management account. In the management account, a solutions architect needs to create an IAM user that can stop or terminate resources in both member accounts.\nWhich solution will meet this requirement ?",
      "a": [
        "A.Create an IAM user and a cross-account role in the management account. Configure the cross-account role with least privilege access to the member accounts.",
        "B.Create an IAM user in each member account. In the management account, create a cross-account role that has least privilege access. Grant the IAM users access to the cross-account role by using a trust policy.",
        "C.Create an IAM user in the management account. In the member accounts, create an IAM group that has least privilege access. Add the IAM user from the management account to each IAM group in the member accounts.",
        "D.Create an IAM user in the management account. In the member accounts, create cross-account roles that have least privilege access. Grant the IAM user access to the role by using a trust policy."
      ],
      "q_cn": "一家公司正在将其开发和生产工作负载迁移到 AWS 组织中的新组织。该公司创建了一个单独的成员帐户用于开发，并创建了一个单独的成员帐户用于生产。整合账单将记录在管理账户中。在管理账户中，解决方案架构师需要创建一个 IAM 用户，该用户可以停止或终止两个成员账户中的资源。\n哪个解决方案将满足此要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "development and production workloads",
      "aK": [
        "IAM user in the management account,cross-account roles"
      ]
    },
    {
      "no": 260,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 132,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 175,
      "q": "A company has an application that runs on Amazon EC2 instances. A solutions architect is designing VPC infrastructure in an AWS Region where the application needs to access an Amazon Aurora DB Cluster. The EC2 instances are all associated with the same security group. The DB cluster is associated with its own security group.\nThe solutions architect needs to add rules to the security groups to provide the application with least privilege access to the DB Cluster.\nWhich combination of steps will meet these requirements?(Choose two.) ",
      "a": [
        "A.Add an inbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the source over the default Aurora port.",
        "B.Add an outbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the destination over the default Aurora port.",
        "C.Add an inbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the source over the default Aurora port.",
        "D.Add an outbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the destination over the default Aurora port.",
        "E.Add an outbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the destination over the ephemeral ports."
      ],
      "q_cn": "一家公司有一个在 Amazon EC2 实例上运行的应用程序。解决方案架构师正在应用程序需要访问 Amazon Aurora 数据库集群的 AWS 区域中设计 VPC 基础设施。EC2 实例都与同一安全组关联。数据库集群与其自己的安全组相关联。\n解决方案架构师需要向安全组添加规则，以便为应用程序提供对数据库集群的最低特权访问权限。\n哪些步骤组合将满足这些要求？（选择两个。",
      "a_cn": [
        "A.将入站规则添加到 EC2 实例的安全组。将数据库集群的安全组指定为默认 Aurora 端口上的源。",
        "B.将出站规则添加到 EC2 实例的安全组。将数据库集群的安全组指定为默认 Aurora 端口的目标。",
        "C.将入站规则添加到数据库集群的安全组。将 EC2 实例的安全组指定为默认 Aurora 端口上的源。",
        "D.将出站规则添加到数据库集群的安全组。将 EC2 实例的安全组指定为默认 Aurora 端口的目标。",
        "E.将出站规则添加到数据库集群的安全组。将 EC2 实例的安全组指定为临时端口的目标。"
      ],
      "aa": "A,C",
      "qK": "EC2,Aurora DB Cluster,add rules to the security groups",
      "aK": [
        "inbound"
      ]
    },
    {
      "no": 298,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 225,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "B,D,E",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 113,
      "q": "A company is running an application in the AWS Cloud. The company's security team must approve the creation of all new IAM users. When a new IAM user is created, all access for the user must be removed automatically. The security team must then receive a notification to approve the user. The company has a multi-Region AWS CloudTrail trail in the AWS account.\nWhich combination of steps will meet these requirements?(Choose three.) ",
      "a": [
        "A.Create an Amazon EventBridge (Amazon CloudWatch Events) rule. Define a pattern with the detail-type value set to AWS API Call via CloudTrail and an eventName of CreateUser.",
        "B.Configure CloudTrail to send a notification for the CreateUser event to an Amazon Simple Notification Service(Amazon SNS) topic.",
        "C.Invoke a container that runs in Amazon Elastic Container Service(Amazon ECS) with AWS Fargate technology to remove access.",
        "D.Invoke an AWS Step Functions state machine to remove access.",
        "E.Use Amazon Simple Notification Service(Amazon SNS) to notify the security team.",
        "F.Use Amazon Pinpoint to notify the security team."
      ],
      "q_cn": "一家公司在 AWS 云中运行应用程序。公司的安全团队必须批准创建所有新的 IAM 用户。创建新的 IAM 用户时，必须自动删除该用户的所有访问权限。然后，安全团队必须收到批准用户的通知。该公司拥有多AWS 账户中的区域 AWS CloudTrail 跟踪。\n哪些步骤组合将满足这些要求？（选择三个。",
      "a_cn": [
        "A.创建 Amazon EventBridge （Amazon CloudWatch Events） 规则。定义一个模式，将详细信息类型值设置为 AWS API 通过 CloudTrail 调用，并将 eventName 设置为 CreateUser。",
        "B.配置 CloudTrail 以将 CreateUser 事件的通知发送到 Amazon Simple Notification Service （Amazon SNS） 主题。",
        "C.调用在采用 AWS Fargate 技术的 Amazon Elastic Container Service （Amazon ECS） 中运行的容器以删除访问权限。",
        "D.调用 AWS Step Functions 状态机以删除访问权限。",
        "E.使用 Amazon Simple Notification Service （Amazon SNS） 通知安全团队。",
        "F.使用 Amazon Pinpoint 通知安全团队。"
      ],
      "aa": "A,D,E",
      "qK": "approve,all new IAM users",
      "aK": [
        "EventBridge",
        "Step Functions",
        "SNS,security team"
      ]
    },
    {
      "no": 162,
      "q": "A company is developing a new serverless API by using Amazon API Gateway and AWS Lambda. The company integrated the Lambda functions with API Gateway to use several shared libraries and custom classes.\nA solutions architect needs to simplify the deployment of the solution and optimize for code reuse.\nWhich solution will meet these requirements?",
      "a": [
        "A.Deploy the shared libraries and custom classes into a Docker image. Store the image in an S3 bucket. Create a Lambda layer that uses the Docker image as the source. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the Lambda layer.",
        "B.Deploy the shared libraries and custom classes to a Docker image.Upload the image to Amazon Elastic Container Registry(Amazon ECR).Create a Lambda layer that uses the Docker image as the source.Deploy the API's Lambda functions as Zip packages. Configure the packages to use the Lambda layer.",
        "C.Deploy the shared libraries and custom classes to a Docker container in Amazon Elastic Container Service(Amazon ECS) by using the AWS Fargate launch type.Deploy the API's Lambda functions as Zip packages. Configure the packages to use the deployed container as a Lambda layer.",
        "D.Deploy the shared libraries, custom classes, and code for the API's Lambda functions to a Docker image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Configure the API's Lambda functions to use the Docker image as the deployment package."
      ],
      "q_cn": "一家公司正在使用 Amazon API Gateway 和 AWS Lambda 开发新的无服务器 API。该公司将 Lambda 函数与 API 网关集成，以使用多个共享库和自定义类。\n解决方案架构师需要简化解决方案的部署并针对代码重用进行优化。\n      哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.将共享库和自定义类部署到 Docker 映像中。将映像存储在 S3 存储桶中。创建一个使用 Docker 映像作为源的 Lambda 层。将 API 的 Lambda 函数部署为 Zip 程序包。将软件包配置为使用 Lambda 层。",
        "B.将共享库和自定义类部署到 Docker 映像。将映像上传到 Amazon Elastic Container Registry （Amazon ECR）。创建一个使用 Docker 映像作为源的 Lambda 层。将 API 的 Lambda 函数部署为 Zip 程序包。将软件包配置为使用 Lambda 层。",
        "C.使用 AWS Fargate 启动类型将共享库和自定义类部署到 Amazon Elastic Container Service （Amazon ECS） 中的 Docker 容器。将 API 的 Lambda 函数部署为 Zip 程序包。将程序包配置为将部署的容器用作 Lambda 层。",
        "D.将 API 的 Lambda 函数的共享库、自定义类和代码部署到 Docker 映像。将映像上传到 Amazon Elastic Container Registry （Amazon ECR）。将 API 的 Lambda 函数配置为使用 Docker 映像作为部署程序包。"
      ],
      "aa": "D",
      "qK": "shared libraries,code reuse",
      "aK": [
        "deployment package"
      ]
    },
    {
      "no": 266,
      "q": "A large company runs workloads in VPCs that are deployed across hundreds of AWS accounts. Each VPC consists of public subnets and private subnets that span across multiple Availability Zones. NAT gateways are deployed in the public subnets and allow outbound connectivity to the internet from the private subnets.\nA solutions architect is working on a hub-and-spoke design.All private subnets in the spoke VPCs must route traffic to the internet through an egress VPC.The solutions architect already has deployed a NAT gateway in an egress VPC in a central AWS account.\nWhich set of additional steps should the solutions architect take to meet these requirements ?",
      "a": [
        "A.Create peering connections between the egress VPC and the spoke VPCs. Configure the required routing to allow access to the internet.",
        "B.Create a transit gateway, and share it with the existing AWS accounts. Attach existing VPCs to the transit gateway. Configure the required routing to allow access to the internet.",
        "C.Create a transit gateway in every account. Attach the NAT gateway to the transit gateways. Configure the required routing to allow access to the internet.",
        "D.Create an AWS PrivateLink connection between the egress VPC and the spoke VPCs. Configure the required routing to allow access to the internet."
      ],
      "q_cn": "一家大型公司在部署在数百个 AWS 账户中的 VPC 中运行工作负载。每个 VPC 由跨多个可用区的公有子网和私有子网组成。NAT 网关部署在公有子网中，允许从私有子网到 Internet 的出站连接。\n解决方案架构师正在研究中心辐射型设计。分支 VPC 中的所有私有子网必须通过出口 VPC 将流量路由到互联网。解决方案架构师已在中央 AWS 账户的出口 VPC 中部署了 NAT 网关。\n解决方案架构师应采取哪些其他步骤来满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "large company runs workloads",
      "aK": [
        "Create a transit gateway,share it"
      ]
    },
    {
      "no": 111,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 184,
      "q": "A company hosts a VPN in an on-premises data center. Employees currently connect to the VPN to access files in their Windows home directories. Recently, there has been a large growth in the number of employees who work remotely. As a result, bandwidth usage for connections into the data center has begun to reach 100% during business hours.The company must design a solution on AWS that will support the growth of the company's remote workforce, reduce the bandwidth usage for connections into the data center, and reduce operational overhead.Which combination of steps will meet these requirements with the LEAST operational overhead? (Select TWO.)",
      "a": [
        "A.Create an AWS Storage Gateway volume Gateway. Mount a volume from the Volume Gateway to the on-premises file server",
        "B.Migrate the home directories to Amazon FSx for Windows File Server",
        "C.Migrate the home directories to Amazon FSx for Lustre",
        "D.Migrate remote users to AWS Client VPN",
        "E.Create an AWS Direct Connect connection from the on-premises data center to AWS"
      ],
      "q_cn": "公司在本地数据中心托管 VPN。员工目前连接到 VPN 以访问其 Windows 主目录中的文件。最近，远程工作的员工数量大幅增长。因此，在工作时间，连接到数据中心的带宽使用率已开始达到100%。该公司必须在 AWS 上设计一个解决方案，以支持公司远程员工的增长，减少连接到数据中心的带宽使用量，并减少运营开销。哪些步骤组合将以最少的运营开销满足这些要求？（选择两个。",
      "a_cn": [
        "A.创建 AWS 存储网关卷网关。将卷从卷网关装载到本地文件服务器",
        "B.将主目录迁移到适用于 Windows 文件服务器的 Amazon FSx",
        "C.将主目录迁移到 Amazon FSx 以获得 Lustre",
        "D.将远程用户迁移到 AWS 客户端 VPN",
        "E.创建从本地数据中心到 AWS 的 AWS 直接连接"
      ],
      "aa": "B,D",
      "qK": "on-premises data center,VPN,Windows home directories",
      "aK": [
        "FSx for Windows File Server",
        "Client VPN"
      ]
    },
    {
      "no": 258,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,C,F",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 303,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 72,
      "q": "A company manages multiple AWS accounts by using AWS Organizations. Under the root OU, the company has two OUs: Research and DataOps.\nBecause of regulatory requirements, all resources that the company deploys in the organization must reside in the ap-northeast-1 Region.Additionally, EC2 instances that the company deploys in the DataOps OU must use a predefined list of instance types.\nA solutions architect must implement a solution that applies these restrictions.The solution must maximize operational efficiency and must minimize ongoing maintenance.\nWhich combination of steps will meet these requirements ? (Choose two.) ",
      "a": [
        "A.Create an IAM role in one account under the DataOps OU. Use the ec2:InstanceType condition key in an inline policy on the role to restrict access to specific instance type.",
        "B.Create an IAM user in all accounts under the root OU.Use the aws: RequestedRegion condition key in an inline policy on each user to restrict access to all AWS Regions except ap-northeast-1.",
        "C.Create an SCP.Use the aws: RequestedRegion condition key to restrict access to all AWS Regions except ap-northeast-1. Apply the SCP to the root OU.",
        "D.Create an SCP.Use the ec2: Region condition key to restrict access to all AWS Regions except ap-northeast-1. Apply the SCP to the root OU, the DataOps OU, and the Research OU.",
        "E.Create an SCP.Use the ec2: InstanceType condition key to restrict access to specific instance types.Apply the SCP to the DataOps OU."
      ],
      "q_cn": "一家公司使用 AWS 组织管理多个 AWS 账户。在根 OU 下，公司有两个 OU：研究和数据运营。\n由于法规要求，公司在组织中部署的所有资源都必须驻留在 ap-northeast-1 区域中。此外，公司在 DataOps OU 中部署的 EC2 实例必须使用预定义的实例类型列表。\n解决方案架构师必须实现应用这些限制的解决方案。解决方案必须最大限度地提高运营效率，并且必须最大限度地减少日常维护。\n    哪些步骤组合将满足这些要求？（选择两个。",
      "a_cn": [
        "A.在数据运营 OU 下的一个账户中创建 IAM 角色。在角色的内联策略中使用 ec2：InstanceType 条件键来限制对特定实例类型的访问。",
        "B.在根 OU 下的所有账户中创建 IAM 用户。在每个用户的内联策略中使用 aws：RequestRegion 条件键来限制对除 ap-northeast-1 之外的所有 AWS 区域的访问。",
        "C.创建 SCP。使用 aws：RequestRegion 条件键限制对除 ap-northeast-1 之外的所有 AWS 区域的访问。将 SCP 应用于根 OU。",
        "D.创建 SCP。使用 ec2：Region 条件键限制对除 ap-northeast-1 之外的所有 AWS 区域的访问。将 SCP 应用于根 OU、DataOps OU 和 Research OU。",
        "E.创建 SCP。使用 ec2：实例类型条件键限制对特定实例类型的访问。将 SCP 应用于数据操作 OU。"
      ],
      "aa": "C,E",
      "qK": "OUs: Research,DataOps",
      "aK": [
        "SCP,aws: RequestedRegion",
        "SCP,ec2: InstanceType"
      ]
    },
    {
      "no": 224,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 192,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        "SSE-S3"
      ]
    },
    {
      "no": 253,
      "q": "A company is creating a centralized logging service running on Amazon EC2 that will receive and analyze logs from hundreds of AWS accounts. AWS PrivateLink is being used to provide connectivity between the client services and the logging service.\nIn each AWS account with a client, an interface endpoint has been created for the logging service and is available. The logging service running on EC2 instances with a Network Load Balancer (NLB) are deployed in different subnets. The clients are unable to submit logs using the VPC endpoint.\nWhich combination of steps should a solutions architect take to resolve this issue? (Choose two.)",
      "a": [
        "A.Check that the NACL is attached to the logging service subnet to allow communications to and from the NLB subnets. Check that the NACL is attached to the NLB subnet to allow communications to and from the logging service subnets running on EC2 instances.",
        "B.Check that the NACL is attached to the logging service subnets to allow communications to and from the interface endpoint subnets. Check that the NACL is attached to the interface endpoint subnet to allow communications to and from the logging service subnets running on EC2 instances.",
        "C.Check the security group for the logging service running on the EC2 instances to ensure it allows ingress from the NLB subnets.",
        "D.Check the security group for the logging service running on the EC2 instances to ensure it allows ingress from the clients.",
        "E.Check the security group for the NLB to ensure it allows ingress from the interface endpoint subnets."
      ],
      "q_cn": "一家公司正在创建一个在 Amazon EC2 上运行的集中式日志记录服务，该服务将接收和分析来自数百个 AWS 账户的日志。AWS PrivateLink 用于在客户端服务和日志记录服务之间提供连接。\n在具有客户端的每个 AWS 账户中，已为日志记录服务创建了一个接口终端节点，并且该接口终端节点可用。在具有网络负载均衡器 （NLB） 的 EC2 实例上运行的日志记录服务部署在不同的子网中。客户端无法使用 VPC 终端节点提交日志。\n解决方案架构师应采取哪些步骤组合来解决此问题？（选择两个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "B,D",
      "qK": "centralized logging service,PrivateLink,",
      "aK": [
        "NACL,interface endpoint subnets,clients."
      ]
    },
    {
      "no": 284,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 270,
      "q": "A company is collecting a large amount of data from a fleet of IoT devices. Data is stored as Optimized Row Columnar (ORC) files in the Hadoop Distributed File System (HDFS) on a persistent Amazon EMR cluster. The company's data analytics team queries the data by using SQL in Apache Presto deployed on the same EMR cluster. Queries scan large amounts of data, always run for less than 15 minutes, and run only between 5 PM and 10 PM.\nThe company is concerned about the high cost associated with the current solution. A solutions architect must propose the most cost-effective solution that will allow SQL data queries.\nWhich solution will meet these requirements?",
      "a": [
        "A.Store data in Amazon S3. Use Amazon Redshift Spectrum to query data.",
        "B.Store data in Amazon S3. Use the AWS Glue Data Catalog and Amazon Athena to query data.",
        "C.Store data in EMR File System (EMRFS). Use Presto in Amazon EMR to query data.",
        "D.Store data in Amazon Redshift. Use Amazon Redshift to query data."
      ],
      "q_cn": "一家公司正在从一组物联网设备中收集大量数据。数据作为优化行列式 （ORC） 文件存储在持久性 Amazon EMR 集群上的 Hadoop 分布式文件系统 （HDFS） 中。该公司的数据分析团队使用部署在同一 EMR 集群上的 Apache Presto 中的 SQL 来查询数据。查询扫描大量数据，运行时间始终少于 15 分钟，并且仅在下午 5 点到晚上 10 点之间运行。\n该公司担心与当前解决方案相关的高成本。解决方案架构师必须提出允许 SQL 数据查询的最具成本效益的解决方案。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "Optimized Row Columnar (ORC),HDFS",
      "aK": [
        "Glue Data Catalog"
      ]
    },
    {
      "no": 185,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 202,
      "q": "A company uses a load balancer to distribute traffic to Amazon EC2 instances in a single Availability Zone. The company is concerned about security and wants a solutions architect to re-architect the solution to meet the following requirements:\n - Inbound requests must be filtered for common vulnerability attacks.\n - Rejected requests must be sent to a third-party auditing application.\n - All resources should be highly available.\nWhich solution meets these requirements ? ",
      "a": [
        "A. Configure a Multi-AZ Auto Scaling group using the application's AMI. Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target. Use Amazon Inspector to monitor traffic to the ALB and EC2 instances. Create a web ACL in WAF. Create an AWS WAF using the web ACL and ALB. Use an AWS Lambda function to frequently push the Amazon Inspector report to the third-party auditing application",
        "B.Configure an Application Load Balancer(ALB) and add the EC2 instances as targets.Create a web ACL in WAF.Create an AWS WAF using the web ACL and ALB name and enable logging with Amazon CloudWatch Logs.Use an AWS Lambda function to frequently push the logs to the third-party auditing application.",
        "C.Configure an Application Load Balancer(ALB) along with a target group adding the EC2 instances as targets.Create an Amazon Kinesis Data Firehose with the destination of the third-party auditing application.Create a web ACL in WAF.Create an AWS WAF using the web ACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination.Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.",
        "D.Configure a Multi-AZ Auto Scaling group using the application's AMI Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target. Create an Amazon Kinesis Data Firehose with a destination of the third-party auditing application. Create a web ACL in WAF. Create an AWS WAF using the web ACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination. Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber."
      ],
      "q_cn": "一家公司使用负载均衡器将流量分配到单个可用区中的 Amazon EC2 实例。该公司担心安全性，并希望解决方案架构师重新构建解决方案以满足以下要求：\n - 必须针对常见漏洞攻击过滤入站请求。\n - 必须将被拒绝的请求发送到第三方审核应用程序。\n - 所有资源都应高度可用。\n哪种解决方案满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "filtered for common vulnerability attacks",
      "aK": [
        "Multi-AZ,Kinesis Data Firehose"
      ]
    },
    {
      "no": 37,
      "q": "A company wants to migrate an application to Amazon EC2 from VMware Infrastructure that runs in an on-premises data center. A solutions architect must preserve the software and configuration settings during the migration.\nWhat should the solutions architect do to meet these requirements?",
      "a": [
        "A.Configure the AWS DataSync agent to start replicating the data store to Amazon FSx for Windows File Server. Use the SMB share to host the VMware data store. Use VM Import/Export to move the VMs to Amazon EC2.",
        "B.Use the VMware vSphere client to export the application as an image in Open Virtualization Format(OVF) format.Create an Amazon S3 bucket to store the image in the destination AWS Region.Create and apply an IAM role for VM Import.Use the AWS CLI to run the EC2 import command.",
        "C.Configure AWS Storage Gateway for files service to export a Common Internet File System(CIFS) share.Create a backup copy to the shared folder.Sign in to the AWS Management Console and create an AMI from the backup copy.Launch an EC2 instance that is based on the AMI.",
        "D.Create a managed-instance activation for a hybrid environment in AWS Systems Manager.Download and install Systems Manager Agent on the on-premises VM.Register the VM with Systems Manager to be a managed instance.Use AWS Backup to create a snapshot of the VM and create an AMI.Launch an EC2 instance that is based on the AMI."
      ],
      "q_cn": "一家公司希望将应用程序从在本地数据中心运行的 VMware Infrastructure 迁移到 Amazon EC2。解决方案架构师必须在迁移期间保留软件和配置设置。\n解决方案架构师应该做些什么来满足这些要求？",
      "a_cn": [
        "配置 AWS DataSync 代理以开始将数据存储复制到适用于 Windows 文件服务器的 Amazon FSx。使用 SMB 共享托管 VMware 数据存储。使用虚拟机导入/导出将虚拟机移动到 Amazon EC2。",
        "B.使用 VMware vSphere 客户端将应用程序导出为开放虚拟化格式 （OVF） 格式的映像。创建一个 Amazon S3 存储桶以将映像存储在目标 AWS 区域中。为虚拟机导入创建并应用 IAM 角色。使用 AWS CLI 运行 EC2 导入命令。",
        "C.为文件服务配置 AWS Storage Gateway 以导出通用互联网文件系统 （CIFS） 共享。创建共享文件夹的备份副本。登录 AWS 管理控制台并从备份副本创建 AMI。启动基于 AMI 的 EC2 实例。",
        "D.在 AWS 系统管理器中为混合环境创建托管实例激活。在本地 VM 上下载并安装系统管理器代理。将 VM 注册到系统管理器以成为托管实例。使用 AWS Backup 创建虚拟机的快照并创建 AMI。启动基于 AMI 的 EC2 实例。"
      ],
      "aa": "B",
      "qK": "VMware Infrastructure",
      "aK": [
        "VMware vSphere"
      ]
    },
    {
      "no": 297,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 108,
      "q": "A company recently migrated a web application from an on-premises data center to the AwS Cloud.The web application infrastructure consists of an Amazon CloudFront distribution that routes to an Appication load Balancer (ALB).with Amazon Elastic Container Service (Amazon ECS) to process requests.A recent security audit revealed that the web application is accessible by using both CloudFront and ALB endpoints.However, the company requires that the web application must be accessible only by using the CloudFront endpoint.Which solution will meet this requirement with the LEAST amount of effort?",
      "a": [
        "A.Create a new security group and attach it to the CloudFront distribution.Update the ALB security group ingress to allow access only from the CloudFront security group",
        "B.Update ALB security group ingress to allow access only from the com.amazonaws.global.cloudfront.origi-facing CloudFront managed prefx list",
        "C.Create a com.amazonaws.region.elasticloadbalancing VPC interface endpoint for Elastic Load Balancing.Update the ALB scheme from internet-facing to internal",
        "D.Extract CloudFront IPs from the AWS provided ip-ranges json document.Update ALB security group ingress to allow access only from CloudFront IPs"
      ],
      "q_cn": "一家公司最近将 Web 应用程序从本地数据中心迁移到 AwS Cloud。Web 应用程序基础设施由路由到 Appication 负载均衡器 （ALB） 的 Amazon CloudFront 分配组成，使用 Amazon Elastic Container Service （Amazon ECS） 来处理请求。最近的安全审计显示，可以使用 CloudFront 和 ALB 终端节点访问 Web 应用程序。但是，该公司要求 Web 应用程序必须只能使用 CloudFront 终端节点进行访问。哪种解决方案能够以最少的努力满足此要求？",
      "a_cn": [
        "A.创建新的安全组并将其附加到 CloudFront 分配。更新 ALB 安全组入口以仅允许从 CloudFront 安全组进行访问",
        "B.更新 ALB 安全组入口以仅允许从面向 com.amazonaws.global.cloudfront.origi-facing CloudFront 托管的 prefx 列表进行访问",
        "C.为弹性负载平衡创建 com.amazonaws.region.elasticload balancing VPC 接口终端节点。将 ALB 方案从面向互联网更新为内部",
        "D.从 AWS 提供的 ip-range json 文档中提取 CloudFront IP。更新 ALB 安全组入口以仅允许从云前 IP 进行访问"
      ],
      "aa": "C",
      "qK": "ALB,CloudFront,must,only,CloudFront",
      "aK": [
        "VPC[ interface endpoint],internet-facing"
      ]
    },
    {
      "no": 203,
      "q": "A solutions architect needs to define a reference architectlure for a solution for three-tier applications with web, application, and NoSQL data layers. The reference architecture must meet the folowing reduirements:\n- High availability within an AWS Region\n-Able to fail over in 1 minute to another AWS Region for disaster recovery\n-Provide the most efficient solution while minimizing the impact on the user experience Which combination of steps will meet these requirements? (Choose three.)",
      "a": [
        "A.Use an Amazon Route 53 weighted routing policy set to 100/0 across the two selected Regions. Set Time to Live (TTL) to 1 hour.",
        "B.Use an Amazon Route 53 failover routing policy for failover from the primary Region to the disaster recovery Region. Set Time to Live (TTL) to 30 seconds.",
        "C.Use a global table within Amazon DynamoDB so data can be accessed in the two selected Regions.",
        "D.Back up data from an Amazon DynamoDB table in the primary Region every 60 minutes and then write the data to Amazon S3. Use S3 cross-Region replication to copy the data from the primary Region to the disaster recovery Region. Have a script import the data into DynamoDB in a disaster recovery scenario. ",
        "E.Implement a hot standby model using Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use zonal Reserved Instances for the minimum number of servers and On-Demand Instances for any additional resources.",
        "F.Use Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use Spot Instances for the required resources."
      ],
      "q_cn": "解决方案架构师需要为具有 Web、应用程序和 NoSQL 数据层的三层应用程序的解决方案定义参考架构。参考架构必须满足以下要求：\n- AWS 区域内的高可用性\n-能够在 1 分钟内故障转移到另一个 AWS 区域以进行灾难恢复\n-提供最有效的解决方案，同时最大限度地减少对用户体验的影响 哪些步骤组合将满足这些要求？（选择三个。",
      "a_cn": [
        "A.在两个选定区域中使用 Amazon Route 53 加权路由策略设置为 100/0。将生存时间 （TTL） 设置为 1 小时。",
        "B.使用 Amazon Route 53 故障转移路由策略进行从主区域到灾难恢复区域的故障转移。将生存时间 （TTL） 设置为 30 秒。",
        "C.在 Amazon DynamoDB 中使用全局表，以便可以在两个选定区域中访问数据。",
        "D.每 60 分钟从主要区域中的 Amazon DynamoDB 表备份一次数据，然后将数据写入 Amazon S3。使用 S3 跨区域复制将数据从主区域复制到灾难恢复区域。让脚本在灾难恢复方案中将数据导入 DynamoDB。",
        "E.使用适用于区域中多个可用区的 Web 和应用程序层的 Auto Scaling 组实施热备用模型。对最小数量的服务器使用可用区预留实例，对任何其他资源使用按需实例。",
        "F.对区域中多个可用区的 Web 和应用程序层使用 Auto Scaling 组。将竞价型实例用于所需资源。"
      ],
      "aa": "B,C,E",
      "qK": "1 minute",
      "aK": [
        "30 seconds",
        "global table",
        "hot standby model"
      ]
    },
    {
      "no": 248,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 242,
      "q": "A company is designing a new website that hosts static content. The website will give users the ability to upload and download large files. According to company requirements, all data must be encrypted in transit and at rest. A solutions architect is building the solution by using Amazon S3 and Amazon CloudFront.Which combination of steps will meet the encryption requirements? (Choose three.)",
      "a": [
        "A.Turn on S3 server-side encryption for the S3 bucket that the web application uses.",
        "B.Add a policy attribute of \"aws:SecureTransport\": \"true\" for read and write operations in the S3 ACLs.",
        "C.Create a bucket policy that denies any unencrypted operations in the S3 bucket that the web application uses.",
        "D.Configure encryption at rest on CloudFront by using server-side encryption with AWS KMS keys (SSE-KMS).",
        "E.Configure redirection of HTTP requests to HTTPS requests in CloudFront.",
        "F.Use the RequireSSL option in the creation of presigned URLs for the S3 bucket that the web application uses."
      ],
      "q_cn": "一家公司正在设计一个托管静态内容的新网站。该网站将为用户提供上传和下载大文件的能力。根据公司要求，所有数据在传输中和静态时都必须加密。解决方案架构师正在使用 Amazon S3 和 Amazon CloudFront 构建解决方案。哪些步骤组合将满足加密要求？（选择三个。",
      "a_cn": [
        "A.为 Web 应用程序使用的 S3 存储桶启用 S3 服务器端加密。",
        "B.添加策略属性 “aws:SecureTransport”: “true” 用于 S3 ACL 中的读取和写入操作。",
        "C.创建一个存储桶策略，以拒绝 Web 应用程序使用的 S3 存储桶中的任何未加密操作。",
        "D.通过使用具有 AWS KMS 密钥 （SSE-KMS） 的服务器端加密，在 CloudFront 上配置静态加密。",
        "E.在 CloudFront 中配置 HTTP 请求到 HTTPS 请求的重定向。",
        "F.在为 Web 应用程序使用的 S3 存储桶创建预签名 URL 时使用 RequireSSL 选项。"
      ],
      "aa": "A,C,E",
      "qK": "upload and download,encrypted in transit and at rest",
      "aK": [
        "Turn on S3 server-side encryption",
        "Create a bucket policy",
        "HTTPS"
      ]
    },
    {
      "no": 163,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 43,
      "q": "A company is planning to host a web application on AWS and wants to load balance the traffic across a group of Amazon EC2 instances. One of the security requirements is to enable end-to-end encryption in transit between the client and the web server.\nWhich solution will meet this requirement ? ",
      "a": [
        "A.Place the EC2 instances behind an Application Load Balancer (ALB). Provision an SSL certificate using AWS Certificate Manager (ACM), and associate the SSL certificate with the ALB. Export the SSL certificate and install it on each EC2 instance. Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.",
        "B.Associate the EC2 instances with a target group.Provision an SSL certificate using AWS Certificate Manager(ACM).Create an Amazon CloudFront distribution and configure it to use the SSL certificate.Set CloudFront to use the target group as the origin server.",
        "C.Place the EC2 instances behind an Application Load Balancer(ALB) Provision an SSL certificate using AWS Certificate Manager(ACM), and associate the SSL certificate with the ALB. Provision a third-party SSL certificate and install it on each EC2 instance.Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.",
        "D.Place the EC2 instances behind a Network Load Balancer(NLB). Provision a third-party SSL certificate and install it on the NLB and on each EC2 instance.Configure the NLB to listen on port 443 and to forward traffic to port 443 on the instances."
      ],
      "q_cn": "一家公司计划在 AWS 上托管一个 Web 应用程序，并希望在一组 Amazon EC2 实例之间对流量进行负载均衡。安全要求之一是在客户端和 Web 服务器之间启用传输中的端到端加密。\n哪种解决方案可以满足此要求？",
      "a_cn": [
        "A.将 EC2 实例放在应用程序负载均衡器 （ALB） 后面。使用 AWS 证书管理器 （ACM） 预置 SSL 证书，并将 SSL 证书与 ALB 关联。导出 SSL 证书并将其安装在每个 EC2 实例上。将 ALB 配置为侦听端口 443，并将流量转发到实例上的端口 443。",
        "B.将 EC2 实例与目标组关联。使用 AWS 证书管理器 （ACM） 预置 SSL 证书。创建 Amazon CloudFront 分配并将其配置为使用 SSL 证书。设置 CloudFront 以使用目标组作为源服务器。",
        "C.将 EC2 实例放在应用程序负载均衡器 （ALB） 后面 使用 AWS 证书管理器 （ACM） 预置 SSL 证书，并将 SSL 证书与 ALB 关联。预置第三方 SSL 证书并将其安装在每个 EC2 实例上。将 ALB 配置为侦听端口 443，并将流量转发到实例上的端口 443。",
        "D.将 EC2 实例放在网络负载均衡器 （NLB） 后面。预置第三方 SSL 证书并将其安装在 NLB 和每个 EC2 实例上。将 NLB 配置为侦听端口 443，并将流量转发到实例上的端口 443。"
      ],
      "aa": "C",
      "qK": "Web app,EC2,end-to-end encryption",
      "aK": [
        "ALB,third-party SSL"
      ]
    },
    {
      "no": 309,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 164,
      "q": "A company runs an application on AWS. The company curates data from several different sources. The company uses proprietary algorithms to perform data transformations and aggregations. After the company performs ETL processes, the company stores the results in Amazon Redshift tables. The company sells this data to other companies. The company downloads the data as files from the Amazon Redshift tables and transmits the files to several data customers by using FTP. The number of data customers has grown significantly. Management of the data customers has become difficult.\nThe company will use AWS Data Exchange to create a data product that the company can use to share data with customers.The company wants to confirm the identities of the customers before the company shares data.The customers also need access to the most recent data when the company publishes the data.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      "a": [
        "A.Use AWS Data Exchange for APIs to share data with customers. Configure subscription verification. In the AWS account of the company that produces the data, create an Amazon API Gateway Data API service integration with Amazon Redshift. Require the data customers to subscribe to the data product.",
        "B.In the AWS account of the company that produces the data, create an AWS Data Exchange datashare by connecting AWS Data Exchange to the Redshift cluster.Configure subscription verification.Require the data customers to subscribe to the data product.",
        "C.Download the data from the Amazon Redshift tables to an Amazon S3 bucket periodically.Use AWS Data Exchange for S3 to share data with customers.Configure subscription verification.Require the data customers to subscribe to the data product.",
        "D.Publish the Amazon Redshift data to an Open Data on AWS Data Exchange.Require the customers to subscribe to the data product in AWS Data Exchange.In the AWS account of the company that produces the data, attach IAM resource-based policies to the Amazon Redshift tables to allow access only to verified AWS accounts."
      ],
      "q_cn": "一家公司在 AWS 上运行应用程序。该公司从几个不同的来源收集数据。该公司使用专有算法来执行数据转换和聚合。在公司执行 ETL 流程后，公司会将结果存储在 Amazon Redshift 表中。该公司将这些数据出售给其他公司。该公司从 Amazon Redshift 表中将数据下载为文件，并使用 FTP 将文件传输给多个数据客户。数据客户数量显著增长。管理数据客户变得困难。\n该公司将使用 AWS Data Exchange 创建可用于与客户共享数据的数据产品。该公司希望在公司共享数据之前确认客户的身份。当公司发布数据时，客户还需要访问最新数据。\n  哪种解决方案能够以最少的运营开销满足这些要求？",
      "a_cn": [
        "A.使用 AWS Data Exchange for API 与客户共享数据。配置订阅验证。在生成数据的公司的 AWS 账户中，创建与 Amazon Redshift 的 Amazon API Gateway Data API 服务集成。要求数据客户订阅数据产品。",
        "B.在生成数据的公司的 AWS 账户中，通过将 AWS Data Exchange 连接到 Redshift 集群来创建 AWS Data Exchange 数据共享。配置订阅验证。要求数据客户订阅数据产品。",
        "C.定期将数据从 Amazon Redshift 表下载到 Amazon S3 存储桶。使用 AWS Data Exchange for S3 与客户共享数据。配置订阅验证。要求数据客户订阅数据产品。",
        "D.将 Amazon Redshift 数据发布到 AWS Data Exchange 上的开放数据.要求客户订阅 AWS Data 中的数据产品 Exchange.In 生成数据的公司的 AWS 账户，将基于 IAM 资源的策略附加到 Amazon Redshift 表，以仅允许已验证的 AWS 账户访问。"
      ],
      "aa": "B",
      "qK": "ETL,Redshift,FTP,Data Exchange",
      "aK": [
        "In the AWS account,datashare by connecting"
      ]
    },
    {
      "no": 239,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 109,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 263,
      "q": "A company is building an image service on the web that will allow users to upload and search random photos. At peak usage, up to 10,000 users worldwide will upload their images. The service will then overlay text on the uploaded images, which will then be published on the company website.\nWhich design should a solutions architect implement?",
      "a": [
        "A.Store the uploaded images in Amazon Elastic File System (Amazon EFS). Send application log information about each image to Amazon CloudWatch Logs. Create a fleet of Amazon EC2 instances that use CloudWatch Logs to determine which images need to be processed. Place processed images in another directory in Amazon EFS Enable Amazon CloudFront and configure the origin to be the one of the EC2 instances in the fleet.",
        "B.Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to Amazon Simple Notification Service (Amazon SNS). Create a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB) to pull messages from Amazon SNS to process the images and place them in Amazon Elastic File System (Amazon EFS). Use Amazon CloudWatch metrics for the SNS message volume to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the ALB in front of the EC2 instances.",
        "C.Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to the Amazon Simple Queue Service (Amazon SQS) queue. Create a fleet of Amazon EC2 instances to pull messages from the SQS queue to process the images and place them in another S3 bucket Use Amazon CloudWatch metrics for queue depth to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the S3 bucket that contains the processed images.",
        "D.Store the uploaded images on a shared Amazon Elastic Block Store (Amazon EBS) volume mounted to a fleet of Amazon EC2 Spot instances. Create an Amazon DynamoDB table that contains information about each uploaded image and whether it has been processed. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to reference an Elastic Load Balancer in front of the fleet of EC2 instances."
      ],
      "q_cn": "一家公司正在网络上构建一项图像服务，允许用户上传和搜索随机照片。在使用高峰期，全球多达 10,000 名用户将上传他们的图像。然后，该服务将在上载的图像上叠加文本，然后将这些文本发布在公司网站上。\n解决方案架构师应实现哪种设计？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "upload and search random photos,10,000 users worldwide,overlay text on the uploaded images",
      "aK": [
        "SQS"
      ]
    },
    {
      "no": 274,
      "q": "A solutions architect at a large company needs to set up network security for outbound traffic to the internet from all AWS accounts within an organization in AWS Organizations. The organization has more than 100 AWS accounts, and the accounts route to each other by using a centralized AWS Transit Gateway. Each account has both an internet gateway and a NAT gateway for outbound traffic to the internet. The company deploys resources only into a single AWS Region.\nThe company needs the ability to add centrally managed rule-based filtering on all outbound traffic to the internet for all AWS accounts in the organization. The peak load of outbound traffic will not exceed 25 Gbps in each Availability Zone.\nWhich solution meets these requirements?",
      "a": [
        "A.Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC. Configure a new NAT gateway. Create an Auto Scaling group of Amazon EC2 instances that run an open-source internet proxy for rule-based filtering across all Availability Zones in the Region. Modify all default routes to point to the proxy's Auto Scaling group.",
        "B.Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC. Configure a new NAT gateway. Use an AWS Network Firewall firewall for rule-based filtering. Create Network Firewall endpoints in each Availability Zone. Modify all default routes to point to the Network Firewall endpoints.",
        "C.Create an AWS Network Firewall firewall for rule-based filtering in each AWS account. Modify all default routes to point to the Network Firewall firewalls in each account.",
        "D.In each AWS account, create an Auto Scaling group of network-optimized Amazon EC2 instances that run an open-source internet proxy for rule-based filtering. Modify all default routes to point to the proxy's Auto Scaling group."
      ],
      "q_cn": "大型公司的解决方案架构师需要为 AWS 组织中组织内的所有 AWS 账户到 Internet 的出站流量设置网络安全。该组织拥有 100 多个 AWS 账户，这些账户使用集中式 AWS 中转网关相互路由。每个账户都有一个互联网网关和一个 NAT 网关，用于出站流量到互联网。公司仅将资源部署到单个 AWS 区域中。\n公司需要能够为组织中的所有 AWS 账户添加集中管理的基于规则的筛选，以应对发往 Internet 的所有出站流量。每个可用区中出站流量的峰值负载不会超过 25 Gbps。\n哪种解决方案满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "25 Gbps",
      "aK": [
        "Network Firewall endpoints"
      ]
    },
    {
      "no": 9,
      "q": "A solutions architect needs to migrate an on-premises legacy application to AWS. The application runs on two servers behind a load balancer. The application requires a license file that is associated with the MAC address of the server's network adapter. It takes the software vendor 12 hours to send new license files. The application also uses configuration files with a static IP address to access a database server. host names are not supported. Given these requirements, which combination of steps should be taken to enable highly available architecture for the application servers in AWS? (Select TWO)",
      "a": [
        "A.Create a pool of ENIs, request license files from the vendor for the pool, and store the license files in Amazon S3. Create a bootstrap automation script to download a license file and attach the corresponding ENI to an Amazon EC2 instance",
        "B.Create a pool of ENIs. Request license files from the vendor for the pool, store the license files on an Amazon EC2 instance. Create an AMI from the instance and use this AMI for all future EC2 instances.",
        "C. Create a bootstrap automation to request a new license file from the vendor with a unique return email. Have the server configure itself with the received license file.",
        "D.Create bootstrap automation to attach an ENI from the pool, read the database IP addresses from AWS Systems Manager Parameter Store, and inject those parameters into the local configuration files.Keep SSM up to date using a Lambda function.",
        "E.Install the application on an EC2 instance, configure the application, and configure the IP address information.Create an AMI from this instance and use if for all instances."
      ],
      "q_cn": "解决方案架构师需要将本地旧版应用程序迁移到 AWS。应用程序在负载均衡器后面的两台服务器上运行。应用程序需要一个与服务器网络适配器的 MAC 地址关联的许可证文件。软件供应商需要 12 个小时才能发送新的许可证文件。该应用程序还使用具有静态 IP 地址的配置文件来访问数据库服务器。不支持主机名。鉴于这些要求，应采取哪些步骤组合来为 AWS 中的应用程序服务器启用高可用性架构？（选择两个）",
      "a_cn": [
        "A.创建 ENI 池，向池的供应商请求许可证文件，并将许可证文件存储在 Amazon S3 中。创建引导自动化脚本以下载许可证文件并将相应的 ENI 附加到 Amazon EC2 实例",
        "B.创建弹性网卡池。向池的供应商请求许可证文件，将许可证文件存储在 Amazon EC2 实例上。从实例创建 AMI，并将此 AMI 用于所有未来的 EC2 实例。",
        "C.创建引导自动化，以使用唯一的返回电子邮件向供应商请求新的许可证文件。让服务器使用收到的许可证文件进行自身配置。",
        "D.创建引导自动化以从池附加 ENI，从 AWS 系统管理器参数存储读取数据库 IP 地址，并将这些参数注入本地配置文件。使用 Lambda 函数使 SSM 保持最新状态。",
        "E.在 EC2 实例上安装应用程序，配置应用程序并配置 IP 地址信息。从此实例创建 AMI，并将 if 用于所有实例。"
      ],
      "aa": "A,D",
      "qK": "license,MAC,12 hours",
      "aK": [
        "S3,Systems Manager Parameter Store"
      ]
    },
    {
      "no": 169,
      "q": "A company has an application that runs as a ReplicaSet of multiple pods in an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster has nodes in multiple Availability Zones. The application generates many small files that must be accessible across all running instances of the application. The company needs to back up the files and retain the backups for 1 year.\nWhich solution will meet these requirements while providing the FASTEST storage performance?",
      "a": [
        "A.Create an Amazon Elastic File System (Amazon EFS) file system and a mount target for each subnet that contains nodes in the EKS cluster. Configure the ReplicaSet to mount the file system. Direct the application to store files in the file system. Configure AWS Backup to back up and retain copies of the data for 1 year.",
        "B.Create an Amazon Elastic Block Store(Amazon EBS) volume.Enable the EBS Multi-Attach feature.Configure the ReplicaSet to mount the EBS volume.Direct the application to store files in the EBS volume.Configure AWS Backup to back up and retain copies of the data for 1 year.",
        "C.Create an Amazon S3 bucket.Configure the ReplicaSet to mount the S3 bucket.Direct the application to store files in the S3 bucket.Configure S3 Versioning to retain copies of the data.Configure an S3 Lifecycle policy to delete objects after 1 year.",
        "D.Configure the ReplicaSet to use the storage available on each of the running application pods to store the files locally.Use a third-party tool to back up the EKS cluster for 1 year."
      ],
      "q_cn": "一家公司有一个应用程序，该应用程序在 Amazon Elastic Kubernetes Service （Amazon EKS） 集群中作为多个 Pod 的副本集运行。EKS 集群在多个可用区中具有节点。应用程序生成许多小文件，这些文件必须在应用程序的所有正在运行的实例中访问。公司需要备份文件并将备份保留 1 年。\n哪种解决方案既能满足这些要求，又能提供最快的存储性能？",
      "a_cn": [
        "A.为 EKS 集群中包含节点的每个子网创建一个 Amazon 弹性文件系统 （Amazon EFS） 文件系统和一个挂载目标。配置复制副本集以装载文件系统。指示应用程序将文件存储在文件系统中。配置 AWS Backup 以备份数据副本并将其保留 1 年。",
        "B.创建 Amazon Elastic Block Store （Amazon EBS） 卷。启用 EBS 多重挂载功能。配置副本集以挂载 EBS 卷。指示应用程序将文件存储在 EBS 卷中。配置 AWS Backup 以备份数据副本并将其保留 1 年。",
        "C.创建 Amazon S3 存储桶。配置副本集以挂载 S3 存储桶。指示应用程序将文件存储在 S3 存储桶中。配置 S3 版本控制以保留数据副本。配置 S3 生命周期策略以在 1 年后删除对象。",
        "D.将副本集配置为使用每个正在运行的应用程序 Pod 上的可用存储在本地存储文件。使用第三方工具将 EKS 集群备份 1 年。"
      ],
      "aa": "A",
      "qK": "EKS,many small files,all running instances",
      "aK": [
        "EFS"
      ]
    },
    {
      "no": 182,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 211,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 28,
      "q": "A company is using AWS Organizations to manage multiple AWS accounts. For security purposes, the company requires the creation of an Amazon Simple Notification Service(Amazon SNS) topic that enables integration with a third-party alerting system in all the Organizations member accounts.A solutions architect used an AWS CloudFormation template to create the SNS topic and stack sets to automate the deployment of CloudFormation stacks.Trusted access has been enabled in Organizations.What should the solutions architect do to deploy the CloudFormation StackSets in all AWS accounts?",
      "a": [
        "A.Create a stack set in the Organizations member accounts. Use service-managed permissions. Set deployment options to deploy to an organization. Use CloudFormation StackSets drift detection.",
        "B.Create stacks in the Organizations member accounts.Use self-service permissions.Set deployment options to deploy to an organization.Enable the CloudFormation StackSets automatic deployment.",
        "C.Create a stack set in the Organizations master account.Use service-managed permissions.Set deployment options to deploy to the organization.Enable CloudFormation StackSets automatic deployment.",
        "D.Create stacks in the Organizations master account.Use service-managed permissions.Set deployment options to deploy to the organization.Enable CloudFormation StackSets drift detection."
      ],
      "q_cn": "一家公司正在使用 AWS Organizations 来管理多个 AWS 账户。出于安全考虑，该公司要求创建一个 Amazon Simple Notification Service （Amazon SNS） 主题，该主题允许与所有组织成员账户中的第三方警报系统集成。解决方案架构师使用 AWS CloudFormation 模板创建 SNS 主题和堆栈集，以自动部署 CloudFormation 堆栈。已在组织中启用可信访问。解决方案架构师应如何在所有 AWS 账户中部署 CloudFormation StackSets？",
      "a_cn": [
        "A.在组织成员账户中创建堆栈集。使用服务托管权限。设置要部署到组织的部署选项。使用 CloudFormation StackSets 漂移检测。",
        "B.在组织成员账户中创建堆栈。使用自助服务权限。设置要部署到组织的部署选项。启用 CloudFormation StackSet 自动部署。",
        "C.在组织主账户中创建堆栈集。使用服务-托管权限。设置要部署到组织的部署选项。启用 CloudFormation StackSet 自动部署。",
        "D.在组织主账户中创建堆栈。使用服务-托管权限。设置要部署到组织的部署选项。启用 CloudFormation StackSet 偏移检测。"
      ],
      "aa": "C",
      "qK": "SNS,CloudFormation stacks,CloudFormation StackSets",
      "aK": [
        "master,automatic"
      ]
    },
    {
      "no": 156,
      "q": "A company runs an intranet application on premises. The company wants to configure a cloud backup of the application. The company has selected AWS Elastic Disaster Recovery for this solution. The company requires that replication traffic does not travel through the public internet. The application also must not be accessible from the internet. The company does not want this solution to consume all available network bandwidth because other applications require bandwidth. Which combination of steps will meet these requirements?(Select THREE)",
      "a": [
        "A.Create a VPC that has at least two private subnets, two NAT gateways, and a virtual private gateway",
        "B.Create a VPC that has at least two public subnets, a virtual private gateway, and an internet gateway",
        "C.Create an AWS Site-to-Site VPN connection between the on-premises network and the target AWS network",
        "D.Create an AWS Direct Connect connection and a Direct Connect gateway between the on-premises network and the target AWS network",
        "E.During configuration of the replication servers, select the option to use private lP addresses for data replication",
        "F.During configuration of the launch settings for the target servers,select the option to ensure that the Recovery instance's private lP address matches the source serve's private IP address"
      ],
      "q_cn": "公司在本地运行内部网应用程序。该公司希望配置应用程序的云备份。该公司已为此解决方案选择了 AWS Elastic 灾难恢复。该公司要求复制流量不通过公共互联网传输。该应用程序也不得从互联网访问。该公司不希望此解决方案消耗所有可用的网络带宽，因为其他应用程序需要带宽。哪些步骤组合将满足这些要求？（选择三项）",
      "a_cn": [
        "A.创建至少具有两个私有子网、两个 NAT 网关和一个虚拟私有网关的 VPC",
        "B.创建至少具有两个公有子网、一个虚拟私有网关和一个互联网网关的 VPC",
        "C.在本地网络和目标 AWS 网络之间创建 AWS 站点到站点 VPN 连接",
        "D.在本地网络和目标 AWS 网络之间创建 AWS 专线连接和专线网关",
        "E.在配置复制服务器期间，选择使用专用 lP 地址进行数据复制的选项",
        "F.在配置目标服务器的启动设置期间，选择确保恢复实例的私有 lP 地址与源服务的私有 IP 地址匹配的选项"
      ],
      "aa": "A,D,F",
      "qK": "Elastic Disaster Recovery",
      "aK": [
        "private subnets",
        "Direct Connect",
        "Recovery,private IP address"
      ]
    },
    {
      "no": 295,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 116,
      "q": "A company uses AWS Organizations for a multi-account setup in the AWS Cloud. The company uses AWS Control Tower for governance and uses AWS Transit Gateway for VPC connectivity across accounts.\nIn an AWS application account, the company's application team has deployed a web application that uses AWS Lambda and Amazon RDS. The company's database administrators have a separate DBA account and use the account to centrally manage all the databases across the organization.The database administrators use an Amazon EC2 instance that is deployed in the DBA account to access an RDS database that is deployed in the application account.\nThe application team has stored the database credentials as secrets in AWS Secrets Manager in the application account.The application team is manually sharing the secrets with the database administrators.The secrets are encrypted by the default AWS managed key for Secrets Manager in the application account.A solutions architect needs to implement a solution that gives the database administrators access to the database and eliminates the need to manually share the secrets.\nWhich solution will meet these requirements?",
      "a": [
        "A.Use AWS Resource Access Manager (AWS RAM) to share the secrets from the application account with the DBA account. In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the shared secrets. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.",
        "B.In the application account, create an IAM role that is named DBA-Secret.Grant the role the required permissions to access the secrets.In the DBA account, create an IAM role that is named DBA-Admin.Grant the DBA-Admin role the required permissions to assume the DBA-Secret role in the application account.Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.",
        "C.In the DBA account, create an IAM role that is named DBA-Admin.Grant the role the required permissions to access the secrets and the default AWS managed key in the application account.In the application account, attach resource-based policies to the key to allow access from the DBA account.Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.",
        "D.In the DBA account, create an IAM role that is named DBA-Admin.Grant the role the required permissions to access the secrets in the application account.Attach an SCP to the application account to allow access to the secrets from the DBA account.Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets."
      ],
      "q_cn": "一家公司使用 AWS Organizations 在 AWS 云中进行多账户设置。该公司使用 AWS Control Tower 进行治理，并使用 AWS Transit Gateway 进行跨账户的 VPC 连接。\n在 AWS 应用程序账户中，该公司的应用程序团队部署了一个使用 AWS Lambda 和 Amazon RDS 的 Web 应用程序。公司的数据库管理员有一个单独的 DBA 帐户，并使用该帐户集中管理整个组织中的所有数据库。数据库管理员使用部署在 DBA 账户中的 Amazon EC2 实例来访问部署在应用程序账户中的 RDS 数据库。\n应用程序团队已将数据库凭证作为密钥存储在应用程序账户的 AWS 密钥管理器中。应用程序团队正在与数据库管理员手动共享机密。密钥由应用程序账户中密钥管理器的默认 AWS 托管式密钥加密。解决方案架构师需要实现一个解决方案，使数据库管理员能够访问数据库，并且无需手动共享机密。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.使用 AWS Resource Access Manager （AWS RAM） 与 DBA 账户共享应用程序账户中的密钥。在 DBA 账户中，创建名为 DBA-Admin 的 IAM 角色。向角色授予访问共享密钥所需的权限。将 DBA-Admin 角色附加到 EC2 实例以访问跨账户密钥。",
        "B.在应用程序账户中，创建名为 DBA 密钥的 IAM 角色。向角色授予访问密钥所需的权限。在 DBA 账户中，创建名为 DBA-Admin 的 IAM 角色。授予 DBA 管理员角色在应用程序帐户中担任 DBA-Secret 角色所需的权限。将 DBA-Admin 角色附加到 EC2 实例以访问跨账户密钥。",
        "C.In DBA 账户，创建名为 DBA-Admin.Admin 的 IAM 角色。向该角色授予访问应用程序账户中的密钥和默认 AWS 托管式密钥所需的权限。在应用程序帐户中，将基于资源的策略附加到密钥以允许从 DBA 帐户进行访问。将 DBA-管理员角色附加到 EC2 实例，以访问跨账户密钥。",
        "D.In DBA 账户，创建名为 DBA-Admin.Admin.授予该角色访问应用程序账户中密钥所需的权限。将 SCP 附加到应用程序帐户以允许从 DBA 帐户访问机密。将 DBA-管理员角色附加到 EC2 实例，以访问跨账户密钥。"
      ],
      "aa": "B",
      "qK": "DBA,Secrets Manager",
      "aK": [
        "DBA-Secret"
      ]
    },
    {
      "no": 273,
      "q": "A company plans to deploy a new private intranet service on Amazon EC2 instances inside a VPC. An AWS Site-to-Site VPN connects the VPC to the company's on-premises network. The new service must communicate with existing on-premises services. The on-premises services are accessible through the use of hostnames that reside in the company.example DNS zone. This DNS zone is wholly hosted on premises and is available only on the company's private network.\nA solutions architect must ensure that the new service can resolve hostnames on the company example domain to integrate with existing services.\nWhich solution meets these requirements?",
      "a": [
        "A.Create an empty private zone in Amazon Route 53 for company example. Add an additional NS record to the company's on-premises company.example zone that points to the authoritative name servers for the new private zone in Route 53.",
        "B.Turn on DNS hostnames for the VPC. Configure a new outbound endpoint with Amazon Route 53 Resolver. Create a Resolver rule to forward requests for company.example to the on-premises name servers.",
        "C.Turn on DNS hostnames for the VPC. Configure a new inbound resolver endpoint with Amazon Route 53 Resolver. Configure the on-premises DNS server to forward requests for company.example to the new resolver.",
        "D.Use AWS Systems Manager to configure a run document that will install a hosts file that contains any required hostnames. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to run the document when an instance is entering the running state."
      ],
      "q_cn": "一家公司计划在 VPC 内的 Amazon EC2 实例上部署新的私有内联网服务。AWS 站点到站点 VPN 将 VPC 连接到公司的本地网络。新服务必须与现有本地服务通信。可以使用驻留在公司中的主机名访问本地服务。示例 DNS 区域。此 DNS 区域完全托管在本地，并且仅在公司的专用网络上可用。\n解决方案架构师必须确保新服务可以解析公司示例域上的主机名，以便与现有服务集成。\n哪种解决方案满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "deploy a new private intranet service",
      "aK": [
        "Turn on DNS hostnames,outbound"
      ]
    },
    {
      "no": 45,
      "q": "A company with global offices has a single 1 Gbps AWS Direct Connect connection to a single AWS Region. The company's on-premises network uses the connection to communicate with the company's resources in the AWS Cloud. The connection has a single private virtual interface that connects to a single VPC.\nA solutions architect must implement a solution that adds a redundant Direct Connect connection in the same Region.The solution also must provide connectivity to other Regions through the same pair of Direct Connect connections as the company expands into other Regions.\nWhich solution meets these requirements?",
      "a": [
        "A.Provision a Direct Connect gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the Direct Connect gateway. Connect the Direct Connect gateway to the single VPC.",
        "B.Keep the existing private virtual interface.Create the second Direct Connect connection.Create a new private virtual interface on the new connection, and connect the new private virtual interface to the single VPC.",
        "C.Keep the existing private virtual interface.Create the second Direct Connect connection.Create a new public virtual interface on the new connection and connect the new public virtual interface to the single VPC.",
        "D.Provision a transit gateway.Delete the existing private virtual interface from the existing connection.Create the second Direct Connect connection.Create a new private virtual interface on each connection, and connect both private virtual interfaces to the transit gateway.Associate the transit gateway with the single VPC."
      ],
      "q_cn": "拥有全球办事处的公司与单个 AWS 区域只有一条 1 Gbps 的 AWS Direct Connect 连接。公司的本地网络使用该连接与 AWS 云中的公司资源进行通信。该连接具有连接到单个 VPC 的单个私有虚拟接口。\n解决方案架构师必须实现在同一区域添加冗余专线连接的解决方案。当公司扩展到其他区域时，该解决方案还必须通过同一对直接连接提供与其他区域的连接。\n哪种解决方案满足这些要求",
      "a_cn": [
        "A.配置专线网关。从现有连接中删除现有私有虚拟接口。创建第二个直接连接。在每个连接上创建新的私有虚拟接口，并将两个私有虚拟接口连接到专线网关。将专线网关连接到单个VPC。",
        "B.保留现有的私有虚拟接口。创建第二个直接连接。在新连接上创建新的私有虚拟接口，并将新的私有虚拟接口连接到单个 VPC。",
        "C.保留现有的私有虚拟接口。创建第二个直接连接。在新连接上创建新的公有虚拟接口，并将新的公有虚拟接口连接到单个 VPC。",
        "D.配置中转网关。从现有连接中删除现有私有虚拟接口。创建第二个直接连接。在每个连接上创建一个新的私有虚拟接口，并将两个私有虚拟接口连接到中转网关。将中转网关与单个 VPC 关联。"
      ],
      "aa": "A",
      "qK": "1 Gbps,Direct Connect,adds a redundant Direct Connect",
      "aK": [
        "Direct Connect gateway"
      ]
    },
    {
      "no": 227,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 19,
      "q": "A weather service provides high-resolution weather maps from a web application hosted on AWS in the eu-west-1 Region. The weather maps are updated frequently and stored in Amazon S3 along with static HTML content. The web application is fronted by Amazon CloudFront.\nThe company recently expanded to serve users in the us-east-1 Region, and these new users report that viewing their respective weather maps is slow from time to time.\nWhich combination of steps will resolve the us-east-1 performance issues ? (Choose two.) ",
      "a": [
        "A. Configure the AWS Global Accelerator endpoint for the S3 bucket in eu-west-1. Configure endpoint groups for TCP ports 80 and 443 in us-east-1.",
        "B.Create a new S3 bucket in us-east-1. Configure S3 cross-Region replication to synchronize from the S3 bucket in eu-west-1.",
        "C.Use Lambda@Edge to modify requests from North America to use the S3 Transfer Acceleration endpoint in us-east-1.",
        "D.Use Lambda@Edge to modify requests from North America to use the S3 bucket in us-east-1.",
        "E.Configure the AWS Global Accelerator endpoint for us-east-1 as an origin on the CloudFront distribution.Use Lambda@Edge to modify requests from North America to use the new origin."
      ],
      "q_cn": "天气服务通过托管在欧洲西部 1 区域的 AWS 上的 Web 应用程序提供高分辨率天气图。天气图会经常更新，并与静态 HTML 内容一起存储在 Amazon S3 中。Web 应用程序由 Amazon CloudFront 前端。\n该公司最近扩展到为 us-east-1 区域的用户提供服务，这些新用户报告说，查看各自的天气图时不时很慢。\n哪些步骤组合将解决 us-east-1 的性能问题？（选择两个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "B,D",
      "qK": "high-resolution weather maps",
      "aK": [
        "S3 bucket in us-east-1"
      ]
    },
    {
      "no": 151,
      "q": "A company runs a new application as a static website in Amazon S3. The company has deployed the application to a production AWS account and uses Amazon CloudFront to deliver the website. The website calls an Amazon API Gateway REST API. An AWS Lambda function backs each API method.\nThe company wants to create a CSV report every 2 weeks to show each API Lambda function’s recommended configured memory, recommended cost, and the price difference between current configurations and the recommendations.The company will store the reports in an S3 bucket.\nWhich solution will meet these requirements with the LEAST development time?",
      "a": [
        "A.Create a Lambda function that extracts metrics data for each API Lambda function from Amazon CloudWatch Logs for the 2-week period. Collate the data into tabular format. Store the data as a .csv file in an S3 bucket. Create an Amazon EventBridge rule to schedule the Lambda function to run every 2 weeks.",
        "B.Opt in to AWS Compute Optimizer.Create a Lambda function that calls the ExportLambdaFunctionRecommendations operation.Export the.csv file to an S3 bucket.Create an Amazon EventBridge rule to schedule the Lambda function to run every 2 weeks.",
        "C.Opt in to AWS Compute Optimizer.Set up enhanced infrastructure metrics.Within the Compute Optimizer console, schedule a job to export the Lambda recommendations to a .csv file.Store the file in an S3 bucket every 2 weeks.",
        "D.Purchase the AWS Business Support plan for the production account.Opt in to AWS Compute Optimizer for AWS Trusted Advisor checks.In the Trusted Advisor console, schedule a job to export the cost optimization checks to a .csv file.Store the file in an S3 bucket every 2 weeks."
      ],
      "q_cn": "一家公司在 Amazon S3 中将新应用程序作为静态网站运行。该公司已将应用程序部署到生产 AWS 账户，并使用 Amazon CloudFront 交付网站。该网站调用 Amazon API Gateway REST API。AWS Lambda 函数支持每个 API 方法。\n该公司希望每 2 周创建一次 CSV 报告，以显示每个 API Lambda 函数的建议配置内存、建议成本以及当前配置与建议之间的价格差异。公司会将报告存储在 S3 存储桶中。\n哪种解决方案能够以最短的开发时间满足这些要求？",
      "a_cn": [
        "A.创建一个 Lambda 函数，该函数从 Amazon CloudWatch 日志中提取 2 周内每个 API Lambda 函数的指标数据。将数据整理成表格格式。将数据作为.csv文件存储在 S3 存储桶中。创建 Amazon EventBridge 规则以计划每 2 周运行一次 Lambda 函数。",
        "B.选择加入 AWS 计算优化器。创建一个调用 ExportLambdaFunctionRecommendations 操作的 Lambda 函数。将.csv文件导出到 S3 存储桶。创建 Amazon EventBridge 规则以计划每 2 周运行一次 Lambda 函数。",
        "C.选择加入 AWS 计算优化器。设置增强的基础架构指标。在计算优化器控制台中，计划一个作业以将 Lambda 建议导出到.csv文件。每 2 周将文件存储在 S3 存储桶中。",
        "D.购买生产账户的 AWS 业务支持计划。选择加入 AWS Compute Optimizer 以进行 AWS Trusted Advisor 检查。在 Trusted Advisor 控制台中，计划作业以将成本优化检查导出到.csv文件。每 2 周将文件存储在 S3 存储桶中。"
      ],
      "aa": "B",
      "qK": "S3,CloudFront,REST API,CSV report",
      "aK": [
        "Optimizer,EventBridge,ExportLambdaFunctionRecommendations"
      ]
    },
    {
      "no": 246,
      "q": "A media storage application uploads user photos to Amazon S3 for processing. End users are reporting that some uploaded photos are not being processed properly. The Application Developers trace the logs and find that AWS Lambda is experiencing execution issues when thousands of users are on the system simultaneously. Issues are caused by:\n - Limits around concurrent executions.\n - The performance of Amazon DynamoDB when saving data.\nWhich actions can be taken to increase the performance and reliability of the application?(Choose two.) ",
      "a": [
        "A.Evaluate and adjust the read capacity units (RCUs) for the DynamoDB tables.",
        "B.Evaluate and adjust the write capacity units (WCUs) for the DynamoDB tables.",
        "C.Add an Amazon ElastiCache layer to increase the performance of Lambda functions.",
        "D.Configure a dead letter queue that will reprocess failed or timed-out Lambda functions.",
        "E.Use S3 Transfer Acceleration to provide lower-latency access to end users."
      ],
      "q_cn": "媒体存储应用程序将用户照片上传到 Amazon S3 进行处理。最终用户报告说，某些上传的照片未得到正确处理。应用程序开发人员跟踪日志，发现当数千个用户同时在系统上时，AWS Lambda 遇到执行问题。问题由以下原因引起：\n - 并发执行的限制。\n - 保存数据时 Amazon DynamoDB 的性能。\n可以采取哪些措施来提高应用程序的性能和可靠性？（选择两个。",
      "a_cn": [
        "A.评估和调整 DynamoDB 表的读取容量单位 （RCU）。",
        "B.评估和调整 DynamoDB 表的写入容量单位 （WCU）。",
        "C.添加 Amazon ElastiCache 层以提高 Lambda 函数的性能。",
        "D.配置将重新处理失败或超时的 Lambda 函数的死信队列。",
        "E.使用 S3 传输加速为最终用户提供低延迟访问。"
      ],
      "aa": "B,D",
      "qK": "uploads user photos,thousands of users",
      "aK": [
        "WCUs,dead letter queue"
      ]
    },
    {
      "no": 234,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 200,
      "q": "A company wants to manage the costs associated with a group of 20 applications that are infrequently used, but are still business-critical, by migrating to AWS.\nThe applications are a mix of Java and Node.js spread across different instance clusters. The company wants to minimize costs while standardizing by using a single deployment methodology. Most of the applications are part of month-end processing routines with a small number of concurrent users, but they are occasionally run at other times. Average application memory consumption is less than 1 GB, though some applications use as much as 2.5 GB of memory during peak processing. The most important application in the group is a billing report written in Java that accesses multiple data sources and often for several hours.\nWhich is the MOST cost-effective solution?",
      "a": [
        "A.Deploy a separate AWS Lambda function for each application. Use AWS CloudTrail logs and Amazon CloudWatch alarms to verify completion of critical jobs.",
        "B.Deploy Amazon ECS containers on Amazon EC2 with Auto Scaling configured for memory utilization of 75%. Deploy an ECS task for each application being migrated with ECS task scaling. Monitor services and hosts by using Amazon CloudWatch.",
        "C.Deploy AWS Elastic Beanstalk for each application with Auto Scaling to ensure that all requests have sufficient resources. Monitor each AWS Elastic Beanstalk deployment by using CloudWatch alarms.",
        "D.Deploy a new Amazon EC2 instance cluster that co-hosts all applications by using EC2 Auto Scaling and Application Load Balancers. Scale cluster size based on a custom metric set on instance memory utilization. Purchase 3-year Reserved Instance reservations equal to the GroupMaxSize parameter of the Auto Scaling group."
      ],
      "q_cn": "一家公司希望通过迁移到 AWS 来管理与一组 20 个不常用但仍对业务至关重要的应用程序相关的成本。\n这些应用程序是 Java 和 Node 的混合体.js分布在不同的实例集群中。该公司希望通过使用单一部署方法实现标准化，同时最大限度地降低成本。大多数应用程序是具有少量并发用户的月末处理例程的一部分，但它们偶尔会在其他时间运行。平均应用程序内存消耗小于 1 GB，但某些应用程序在峰值处理期间使用多达 2.5 GB 的内存。该组中最重要的应用程序是用 Java 编写的计费报告，该报告访问多个数据源，通常持续数小时。\n哪个是最具成本效益的解决方案？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "20 applications,Java and Node.js,2.5 GB of memory",
      "aK": [
        "ECS,75%"
      ]
    },
    {
      "no": 189,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 190,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 134,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,E",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 12,
      "q": "A company is hosting a three-tier web application in an on-premises environment. Due to a recent surge in traffic that resulted in downtime and a significant financial impact, company management has ordered that the application be moved to AWS. The application is written in .NET and has a dependency on a MySQL database. A solutions architect must design a scalable and highly available solution to meet the demand of 200,000 daily users.\nWhich steps should the solutions architect take to design an appropriate solution?",
      "a": [
        "A.Use AWS Elastic Beanstalk to create a new application with a web server environment and an Amazon RDS MySQL Multi-AZ DB instance. The environment should launch a Network Load Balancer (NLB) in front of an Amazon EC2 Auto Scaling group in multiple Availability Zones. Use an Amazon Route 53 alias record to route traffic from the company's domain to the NLB.",
        "B.Use AWS CloudFormation to launch a stack containing an Application Load Balancer(ALB) in front of an Amazon EC2 Auto Scaling group spanning three Availability Zones.The stack should launch a Multi-AZ deployment of an Amazon Aurora MySQL DB cluster with a Retain deletion policy.Use an Amazon Route 53 alias record to route traffic from the company's domain to the ALB.",
        "C.Use AWS Elastic Beanstalk to create an automatically scaling web server environment that spans two separate Regions with an Application Load Balancer(ALB) in each Region.Create a Multi- AZ deployment of an Amazon Aurora MySQL DB cluster with a cross- Region read replica.Use Amazon Route 53 with a geoproximity routing policy to route traffic between the two Regions.",
        "D.Use AWS CloudFormation to launch a stack containing an Application Load Balancer(ALB) in front of an Amazon ECS cluster of Spot instances spanning three Availability Zones.The stack should launch an Amazon RDS MySQL DB instance with a Snapshot deletion policy.Use an Amazon Route 53 alias record to route traffic from the company's domain to the ALB."
      ],
      "q_cn": "一家公司在本地环境中托管三层 Web 应用程序。由于最近流量激增导致停机和重大财务影响，公司管理层已下令将应用程序迁移到 AWS。该应用程序是用 .NET 编写的，并且依赖于 MySQL 数据库。解决方案架构师必须设计一个可扩展且高度可用的解决方案，以满足 200,000 个日常用户的需求。\n解决方案架构师应采取哪些步骤来设计适当的解决方案？",
      "a_cn": [
        "A.使用 AWS Elastic Beanstalk 创建一个具有 Web 服务器环境和 Amazon RDS MySQL Multi-AZ 数据库实例的新应用程序。环境应在多个可用区中的 Amazon EC2 Auto Scaling 组前面启动网络负载均衡器 （NLB）。使用 Amazon Route 53 别名记录将流量从公司的域路由到 NLB。",
        "B.使用 AWS CloudFormation 在跨三个可用区的 Amazon EC2 Auto Scaling 组前面启动包含应用程序负载均衡器 （ALB） 的堆栈。堆栈应启动具有保留删除策略的 Amazon Aurora MySQL 数据库集群的多可用区部署。使用 Amazon Route 53 别名记录将流量从公司的域路由到 ALB。",
        "C.使用 AWS Elastic Beanstalk 创建自动扩展的 Web 服务器环境，该环境跨两个单独的区域，每个区域中都有一个应用程序负载均衡器 （ALB）。创建具有跨区域只读副本的 Amazon Aurora MySQL 数据库集群的多可用区部署。将 Amazon Route 53 与地理邻近路由策略结合使用，在两个区域之间路由流量。",
        "D.使用 AWS CloudFormation 在跨三个可用区的 Amazon ECS 竞价型实例集群前面启动包含应用程序负载均衡器 （ALB） 的堆栈。堆栈应启动具有快照删除策略的 Amazon RDS MySQL 数据库实例。使用 Amazon Route 53 别名记录将流量从公司的域路由到 ALB。"
      ],
      "aa": "B",
      "qK": "200,000 daily users",
      "aK": [
        "Retain deletion policy"
      ]
    },
    {
      "no": 216,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 289,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 215,
      "q": "A company is developing a new on-demand video application that is based on microservices. The application will have 5 million users at launch and will have 30 million users after 6 months. The company has deployed the application on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. The company developed the application by using ECS services that use the HTTPS protocol.\nA solutions architect needs to implement updates to the application by using blue/ green deployments.The solution must distribute traffic to each ECS service through a load balancer.The application must automatically adjust the number of tasks in response to an Amazon CloudWatch alarm.\nWhich solution will meet these requirements ? ",
      "a": [
        "A.Configure the ECS services to use the blue/green deployment type and a Network Load Balancer. Request increases to the service quota for tasks per service to meet the demand.",
        "B.Configure the ECS services to use the blue/green deployment type and a Network Load Balancer. Implement Auto Scaling group for each ECS service by using the Cluster Autoscaler.",
        "C.Configure the ECS services to use the blue/green deployment type and an Application Load Balancer. Implement an Auto Scaling group for each ECS service by using the Cluster Autoscaler.",
        "D.Configure the ECS services to use the blue/green deployment type and an Application Load Balancer. Implement Service Auto Scaling for each ECS service."
      ],
      "q_cn": "一家公司正在开发一种基于微服务的新型点播视频应用程序。该应用程序在启动时将拥有 500 万用户，6 个月后将拥有 3000 万用户。该公司已在 AWS Fargate 上的 Amazon Elastic Container Service （Amazon ECS） 上部署了该应用程序。该公司使用使用 HTTPS 协议的 ECS 服务开发应用程序。\n解决方案架构师需要使用蓝/绿部署实现对应用程序的更新。解决方案必须通过负载均衡器将流量分配到每个 ECS 服务。应用程序必须自动调整任务数以响应 Amazon CloudWatch 警报。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "on-demand video application,based on microservices,5 million users,30 million,6 months",
      "aK": [
        "Service Auto Scaling"
      ]
    },
    {
      "no": 155,
      "q": "A company is updating an application that customers use to make online orders.The number of attacks on the application by bad actors has increased recently.The company will host the updated application on an Amazon Elastic Container Service (Amazon ECS) cluster.The company will use Amazon DynamoDB to store application data.A public Application Load Balancer(ALB) will provide end users with access to the application. The company must prevent prevent attacks and ensure business continuity with minimal service interruptions during an ongoing attack. Which combination of steps will meet these requirements MOST cost_effectively? (Select TWO)",
      "a": [
        "A.Create an Amazon CloudFront distribution with the ALB as the origin. Add a custom header and random value on the CloudFront domain. Configure the ALB to conditionally forward traffic if the header and value match",
        "B.Deploy the application in two AWS Regions. Configure Amazon Route 53 to route to both Regions with equal weight",
        "C.Configure auto scaling for Amazon ECS tasks. Create a DynamoDB Accelerator (DAX) cluster",
        "D.Configure Amazon ElastiCache to reduce overhead on DynamoDB",
        "E.Deploy an AWS WAF web ACL that includes an appropriate rule group. Associate the web ACL with the Amazon CloudFront distribution"
      ],
      "q_cn": "一家公司正在更新客户用于进行在线订单的应用程序。最近，不良行为者对应用程序的攻击数量有所增加。该公司将在 Amazon Elastic Container Service （Amazon ECS） 集群上托管更新的应用程序。该公司将使用 Amazon DynamoDB 来存储应用程序数据。公共应用程序负载均衡器 （ALB） 将为最终用户提供对应用程序的访问权限。公司必须防止攻击，并确保业务连续性，同时在持续攻击期间尽量减少服务中断。哪些步骤组合将满足这些要求 最cost_effectively？（选择两个）",
      "a_cn": [
        "A.创建以 ALB 为源的 Amazon CloudFront 分配。在 CloudFront 域上添加自定义标头和随机值。将 ALB 配置为在标头和值匹配时有条件地转发流量",
        "B.在两个 AWS 区域中部署应用程序。将 Amazon Route 53 配置为以相等的权重路由到两个区域",
        "C.为 Amazon ECS 任务配置自动扩展。创建 DynamoDB 加速器 （DAX） 集群",
        "D.配置 Amazon ElastiCache 以减少 DynamoDB 上的开销",
        "E.部署包含相应规则组的 AWS WAF Web ACL。将 Web ACL 与 Amazon CloudFront 分配关联"
      ],
      "aa": "A,E",
      "qK": "attacks,ECS,DynamoDB,ALB",
      "aK": [
        "CloudFront"
      ]
    },
    {
      "no": 48,
      "q": "A company hosts a community forum site using an Application Load Balancer(ALB) and a Docker application hosted in an Amazon ECS cluster.The site data is stored in Amazon RDS for MySQL and the container image is stored in ECR.The company needs to provide their customers with a disaster recovery SIA with an RTO of no more than 24 hours and RPO of no more than 8 hours.\nWhich of the following solutions is the MOST cost-effective way to meet the requirements?",
      "a": [
        "A.Use AWS CloudFormation to deploy identical ALB, EC2, ECS and RDS resources in two redions.Schedule RDS snapshots every 8 hours.Use RDS multi-region replication to update the secondary region's copy of the database. In the event of a failure, restore from the latest snapshot, and use an Amazon Route 53 DNS failover policy to automatically redirect customers to the ALB in the secondary region.",
        "B.Store the Docker image in ECR in two regions.Schedule RDS snapshots every 8 hours with snapshots copied to the secondary region.In the event of failure, use AWS CloudFormation to deploy the ALB, EC2, ECS and RDS resources in the secondary region, restore from the latest snapshot, and update the DNS record to point to the ALB in the secondary region.",
        "C.Use AWS CloudFormation to deploy identical ALB, EC2, ECS and RDS resources in a secondarv region.Schedule hourly RDS MySOL backups to Amazon S3 and use cross-region replication to replicate data to a bucket in the secondary region.In the event of a failure, import the latest Docker image to Amazon ECR in the secondary region, deploy to the EC2 instance. restore the latest MySQL backup, and update the DNS record to point to the ALB in the secondary region.",
        "D.Deploy a pilot light environment in a secondary region with an ALB and a minimal resource EC2 deployment for Focker in an AWS Auto Scaling group with a scaling policy to increase instance size anf number of nodes Create a cross-region read replica of the RDS data.In the event of a failure.promote the replica to primary, and update the DNS record to point to the ALB in the second an region."
      ],
      "q_cn": "一家公司使用应用程序负载均衡器 （ALB） 和托管在 Amazon ECS 集群中的 Docker 应用程序托管社区论坛站点。站点数据存储在适用于 MySQL 的 Amazon RDS 中，容器映像存储在 ECR 中。该公司需要为其客户提供 RTO 不超过 24 小时、RPO 不超过 8 小时的灾难恢复 SIA。以下哪种解决方案是满足要求的最具成本效益的方法？",
      "a_cn": [
        "A.使用 AWS CloudFormation 在两个资源中删除相同的 ALB、EC2、ECS 和 RDS 资源。每 8 小时安排一次 RDS 快照。使用 RDS 多区域复制更新次要区域的数据库副本。发生故障时，请从最新快照还原，并使用 Amazon Route 53 DNS 故障转移策略自动将客户重定向到次要区域中的 ALB。",
        "B.将 Docker 镜像存储在 ECR 中的两个区域中。每 8 小时计划一次 RDS 快照，并将快照复制到次要区域。发生故障时，使用 AWS CloudFormation 在次要区域中部署 ALB、EC2、ECS 和 RDS 资源，从最新快照还原，并更新 DNS 记录以指向次要区域中的 ALB。",
        "C.使用 AWS CloudFormation 在二级ARV区域中删除相同的ALB、EC2、ECS和RDS资源。计划每小时将 RDS MySOL 备份到 Amazon S3，并使用跨区域复制将数据复制到次要区域中的存储桶。如果发生故障，请将最新的 Docker 映像导入次要区域中的 Amazon ECR，部署到 EC2 实例。还原最新的 MySQL 备份，并更新 DNS 记录以指向次要区域中的 ALB。",
        "D.在具有 ALB 的次要区域中部署 Pilot Light 环境，并在具有扩展策略的 AWS Auto Scaling 组中为 Focker 部署最少资源 EC2，以增加实例大小和节点数 创建 RDS 数据的跨区域只读副本。发生故障时。将副本提升为主副本，并更新 DNS 记录以指向第二个区域中的 ALB。"
      ],
      "aa": "B",
      "qK": "RTO,24 hours,RPO,8 hours",
      "aK": [
        "Store the Docker image in ECR in two regions"
      ]
    },
    {
      "no": 131,
      "q": "A company is using an on-premises Active Directory service for user authentication. The company wants to use the same authentication service to sign in to the company's AWS accounts, which are using AWS Organizations. AWS Site-to-Site VPN connectivity already exists between the on-premises environment and all the company's AWS accounts.\nThe company's security policy requires conditional access to the accounts based on user groups and roles. User identities must be managed in a single location.\nWhich solution will meet these requirements?",
      "a": [
        "A.Configure AWS Single Sign-On (AWS SSO) to connect to Active Directory by using SAML 2.0. Enable automatic provisioning by using the System for Cross- domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using attribute-based access controls (ABACs).",
        "B.Configure AWS Single Sign-On (AWS SSO) by using AWS SSO as an identity source. Enable automatic provisioning by using the System for Cross-domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using AWS SSO permission sets.",
        "C.In one of the company's AWS accounts, configure AWS Identity and Access Management (IAM) to use a SAML 2.0 identity provider. Provision IAM users that are mapped to the federated users. Grant access that corresponds to appropriate groups in Active Directory. Grant access to the required AWS accounts by using cross-account IAM users.",
        "D.In one of the company's AWS accounts, configure AWS Identity and Access Management (IAM) to use an OpenID Connect (OIDC) identity provider. Provision IAM roles that grant access to the AWS account for the federated users that correspond to appropriate groups in Active Directory. Grant access to the required AWS accounts by using cross-account IAM roles."
      ],
      "q_cn": "公司正在使用本地活动目录服务进行用户身份验证。该公司希望使用相同的身份验证服务登录该公司使用 AWS 组织的 AWS 账户。本地环境和公司的所有 AWS 账户之间已存在 AWS 站点到站点 VPN 连接。\n公司的安全策略要求根据用户组和角色对帐户进行条件访问。必须在一个位置管理用户标识。\n      哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "on-premises Active Directory",
      "aK": [
        "ABACs,SSO,SAML"
      ]
    },
    {
      "no": 205,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 119,
      "q": "A company has deployed an Amazon Connect contact center.Contact center agents are reporting large numbers of computer-generated calls.The company is concerned about the cost and productivity effects of these calls.The company wants a solution that will allow agents to flag the call as spam and automatically block the numbers from going to an agent in the future.What is the MOST operationaly eficient soluton to meet these recuirements?",
      "a": [
        "A.Customize the Contact Control Panel (CCP) by adding a flag call button that will invoke an AWS Lambda function that calls the UpdateContactAttributes API.Use an Amazon DynamoDB table to store the spam numbers.Modify the contact flows to look for the updated attribute and to use a Lambda function to read and write to the DynamoDB table.",
        "B.Use a Contact Lens for Amazon Connect rule that will look for spam calls.Use an Amazon DynamoDb table to store the spam numbers.Modify the contact flows to look for the rule and invoke an AWS Lambda function to read and write to the DynamoDB table.",
        "C.Use an DynamoDB table to store the spam numbers.Create a quick connect that the agents can transfer the spam call to from the Contact Control Panel (CCP) .Modify the quick connect contact flow to invoke an AWS Lambda function to write to the DynamoDB table.",
        "D.Modify the initial contact flow to ask for caller input.If the agent does not receive input, the agent shoulf mark the caller as spam.Use an Amazon DynamoDB table to store the spam numbers.Use an AWS Lambda function to read and write to the DynamoDB table."
      ],
      "q_cn": "一家公司部署了 Amazon Connect 联系中心。联络中心座席报告了大量计算机生成的呼叫。该公司担心这些电话的成本和生产力影响。该公司想要一种解决方案，允许座席将呼叫标记为垃圾邮件，并自动阻止将来将号码转给座席。满足这些要求的最佳操作解决方案是什么？",
      "a_cn": [
        "A.通过添加一个标志调用按钮来自定义联系人控制面板 （CCP），该按钮将调用 UpdateContactAttributes API 的 AWS Lambda 函数。使用 Amazon DynamoDB 表存储垃圾邮件号码。修改联络流以查找更新的属性，并使用 Lambda 函数读取和写入 DynamoDB 表。",
        "B.使用用于 Amazon Connect 的隐形眼镜规则来查找垃圾电话。使用 Amazon DynamoDb 表存储垃圾邮件号码。修改联络流以查找规则并调用 AWS Lambda 函数以读取和写入 DynamoDB 表。",
        "C.使用 DynamoDB 表存储垃圾邮件号码。创建代理可以从联系人控制面板 （CCP） 转接到的骚扰呼叫的快速连接。修改快速连接联系流以调用 AWS Lambda 函数以写入 DynamoDB 表。",
        "D.修改初始联络流以请求呼叫者输入。如果座席未收到输入，座席会将呼叫者标记为垃圾邮件。使用 Amazon DynamoDB 表存储垃圾邮件号码。使用 AWS Lambda 函数读取和写入 DynamoDB 表。"
      ],
      "aa": "A",
      "qK": "large numbers of computer-generated calls",
      "aK": [
        "Customize,CCP"
      ]
    },
    {
      "no": 102,
      "q": "A publishing company's design team updates the icons and other static assets that an ecommerce web application uses. The company serves the icons and assets from an Amazon S3 bucket that is hosted in the company's production account. The company also uses a development account that members of the design team can access.\nAfter the design team tests the static assets in the development account, the design team needs to load the assets into the S3 bucket in the production account.A solutions architect must provide the design team with access to the production account without exposing other parts of the web application to the risk of unwanted changes.\nWhich combination of steps will meet these requirements?(Choose three.) ",
      "a": [
        "A.In the production account, create a new IAM policy that allows read and write access to the S3 bucket.",
        "B.In the development account, create a new IAM policy that allows read and write access to the S3 bucket.",
        "C.In the production account, create a role Attach the new policy to the role. Define the development account as a trusted entity.",
        "D.In the development account, create a role. Attach the new policy to the role Define the production account as a trusted entity.",
        "E.In the development account, create a group that contains all the IAM users of the design team Attach a different IAM policy to the group to allow the sts:AssumeRole action on the role In the production account.",
        "F.In the development account, create a group that contains all the IAM users of the design team Attach a different IAM policy to the group to allow the sts:AssumeRole action on the role in the development account."
      ],
      "q_cn": "出版公司的设计团队更新电子商务 Web 应用程序使用的图标和其他静态资产。该公司从托管在公司生产账户中的 Amazon S3 存储桶提供图标和资产。该公司还使用设计团队成员可以访问的开发账户。\n设计团队测试开发账户中的静态资产后，设计团队需要将资产加载到生产账户中的 S3 存储桶中。解决方案架构师必须为设计团队提供对生产帐户的访问权限，而不会使 Web 应用程序的其他部分面临不需要的更改的风险。\n哪种步骤组合将满足这些要求？（选择三个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,C,E",
      "qK": "icons,static assets",
      "aK": [
        "In the production account"
      ]
    },
    {
      "no": 148,
      "q": "A company wants to optimize AWS data-transfer costs and compute costs across developer accounts within the company's organization in AWS Organizations. Developers can configure VPCs and launch Amazon EC2 instances in a single AWS Region. The EC2 instances retrieve approximately 1 TB of data each day from Amazon S3.\nThe developer activity leads to excessive monthly data-transfer charges and NAT gateway processing charges between EC2 instances and S3 buckets, along with high compute costs.The company wants to proactively enforce approved architectural patterns for any EC2 instance and VPC infrastructure that developers deploy within the AWS accounts.The company does not want this enforcement to negatively affect the speed at which the developers can perform their tasks.\nWhich solution will meet these requirements MOST cost-effectively ? ",
      "a": [
        "A.Create SCPs to prevent developers from launching unapproved EC2 instance types. Provide the developers with an AWS CloudFormation template to deploy an approved VPC configuration with S3 interface endpoints. Scope the developers' IAM permissions so that the developers can launch VPC resources only with CloudFormation.",
        "B.Create a daily forecasted budget with AWS Budgets to monitor EC2 compute costs and S3 data-transfer costs across the developer accounts.When the forecasted cost is 75 % of the actual budget cost, send an alert to the developer teams.If the actual budget cost is 100 %, create a budget action to terminate the developers' EC2 instances and VPC infrastructure.",
        "C.Create an AWS Service Catalog portfolio that users can use to create an approved VPC configuration with S3 gateway endpoints and approved EC2 instances.Share the portfolio with the developer accounts.Configure an AWS Service Catalog launch constraint to use an approved IAM role.Scope the developers' IAM permissions to allow access only to AWS Service Catalog.",
        "D.Create and deploy AWS Config rules to monitor the compliance of EC2 and VPC resources in the developer AWS accounts.If developers launch unapproved EC2 instances or if developers create VPCs without S3 gateway endpoints, perform a remediation action to terminate the unapproved resources."
      ],
      "q_cn": "一家公司希望在 AWS 组织中优化公司组织内开发人员账户的 AWS 数据传输成本和计算成本。开发人员可以在单个 AWS 区域中配置 VPC 并启动 Amazon EC2 实例。EC2 实例每天从 Amazon S3 检索大约 1 TB 的数据。\n开发人员活动会导致 EC2 实例和 S3 存储桶之间的月度数据传输费用和 NAT 网关处理费用过高，以及高昂的计算成本。该公司希望为开发人员在 AWS 账户中部署的任何 EC2 实例和 VPC 基础设施主动实施批准的架构模式。该公司不希望这种实施对开发人员执行任务的速度产生负面影响。\n哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "A.创建 SCP 以防止开发人员启动未经批准的 EC2 实例类型。为开发人员提供 AWS CloudFormation 模板，以部署具有 S3 接口终端节点的已批准的 VPC 配置。限定开发人员的 IAM 权限范围，以便开发人员只能使用 CloudFormation 启动 VPC 资源。",
        "B.使用 AWS 预算创建每日预测预算，以监控开发人员账户中的 EC2 计算成本和 S3 数据传输成本。当预测成本为实际预算成本的 75 % 时，向开发人员团队发送警报。如果实际预算成本为 100 %，请创建预算操作以终止开发人员的 EC2 实例和 VPC 基础设施。",
        "C.创建 AWS 服务目录产品组合，用户可以使用该产品组合创建具有 S3 网关终端节点和批准的 EC2 实例的已批准的 VPC 配置。与开发者帐号共享产品组合。配置 AWS 服务目录启动约束以使用批准的 IAM 角色。限定开发人员的 IAM 权限范围，以仅允许访问 AWS 服务目录。",
        "D.创建和部署 AWS Config 规则，以监控开发人员 AWS 账户中 EC2 和 VPC 资源的合规性。如果开发人员启动未经批准的 EC2 实例，或者开发人员创建的 VPC 没有 S3 网关终端节点，请执行修复操作以终止未批准的资源。"
      ],
      "aa": "C",
      "qK": "1 TB",
      "aK": [
        "AWS Service Catalog"
      ]
    },
    {
      "no": 259,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 269,
      "q": "A company manages hundreds of AWS accounts centrally in an organization in AWS Organizations. The company recently started to allow product teams to create and manage their own S3 access points in their accounts. The S3 access points can be accessed only within VPCs, not on the Internet.\nWhat is the MOST operationally efficient way to enforce this requirement ? ",
      "a": [
        "A.Set the S3 access point resource policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.",
        "B.Create an SCP at the root level in the organization to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.",
        "C.Use AWS CloudFormation StackSets to create a new IAM policy in each AWS account that allows the s3:CreateAccessPoint action only if the s3:AccessPointNetworkOrigin condition key evaluates to VPC.",
        "D.Set the S3 bucket policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC."
      ],
      "q_cn": "一家公司在 AWS 组织的组织中集中管理数百个 AWS 账户。该公司最近开始允许产品团队在其账户中创建和管理自己的S3访问点。S3 访问点只能在 VPC 内访问，不能在互联网上访问。\n执行此要求的最具运营效率的方法是什么？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "product teams,S3 access points,only within VPCs",
      "aK": [
        "SCP,root level"
      ]
    },
    {
      "no": 280,
      "q": "A company has an application in the AWS Cloud. The application runs on a fleet of 20 Amazon EC2 instances. The EC2 instances are persistent and store data on multiple attached Amazon Elastic Block Store (Amazon EBS) volumes.\nThe company must maintain backups in a separate AWS Region.The company must be able to recover the EC2 instances and their configuration within 1 business day, with loss of no more than 1 day's worth of data. The company has limited staff and needs a backup solution that optimizes operational efficiency and cost. The company already has created an AWS CloudFormation template that can deploy the required network configuration in a secondary Region.\nWhich solution will meet these requirements?",
      "a": [
        "A.Create a second CloudFormation template that can recreate the EC2 instances in the secondary Region. Run daily multivolume snapshots by using AWS Systems Manager Automation runbooks. Copy the snapshots to the secondary Region. In the event of a failure launch the CloudFormation templates, restore the EBS volumes from snapshots, and transfer usage to the secondary Region.",
        "B.Use Amazon Data Lifecycle Manager (Amazon DLM) to create daily multivolume snapshots of the EBS volumes. In the event of a failure, launch the CloudFormation template and use Amazon DLM to restore the EBS volumes and transfer usage to the secondary Region.",
        "C.Use AWS Backup to create a scheduled daily backup plan for the EC2 instances. Configure the backup task to copy the backups to a vault in the secondary Region. In the event of a failure, launch the CloudFormation template, restore the instance volumes and configurations from the backup vault, and transfer usage to the secondary Region.",
        "D.Deploy EC2 instances of the same size and configuration to the secondary Region. Configure AWS DataSync daily to copy data from the primary Region to the secondary Region. In the event of a failure, launch the CloudFormation template and transfer usage to the secondary Region."
      ],
      "q_cn": "一家公司在 AWS 云中有一个应用程序。该应用程序在由 20 个 Amazon EC2 实例组成的队列上运行。EC2 实例是永久性的，并将数据存储在多个附加的 Amazon Elastic Block Store （Amazon EBS） 卷上。\n公司必须在单独的 AWS 区域中维护备份。公司必须能够在 1 个工作日内恢复 EC2 实例及其配置，丢失的数据量不超过 1 天。该公司的员工有限，需要一个能够优化运营效率和成本的备份解决方案。该公司已经创建了一个 AWS CloudFormation 模板，该模板可以在次要区域中部署所需的网络配置。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "20 Amazon EC2,1 business day,1 day's",
      "aK": [
        "AWS Backup"
      ]
    },
    {
      "no": 5,
      "q": "A finance company is running its business-critical application on current-generation Linux EC2 instances. The application includes a self-managed MySQL database performing heavy I/O operations. The application is working fine to handle a moderate amount of traffic during the month. However, it slows down during the final three days of each month due to month-end reporting, even though the company is using Elastic Load Balancers and Auto Scaling within its infrastructure to meet the increased demand.\nWhich of the following actions would allow the database to handle the month- end load with the LEAST impact on performance?",
      "a": [
        "A.Pre-warming Elastic Load Balancers, using a bigger instance type, changing all Amazon EBS volumes to GP2 volumes.",
        "B.Performing a one-time migration of the database cluster to Amazon RDS, and creating several additional read replicas to handle the load during end of month.",
        "C.Using Amazon CloudWatch with AWS Lambda to change the type, size, or IOPS of Amazon EBS volumes in the cluster based on a specific CloudWatch metric.",
        "D.Replacing all existing Amazon EBS volumes with new PIOPS volumes that have the maximum available storage size and I/ O per second by taking snapshots before the end of the month and reverting back afterwards."
      ],
      "q_cn": "一家金融公司在当前一代 Linux EC2 实例上运行其业务关键型应用程序。该应用程序包括一个自我管理的MySQL数据库，该数据库执行繁重的I / O操作。该应用程序运行良好，可以处理当月的适度流量。但是，由于月末报告，它在每个月的最后三天会变慢，即使该公司在其基础设施中使用弹性负载均衡器和 Auto Scaling 来满足不断增长的需求。\n以下哪项操作将允许数据库以对性能影响最小的方式处理月末负载？",
      "a_cn": [
        "A. 预热弹性负载均衡器，使用更大的实例类型，将所有 Amazon EBS 卷更改为 GP2 卷。",
        "B.执行数据库集群到 Amazon RDS 的一次性迁移，并创建多个额外的只读副本以在月底处理负载。",
        "C.将 Amazon CloudWatch 与 AWS Lambda 结合使用，根据特定的 CloudWatch 指标更改集群中 Amazon EBS 卷的类型、大小或 IOPS。",
        "D.将所有现有的 Amazon EBS 卷替换为具有最大可用存储大小和每秒 I / O 的新 PIOPS 卷，方法是在月底之前拍摄快照，然后在之后恢复。"
      ],
      "aa": "B",
      "qK": "final three days of each month,month-end reporting",
      "aK": [
        "one-time,end of month"
      ]
    },
    {
      "no": 118,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 176,
      "q": "A solutions architect needs to assess a newly acquired company’s portfolio of applications and databases. The solutions architect must create a business case to migrate the portfolio to AWS. The newly acquired company runs applications in an on-premises data center. The data center is not well documented. The solutions architect cannot immediately determine how many applications and databases exist. Traffic for the applications is variable. Some applications are batch processes that run at the end of each month.\nThe solutions architect must gain a better understanding of the portfolio before a migration to AWS can begin.\nWhich solution will meet these requirements?",
      "a": [
        "A.Use AWS Server Migration Service (AWS SMS) and AWS Database Migration Service (AWS DMS) to evaluate migration. Use AWS Service Catalog to understand application and database dependencies.",
        "B.Use AWS Application Migration Service.Run agents on the on-premises infrastructure.Manage the agents by using AWS Migration Hub.Use AWS Storage Gateway to assess local storage needs and database dependencies.",
        "C.Use Migration Evaluator to generate a list of servers.Build a report for a business case.Use AWS Migration Hub to view the portfolio.Use AWS Application Discovery Service to gain an understanding of application dependencies.",
        "D.Use AWS Control Tower in the destination account to generate an application portfolio.Use AWS Server Migration Service(AWS SMS) to generate deeper reports and a business case.Use a landing zone for core accounts and resources."
      ],
      "q_cn": "解决方案架构师需要评估新收购公司的应用程序和数据库组合。解决方案架构师必须创建一个业务案例，以将产品组合迁移到 AWS。新收购的公司在本地数据中心运行应用程序。数据中心没有很好的文档记录。解决方案架构师无法立即确定存在多少应用程序和数据库。应用程序的流量是可变的。某些应用程序是在每个月底运行的批处理。\n解决方案架构师必须更好地了解产品组合，然后才能开始迁移到 AWS。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.使用 AWS Server Migration Service （AWS SMS） 和 AWS Database Migration Service （AWS DMS） 评估迁移。使用 AWS 服务目录了解应用程序和数据库依赖关系。",
        "B.使用 AWS 应用程序迁移服务。在本地基础结构上运行代理。使用 AWS 迁移中心管理代理。使用 AWS Storage Gateway 评估本地存储需求和数据库依赖关系。",
        "C.使用迁移评估程序生成服务器列表。为业务案例生成报告。使用 AWS Migration Hub 查看产品组合。使用 AWS 应用程序发现服务了解应用程序依赖关系。",
        "D.在目标账户中使用 AWS 控制塔生成应用程序组合。使用 AWS Server Migration Service （AWS SMS） 生成更深入的报告和业务案例。对核心帐户和资源使用登陆区域。"
      ],
      "aa": "C",
      "qK": "not well documented",
      "aK": [
        "Migration Evaluator"
      ]
    },
    {
      "no": 177,
      "q": "A company uses an AWS CodeCommit repository. The company must store a backup copy of the data that is in the repository in a second AWS Region.\nWhich solution will meet these requirements?",
      "a": [
        "A.Configure AWS Elastic Disaster Recovery to replicate the CodeCommit repository data to the second Region.",
        "B.Use AWS Backup to back up the CodeCommit repository on an hourly schedule.Create a cross-Region copy in the second Region.",
        "C.Create an Amazon EventBridge rule to invoke AWS CodeBuild when the company pushes code to the repository.Use CodeBuild to clone the repository.Create a.zip file of the content.Copy the file to an S3 bucket in the second Region.",
        "D.Create an AWS Step Functions workflow on an hourly schedule to take a snapshot of the CodeCommit repository.Configure the workflow to copy the snapshot to an S3 bucket in the second Region"
      ],
      "q_cn": "一家公司使用 AWS CodeCommit 存储库。公司必须在第二个 AWS 区域中存储存储库中数据的备份副本。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.配置 AWS Elastic 灾难恢复以将 CodeCommit 存储库数据复制到第二个区域。",
        "B.使用 AWS Backup 按小时计划备份 CodeCommit 存储库。在第二个区域中创建跨区域副本。",
        "C.创建 Amazon EventBridge 规则，以便在公司将代码推送到存储库时调用 AWS CodeBuild。使用 CodeBuild 克隆存储库。创建内容的.zip文件。将文件复制到第二个区域中的 S3 存储桶。",
        "D.按小时计划创建 AWS Step Functions 工作流，以拍摄 CodeCommit 存储库的快照。配置工作流以将快照复制到第二个区域中的 S3 存储桶"
      ],
      "aa": "C",
      "qK": "CodeCommit,backup,second AWS Region",
      "aK": [
        "CodeBuild"
      ]
    },
    {
      "no": 286,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 195,
      "q": "A company wants to use AWS for disaster recovery for an on-premises application. The company has hundreds of Windows-based servers that run the application. All the servers mount a common share. The company has an RTO of 15 minutes and an RPO of 5 minutes. The solution must support native failover and fallback capabilities.Which solution will meet these requirements MOST cost-effectively?",
      "a": [
        "A.Create an AWS Storage Gateway File Gateway. Schedule daily Windows server backups. Save the data to Amazon S3. During a disaster, recover the on-premises servers from the backup. During failback, run the on-premises servers on Amazon EC2 instances",
        "B.Create a set of AWS CloudFormation templates to create infrastructure. Replicate all data to Amazon Elastic File System (Amazon EFS) by using AWS DataSync During a disaster, use AWS CodePipeline to deploy the templates to restore the on-premises servers. Fail back the data by using DataSync",
        "C.Create an AWS Cloud Development Kit (AWS CDK) pipeline to stand up a multi-site active-active environment on AWS. Replicate data into Amazon S3 by using the S3 sync command. During a disaster, swap DNS endpoints to point to AWS Fail back the data by using the S3 sync command",
        "D.Use AWS Elastic Disaster Recovery to replicate the on-premises servers. Replicate data to an Amazon FSx for Windows File Server file system by using AWS DataSync. Mount the file system to AWS servers. During a disaster, fail over the on-premises servers to AWS.Fail back to new or existing servers by using Elastic Disaster Recovery"
      ],
      "q_cn": "一家公司希望使用 AWS 为本地应用程序进行灾难恢复。该公司拥有数百台运行该应用程序的基于Windows的服务器。所有服务器都装载一个公共共享。该公司的 RTO 为 15 分钟，RPO 为 5 分钟。解决方案必须支持本机故障转移和回退功能。哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "A.创建 AWS 存储网关文件网关。安排每日 Windows 服务器备份。将数据保存到 Amazon S3。在灾难期间，从备份中恢复本地服务器。在故障回复期间，在 Amazon EC2 实例上运行本地服务器",
        "B.创建一组 AWS CloudFormation 模板以创建基础设施。使用 AWS DataSync 将所有数据复制到 Amazon Elastic File System （Amazon EFS） 在灾难期间，使用 AWS CodePipeline 部署模板以还原本地服务器。使用数据同步故障回复数据",
        "C.创建 AWS 云开发工具包 （AWS CDK） 管道，以在 AWS 上建立多站点双活环境。使用 S3 同步命令将数据复制到 Amazon S3。在灾难期间，交换 DNS 终端节点以指向 AWS 使用 S3 同步命令对数据进行故障回复",
        "D.使用 AWS 弹性灾难恢复复制本地服务器。使用 AWS DataSync 将数据复制到适用于 Windows 文件服务器的 Amazon FSx 文件系统。将文件系统挂载到 AWS 服务器。在灾难期间，将本地服务器故障转移到 AWS。使用 Elastic 灾难恢复故障回复到新的或现有的服务器"
      ],
      "aa": "D",
      "qK": "hundreds of Windows-based servers,RTO of 15 minutes,RPO of 5 minutes",
      "aK": [
        "Use AWS Elastic Disaster Recovery,FSx,Windows File Server"
      ]
    },
    {
      "no": 33,
      "q": "A company is storing data on premises on a Windows file server. The company produces 5 GB of new data daily.\nThe company migrated part of its Windows-based workload to AWS and needs the data to be available on a file system in the cloud.The company already has established an AWS Direct Connect connection between the on-premises network and AWS.\nWhich data migration strategy should the company use ? ",
      "a": [
        "A.Use the file gateway option in AWS Storage Gateway to replace the existing Windows file server, and point the existing file share to the new file gateway",
        "B.Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon FSx",
        "C.Use AWS Data Pipeline to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System(Amazon EFS)",
        "D.Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System(Amazon EFS) "
      ],
      "q_cn": "一家公司正在将本地数据存储在 Windows 文件服务器上。该公司每天产生 5 GB 的新数据。\n该公司将其部分基于 Windows 的工作负载迁移到 AWS，并且需要数据在云中的文件系统上可用。该公司已经在本地网络和 AWS 之间建立了 AWS Direct Connect 连接。\n公司应使用哪种数据迁移策略？",
      "a_cn": [
        "A.使用 AWS Storage Gateway 中的文件网关选项替换现有的 Windows 文件服务器，并将现有文件共享指向新的文件网关",
        "B.使用 AWS DataSync 计划每日任务，在本地 Windows 文件服务器和 Amazon FSx 投票最多",
        "C.使用 AWS Data Pipeline 计划每日任务，在本地 Windows 文件服务器和 Amazon Elastic File System （Amazon EFS） 之间复制数据",
        "D.使用 AWS DataSync 计划每日任务，以在本地 Windows 文件服务器和 Amazon Elastic File System （Amazon EFS） 之间复制数据"
      ],
      "aa": "B",
      "qK": "Windows,5 GB",
      "aK": [
        "Amazon FSx"
      ]
    },
    {
      "no": 208,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 65,
      "q": "A company has an organization that has many AWS accounts in AWS Organizations. A solutions architect must improve how the company manages common security group rules for the AWS accounts in the organization.\nThe company has a common set of IP CIDR ranges in an allow list in each AWS account to allow access to and from the company's on-premises network.\nDevelopers within each account are responsible for adding new IP CIDR ranges to their security groups.The security team has its own AWS account.Currently, the security team notifies the owners of the other AWS accounts when changes are made to the allow list.\nThe solutions architect must design a solution that distributes the common set of CIDR ranges across all accounts.\nWhich solution meets these requirements with the LEAST amount of operational overhead?",
      "a": [
        "A.Set up an Amazon Simple Notification Service (Amazon SNS) topic in the security team's AWS account. Deploy an AWS Lambda function in each AWS account. Configure the Lambda function to run every time an SNS topic receives a message. Configure the Lambda function to take an IP address as input and add it to a list of security groups in the account. Instruct the security team to distribute changes by publishing messages to its SNS topic.",
        "B.Create new customer-managed prefix lists in each AWS account within the organization.Populate the prefix lists in each account with all internal CIDR ranges.Notify the owner of each AWS account to allow the new customer-managed prefix list IDs in their accounts in their security groups.Instruct the security team to share updates with each AWS account owner.",
        "C.Create a new customer-managed prefix list in the security team's AWS account. Populate the customer-managed prefix list with all internal CIDR ranges. Share the customer-managed prefix list with the organization by using AWS Resource Access Manager. Notify the owner of each AWS account to allow the new customer-managed prefix list ID in their security groups.",
        "D.Create an IAM role in each account in the organization.Grant permissions to update security groups.Deploy an AWS Lambda function in the security team's AWS account. Configure the Lambda function to take a list of internal IP addresses as input, assume a role in each organization account, and add the list of IP addresses to the security groups in each account."
      ],
      "q_cn": "一家公司的组织在 AWS 组织中拥有许多 AWS 账户。解决方案架构师必须改进公司管理组织中 AWS 账户的常见安全组规则的方式。\n该公司在每个 AWS 账户的允许列表中都有一组通用的 IP CIDR 范围，以允许访问公司的本地网络。\n每个账户中的开发人员负责将新的 IP CIDR 范围添加到其安全组。安全团队拥有自己的 AWS 账户。目前，安全团队会在对允许列表进行更改时通知其他 AWS 账户的所有者。\n      解决方案架构师必须设计一个解决方案，在所有账户中分配一组通用的 CIDR 范围。\n哪种解决方案以最少的运营开销满足这些要求？",
      "a_cn": [
        "A.在安全团队的 AWS 账户中设置 Amazon Simple Notification Service （Amazon SNS） 主题。在每个 AWS 账户中部署一个 AWS Lambda 函数。将 Lambda 函数配置为在每次 SNS 主题收到消息时运行。将 Lambda 函数配置为将 IP 地址作为输入，并将其添加到账户中的安全组列表中。指示安全团队通过将消息发布到其 SNS 主题来分发更改。",
        "B.在组织内的每个 AWS 账户中创建新的客户管理的前缀列表。使用所有内部 CIDR 范围填充每个账户中的前缀列表。通知每个 AWS 账户的所有者允许其安全组中账户中的新客户管理的前缀列表 ID。指示安全团队与每个 AWS 账户所有者共享更新。",
        "C.在安全团队的 AWS 账户中创建新的客户-托管前缀列表。使用所有内部 CIDR 范围填充客户管理的前缀列表。使用 AWS 资源访问管理器与组织共享客户管理的前缀列表。通知每个 AWS 账户的拥有者允许在其安全组中使用新的客户管理的前缀列表 ID。",
        "D.在组织中的每个账户中创建一个 IAM 角色。授予更新安全组的权限。在安全团队的 AWS 账户中部署 AWS Lambda 函数。将 Lambda 函数配置为将内部 IP 地址列表作为输入，在每个组织账户中代入一个角色，并将 IP 地址列表添加到每个账户中的安全组。"
      ],
      "aa": "C",
      "qK": "IP CIDR,[security team]",
      "aK": [
        "Resource Access Manager,[customer-managed,security team's]"
      ]
    },
    {
      "no": 207,
      "q": "A company has an on-premises Microsoft SQL Server database that writes a nightly 200 GB export to a local drive. The company wants to move the backups to more robust cloud storage on Amazon S3. The company has set up a 10 Gbps AWS Direct Connect connection between the on-premises data center and AWS.\nWhich solution meets these requirements MOST cost-effectively ? ",
      "a": [
        "A.Create a new S3 bucket. Deploy an AWS Storage Gateway file gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share.",
        "B.Create an Amazon FSx for Windows File Server Single-AZ file system within the VPC that is connected to the Direct Connect connection.Create a new SMB file share.Write nightly database exports to an SMB file share on the Amazon FSx file system.Enable nightly backups.",
        "C.Create an Amazon FSx for Windows File Server Multi-AZ file system within the VPC that is connected to the Direct Connect connection.Create a new SMB file share.Write nightly database exports to an SMB file share on the Amazon FSx file system.Enable nightly backups.",
        "D.Create a new S3 bucket.Deploy an AWS Storage Gateway volume gateway within the VPC that is connected to the Direct Connect connection.Create a new SMB file share.Write nightly database exports to the new SMB file share on the volume gateway, and automate copies of this data to an S3 bucket."
      ],
      "q_cn": "一家公司有一个本地 Microsoft SQL Server 数据库，该数据库每晚将 200 GB 的导出写入本地驱动器。该公司希望将备份移动到Amazon S3上更强大的云存储中。该公司已在本地数据中心和AWS之间建立了10 Gbps的AWS Direct Connect连接。\n哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "A.创建新的 S3 存储桶。在连接到专线连接的 VPC 中部署 AWS 存储网关文件网关。创建新的 SMB 文件共享。将夜间数据库导出写入新的 SMB 文件共享。",
        "B.在连接到直接连接连接的 VPC 中创建适用于 Windows 文件服务器的 Amazon FSx 单可用区文件系统。创建新的 SMB 文件共享。将夜间数据库导出写入 Amazon FSx 文件系统上的 SMB 文件共享。启用夜间备份。",
        "C.在连接到专线连接的 VPC 中创建适用于 Windows 文件服务器的 Amazon FSx 多可用区文件系统。创建新的 SMB 文件共享。将夜间数据库导出写入 Amazon FSx 文件系统上的 SMB 文件共享。启用夜间备份。",
        "D.创建新的 S3 存储桶。在连接到专线连接的 VPC 内部署 AWS 存储网关卷网关。创建新的 SMB 文件共享。每晚将数据库导出写入卷网关上的新 SMB 文件共享，并自动将此数据复制到 S3 存储桶。"
      ],
      "aa": "A",
      "qK": "Microsoft SQL Server,200 GB",
      "aK": [
        "file gateway,Create a new S3 bucket"
      ]
    },
    {
      "no": 133,
      "q": "A company's factory and automation applications are running in a single VPC. More than 20 applications run on a combination of Amazon EC2, Amazon Elastic Container Service(Amazon ECS), and Amazon RDS.\nThe company has software engineers spread across three teams.One of the three teams owns each application, and each time is responsible for the cost and performance of all of its applications.Team resources have tags that represent their application and team.The teams use IAM access for daily activities.\nThe company needs to determine which costs on the monthly AWS bill are attributable to each application or team.The company also must be able to create reports to compare costs from the last 12 months and to help forecast costs for the next 12 months.A solutions architect must recommend an AWS Billing and Cost Management solution that provides these cost reports.\nWhich combination of actions will meet these requirements?(Choose three.) ",
      "a": [
        "A.Activate the user-define cost allocation tags that represent the application and the team.",
        "B.Activate the AWS generated cost allocation tags that represent the application and the team.",
        "C.Create a cost category for each application in Billing and Cost Management.",
        "D.Activate IAM access to Billing and Cost Management.",
        "E.Create a cost budget.",
        "F.Enable Cost Explorer."
      ],
      "q_cn": "公司的工厂和自动化应用程序在单个 VPC 中运行。超过 20 个应用程序在 Amazon EC2、Amazon Elastic 的组合上运行Container Service （Amazon ECS） 和 Amazon RDS。\n该公司的软件工程师分布在三个团队中。三个团队中的一个拥有每个应用程序，并且每次负责其所有应用程序的成本和性能。团队资源具有表示其应用程序和团队的标记。团队使用 IAM 访问权限进行日常活动。\n      公司需要确定每月 AWS 账单上的哪些成本可归因于每个应用程序或团队。公司还必须能够创建报告来比较过去 12 个月的成本，并帮助预测未来 12 个月的成本。解决方案架构师必须推荐 AWS 账单和提供这些成本报表的成本管理解决方案。\n哪些操作组合将满足这些要求？（选择三个。",
      "a_cn": [
        "A.激活代表应用程序和团队的用户定义成本分配标记。",
        "B.激活代表应用程序和团队的 AWS 生成的成本分配标签。",
        "C.在“计费和成本管理”中为每个应用程序创建成本类别。",
        "D.激活对账单和成本管理的 IAM 访问权限。",
        "E.创建成本预算。",
        "F.启用成本管理器。"
      ],
      "aa": "A,D,F",
      "qK": "20 applications,last 12 months,next 12 months",
      "aK": [
        "user-define",
        "IAM access",
        "Enable Cost Explorer"
      ]
    },
    {
      "no": 58,
      "q": "A solutions architect must analyze a company's Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes to determine whether the company is using resources efficiently. The company is running several large, high-memory EC2 instances to host database clusters that are deployed in active/ passive configurations. The utilization of these EC2 instances varies by the applications that use the databases, and the company has not identified a pattern.\nThe solutions architect must analyze the environment and take action based on the findings.\nWhich solution meets these requirements MOST cost-effectively ? ",
      "a": [
        "A.Create a dashboard by using AWS Systems Manager OpsCenter. Configure visualizations for Amazon CloudWatch metrics that are associated with the EC2 instances and their EBS volumes. Review the dashboard periodically, and identify usage patterns. Rightsize the EC2 instances based on the peaks in the metrics.",
        "B.Turn on Amazon CloudWatch detailed monitoring for the EC2 instances and their EBS volumes.Create and review a dashboard that is based on the metrics.Identify usage patterns.Rightsize the EC2 instances based on the peaks in the metrics.",
        "C.Install the Amazon CloudWatch agent on each of the EC2 instances.Turn on AWS Compute Optimizer, and let it run for at least 12 hours.Review the recommendations from Compute Optimizer, and rightsize the EC2 instances as directed.",
        "D.Sign up for the AWS Enterprise Support plan.Turn on AWS Trusted Advisor.Wait 12 hours.Review the recommendations from Trusted Advisor, and rightsize the EC2 instances as directed."
      ],
      "q_cn": "解决方案架构师必须分析公司的 Amazon EC2 实例和 Amazon Elastic Block Store （Amazon EBS） 卷，以确定公司是否有效地利用了资源。该公司正在运行多个大型高内存 EC2 实例，以托管以主动/被动配置部署的数据库集群。这些 EC2 实例的利用率因使用数据库的应用程序而异，公司尚未确定模式。\n解决方案架构师必须分析环境并根据结果采取行动。\n哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "A.使用 AWS Systems Manager OpsCenter 创建控制面板。为与 EC2 实例及其 EBS 卷关联的 Amazon CloudWatch 指标配置可视化。定期查看仪表板，并确定使用模式。根据指标中的峰值调整 EC2 实例的大小。",
        "B.为 EC2 实例及其 EBS 卷启用 Amazon CloudWatch 详细监控。创建并查看基于指标的仪表板。确定使用模式。根据指标中的峰值调整 EC2 实例的大小。",
        "C.在每个 EC2 实例上安装 Amazon CloudWatch 代理。打开 AWS 计算优化器，让它运行至少 12 小时。查看计算优化器中的建议，并按照指示调整 EC2 实例的大小。",
        "D.注册 AWS 企业支持计划。打开 AWS 可信顾问。等待 12 小时。查看可信顾问的建议，并按照指示调整 EC2 实例的大小。"
      ],
      "aa": "C",
      "qK": "[EBS],high-memory EC2",
      "aK": [
        "CloudWatch agent,Compute Optimizer"
      ]
    },
    {
      "no": 257,
      "q": "A solutions architect has an operational workload deployed on Amazon EC2 instances in an Auto Scaling group. The VPC architecture spans two Availability Zones (AZ) with a subnet in each that the Auto Scaling group is targeting. The VPC is connected to an on-premises environment and connectivity cannot be interrupted. The maximum size of the Auto Scaling group is 20 instances in service. The VPC IPv4 addressing is as follows: VPC CIDR: 10.0.0.0/23 - AZ1 subnet CIDR: 10.0.0.0/24 - AZ2 subnet CIDR: 10.0.1.0/24 - Since deployment, a third AZ has become available in the Region. The solutions architect wants to adopt the new AZ without adding additional IPv4 address space and without service downtime.Which solution will meet these requirements?",
      "a": [
        "A.Update the Auto Scaling group to use the AZ2 subnet only. Delete and re-create the AZ1 subnet using half the previous address space. Adjust the Auto Scaling group to also use the new AZ1 subnet. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Remove the current AZ2 subnet. Create a new AZ2 subnet using the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.",
        "B.Terminate the EC2 instances in the AZ1 subnet. Delete and re-create the AZ1 subnet using half the address space. Update the Auto Scaling group to use this new subnet. Repeat this for the second AZ. Define a new subnet in AZ3, then update the Auto Scaling group to target all three new subnets.",
        "C.Create a new VPC with the same IPv4 address space and define three subnets, with one for each AZ. Update the existing Auto Scaling group to target the new subnets in the new VPC.",
        "D.Update the Auto Scaling group to use the AZ2 subnet only. Update the AZ1 subnet to have the previous address space. Adjust the Auto Scaling group to also use the AZ1 subnet again. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Update the current AZ2 subnet and assign the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets."
      ],
      "q_cn": "解决方案架构师在 Auto Scaling 组中的 Amazon EC2 实例上部署了操作工作负载。VPC 架构跨越两个可用区 （AZ），每个可用区都有一个子网，Auto Scaling 组的目标。VPC 已连接到本地环境，连接不会中断。弹性伸缩组的最大大小为 20 个实例。VPC IPv4 寻址如下： 专有网络网段：10.0.0.0/23 - 可用区子网 网段：10.0.0.0/24 - 可用区2子网网段：10.0.1.0/24 - 自部署以来，该区域已提供第三个可用区。解决方案架构师希望在不增加额外 IPv4 地址空间且不停机的情况下采用新的可用区。哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.将弹性伸缩组更新为仅使用 AZ2 子网。删除并使用以前的一半地址空间重新创建 AZ1 子网。调整自动扩展组以也使用新的 AZ1 子网。当实例运行正常时，调整 Auto Scaling 组以仅使用 AZ1 子网。删除当前的 AZ2 子网。使用原始 AZ1 子网中地址空间的后半部分创建新的 AZ2 子网。使用原始 AZ2 子网地址空间的一半创建新的 AZ3 子网，然后更新 Auto Scaling 组以面向所有三个新子网。",
        "B.终止 AZ1 子网中的 EC2 实例。使用一半的地址空间删除并重新创建 AZ1 子网。更新 Auto Scaling 组以使用此新子网。对第二个可用区重复此操作。 在 AZ3 中定义一个新子网，然后更新 Auto Scaling 组以面向所有三个新子网。",
        "C.创建具有相同 IPv4 地址空间的新 VPC，并定义三个子网，每个可用区一个子网。 更新现有 Auto Scaling 组以新 VPC 中的新子网为目标。",
        "D.将弹性伸缩组更新为仅使用 AZ2 子网。更新 AZ1 子网以具有以前的地址空间。调整自动扩展组以再次使用 AZ1 子网。当实例运行正常时，调整 Auto Scaling 组以仅使用 AZ1 子网。更新当前 AZ2 子网，并从原始 AZ1 子网分配地址空间的后半部分。使用原始 AZ2 子网地址空间的一半创建新的 AZ3 子网，然后更新 Auto Scaling 组以面向所有三个新子网。"
      ],
      "aa": "A",
      "qK": "10.0.0.0/23,AZ1 10.0.0.0/24,AZ2 10.0.1.0/24",
      "aK": [
        "AZ2 subnet only",
        "Delete and re-create the AZ1"
      ]
    },
    {
      "no": 219,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 293,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 57,
      "q": "A company wants to deploy an AWS WAF solution to manage AWS WAF rules across multiple AWS accounts. The accounts are managed under different OUs in AWS Organizations.\nAdministrators must be able to add or remove accounts or OUs from managed AWS WAF rule sets as needed.Administrators also must have the ability to automatically update and remediate noncompliant AWS WAF rules in all accounts.\nWhich solution meets these requirements with the LEAST amount of operational overhead?",
      "a": [
        "A.Use AWS Firewall Manager to manage AWS WAF rules across accounts in the organization. Use an AWS Systems Manager Parameter Store parameter to store account numbers and OUs to manage. Update the parameter as needed to add or remove accounts or OUs. Use an Amazon EventBridge rule to identify any changes to the parameter and to invoke an AWS Lambda function to update the security policy in the Firewall Manager administrative account.",
        "B.Deploy an organization-wide AWS Config rule that requires all resources in the selected OUs to associate the AWS WAF rules.Deploy automated remediation actions by using AWS Lambda to fix noncompliant resources.Deploy AWS WAF rules by using an AWS CloudFormation stack set to target the same OUs where the AWS Config rule is applied.",
        "C.Create AWS WAF rules in the management account of the organization.Use AWS Lambda environment variables to store account numbers and OUs to manage.Update environment variables as needed to add or remove accounts or OUs.Create cross-account IAM roles in member accounts.Assume the roles by using AWS Security Token Service(AWS STS) in the Lambda function to create and update AWS WAF rules in the member accounts.",
        "D.Use AWS Control Tower to manage AWS WAF rules across accounts in the organization.Use AWS Key Management Service(AWS KMS) to store account numbers and OUs to manage.Update AWS KMS as needed to add or remove accounts or OUs.Create IAM users in member accounts.Allow AWS Control Tower in the management account to use the access key and secret access key to create and update AWS WAF rules in the member accounts."
      ],
      "q_cn": "一家公司希望部署 AWS WAF 解决方案来管理跨多个 AWS 账户的 AWS WAF 规则。这些账户在 AWS 组织中的不同 OU 下进行管理。\n管理员必须能够根据需要在托管 AWS WAF 规则集中添加或删除账户或 OU。管理员还必须能够自动更新和修复所有账户中不合规的 AWS WAF 规则。\n哪种解决方案以最少的运营开销满足这些要求？",
      "a_cn": [
        "A.使用 AWS 防火墙管理器跨组织中的账户管理 AWS WAF 规则。使用 AWS 系统管理器参数存储参数来存储要管理的帐号和 OU。根据需要更新参数以添加或删除账户或 OU。使用 Amazon EventBridge 规则识别对参数的任何更改，并调用 AWS Lambda 函数来更新防火墙管理器管理账户中的安全策略。",
        "B.部署组织范围的 AWS Config 规则，该规则要求所选 OU 中的所有资源关联 AWS WAF 规则。使用 AWS Lambda 部署自动修复操作，以修复不合规的资源。使用 AWS CloudFormation 堆栈集部署 AWS WAF 规则，以定位应用 AWS Config 规则的相同 OU。",
        "C.在组织的管理账户中创建 AWS WAF 规则。使用 AWS Lambda 环境变量存储要管理的账号和 OU。根据需要更新环境变量以添加或删除账户或 OU。在成员账户中创建跨账户 IAM 角色。通过使用 Lambda 函数中的 AWS 安全令牌服务 （AWS STS） 代入角色，以在成员账户中创建和更新 AWS WAF 规则。",
        "D.使用 AWS 控制塔跨组织中的账户管理 AWS WAF 规则。使用 AWS Key Management Service （AWS KMS） 存储要管理的帐号和 OU。根据需要更新 AWS KMS 以添加或删除账户或 OU.在成员账户中创建 IAM 用户。允许管理账户中的 AWS 控制塔使用访问密钥和秘密访问密钥在成员账户中创建和更新 AWS WAF 规则。"
      ],
      "aa": "A",
      "qK": "WAF rules,all accounts",
      "aK": [
        "Use AWS Firewall Manager"
      ]
    },
    {
      "no": 308,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 301,
      "q": "A solutions architect is reviewing a company’s process for taking snapshots of Amazon RDS DB instances. The company takes automatic snapshots every day and retains the snapshots for 7 days.The solutions architect needs to recommend a solution that takes snapshots every 6 hours and retains the snapshots for 30 days. The company uses AWS Organizations to manage all of its AWS accounts. The company needs a consolidated view of the health of the RDS snapshots.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      "a": [
        "A.Turn on the cross-account management feature in AWS Backup. Create a backup plan that specifies the frequency and retention requirements. Add a tag to the DB instances. Apply the backup plan by using tags. Use AWS Backup to monitor the status of the backups.",
        "B.Turn on the cross-account management feature in Amazon RDS.Create a snapshot global policy that specifies the frequency and retention requirements.Use the RDS console in the management account to monitor the status of the backups.",
        "C.Turn on the cross-account management feature in AWS CloudFormation.From the management account, deploy a CloudFormation stack set that contains a backup plan from AWS Backup that specifies the frequency and retention requirements.Create an AWS Lambda function in the management account to monitor the status of the backups.Create an Amazon EventBridge rule in each account to run the Lambda function on a schedule.",
        "D.Configure AWS Backup in each account.Create an Amazon Data Lifecycle Manager lifecycle policy that specifies the frequency and retention requirements.Specify the DB instances as the target resource.Use the Amazon Data Lifecycle Manager console in each member account to monitor the status of the backups."
      ],
      "q_cn": "一位解决方案架构师正在审查一家公司拍摄 Amazon RDS 数据库实例快照的流程。该公司每天拍摄自动快照，并将快照保留 7 天。解决方案架构师需要推荐一种解决方案，该解决方案每 6 小时拍摄一次快照，并将快照保留 30 天。该公司使用 AWS Organizations 来管理其所有 AWS 账户。该公司需要 RDS 快照运行状况的整合视图。\n哪种解决方案能够以最少的运营开销满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "snapshots,7 days,every 6 hours,30 days",
      "aK": [
        "Turn on the cross-account management feature in AWS Backup"
      ]
    },
    {
      "no": 130,
      "q": "A company has an environment that has a single AWS account. A solutions architect is reviewing the environment to recommend what the company could improve specifically in terms of access to the AWS Management Console. The company's IT support workers currently access the console for administrative tasks, authenticating with named IAM users that have been mapped to their job role.\nThe IT support workers no longer want to maintain both their Active Directory and IAM user accounts.They want to be able to access the console by using their existing Active Directory credentials.The solutions architect is using AWS IAM Identity Center (AWS Single Sign-On) to implement this functionality.\nWhich solution will meet these requirements MOST cost-effectively? ",
      "a": [
        "A.Create an organization in AWS Organizations.Turn on the IAM Identity Center feature in Organizations.Create and configure a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory. Configure AWS IAM Identity Center and set the AWS Managed Microsoft AD directory as the identity source. Create permission sets and map them to the existing groups within the AWS Managed Microsoft AD directory.",
        "B.Create an organization in AWS Organizations.Turn on the IAM Identity Center feature in Organizations.Create and configure an AD Connector to connect to the company's on-premises Active Directory. Configure AWS IAM Identity Center and select the AD Connector as the identity source. Create permission sets and map them to the existing groups within the company's Active Directory.",
        "C.Create an organization in AWS Organizations.Turn on all features for the organization.Create and configure a directory in AWS Directory Service for Microsoft Active Directory(AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory. Configure IAM Identity Center and select the AWS Managed Microsoft AD directory as the identity source. Create permission sets and map them to the existing groups within the AWS Managed Microsoft AD directory.",
        "D.Create an organization in AWS Organizations.Turn on all features for the organization.Create and configure an AD Connector to connect to the company's on-premises Active Directory. Configure IAM Identity Center and set the AD Connector as the identity source. Create permission sets and map them to the existing groups within the company's Active Directory."
      ],
      "q_cn": "公司具有具有单个 AWS 账户的环境。解决方案架构师正在审查环境，以建议公司在访问 AWS 管理控制台方面可以改进的具体内容。该公司的 IT 支持人员当前访问控制台以执行管理任务，使用已映射到其工作角色的指定 IAM 用户进行身份验证。\nIT 支持人员不再需要同时维护其 Active Directory 和 IAM 用户帐户。他们希望能够使用其现有的 Active Directory 凭据访问控制台。解决方案架构师正在使用 AWS IAM 身份中心（AWS 单点登录）来实施此功能。\n哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "A.在 AWS 组织中创建组织。在 AWS Directory Service 中为Microsoft Active Directory （AWS Managed Microsoft AD） 创建和配置目录，并对公司的本地 Active Directory 具有双向信任。配置 AWS IAM 身份中心并将 AWS 托管Microsoft AD 目录设置为身份源。创建权限集并将其映射到 AWS 托管Microsoft AD 目录中的现有组。",
        "B.在 AWS Organizations 中创建组织。在组织中打开 AWS IAM 身份中心功能 创建和配置 AD 连接器以连接到公司的本地 Active Directory。配置 AWS IAM 身份中心并选择 AD 连接器作为身份源。创建权限集并将其映射到公司 Active Directory 中的现有组。",
        "C.在 AWS Organizations 中创建组织。为组织打开所有功能。在 AWS Directory Service 中为 Active Directory（AWS Managed Microsoft AD）创建和配置目录Microsoft对公司的本地 Active Directory 具有双向信任。配置 IAM 身份中心并选择 AWS 托管Microsoft AD 目录作为身份源。创建权限集并将其映射到 AWS 托管Microsoft AD 目录中的现有组。",
        "D.在 AWS Organizations 中创建组织。为该组织启用所有功能。创建并配置 AD 连接器以连接到公司的本地活动目录。配置 IAM 身份中心并将 AD 连接器设置为身份源。创建权限集并将其映射到公司 Active Directory 中的现有组。"
      ],
      "aa": "B",
      "qK": "Active Directory,IAM Identity Center (AWS Single Sign-On)",
      "aK": [
        "IAM Identity Center,AD Connector"
      ]
    },
    {
      "no": 249,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 56,
      "q": "A company's factory and automation applications are running in a single VPC. More than 20 applications run on a combination of Amazon EC2, Amazon Elastic Container Service(Amazon ECS), and Amazon RDS.\nThe company has software engineers spread across three teams.One of the three teams owns each application, and each time is responsible for the cost and performance of all of its applications.Team resources have tags that represent their application and team.The teams use IAM access for daily activities.\nThe company needs to determine which costs on the monthly AWS bill are attributable to each application or team.The company also must be able to create reports to compare costs from the last 12 months and to help forecast costs for the next 12 months.A solutions architect must recommend an AWS Billing and Cost Management solution that provides these cost reports.\nWhich combination of actions will meet these requirements?(Choose three.) ",
      "a": [
        "A.Activate the user-define cost allocation tags that represent the application and the team.",
        "B.Activate the AWS generated cost allocation tags that represent the application and the team.",
        "C.Create a cost category for each application in Billing and Cost Management.",
        "D.Activate IAM access to Billing and Cost Management.",
        "E.Create a cost budget.",
        "F.Enable Cost Explorer."
      ],
      "q_cn": "公司的工厂和自动化应用程序在单个 VPC 中运行。超过 20 个应用程序在 Amazon EC2、Amazon Elastic 的组合上运行Container Service （Amazon ECS） 和 Amazon RDS。\n该公司的软件工程师分布在三个团队中。三个团队中的一个拥有每个应用程序，并且每次负责其所有应用程序的成本和性能。团队资源具有表示其应用程序和团队的标记。团队使用 IAM 访问权限进行日常活动。\n      公司需要确定每月 AWS 账单上的哪些成本可归因于每个应用程序或团队。公司还必须能够创建报告来比较过去 12 个月的成本，并帮助预测未来 12 个月的成本。解决方案架构师必须推荐 AWS 账单和提供这些成本报表的成本管理解决方案。\n哪些操作组合将满足这些要求？（选择三个。",
      "a_cn": [
        "A.激活代表应用程序和团队的用户定义成本分配标记。",
        "B.激活代表应用程序和团队的 AWS 生成的成本分配标签。",
        "C.在“计费和成本管理”中为每个应用程序创建成本类别。",
        "D.激活对账单和成本管理的 IAM 访问权限。",
        "E.创建成本预算。",
        "F.启用成本管理器。"
      ],
      "aa": "A,D,F",
      "qK": "20 applications,last 12 months,next 12 months",
      "aK": [
        "user-define",
        "IAM access",
        "Enable Cost Explorer"
      ]
    },
    {
      "no": 30,
      "q": "An AWS customer has a web application that runs on premises. The web application fetches data from a third-party API that is behind a firewall. The third party accepts only one public CIDR block in each client's allow list.The customer wants to migrate their web application to the AWS Cloud.The application will be hosted on a set of Amazon EC2 instances behind an Application Load Balancer(ALB) in a VPC.The ALB is located in public subnets.The EC2 instances are located in private subnets.NAT gateways provide internet access to the private subnets.How should a solutions architect ensure that the web application can continue to call the third-party API after the migration ? ",
      "a": [
        "A.Associate a block of customer-owned public IP addresses to the VPC. Enable public IP addressing for public subnets in the VPC.",
        "B.Register a block of customer-owned public IP addresses in the AWS account.Create Elastic IP addresses from the address block and assign them to the NAT gateways in the VPC.",
        "C.Create Elastic IP addresses from the block of customer-owned IP addresses.Assign the static Elastic IP addresses to the ALB.",
        "D.Register a block of customer-owned public IP addresses in the AWS account.Set up AWS Global Accelerator to use Elastic IP addresses from the address block.Set the ALB as the accelerator endpoint."
      ],
      "q_cn": "AWS 客户有一个在本地运行的 Web 应用程序。Web 应用程序从防火墙后面的第三方 API 获取数据。第三方在每个客户端的允许列表中只接受一个公网网段。客户希望将其 Web 应用程序迁移到 AWS 云。应用程序将托管在应用程序后面的一组 Amazon EC2 实例上VPC 中的负载均衡器 （ALB）。ALB 位于公有子网中。EC2 实例位于私有子网中。NAT 网关提供对私有子网的互联网访问。解决方案架构师应如何确保 Web 应用程序在迁移后可以继续调用第三方 API？",
      "a_cn": [
        "A.将客户拥有的公有 IP 地址块关联到 VPC。为 VPC 中的公有子网启用公有 IP 寻址。",
        "B.在 AWS 账户中注册客户拥有的公有 IP 地址块。从地址块创建弹性 IP 地址，并将其分配给 VPC 中的 NAT 网关。",
        "C.从客户拥有的 IP 地址块创建弹性 IP 地址。将静态弹性 IP 地址分配给 ALB。",
        "D.在 AWS 账户中注册客户拥有的公有 IP 地址块。设置 AWS 全球加速器以使用地址块中的弹性 IP 地址。将 ALB 设置为加速器终结点。"
      ],
      "aa": "B",
      "qK": "third-party API,public CIDR,ALB,NAT",
      "aK": [
        "NAT"
      ]
    },
    {
      "no": 196,
      "q": "A company runs a processing engine in the AWS Cloud. The engine processes environmental data from logistics centers to calculate a sustainability index. The company has millions of devices in logistics centers that are spread across Europe. The devices send information to the processing engine through a RESTful API.\nThe API experiences unpredictable bursts of traffic.The company must implement a solution to process all data that the devices send to the processing engine.Data loss is unacceptable.\nWhich solution will meet these requirements?",
      "a": [
        "A.Create an Application Load Balancer (ALB) for the RESTful API. Create an Amazon Simple Queue Service (Amazon SQS) queue. Create a listener and a target group for the ALB Add the SQS queue as the target. Use a container that runs in Amazon Elastic Container Service (Amazon ECS) with the Fargate launch type to process messages in the queue.",
        "B.Create an Amazon API Gateway HTTP API that implements the RESTful API.Create an Amazon Simple Queue Service(Amazon SQS) queue.Create an API Gateway service integration with the SQS queue.Create an AWS Lambda function to process messages in the SQS queue.",
        "C.Create an Amazon API Gateway REST API that implements the RESTful API.Create a fleet of Amazon EC2 instances in an Auto Scaling group.Create an API Gateway Auto Scaling group proxy integration.Use the EC2 instances to process incoming data.",
        "D.Create an Amazon CloudFront distribution for the RESTful API.Create a data stream in Amazon Kinesis Data Streams.Set the data stream as the origin for the distribution.Create an AWS Lambda function to consume and process data in the data stream."
      ],
      "q_cn": "一家公司在 AWS 云中运行处理引擎。该发动机处理来自物流中心的环境数据，以计算可持续性指数。该公司在遍布欧洲的物流中心拥有数百万台设备。设备通过 RESTful API 将信息发送到处理引擎。\nAPI 会遇到不可预测的流量突发。公司必须实施一个解决方案来处理设备发送到处理引擎的所有数据。数据丢失是不可接受的。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.为 RESTful API 创建应用程序负载均衡器 （ALB）。创建 Amazon Simple Queue Service （Amazon SQS） 队列。为 ALB 创建侦听器和目标组 添加 SQS 队列作为目标。使用在 Amazon Elastic Container Service （Amazon ECS） 中运行的具有 Fargate 启动类型的容器来处理队列中的消息。",
        "B.创建实现 RESTful API 的 Amazon API Gateway HTTP API。创建 Amazon Simple Queue Service （Amazon SQS） 队列。创建与 SQS 队列的 API 网关服务集成。创建 AWS Lambda 函数以处理 SQS 队列中的消息。",
        "C.创建实现 RESTful API 的 Amazon API Gateway REST API。在 Auto Scaling 组中创建 Amazon EC2 实例队列。创建 API 网关弹性伸缩组代理集成。使用 EC2 实例处理传入数据。",
        "D.为 RESTful API 创建 Amazon CloudFront 分配。在 Amazon Kinesis Data Streams 中创建数据流。将数据流设置为分配的源。创建 AWS Lambda 函数以使用和处理数据流中的数据。"
      ],
      "aa": "B",
      "qK": "millions of devices in logistics centers",
      "aK": [
        "SQS,Lambda"
      ]
    },
    {
      "no": 247,
      "q": "A company ingests and processes streaming market data. The data rate is constant. A nightly process that calculates aggregate statistics is run, and each execution takes about 4 hours to complete. The statistical analysis is not mission critical to the business, and previous data points are picked up on the next execution if a particular run fails.\nThe current architecture uses a pool of Amazon EC2 Reserved Instances with 1-year reservations running full time to ingest and store the streaming data in attached Amazon EBS volumes. On-Demand EC2 instances are launched each night to perform the nightly processing, accessing the stored data from NFS shares on the ingestion servers, and terminating the nightly processing servers when complete. The Reserved Instance reservations are expiring, and the company needs to determine whether to purchase new reservations or implement a new design.\nWhich is the most cost-effective design?",
      "a": [
        "A.Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon S3. Use a fleet of On-Demand EC2 instances that launches each night to perform the batch processing of the S3 data and terminates when the processing completes.",
        "B.Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon S3. Use AWS Batch to perform nightly processing with a Spot market bid of 50% of the On-Demand price.",
        "C.Update the ingestion process to use a fleet of EC2 Reserved Instances behind a Network Load Balancer with 3-year leases. Use Batch with Spot instances with a maximum bid of 50% of the On-Demand price for the nightly processing.",
        "D.Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon Redshift. Use an AWS Lambda function scheduled to run nightly with Amazon CloudWatch Events to query Amazon Redshift to generate the daily statistics."
      ],
      "q_cn": "公司摄取和处理流式市场数据。数据速率是恒定的。运行计算聚合统计信息的夜间进程，每次执行大约需要 4 小时才能完成。统计分析对业务不是任务关键型，如果特定运行失败，则会在下次执行时选取以前的数据点。\n当前架构使用具有 1 年预留的 Amazon EC2 预留实例池，这些实例将全时运行 1 年预留，以提取流数据并将其存储在附加的 Amazon EBS 卷中。按需 EC2 实例每晚启动一次，以执行夜间处理，从摄取服务器上的 NFS 共享访问存储的数据，并在完成后终止夜间处理服务器。预留实例预留即将过期，公司需要确定是购买新预留还是实施新设计。\n哪个设计最划算？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "4 hours,1-year reservations",
      "aK": [
        "AWS Batch,Kinesis Data Firehose,S3,50%"
      ]
    },
    {
      "no": 105,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 117,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 299,
      "q": "A car rental company has built a serverless REST API to provide data to its mobile app. The app consists of an Amazon API Gateway API with a Regional endpoint, AWS Lambda functions, and an Amazon Aurora MySQL Serverless DB cluster. The company recently opened the API to mobile apps of partners. A significant increase in the number of requests resulted, causing sporadic database memory errors. Analysis of the API traffic indicates that clients are making multiple HTTP GET requests for the same queries in a short period of time. Traffic is concentrated during business hours, with spikes around holidays and other events.\nThe company needs to improve its ability to support the additional usage while minimizing the increase in costs associated with the solution.\nWhich strategy meets these requirements?",
      "a": [
        "A.Convert the API Gateway Regional endpoint to an edge-optimized endpoint. Enable caching in the production stage.",
        "B.Implement an Amazon ElastiCache for Redis cache to store the results of the database calls. Modify the Lambda functions to use the cache.",
        "C.Modify the Aurora Serverless DB cluster configuration to increase the maximum amount of available memory.",
        "D.Enable throttling in the API Gateway production stage. Set the rate and burst values to limit the incoming calls."
      ],
      "q_cn": "一家汽车租赁公司构建了一个无服务器 REST API，为其移动应用程序提供数据。该应用程序由具有区域终端节点的 Amazon API 网关 API 、AWS Lambda 函数和 Amazon Aurora MySQL 无服务器数据库集群组成。该公司最近向合作伙伴的移动应用程序开放了API。导致请求数显著增加，导致偶发的数据库内存错误。对 API 流量的分析表明，客户端在短时间内为相同的查询发出多个 HTTP GET 请求。流量集中在营业时间，节假日和其他活动前后出现高峰。\n该公司需要提高其支持额外使用的能力，同时最大限度地减少与解决方案相关的成本增加。\n哪种策略满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "A car,mobile app",
      "aK": [
        "Convert the API,edge-optimized"
      ]
    },
    {
      "no": 268,
      "q": "A financial services company loaded millions of historical stock trades into an Amazon DynamoDB table. The table uses on-demand capacity mode. Once each day at midnight, a few million new records are loaded into the table. Application read activity against the table happens in bursts throughout the day, and a limited set of keys are repeatedly looked up. The company needs to reduce costs associated with DynamoDB.\nWhich strategy should a solutions architect recommend to meet this requirement ?",
      "a": [
        "A.Deploy an Amazon ElastiCache cluster in front of the DynamoDB table.",
        "B.Deploy DynamoDB Accelerator (DAX). Configure DynamoDB auto scaling. Purchase Savings Plans in Cost Explorer.",
        "C.Use provisioned capacity mode. Purchase Savings Plans in Cost Explorer.",
        "D.Deploy DynamoDB Accelerator (DAX). Use provisioned capacity mode. Configure DynamoDB auto scaling."
      ],
      "q_cn": "一家金融服务公司将数百万笔历史股票交易加载到 Amazon DynamoDB 表中。该表使用按需容量模式。每天午夜时分，表中将加载数百万条新记录。针对表的应用程序读取活动在一天中突发发生，并且重复查找一组有限的键。公司需要降低与 DynamoDB 相关的成本。\n解决方案架构师应推荐哪种策略来满足此要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "financial services,millions of historical stock trades,",
      "aK": [
        "DAX,capacity mode"
      ]
    },
    {
      "no": 305,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 255,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 288,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 167,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 213,
      "q": "A company has an application that runs on Amazon EC2 instances in an Amazon EC2 Auto Scaling group. The company uses AWS CodePipeline to deploy the application. The instances that run in the Auto Scaling group are constantly changing because of scaling events.When the company deploys new application code versions, the company installs the AWS CodeDeploy agent on any new target EC2 instances and associates the instances with the CodeDeploy deployment group. The application is set to go live within the next 24 hours.What should a solutions architect recommend to automate the application deployment process with the LEAST amount of operational overhead?",
      "a": [
        "A.Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function when a new EC2 instance is launched into the Auto Scaling group. Code the Lambda function to associate the EC2 instances with the CodeDeploy deployment group.",
        "B.Write a script to suspend Amazon EC2 Auto Scaling operations before the deployment of new code. When the deployment is complete, create a new AMI and configure the Auto Scaling group's launch template to use the new AMI for new launches. Resume Amazon EC2 Auto Scaling operations.",
        "C.Create a new AWS CodeBuild project that creates a new AMI that contains the new code. Configure CodeBuild to update the Auto Scaling group's launch template to the new AMI. Run an Amazon EC2 Auto Scaling instance refresh operation.",
        "D.Create a new AMI that has the CodeDeploy agent installed. Configure the Auto Scaling group's launch template to use the new AMI. Associate the CodeDeploy deployment group with the Auto Scaling group instead of the EC2 instances."
      ],
      "q_cn": "一家公司有一个在 Amazon EC2 Auto Scaling 组中的 Amazon EC2 实例上运行的应用程序。该公司使用 AWS CodePipeline 来部署应用程序。由于伸缩事件，在弹性伸缩组中运行的实例会不断变化。当公司部署新的应用程序代码版本时，该公司会在任何新的目标 EC2 实例上安装 AWS CodeDeploy 代理，并将这些实例与 CodeDeploy 部署组相关联。该应用程序将在接下来的 24 小时内上线。解决方案架构师应该建议什么，以最少的运营开销自动执行应用程序部署过程？",
      "a_cn": [
        "A.配置 Amazon EventBridge（Amazon CloudWatch Events），以便在新的 EC2 实例启动到 Auto Scaling 组中时调用 AWS Lambda 函数。编写 Lambda 函数的代码以将 EC2 实例与 CodeDeploy 部署组相关联。",
        "B.编写脚本以在部署新代码之前暂停 Amazon EC2 Auto Scaling 操作。部署完成后，创建新的 AMI 并将 Auto Scaling 组的启动模板配置为将新 AMI 用于新启动。恢复 Amazon EC2 Auto Scaling 操作。",
        "C.创建一个新的 AWS CodeBuild 项目，该项目创建一个包含新代码的新 AMI。配置 CodeBuild 以将 Auto Scaling 组的启动模板更新为新的 AMI。运行 Amazon EC2 Auto Scaling 实例刷新操作。",
        "D.创建安装了 CodeDeploy 代理的新 AMI。将 Auto Scaling 组的启动模板配置为使用新的 AMI。将 CodeDeploy 部署组与 Auto Scaling 组（而不是 EC2 实例）关联。"
      ],
      "aa": "D",
      "qK": "CodePipeline,24 hours",
      "aK": [
        "CodeDeploy agent"
      ]
    },
    {
      "no": 262,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "B,E",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 166,
      "q": "A company is using Amazon OpenSearch Service to analyze data. The company loads data into an OpenSearch Service cluster with 10 data nodes from an Amazon S3 bucket that uses S3 Standard storage. The data resides in the cluster for 1 month for read-only analysis. After 1 month, the company deletes the index that contains the data from the cluster. For compliance purposes, the company must retain a copy of all input data.\nThe company is concerned about ongoing costs and asks a solutions architect to recommend a new solution.\nWhich solution will meet these requirements MOST cost-effectively ? ",
      "a": [
        "A.Replace all the data nodes with UltraWarm nodes to handle the expected capacity. Transition the input data from S3 Standard to S3 Glacier Deep Archive when the company loads the data into the cluster.",
        "B.Reduce the number of data nodes in the cluster to 2 Add UltraWarm nodes to handle the expected capacity.Configure the indexes to transition to UltraWarm when OpenSearch Service ingests the data.Transition the input data to S3 Glacier Deep Archive after 1 month by using an S3 Lifecycle policy.",
        "C.Reduce the number of data nodes in the cluster to 2. Add UltraWarm nodes to handle the expected capacity.Configure the indexes to transition to UltraWarm when OpenSearch Service ingests the data.Add cold storage nodes to the cluster Transition the indexes from UltraWarm to cold storage.Delete the input data from the S3 bucket after 1 month by using an S3 Lifecycle policy.",
        "D.Reduce the number of data nodes in the cluster to 2. Add instance-backed data nodes to handle the expected capacity.Transition the input data from S3 Standard to S3 Glacier Deep Archive when the company loads the data into the cluster."
      ],
      "q_cn": "一家公司正在使用 Amazon OpenSearch Service 来分析数据。该公司将数据从使用 S3 标准存储的 Amazon S3 存储桶加载到具有 10 个数据节点的 OpenSearch Service 集群中。数据在集群中驻留 1 个月，用于只读分析。1 个月后，公司将从群集中删除包含数据的索引。出于合规性目的，公司必须保留所有输入数据的副本。\n该公司担心持续成本，并要求解决方案架构师推荐新的解决方案。\n哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "A.将所有数据节点替换为 UltraWarm 节点以处理预期的容量。当公司将数据加载到集群中时，将输入数据从 S3 标准转换为 S3 Glacier Deep Archive。",
        "B.将群集中的数据节点数减少到 2 个 添加 UltraWarm 节点以处理预期的容量。将索引配置为在 OpenSearch Service 摄取数据时转换为 UltraWarm。使用 S3 生命周期策略在 1 个月后将输入数据转换为 S3 冰川深度存档。",
        "C.将群集中的数据节点数减少到 2。添加超温节点以处理预期的容量。将索引配置为在 OpenSearch Service 摄取数据时转换为 UltraWarm。将冷存储节点添加到群集 将索引从超温转换为冷存储。使用 S3 生命周期策略在 1 个月后从 S3 存储桶中删除输入数据。",
        "D.将集群中的数据节点数减少到 2 个。添加实例-支持的数据节点以处理预期容量。当公司将数据加载到集群中时，将输入数据从 S3 标准转换为 S3 Glacier Deep Archive。"
      ],
      "aa": "B",
      "qK": "OpenSearch Service",
      "aK": [
        "S3 Glacier,1 month"
      ]
    },
    {
      "no": 168,
      "q": "A software as a service (SaaS) based company provides a case management solution to customers A3 part of the solution. The company uses a standalone Simple Mail Transfer Protocol (SMTP) server to send email messages from an application. The application also stores an email template for acknowledgement email messages that populate customer data before the application sends the email message to the customer.\nThe company plans to migrate this messaging functionality to the AWS Cloud and needs to minimize operational overhead.\nWhich solution will meet these requirements MOST cost-effectively ? ",
      "a": [
        "A.Set up an SMTP server on Amazon EC2 instances by using an AMI from the AWS Marketplace. Store the email template in an Amazon S3 bucket. Create an AWS Lambda function to retrieve the template from the S3 bucket and to merge the customer data from the application with the template. Use an SDK in the Lambda function to send the email message.",
        "B.Set up Amazon Simple Email Service(Amazon SES) to send email messages.Store the email template in an Amazon S3 bucket.Create an AWS Lambda function to retrieve the template from the S3 bucket and to merge the customer data from the application with the template.Use an SDK in the Lambda function to send the email message.",
        "C.Set up an SMTP server on Amazon EC2 instances by using an AMI from the AWS Marketplace.Store the email template in Amazon Simple Email Service(Amazon SES) with parameters for the customer data.Create an AWS Lambda function to call the SES template and to pass customer data to replace the parameters.Use the AWS Marketplace SMTP server to send the email message.",
        "D.Set up Amazon Simple Email Service(Amazon SES) to send email messages.Store the email template on Amazon SES with parameters for the customer data.Create an AWS Lambda function to call the SendTemplatedEmail API operation and to pass customer data to replace the parameters and the email destination."
      ],
      "q_cn": "一家基于软件即服务（SaaS）的公司为客户提供案例管理解决方案A3部分解决方案。该公司使用独立的简单邮件传输协议 （SMTP） 服务器从应用程序发送电子邮件。应用程序还存储用于确认电子邮件的电子邮件模板，这些电子邮件在应用程序向客户发送电子邮件之前填充客户数据。\n该公司计划将此消息收发功能迁移到 AWS 云，并需要最大程度地减少运营开销。\n哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "A.使用 AWS Marketplace 中的 AMI 在 Amazon EC2 实例上设置 SMTP 服务器。将电子邮件模板存储在 Amazon S3 存储桶中。创建一个 AWS Lambda 函数以从 S3 存储桶中检索模板，并将应用程序中的客户数据与模板合并。使用 Lambda 函数中的开发工具包发送电子邮件。",
        "B.设置 Amazon Simple Email Service （Amazon SES） 以发送电子邮件。将电子邮件模板存储在 Amazon S3 存储桶中。创建一个 AWS Lambda 函数以从 S3 存储桶中检索模板，并将应用程序中的客户数据与模板合并。使用 Lambda 函数中的开发工具包发送电子邮件。",
        "C.使用 AWS 中的 AMI 在 Amazon EC2 实例上设置 SMTP 服务器，Marketplace.Store Amazon Simple Email Service （Amazon SES） 中的电子邮件模板以及客户数据的参数。创建 AWS Lambda 函数以调用 SES 模板并传递客户数据以替换参数。使用 AWS Marketplace SMTP 服务器发送电子邮件。",
        "D.设置 Amazon Simple Email Service （Amazon SES） 以发送电子邮件。将电子邮件模板存储在带有客户数据参数的 Amazon SES 上。创建一个 AWS Lambda 函数来调用 SendTemplatedEmail API 操作，并传递客户数据以替换参数和电子邮件目标。"
      ],
      "aa": "B",
      "qK": "SaaS,SMTP,template,customer data",
      "aK": [
        "SES,S3"
      ]
    },
    {
      "no": 201,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 302,
      "q": "A telecommunications company is running an application on AWS. The company has set up an AWS Direct Connect connection between the company's on-premises data center and AWS. The company deployed the application on Amazon EC2 instances in multiple Availability Zones behind an internal Application Load Balancer (ALB). The company's clients connect from the on-premises network by using HTTPS. The TLS terminates in the ALB. The company has multiple target groups and uses path-based routing to forward requests based on the URL path.\nThe company is planning to deploy an on-premises firewall appliance with an allow list that is based on IP address. A solutions architect must develop a solution to allow traffic flow to AWS from the on-premises network so that the clients can continue to access the application.\nWhich solution will meet these requirements?",
      "a": [
        "A.Configure the existing ALB to use static IP addresses. Assign IP addresses in multiple Availability Zones to the ALB. Add the ALB IP addresses to the firewall appliance.",
        "B.Create a Network Load Balancer (NLB). Associate the NLB with one static IP addresses in multiple Availability Zones. Create an ALB-type target group for the NLB and add the existing ALAdd the NLB IP addresses to the firewall appliance. Update the clients to connect to the NLB.",
        "C.Create a Network Load Balancer (NLB). Associate the LNB with one static IP addresses in multiple Availability Zones. Add the existing target groups to the NLB. Update the clients to connect to the NLB. Delete the ALB Add the NLB IP addresses to the firewall appliance.",
        "D.Create a Gateway Load Balancer (GWLB). Assign static IP addresses to the GWLB in multiple Availability Zones. Create an ALB-type target group for the GWLB and add the existing ALB. Add the GWLB IP addresses to the firewall appliance. Update the clients to connect to the GWLB."
      ],
      "q_cn": "一家电信公司在 AWS 上运行一个应用程序。该公司已在公司的本地数据中心和 AWS 之间建立了 AWS Direct Connect 连接。该公司在内部应用程序负载均衡器 （ALB） 后面的多个可用区的 Amazon EC2 实例上部署了该应用程序。公司的客户端使用 HTTPS 从本地网络进行连接。TLS 在 ALB 中终止。该公司有多个目标组，并使用基于路径的路由根据 URL 路径转发请求。\n该公司计划部署具有基于 IP 地址的允许列表的本地防火墙设备。解决方案架构师必须开发一个解决方案，以允许流量从本地网络流向 AWS，以便客户端可以继续访问应用程序。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "A telecommunications company",
      "aK": [
        "ALB-type,NLB"
      ]
    },
    {
      "no": 314,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 144,
      "q": "A solutions architect is planning to migrate critical Microsoft SQL Server databases to AWS. Because the databases are legacy systems, the solutions architect will move the databases to a modern data architecture. The solutions architect must migrate the databases with near-zero downtime.\nWhich solution will meet these requirements?",
      "a": [
        "A.Use AWS Application Migration Service and the AWS Schema Conversion Tool (AWS SCT). Perform an in-place upgrade before the migration. Export the migrated data to Amazon Aurora Serverless after cutover. Repoint the applications to Amazon Aurora.",
        "B.Use AWS Database Migration Service(AWS DMS) to rehost the database.Set Amazon S3 as a target.Set up change data capture(CDC) replication.When the source and destination are fully synchronized, load the data from Amazon S3 into an Amazon RDS for Microsoft SQL Server DB instance.",
        "C.Use native database high availability tools.Connect the source system to an Amazon RDS for Microsoft SQL Server DB instance.Configure replication accordingly.When data replication is finished, transition the workload to an Amazon RDS for Microsoft SQL Server DB instance.",
        "D.Use AWS Application Migration Service.Rehost the database server on Amazon EC2.When data replication is finished, detach the database and move the database to an Amazon RDS for Microsoft SQL Server DB instance.Reattach the database and then cut over all networking."
      ],
      "q_cn": "解决方案架构师正计划将关键Microsoft SQL Server 数据库迁移到 AWS。由于数据库是旧系统，因此解决方案架构师会将数据库移动到现代数据体系结构。解决方案架构师必须在几乎零停机时间的情况下迁移数据库。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.使用 AWS Application Migration Service 和 AWS Schema Conversion Tool （AWS SCT）。在迁移之前执行就地升级。直接转换后，将迁移的数据导出到 Amazon Aurora Serverless。将应用程序重新指向 Amazon Aurora。",
        "B.使用 AWS Database Migration Service （AWS DMS） 重新托管数据库。将 Amazon S3 设置为目标。设置变更数据捕获 （CDC） 复制。当源和目标完全同步后，将数据从 Amazon S3 加载到适用于 Microsoft SQL Server 数据库实例的 Amazon RDS 中。",
        "C.使用本机数据库高可用性工具。将源系统连接到适用于 Microsoft SQL Server 数据库实例的 Amazon RDS。相应地配置复制。数据复制完成后，将工作负载转换为适用于 Microsoft SQL Server 数据库实例的 Amazon RDS。",
        "D.使用 AWS Application Migration Service。在 Amazon EC2 上重新托管数据库服务器。数据复制完成后，分离数据库并将数据库移动到适用于 Microsoft SQL Server 数据库实例的 Amazon RDS。重新附加数据库，然后切断所有网络。"
      ],
      "aa": "B",
      "qK": "migrate,SQL Server,near-zero downtime",
      "aK": [
        "DMS,CDC"
      ]
    },
    {
      "no": 137,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 115,
      "q": "A company is running a critical application that uses an Amazon RDS for MySQL database to store data. The RDS DB instance is deployed in Multi-AZ mode.\nA recent RDS database failover test caused a 40-second outage to the application.A solutions architect needs to design a solution to reduce the outage time to less than 20 seconds.\nWhich combination of steps should the solutions architect take to meet these requirements?(Choose three.) ",
      "a": [
        "A.Use Amazon ElastiCache for Memcached in front of the database",
        "B.Use Amazon ElastiCache for Redis in front of the database",
        "C.Use RDS Proxy in front of the database.",
        "D.Migrate the database to Amazon Aurora MySQL.",
        "E.Create an Amazon Aurora Replica.",
        "F.Create an RDS for MySQL read replica"
      ],
      "q_cn": "一家公司正在运行一个关键应用程序，该应用程序使用 Amazon RDS for MySQL 数据库来存储数据。RDS 实例以多可用区模式部署。\n最近的 RDS 数据库故障转移测试导致应用程序中断 40 秒。解决方案架构师需要设计一个解决方案，将中断时间缩短到不到 20 秒。\n解决方案架构师应采取哪些步骤组合来满足这些要求？（选择三个。",
      "a_cn": [
        "A.在数据库前面使用 Amazon ElastiCache for Memcached",
        "B.在数据库前面使用 Amazon ElastiCache for Redis（适用于 Redis）",
        "C.在数据库前面使用 RDS 代理。",
        "D.将数据库迁移到 Amazon Aurora MySQL。",
        "E.创建 Amazon Aurora 副本。",
        "F.创建 RDS for MySQL 只读副本"
      ],
      "aa": "C,D,E",
      "qK": "RDS,MySQL,40-second,20 seconds",
      "aK": [
        "Proxy",
        "Aurora",
        "Aurora"
      ]
    },
    {
      "no": 123,
      "q": "A company runs its application in the eu-west-1 Region and has one account for each of its environments: development, testing, and production. All the environments are running 24 hours a day, 7 days a week by using stateful Amazon EC2 instances and Amazon RDS for MySQL databases. The databases are between 500 GB and 800 GB in size.\nThe development team and testing team work on business days during business hours, but the production environment operates 24 hours a day, 7 days a week.The company wants to reduce costs.All resources are tagged with an environment tag with either development, testing, or production as the key.\nWhat should a solutions architect do to reduce costs with the LEAST operational effort?",
      "a": [
        "A.Create an Amazon EventBridge rule that runs once every day. Configure the rule to invoke one AWS Lambda function that starts or slops instances based on me tag, day, and time.",
        "B.Create an Amazon EventBridge rule that runs every business day in the evening. Configure the rule to invoke an AWS Lambda function that stops instances based on the tag. Create a second EventBridge rule that runs every business day in the morning. Configure the second rule lo invoke another Lambda function that starts instances based on the tag.",
        "C.Create an Amazon EventBridge rule that runs every business day in the evening, Configure the rule to invoke an AWS Lambda function that terminates, instances based on the lag. Create a second EventBridge rule that runs every business day in the morning. Configure the second rule lo invoke another Lambda function that restores the instances from their last backup based on the tag.",
        "D.Create an Amazon EventBridge rule that runs every hour. Configure the rule to invoke one AWS Lambda function that terminates or restores instances from their last backup based on the tag. day, and time."
      ],
      "q_cn": "一家公司在 eu-west-1 区域运行其应用程序，并且其每个环境都有一个帐户：开发、测试和生产。所有环境每周 7 天、每天 24 小时运行，使用有状态 Amazon EC2 实例和适用于 MySQL 数据库的 Amazon RDS。数据库的大小介于 500 GB 和 800 GB 之间。\n开发团队和测试团队在工作日的工作时间工作，但生产环境每周 7 天、每天 24 小时运行。该公司希望降低成本。所有资源都使用环境标记进行标记，其中开发、测试或生产作为密钥。\n解决方案架构师应如何以最少的运营工作量降低成本？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "24 hours,7 days,500 GB,800 GB",
      "aK": [
        "stops"
      ]
    },
    {
      "no": 306,
      "q": "A company runs its sales reporting application in an AWS Region in the United States. The application uses an Amazon API Gateway Regional API and AWS Lambda functions to generate on-demand reports from data in an Amazon RDS for MySQL database. The frontend of the application is hosted on Amazon S3 and is accessed by users through an Amazon CloudFront distribution. The company is using Amazon Route 53 as the DNS service for the domain. Route 53 is configured with a simple routing policy to route traffic to the API Gateway APl. ln the next 6 months.the company plans to expand operations to Europe. More than 90% of the database traffic is read-only traffic. The company has already deployed an API Gateway API and Lambda functions in the new Region. A solutions architect must design a solution that minimizes latency for users who download reports Which solution will meet these requirements?",
      "a": [
        "A.Use an AWS Database Migration Service (AWS DMS) task with full load to replicate the primary database in the original Region to the database in the new Region. Change the Route 53 record to latency-based routing to connect to the API Gateway API.",
        "B.Use an AWS Database Migration Service (AWS DMS) task with full load plus change data capture (CDC) to replicate the primary database in the original Region to the database in the new Region. Change the Route 53 record to geolocation routing to connect to the API Gateway API",
        "C.Configure a cross-Region read replica for the RDS database in the new Region. Change the Route 53 record to latency-based routing to connect to the API Gateway API",
        "D.Configure a cross-Region read replica for the RDS database in the new Region. Change the Route 53 record to geolocation routing to connect to the API Gateway API"
      ],
      "q_cn": "一家公司在美国的 AWS 区域运行其销售报告应用程序。该应用程序使用 Amazon API Gateway Regional API 和 AWS Lambda 函数从 Amazon RDS for MySQL 数据库中的数据生成按需报告。应用程序的前端托管在 Amazon S3 上，用户可通过 Amazon CloudFront 分配进行访问。该公司正在使用Amazon Route 53作为域的DNS服务。路由 53 配置了一个简单的路由策略，用于将流量路由到 API 网关 APl。公司计划在未来6个月内将业务扩展到欧洲。超过 90% 的数据库流量是只读流量。该公司已经在新区域中部署了 API 网关 API 和 Lambda 函数。解决方案架构师必须设计一个解决方案，以最大程度地减少下载报表的用户的延迟 哪种解决方案将满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "next 6 months,90%",
      "aK": [
        "Configure a cross-Region,geolocation routing"
      ]
    },
    {
      "no": 122,
      "q": "A financial company is planning to migrate its web application from on premises to AWS. The company uses a third-party security tool to monitor the inbound traffic to the application. The company has used the security tool for the last 15 years, and the tool has no cloud solutions available from its vendor. The company's security team is concerned about how to integrate the security tool with AWS technology.\nThe company plans to deploy the application migration to AWS on Amazon EC2 instances.The EC2 instances will run in an Auto Scaling group in a dedicated VPC.The company needs to use the security tool to inspect all packets that come in and out of the VPC.This inspection must occur in real time and must not affect the application's performance. A solutions architect must design a target architecture on AWS that is highly available within an AWS Region.\nWhich combination of steps should the solutions architect take to meet these requirements?(Choose two.) ",
      "a": [
        "A.Deploy the security tool on EC2 instances m a new Auto Scaling group in the existing VPC",
        "B.Deploy the web application behind a Network Load Balancer",
        "C.Deploy an Application Load Balancer in front of the security tool instances",
        "D.Provision a Gateway Load Balancer for each Availability Zone to redirect the traffic to the security tool",
        "E.Provision a transit gateway to facilitate communication between VPCs."
      ],
      "q_cn": "一家金融公司正计划将其 Web 应用程序从本地迁移到 AWS。该公司使用第三方安全工具来监视应用程序的入站流量。该公司在过去15年中一直使用安全工具，并且该工具的供应商没有提供云解决方案。该公司的安全团队关注如何将安全工具与 AWS 技术集成。\n该公司计划将应用程序迁移部署到 Amazon EC2 实例上的 AWS。EC2 实例将在专用 VPC 的 Auto Scaling 组中运行。公司需要使用安全工具来检查进出 VPC 的所有数据包。此检查必须实时进行，并且不得影响应用程序的性能。解决方案架构师必须在 AWS 上设计一个在 AWS 区域内高度可用的目标架构。\n解决方案架构师应采取哪些步骤组合来满足这些要求？（选择两个。",
      "a_cn": [
        "A.在现有 VPC 中的新 Auto Scaling 组的 EC2 实例上部署安全工具",
        "B.在网络负载均衡器后面部署 Web 应用程序",
        "C.在安全工具实例前面部署应用程序负载均衡器",
        "D.为每个可用区预置网关负载均衡器，以将流量重定向到安全工具",
        "E.配置中转网关，方便 VPC 之间的通信。"
      ],
      "aa": "C,D",
      "qK": "third-party security tool,15 years",
      "aK": [
        "Application Load Balancer",
        "Gateway Load Balancer"
      ]
    },
    {
      "no": 44,
      "q": "A company is running several workloads in a single AWS account. A new company policy states that engineers can provision only approved resources and that engineers must use AWS CloudFormation to provision these resources. A solutions architect needs to create a solution to enforce the new restriction on the IAM role that the engineers use for access.\nWhat should the solutions architect do to create the solution?",
      "a": [
        "A.Upload AWS CloudFormation templates that contain approved resources to an Amazon S3 bucket. Update the IAM policy for the engineers’ IAM role to only allow access to Amazon S3 and AWS CloudFormation. Use AWS CloudFormation templates to provision resources.",
        "B.Update the IAM policy for the engineers’ IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation.Use AWS CloudFormation templates to create stacks with approved resources.",
        "C.Update the IAM policy for the engineers’ IAM role with permissions to only allow AWS CloudFormation actions.Create a new IAM policy with permission to provision approved resources, and assign the policy to a new IAM service role.Assign the IAM service role to AWS CloudFormation during stack creation.",
        "D.Provision resources in AWS CloudFormation stacks.Update the IAM policy for the engineers’ IAM role to only allow access to their own AWS CloudFormation stack."
      ],
      "q_cn": "一家公司在单个 AWS 账户中运行多个工作负载。新的公司政策规定，工程师只能预置批准的资源，并且工程师必须使用 AWS CloudFormation 来预置这些资源。解决方案架构师需要创建一个解决方案，以对工程师用于访问的 IAM 角色强制实施新的限制。\n解决方案架构师应该做什么来创建解决方案？",
      "a_cn": [
        "A.将包含已批准资源的 AWS CloudFormation 模板上传到 Amazon S3 存储桶。更新工程师 IAM 角色的 IAM 策略，以仅允许访问 Amazon S3 和 AWS CloudFormation。使用 AWS CloudFormation 模板预置资源。",
        "B.更新工程师 IAM 角色的 IAM 策略，使其权限仅允许预置批准的资源和 AWS CloudFormation。使用 AWS CloudFormation 模板创建具有已批准资源的堆栈。",
        "C.更新工程师 IAM 角色的 IAM 策略，使其权限仅允许 AWS CloudFormation 操作。创建有权预置已批准资源的新 IAM 策略，并将该策略分配给新的 IAM 服务角色。在堆栈创建期间将 IAM 服务角色分配给 AWS CloudFormation。",
        "D.在 AWS CloudFormation 堆栈中预置资源。更新工程师 IAM 角色的 IAM 策略，以仅允许访问其自己的 AWS CloudFormation 堆栈。"
      ],
      "aa": "C",
      "qK": "approved resources,CloudFormation",
      "aK": [
        "CloudFormation actions,new IAM,service role"
      ]
    },
    {
      "no": 320,
      "q": "A company hosts an intranet web application on Amazon EC2 instances behind an Application Load Balancer(ALB).Currently, users authenticate to the application against an internal user database. The company needs to authenticate users to the application by using an existing AWS Directory Service for Microsoft Active Directory directory. All users with accounts in the directory must have access to the application.Which solution will meet these requirements?",
      "a": [
        "A.Create a new app client in the directory. Create a listener rule for the ALB. Specify the authenticate-oidc action for the listener rule. Configure the listener rule with the appropriate issuer, client ID and secret, and endpoint details for the Active Directory service. Configure the new app client with the callback URL that the ALB provides",
        "B.Configure an Amazon Cognito user pool.Configure the user pool with a federated identity provider (ldP) that has metadata from the directory. Create an app client. Associate the app client with the user pool.Create a listener rule for the ALB. Specify the authenticate-coanito action for the listener rule. Configure the listener rule to use the user pool and app client",
        "C.Add the directory as a new lAM identity provider (ldP), Create a new IAM role that has an entity type of SAML 2.0 federation. Configure a role policy that allows access to the ALB. Configure the new role as the default authenticated user role for the ldp. Create a listener rule for the ALB. Specify the authenticate-oidc action for the listener rule",
        "D.Enable AWS IAM ldentity Center (AWS Single Sign-On). Configure the directory as an external identity provider (ldP) that uses SAML. Use the automatic provisioning method. Create a new IAM role that has an entity type of SAML2.0 federation Configure a role policy that allows access to the ALB. Attach the new role to all groups. Create a listener rule for the ALB. Specify the authenticate-cognito action for the listener rule"
      ],
      "q_cn": "一家公司在应用程序负载均衡器 （ALB） 后面的 Amazon EC2 实例上托管内部网 Web 应用程序。目前，用户根据内部用户数据库向应用程序进行身份验证。公司需要使用用于 Active Directory 目录Microsoft现有 AWS Directory Service 对应用程序的用户进行身份验证。在目录中具有帐户的所有用户都必须有权访问该应用程序。哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "existing AWS Directory Service,Microsoft Active Directory",
      "aK": [
        "Configure an Amazon Cognito user pool"
      ]
    },
    {
      "no": 159,
      "q": "A solutions architect wants to cost-optimize and appropriately size Amazon EC2 instances in a single AWS account. The solutions architect wants to ensure that the instances are optimized based on CPU, memory, and network metrics.\nWhich combination of steps should the solutions architect take to meet these requirements?(Choose two.) ",
      "a": [
        "A.Purchase AWS Business Support or AWS Enterprise Support for the account.",
        "B.Turn on AWS Trusted Advisor and review any “Low Utilization Amazon EC2 Instances” recommendations.",
        "C.Install the Amazon CloudWatch agent and configure memory metric collection on the EC2 instances.",
        "D.Configure AWS Compute Optimizer in the AWS account to receive findings and optimization recommendations.",
        "E.Create an EC2 Instance Savings Plan for the AWS Regions, instance families, and operating systems of interest."
      ],
      "q_cn": "解决方案架构师希望在单个 AWS 账户中对 Amazon EC2 实例进行成本优化并适当调整其大小。解决方案架构师希望确保根据 CPU、内存和网络指标优化实例。\n解决方案架构师应采取哪些步骤组合来满足这些要求？（选择两个。",
      "a_cn": [
        "A.为账户购买 AWS 业务支持或 AWS 企业支持。",
        "B.打开 AWS Trusted Advisor 并查看任何“低利用率 Amazon EC2 实例”建议。",
        "C.在 EC2 实例上安装 Amazon CloudWatch 代理并配置内存指标收集。",
        "D.在 AWS 账户中配置 AWS 计算优化器以接收结果和优化建议。",
        "E.为感兴趣的 AWS 区域、实例系列和操作系统创建 EC2 实例节省计划。"
      ],
      "aa": "C,D",
      "qK": "cost-optimize,EC2,CPU,memory",
      "aK": [
        "CloudWatch agent",
        "Optimizer"
      ]
    },
    {
      "no": 170,
      "q": "A company needs to audit the security posture of a newly acquired AWS account. The company’s data security team requires a notification only when an Amazon S3 bucket becomes publicly exposed. The company has already established an Amazon Simple Notification Service (Amazon SNS) topic that has the data security team's email address subscribed.\nWhich solution will meet these requirements?",
      "a": [
        "A.Create an S3 event notification on all S3 buckets for the isPublic event. Select the SNS topic as the target for the event notifications.",
        "B.Create an analyzer in AWS Identity and Access Management Access Analyzer. Create an Amazon EventBridge rule for the event type “Access Analyzer Finding” with a filter for “isPublic: true.” Select the SNS topic as the EventBridge rule target.",
        "C.Create an Amazon EventBridge rule for the event type “Bucket-Level API Call via CloudTrail” with a filter for “PutBucketPolicy.” Select the SNS topic as the EventBridge rule target.",
        "D.Activate AWS Config and add the cloudtrail-s3-dataevents-enabled rule. Create an Amazon EventBridge rule for the event type “Config Rules Re-evaluation Status” with a filter for “NON_COMPLIANT.” Select the SNS topic as the EventBridge rule target."
      ],
      "q_cn": "公司需要审核新获得的 AWS 账户的安全状况。该公司的数据安全团队仅在 Amazon S3 存储桶公开时才需要通知。该公司已经建立了一个亚马逊简单通知服务（Amazon SNS）主题，该主题订阅了数据安全团队的电子邮件地址。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "S3 bucket becomes publicly,SNS",
      "aK": [
        "isPublic: true"
      ]
    },
    {
      "no": 241,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 235,
      "q": "An environmental company is deploying sensors in major cities throughout a country to measure air quality. The sensors connect to AWS IoT Core to ingest timeseries data readings. The company stores the data in Amazon DynamoDB.\nFor business continuity, the company must have the ability to ingest and store data in two AWS Regions.\nWhich solution will meet these requirements?",
      "a": [
        "A.Create an Amazon Route 53 alias failover routing policy with values for AWS IoT Core data endpoints in both Regions Migrate data to Amazon Aurora global tables.",
        "B.Create a domain configuration for AWS IoT Core in each Region. Create an Amazon Route 53 latency-based routing policy. Use AWS IoT Core data endpoints in both Regions as values. Migrate the data to Amazon MemoryDB for Redis and configure cross-Region replication.",
        "C.Create a domain configuration for AWS IoT Core in each Region. Create an Amazon Route 53 health check that evaluates domain configuration health. Create a failover routing policy with values for the domain name from the AWS IoT Core domain configurations. Update the DynamoDB table to a global table.",
        "D.Create an Amazon Route 53 latency-based routing policy. Use AWS IoT Core data endpoints in both Regions as values. Configure DynamoDB streams and cross-Region data replication."
      ],
      "q_cn": "一家环保公司正在全国主要城市部署传感器来测量空气质量。传感器连接到 AWS IoT Core 以提取时间序列数据读数。公司将数据存储在 Amazon DynamoDB 中。\n为实现业务连续性，公司必须能够在两个 AWS 区域中摄取和存储数据。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.使用两个区域中的 AWS IoT Core 数据终端节点将数据迁移到 Amazon Aurora 全局表的值创建 Amazon Route 53 别名故障转移路由策略。",
        "B.在每个区域中为 AWS IoT Core 创建域配置。创建基于 Amazon Route 53 延迟的路由策略。使用两个区域中的 AWS IoT Core 数据终端节点作为值。将数据迁移到适用于 Redis 的 Amazon MemoryDB 并配置跨区域复制。",
        "C.在每个区域中为 AWS IoT Core 创建域配置。创建用于评估域配置运行状况的 Amazon Route 53 运行状况检查。使用来自 AWS IoT 核心域配置的域名值创建故障转移路由策略。将 DynamoDB 表更新为全局表。",
        "D.创建基于 Amazon Route 53 延迟的路由策略。使用两个区域中的 AWS IoT Core 数据终端节点作为值。配置 DynamoDB 流和跨区域数据复制。"
      ],
      "aa": "C",
      "qK": "deploying sensors in major cities,measure air quality,timeseries data",
      "aK": [
        "Route 53 health check,IoT Core domain"
      ]
    },
    {
      "no": 229,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 158,
      "q": "A company is building a serverless application that runs on an AWS Lambda function that is attached to a VPC. The company needs to integrate the application with a new service from an external provider. The external provider supports only requests that come from public IPv4 addresses that are in an allow list.\nThe company must provide a single public IP address to the external provider before the application can start using the new service.\nWhich solution will give the application the ability to access the new service ? ",
      "a": [
        "A.Deploy a NAT gateway. Associate an Elastic IP address with the NAT gateway. Configure the VPC to use the NAT gateway.",
        "B.Deploy an egress-only internet gateway.Associate an Elastic IP address with the egress-only internet gateway.Configure the elastic network interface on the Lambda function to use the egress-only internet gateway.",
        "C.Deploy an internet gateway.Associate an Elastic IP address with the internet gateway.Configure the Lambda function to use the internet gateway.",
        "D.Deploy an internet gateway.Associate an Elastic IP address with the internet gateway.Configure the default route in the public VPC route table to use the internet gateway."
      ],
      "q_cn": "一家公司正在构建一个无服务器应用程序，该应用程序在附加到 VPC 的 AWS Lambda 函数上运行。公司需要将应用程序与外部提供商的新服务集成。外部提供程序仅支持来自允许列表中的公共 IPv4 地址的请求。\n公司必须向外部提供商提供单个公共 IP 地址，然后应用程序才能开始使用新服务。\n      哪种解决方案将使应用程序能够访问新服务？",
      "a_cn": [
        "A.部署 NAT 网关。将弹性 IP 地址与 NAT 网关关联。将 VPC 配置为使用 NAT 网关。",
        "B.部署仅出口互联网网关。将弹性 IP 地址与仅出口互联网网关关联。在 Lambda 函数上配置弹性网络接口以使用仅出口互联网网关。",
        "C.部署互联网网关。将弹性 IP 地址与互联网网关关联。将 Lambda 函数配置为使用互联网网关。",
        "D.部署互联网网关。将弹性 IP 地址与互联网网关关联。在公有 VPC 路由表中配置默认路由以使用互联网网关。"
      ],
      "aa": "A",
      "qK": "Lambda,VPC,IPv4,provide a single public IP",
      "aK": [
        "NAT gateway"
      ]
    },
    {
      "no": 120,
      "q": "A company consists or two separate business units. Each business unit has its own AWS account within a single organization in AWS Organizations. The business units regularly share sensitive documents with each other. To facilitate sharing, the company created an Amazon S3 bucket in each account and configured low-way replication between the S3 buckets. The S3 buckets have millions of objects.\nRecently, a security audit identified that neither S3 bucket has encryption at rest enabled.Company policy requires that all documents must be stored with encryption at rest.The company wants to implement server-side encryption with Amazon S3 managed encryption keys(SSE-S3).\nWhat is the MOST operationally efficient solution that meets these requirements ? ",
      "a": [
        "A.Turn on SSE-S3 on both S3 buckets. Use S3 Batch Operations to copy and encrypt the objects in the same location.",
        "B.Create an AWS Key Management Service(AWS KMS) key in each account.Turn on server-side encryption with AWS KMS keys(SSE-KMS) on each S3 bucket by using the corresponding KMS key in that AWS account.Encrypt the existing objects by using an S3 copy command in the AWS CLI.",
        "C.Turn on SSE-S3 on both S3 buckets.Encrypt the existing objects by using an S3 copy command in the AWS CLI.",
        "D.Create an AWS Key Management Service, (AWS KMS) key in each account.Turn on server-side encryption with AWS KMS keys(SSE-KMS) on each S3 bucket by using the corresponding KMS key in that AWS account.Use S3 Batch Operations to copy the objects into the same location."
      ],
      "q_cn": "公司由两个独立的业务部门组成。每个业务部门在 AWS 组织的单个组织中都有自己的 AWS 账户。业务部门定期相互共享敏感文档。为了便于共享，该公司在每个账户中创建了一个 Amazon S3 存储桶，并在 S3 存储桶之间配置了低路复制。S3 存储桶有数百万个对象。\n最近，一项安全审计发现，两个 S3 存储桶都没有启用静态加密。公司策略要求所有文档必须以静态加密存储。该公司希望使用 Amazon S3 托管加密密钥 （SSE-S3） 实施服务器端加密。\n    满足这些要求的最具运营效率的解决方案是什么？",
      "a_cn": [
        "A.在两个 S3 存储桶上打开 SSE-S3。使用 S3 分批操作复制和加密同一位置的对象。",
        "B.在每个账户中创建 AWS 密钥管理服务 （AWS KMS） 密钥。通过使用每个 AWS 账户中的相应 KMS 密钥，在每个 S3 存储桶上启用使用 AWS KMS 密钥 （SSE-KMS） 的服务器端加密。使用 AWS CLI 中的 S3 复制命令加密现有对象。",
        "C.在两个 S3 存储桶上打开 SSE-S3。使用 AWS CLI 中的 S3 复制命令加密现有对象。",
        "D.在每个账户中创建一个 AWS 密钥管理服务 （AWS KMS） 密钥。通过使用每个 AWS 账户中的相应 KMS 密钥，在每个 S3 存储桶上启用使用 AWS KMS 密钥 （SSE-KMS） 的服务器端加密。使用 S3 分批操作将对象复制到同一位置。"
      ],
      "aa": "A",
      "qK": "low-way replication,SSE-S3",
      "aK": [
        "SSE-S3,S3 Batch,same location"
      ]
    },
    {
      "no": 228,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 285,
      "q": "A company uses AWS CloudFormation to deploy applications within multiple VPCs that are all attached to a transit gateway. Each VPC that sends traffic to the public internet must send the traffic through a shared services VPC. Each subnet within a VPC uses the default VPC route table, and the traffic is routed to the transit gateway. The transit gateway uses its default route table for any VPC attachment.\nA security audit reveals that an Amazon EC2 instance that is deployed within a VPC can communicate with an EC2 instance that is deployed in any of the company's other VPCs. A solutions architect needs to limit the traffic between the VPCs. Each VPC must be able to communicate only with a predefined, limited set of authorized VPCs.\nWhat should the solutions architect do to meet these requirements?",
      "a": [
        "A.Update the network ACL of each subnet within a VPC to allow outbound traffic only to the authorized VPCs. Remove all deny rules except the default deny rule.",
        "B.Update all the security groups that are used within a VPC to deny outbound traffic to security groups that are used within the unauthorized VPCs.",
        "C.Create a dedicated transit gateway route table for each VPC attachment. Route traffic only to the authorized VPCs.",
        "D.Update the main route table of each VPC to route traffic only to the authorized VPCs through the transit gateway."
      ],
      "q_cn": "一家公司使用 AWS CloudFormation 在多个 VPC 中部署应用程序，这些 VPC 都连接到中转网关。向公共互联网发送流量的每个 VPC 必须通过共享服务 VPC 发送流量。VPC 中的每个子网都使用默认 VPC 路由表，流量将路由到中转网关。中转网关将其默认路由表用于任何 VPC 连接。\n安全审计显示，部署在 VPC 中的 Amazon EC2 实例可以与部署在公司任何其他 VPC 中的 EC2 实例进行通信。解决方案架构师需要限制 VPC 之间的流量。每个 VPC 必须只能与一组预定义的有限授权 VPC 进行通信。\n解决方案架构师应采取哪些措施来满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "internet,through a shared services VPC",
      "aK": [
        "Create a dedicated transit gateway,each VPC attachment"
      ]
    },
    {
      "no": 212,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,B,D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 223,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,C,E",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 230,
      "q": "A company is running an application in the AWS Cloud. The core business logic is running on a set of Amazon EC2 instances in an Auto Scaling group. An Application Load Balancer (ALB) distributes traffic to the EC2 instances. Amazon Route 53 record api.example.com is pointing to the ALB.\nThe company's development team makes major updates to the business logic. The company has a rule that when changes are deployed, only 10% of customers can receive the new logic during a testing window. A customer must use the same version of the business logic during the testing window.\nHow should the company deploy the updates to meet these requirements?",
      "a": [
        "A.Create a second ALB, and deploy the new logic to a set of EC2 instances in a new Auto Scaling group.Configure the ALB to distribute traffic to the EC2 instances. Update the Route 53 record to use weighted routing, and point the record to both of the ALBs.",
        "B.Create a second target group that is referenced by the ALB. Deploy the new logic to EC2 instances in this new target group. Update the ALB listener rule to use weighted target groups. Configure ALB target group stickiness.",
        "C.Create a new launch configuration for the Auto Scaling group. Specify the launch configuration to use the AutoScaIingRoIIingUpdate policy, and set the MaxBatchSize option to 10. Replace the launch configuration on the Auto Scaling group. Deploy the changes.",
        "D.Create a second Auto Scaling group that is referenced by the ALB. Deploy the new logic on a set of EC2 instances in this new Auto Scaling group. Change the ALB routing algorithm to least outstanding requests (LOR). Configure ALB session stickiness."
      ],
      "q_cn": "一家公司在 AWS 云中运行应用程序。核心业务逻辑在 Auto Scaling 组中的一组 Amazon EC2 实例上运行。应用程序负载均衡器 （ALB） 将流量分配到 EC2 实例。Amazon Route 53 记录 api.example.com 指向 ALB。n公司的开发团队对业务逻辑进行了重大更新。该公司有一条规则，即在部署更改时，只有 10% 的客户可以在测试窗口期间接收新逻辑。客户在测试窗口期间必须使用相同版本的业务逻辑。n公司应如何部署更新以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "only 10% of customers",
      "aK": [
        "target group"
      ]
    },
    {
      "no": 226,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 296,
      "q": "A company needs to build a disaster recovery (DR) solution for its ecommerce website. The web application is hosted on a fleet of t3.large Amazon EC2 instances and uses an Amazon RDS for MySQL DB instance. The EC2 instances are in an Auto Scaling group that extends across multiple Availability Zones.\nIn the event of a disaster, the web application must fail over to the secondary environment with an RPO of 30 seconds and an RTO of 10 minutes.\nWhich solution will meet these requirements MOST cost- effectively ? ",
      "a": [
        "A.Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Create a cross-Region read replica for the DB instance. Set up a backup plan in AWS Backup to create cross-Region backups for the EC2 instances and the DB instance. Create a cron expression to back up the EC2 instances and the DB instance every 30 seconds to the DR Region. Recover the EC2 instances from the latest EC2 backup. Use an Amazon Route 53 geolocation routing policy to automatically fail over to the DR Region in the event of a disaster.",
        "B.Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Create a cross-Region read replica for the DB instance. Set up AWS Elastic Disaster Recovery to continuously replicate the EC2 instances to the DR Region. Run the EC2 instances at the minimum capacity in the DR Region. Use an Amazon Route 53 failover routing policy to automatically fail over to the DR Region in the event of a disaster. Increase the desired capacity of the Auto Scaling group.",
        "C.Set up a backup plan in AWS Backup to create cross-Region backups for the EC2 instances and the DB instance. Create a cron expression to back up the EC2 instances and the DB instance every 30 seconds to the DR Region. Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Manually restore the backed-up data on new instances. Use an Amazon Route 53 simple routing policy to automatically fail over to the DR Region in the event of a disaster.",
        "D.Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Create an Amazon Aurora global database. Set up AWS Elastic Disaster Recovery to continuously replicate the EC2 instances to the DR Region. Run the Auto Scaling group of EC2 instances at full capacity in the DR Region. Use an Amazon Route 53 failover routing policy to automatically fail over to the DR Region in the event of a disaster."
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "disaster recovery (DR),t3.large,RPO of 30,RTO of 10",
      "aK": [
        "Run the EC2,minimum capacity,Increase"
      ]
    },
    {
      "no": 209,
      "q": "A company has a data lake in Amazon S3 that needs to be accessed by hundreds of applications across many AWS accounts. The company's information security policy states that the S3 bucket must not be accessed over the public internet and that each application should have the minimum permissions necessary to function.To meet these requirements, a solutions architect plans to use an S3 access point that is restricted to specific VPCs for each application.Which combination of steps should the solutions architect take to implement this solution? (Choose two.)",
      "a": [
        "A.Create an S3 access point for each application in the AWS account that owns the S3 bucket. Configure each access point to be accessible only from the application's VPC. Update the bucket policy to require access from an access point",
        "B.Create an interface endpoint for Amazon S3 in each application's VPC. Configure the endpoint policy to allow access to an S3 access point. Create a VPC gateway attachment for the S3 endpoint",
        "C.Create a gateway endpoint for Amazon S3 in each application's VPC. Configure the endpoint policy to allow access to an S3 access point. Specify the route table that is used to access the access point.",
        "D.Create an S3 access point for each application in each AWS account and attach the access points to the S3 bucket. Configure each access point to be accessible only from the application's VPC. Update the bucket policy to require access from an access point.",
        "E.Create a gateway endpoint for Amazon S3 in the data lake's VPC. Attach an endpoint policy to allow access to the S3 bucket. Specify the route table that is used to access the bucket"
      ],
      "q_cn": "一家公司在 Amazon S3 中有一个数据湖，需要由许多 AWS 账户中的数百个应用程序访问。该公司的信息安全策略规定，不得通过公共互联网访问 S3 存储桶，并且每个应用程序都应具有运行所需的最低权限。为了满足这些要求，解决方案架构师计划使用仅限于每个应用程序的特定 VPC 的 S3 访问点。解决方案架构师应采用哪些步骤组合来实现此解决方案？（选择两个。",
      "a_cn": [
        "A.为拥有 S3 存储桶的 AWS 账户中的每个应用程序创建一个 S3 访问点。将每个访问点配置为只能从应用程序的 VPC 访问。更新存储桶策略以要求从访问点进行访问",
        "B.在每个应用程序的 VPC 中为 Amazon S3 创建一个接口终端节点。配置终端节点策略以允许访问 S3 访问点。为 S3 终端节点创建 VPC 网关连接",
        "C.在每个应用程序的 VPC 中为 Amazon S3 创建一个网关终端节点。配置终端节点策略以允许访问 S3 访问点。指定用于访问接入点的路由表。",
        "D.为每个 AWS 账户中的每个应用程序创建一个 S3 访问点，并将访问点附加到 S3 存储桶。将每个访问点配置为只能从应用程序的 VPC 访问。更新存储桶策略以要求从访问点进行访问。",
        "E.在数据湖的 VPC 中为 Amazon S3 创建网关终端节点。附加终端节点策略以允许访问 S3 存储桶。指定用于访问存储桶的路由表"
      ],
      "aa": "A,C",
      "qK": "data lake,specific VPCs",
      "aK": [
        "owns",
        "gateway endpoint,application's VPC"
      ]
    },
    {
      "no": 191,
      "q": "A company uses a Grafana data visualization solution that runs on a single Amazon EC2 instance to monitor the health of the company's AWS workloads. The company has invested time and effort to create dashboards that the company wants to preserve. The dashboards need to be highly available and cannot be down for longer than 10 minutes. The company needs to minimize ongoing maintenance.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      "a": [
        "A.Migrate to Amazon CloudWatch dashboards. Recreate the dashboards to match the existing Grafana dashboards. Use automatic dashboards where possible.",
        "B.Create an Amazon Managed Grafana workspace.Configure a new Amazon CloudWatch data source.Export dashboards from the existing Grafana instance.Import the dashboards into the new workspace.",
        "C.Create an AMI that has Grafana pre-installed.Store the existing dashboards in Amazon Elastic File System(Amazon EFS).Create an Auto Scaling group that uses the new AMI.Set the Auto Scaling group's minimum, desired, and maximum number of instances to one. Create an Application Load Balancer that serves at least two Availability Zones.",
        "D.Configure AWS Backup to back up the EC2 instance that runs Grafana once each hour.Restore the EC2 instance from the most recent snapshot in an alternate Availability Zone when required."
      ],
      "q_cn": "一家公司使用在单个 Amazon EC2 实例上运行的 Grafana 数据可视化解决方案来监控公司 AWS 工作负载的运行状况。该公司已投入时间和精力来创建公司想要保留的仪表板。仪表板需要高度可用，并且关闭时间不能超过 10 分钟。公司需要尽量减少持续维护。\n哪种解决方案能够以最少的运营开销满足这些要求？",
      "a_cn": [
        "A.迁移到 Amazon CloudWatch 控制面板。重新创建仪表板以匹配现有的 Grafana 仪表板。尽可能使用自动仪表板。",
        "B.创建 Amazon Managed Grafana 工作区。配置新的 Amazon CloudWatch 数据源。从现有 Grafana 实例导出控制面板。将仪表板导入新工作区。",
        "C.创建预装了 Grafana 的 AMI。将现有控制面板存储在 Amazon Elastic File System （Amazon EFS） 中。创建使用新 AMI 的自动扩展组。将 Auto Scaling 组的最小实例数、所需实例数和最大实例数设置为 1。创建至少为两个可用区提供服务的应用程序负载均衡器。",
        "D.将 AWS Backup 配置为每小时备份一次运行 Grafana 的 EC2 实例。需要时，从备用可用区中的最新快照还原 EC2 实例。"
      ],
      "aa": "B",
      "qK": "Grafana data",
      "aK": [
        "Grafana workspace"
      ]
    },
    {
      "no": 283,
      "q": "A company wants to migrate to AWS. The company wants to use a multi-account structure with centrally managed access to all accounts and applications. The company also wants to keep the traffic on a private network. Multi-factor authentication (MFA) is required at login, and specific roles are assigned to user groups.\nThe company must create separate accounts for development.staging, production, and shared network.The production account and the shared network account must have connectivity to all accounts.The development account and the staging account must have access only to each other.\nWhich combination of steps should a solutions architect take 10 meet these requirements?(Choose three.) ",
      "a": [
        "A.Deploy a landing zone environment by using AWS Control Tower. Enroll accounts and invite existing accounts into the resulting organization in AWS Organizations.",
        "B.Enable AWS Security Hub in all accounts to manage cross-account access. Collect findings through AWS CloudTrail to force MFA login.",
        "C.Create transit gateways and transit gateway VPC attachments in each account. Configure appropriate route tables.",
        "D.Set up and enable AWS IAM Identity Center (AWS Single Sign-On). Create appropriate permission sets with required MFA for existing accounts.",
        "E.Enable AWS Control Tower in all accounts to manage routing between accounts. Collect findings through AWS CloudTrail to force MFA login.",
        "F.Create IAM users and groups. Configure MFA for all users. Set up Amazon Cognoto user pools and Identity pools to manage access to accounts and between accounts."
      ],
      "q_cn": "一家公司想要迁移到 AWS。该公司希望使用多账户结构，集中管理对所有账户和应用程序的访问权限。该公司还希望将流量保留在专用网络上。登录时需要多重身份验证 （MFA），并将特定角色分配给用户组。\n公司必须为开发、暂存、生产和共享网络创建单独的帐户。生产帐户和共享网络帐户必须连接到所有帐户。开发帐户和暂存帐户必须只能相互访问。\n解决方案架构师应采取哪些步骤组合 10 满足这些要求？（选择三个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,C,D",
      "qK": "multi-account structure,all accounts and applications,private network,MFA",
      "aK": [
        "Deploy a landing zone,Create transit gateways,Set up and enable,Identity Center,Single Sign-On"
      ]
    },
    {
      "no": 150,
      "q": "A company wants to use AWS to create a business continuity solution in case the company's main on-premises application fails. The application runs on physical servers that also run other applications. The on-premises application that the company is planning to migrate uses a MySQL database as a data store. All the company's on-premises applications use operating systems that are compatible with Amazon EC2.\nWhich solution will achieve the company's goal with the LEAST operational overhead?",
      "a": [
        "A.Install the AWS Replication Agent on the source servers, including the MySQL servers. Set up replication for all servers. Launch test instances for regular drills. Cut over to the test instances to fail over the workload in the case of a failure event.",
        "B.Install the AWS Replication Agent on the source servers, including the MySQL servers.Initialize AWS Elastic Disaster Recovery in the target AWS Region.Define the launch settings.Frequently perform failover and fallback from the most recent point in time.",
        "C.Create AWS Database Migration Service(AWS DMS) replication servers and a target Amazon Aurora MySQL DB cluster to host the database.Create a DMS replication task to copy the existing data to the target DB cluster.Create a local AWS Schema Conversion Tool(AWS SCT) change data capture(CDC) task to keep the data synchronized.Install the rest of the software on EC2 instances by starting with a compatible base AMI.",
        "D.Deploy an AWS Storage Gateway Volume Gateway on premises.Mount volumes on all on-premises servers.Install the application and the MySQL database on the new volumes.Take regular snapshots.Install all the software on EC2 Instances by starting with a compatible base AMI.Launch a Volume Gateway on an EC2 instance.Restore the volumes from the latest snapshot.Mount the new volumes on the EC2 instances in the case of a failure event."
      ],
      "q_cn": "一家公司希望使用 AWS 创建业务连续性解决方案，以防该公司的主要本地应用程序出现故障。应用程序在也运行其他应用程序的物理服务器上运行。公司计划迁移的本地应用程序使用 MySQL 数据库作为数据存储。该公司的所有本地应用程序都使用与 Amazon EC2 兼容的操作系统。\n哪种解决方案能够以最少的运营开销实现公司的目标？",
      "a_cn": [
        "A.在源服务器（包括 MySQL 服务器）上安装 AWS 复制代理。为所有服务器设置复制。启动测试实例以进行常规演练。切换到测试实例，以便在发生故障事件时故障转移工作负载。",
        "B.在源服务器（包括 MySQL 服务器）上安装 AWS 复制代理。在目标 AWS 区域中初始化 AWS 弹性灾难恢复。定义启动设置。经常从最近的时间点执行故障转移和回退。",
        "C.创建 AWS Database Migration Service （AWS DMS） 复制服务器和目标 Amazon Aurora MySQL 数据库集群来托管数据库。创建 DMS 复制任务以将现有数据复制到目标数据库集群。创建本地 AWS 架构转换工具 （AWS SCT） 更改数据捕获 （CDC） 任务以保持数据同步。从兼容的基本 AMI 开始，在 EC2 实例上安装其余软件。",
        "D.在本地部署 AWS 存储网关卷网关。在所有本地服务器上装载卷。在新卷上安装应用程序和 MySQL 数据库。定期拍摄快照。从兼容的基本 AMI 开始，在 EC2 实例上安装所有软件。在 EC2 实例上启动卷网关。从最新快照还原卷。在发生故障事件时在 EC2 实例上挂载新卷。"
      ],
      "aa": "C",
      "qK": "application runs on physical servers",
      "aK": [
        "DMS,SCT,CDC"
      ]
    },
    {
      "no": 142,
      "q": "A company runs an application on a fleet of Amazon EC2 instances that are in private subnets behind an internet-facing Application Load Balancer (ALB). The ALB is the origin for an Amazon CloudFront distribution. An AWS WAF web ACL that contains various AWS managed rules is associated with the CloudFront distribution.\nThe company needs a solution that will prevent internet traffic from directly accessing the ALB.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      "a": [
        "A.Create a new web ACL that contains the same rules that the existing web ACL contains. Associate the new web ACL with the ALB.",
        "B.Associate the existing web ACL with the ALB.",
        "C.Add a security group rule to the ALB to allow traffic from the AWS managed prefix list for CloudFront only.",
        "D.Add a security group rule to the ALB to allow only the various CloudFront IP address ranges."
      ],
      "q_cn": "一家公司在面向互联网的应用程序负载均衡器 （ALB） 后面的私有子网中的 Amazon EC2 实例队列上运行应用程序。ALB 是 Amazon CloudFront 分配的源。包含各种 AWS 托管规则的 AWS WAF Web ACL 与 CloudFront 分配相关联。\n该公司需要一种解决方案来防止互联网流量直接访问 ALB。\n哪种解决方案能够以最少的运营开销满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "internet-facing,ALB,origin for,CloudFront",
      "aK": [
        "CloudFront only"
      ]
    },
    {
      "no": 281,
      "q": "A company is using an organization in AWS Organizations to manage hundreds of AWS accounts. A solutions architect is working on a solution to provide baseline protection for the Open Web Application Security Project (OWASP) top 10 web application vulnerabilities. The solutions architect is using AWS WAF for all existing and new Amazon CloudFront distributions that are deployed within the organization.\nWhich combination of steps should the solutions architect take to provide the baseline protection?(Choose three.) ",
      "a": [
        "A.Enable AWS Config in all accounts",
        "B.Enable Amazon GuardDuty in all accounts",
        "C.Enable all features for the organization",
        "D.Use AWS Firewall Manager to deploy AWS WAF rules in all accounts for all CloudFront distributions",
        "E.Use AWS Shield Advanced to deploy AWS WAF rules in all accounts for all CloudFront distributions",
        "F.Use AWS Security Hub to deploy AWS WAF rules in all accounts for all CloudFront distributions"
      ],
      "q_cn": "一家公司正在使用 AWS Organizations 中的组织来管理数百个 AWS 账户。解决方案架构师正在开发一种解决方案，为开放 Web 应用程序安全项目 （OWASP） 的前 10 个 Web 应用程序漏洞提供基线保护。解决方案架构师将 AWS WAF 用于组织内部署的所有现有和新的 Amazon CloudFront 分配。\n解决方案架构师应采取哪些步骤组合来提供基准保护？（选择三个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,C,D",
      "qK": "Open Web Application Security Project (OWASP) top 10 web application vulnerabilities",
      "aK": [
        "AWS Config,Enable all features,AWS Firewall Manager"
      ]
    },
    {
      "no": 321,
      "q": "A company has an application that uses an Amazon Aurora PostgreSQL DB cluster for the application's database. The DB cluster contains one small primary instance and three larger replica instances. The application runs on an AWS Lambda function. The application makes many short-lived connections to the database's replica instances to perform read-only operations. During periods of high traffic. the application becomes unreliable and the database reports that too many connections are being established.The frequency of high-traffic periods is unpredictable. Which solution will improve the reliability of the application?",
      "a": [
        "A.Use Amazon RDS Proxy to create a proxy for the DB cluster. Configure a read-only endpoint for the proxy. Update the Lambda function to connect to the proxy endpoint",
        "B.Increase the max connections setting on the DB cluster's parameter group. Reboot all the instances in the DB cluster. Update the Lambda function to connect to the DB cluster endpoint",
        "C.Configure instance scaling for the DB cluster to occur when the DatabaseConnections metric is close to the max connections setting. Update the Lambda function to connect to the Aurora reader endpoint",
        "D.Use Amazon RDS Proxy to create a proxy for the DB cluster. Configure a read-only endpoint for the Aurora Data API on the proxy. Update the Lambda function to connect to the proxy endpoint"
      ],
      "q_cn": "一家公司有一个应用程序，该应用程序将 Amazon Aurora PostgreSQL 数据库集群用于应用程序的数据库。数据库集群包含一个小型主实例和三个较大的副本实例。应用程序在 AWS Lambda 函数上运行。应用程序与数据库的副本实例建立许多短期连接以执行只读操作。在高流量期间。应用程序变得不可靠，数据库报告正在建立太多连接。高流量时段的频率是不可预测的。哪种解决方案将提高应用程序的可靠性？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "one small primary instance,three larger replica instances,short-lived connections",
      "aK": [
        "RDS Proxy,Aurora Data API"
      ]
    },
    {
      "no": 34,
      "q": "A company is developing and hosting several projects in the AWS Cloud. The projects are developed across multiple AWS accounts under the same organization in AWS Organizations. The company requires the cost for cloud infrastructure to be allocated to the owning project. The team responsible for all of the AWS accounts has discovered that several Amazon EC2 instances are lacking the Project tag used for cost allocation.\nWhich actions should a solutions architect take to resolve the problem and prevent it from happening in the future?(Choose three.) ",
      "a": [
        "A.Create an AWS Config rule in each account to find resources with missing tags.",
        "B.Create an SCP in the organization with a deny action for ec2: Runlnstances if the Project tag is missing.",
        "C.Use Amazon Inspector in the organization to find resources with missing tags.",
        "D.Create an IAM policy in each account with a deny action for ec2: Runlnstances if the Project tag is missing.",
        "E.Create an AWS Config aggregator for the organization to collect a list of EC2 instances with the missing Project tag.",
        "F.Use AWS Security Hub to aggregate a list of EC2 instances with the missing Project tag."
      ],
      "q_cn": "一家公司正在 AWS 云中开发和托管多个项目。这些项目是跨 AWS 组织中同一组织下的多个 AWS 账户开发的。该公司要求将云基础架构的成本分配给所属项目。负责所有 AWS 账户的团队发现，多个 Amazon EC2 实例缺少用于成本分配的项目标签。\n解决方案架构师应采取哪些措施来解决问题并防止将来发生？（选择三个。",
      "a_cn": [
        "A.在每个账户中创建一个 AWS Config 规则，以查找缺少标签的资源。",
        "B.在组织中创建一个 SCP，如果缺少项目标记，则对 ec2：Runlnstances 执行拒绝操作。",
        "C.在组织中使用 Amazon Inspector 查找缺少标签的资源。",
        "D.在每个账户中创建一个 IAM 策略，如果缺少项目标签，则使用 ec2：Runlnstances 的拒绝操作。",
        "E.为组织创建 AWS Config 聚合器，以收集缺少项目标签的 EC2 实例列表。",
        "F.使用 AWS Security Hub 聚合缺少项目标签的 EC2 实例列表。"
      ],
      "aa": "A,B,E",
      "qK": "EC2,lacking the Project tag,cost allocation",
      "aK": [
        "AWS Config",
        "SCP",
        "AWS Config"
      ]
    },
    {
      "no": 267,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 271,
      "q": "A company needs to create and manage multiple AWS accounts for a number of departments from a central location. The security team requires read-only access to all accounts from its own AWS account. The company is using AWS Organizations and created an account for the security team.\nHow should a solutions architect meet these requirements?",
      "a": [
        "A.Use the OrganizationAccountAccessRole IAM role to create a new IAM policy with read-only access in each member account. Establish a trust relationship between the IAM policy in each member account and the security account. Ask the security team to use the IAM policy to gain access.",
        "B.Use the OrganizationAccountAccessRole IAM role to create a new IAM role with read-only access in each member account. Establish a trust relationship between the IAM role in each member account and the security account. Ask the security team to use the IAM role to gain access.",
        "C.Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the management account from the security account. Use the generated temporary credentials to gain access.",
        "D.Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the member account from the security account. Use the generated temporary credentials to gain access."
      ],
      "q_cn": "公司需要从一个中心位置为多个部门创建和管理多个 AWS 账户。安全团队需要从自己的 AWS 账户对所有账户具有只读访问权限。该公司正在使用 AWS Organizations 并为安全团队创建了一个账户。\n解决方案架构师应如何满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "central location,security team,read-only access to all accounts",
      "aK": [
        "IAM role with read-only"
      ]
    },
    {
      "no": 261,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 264,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 15,
      "q": "A company is using multiple AWS accounts. The DNS records are stored in a private hosted zone for Amazon Route 53 in Account A. The company's applications and databases are running in Account B.\nA solutions architect will deploy a two-tier application in a new VPC. To simplify the configuration, the db.example.com CNAME record set for the Amazon RDS endpoint was created in a private hosted zone for Amazon Route 53.\nDuring deployment, the application failed to start. Troubleshooting revealed that db.example.com is not resolvable on the Amazon EC2 instance. The solutions architect confirmed that the record set was created correctly in Route 53.\nWhich combination of steps should the solutions architect take to resolve this issue? (Choose two.)",
      "a": [
        "A. Deploy the database on a separate EC2 instance in the new VPC. Create a record set for the instance's private IP in the private hosted zone.",
        "B.Use SSH to connect to the application tier EC2 instance.Add an RDS endpoint IP address to the / etc / resolv.conf file.",
        "C.Create an authorization to associate the private hosted zone in Account A with the new VPC in Account B.",
        "D.Create a private hosted zone for the example com domain in Account B.Configure Route 53 replication between AWS accounts.",
        "E.Associate a new VPC in Account B with a hosted zone in Account A.Delete the association authorization in Account A."
      ],
      "q_cn": "一家公司正在使用多个 AWS 账户。DNS 记录存储在账户 A 中 Amazon Route 53 的私有托管区域中。公司的应用程序和数据库在账户 B 中运行。\n解决方案架构师将在新的 VPC 中部署双层应用程序。为了简化配置，在 Amazon Route 53 的私有托管区域中创建了 Amazon RDS 终端节点的 db.example.com 别名记录集。\n在部署期间，应用程序无法启动。故障排除显示，db.example.com 无法在 Amazon EC2 实例上解析。解决方案架构师确认记录集已在 Route 53 中正确创建。\n解决方案架构师应采取哪些步骤组合来解决此问题？（选择两个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "C,E",
      "qK": "Account A,Account B,db.example.com CNAME",
      "aK": [
        "Create an authorization,associate,Associate"
      ]
    },
    {
      "no": 63,
      "q": "A software company has deployed an application that consumes a REST API by using Amazon API Gateway, AWS Lambda functions, and an Amazon DynamoDB table.The application is showing an increase in the number of errors during PUT requests.Most of the PUT calls come from a small number of clients that are authenticated with specific API keys.\nA solutions architect has identified that a large number of the PUT requests originate from one client.The API is noncritical, and clients can tolerate retries of unsuccessful calls.However, the errors are displayed to customers and are causing damage to the API's reputation.\nWhat should the solutions architect recommend to improve the customer experience?",
      "a": [
        "A.Implement retry logic with exponential backoff and irregular variation in the client application. Ensure that the errors are caught and handled with descriptive error messages.",
        "B.Implement API throttling through a usage plan at the API Gateway level.Ensure that the client application handles code 429 replies without error.",
        "C.Turn on API caching to enhance responsiveness for the production stage.Run 10-minute load tests.Verify that the cache capacity is appropriate for the workload.",
        "D.Implement reserved concurrency at the Lambda function level to provide the resources that are needed during sudden increases in traffic."
      ],
      "q_cn": "一家软件公司部署了一个应用程序，该应用程序使用 Amazon API Gateway、AWS Lambda 函数和 Amazon 使用 REST API DynamoDB 表。应用程序显示 PUT 请求期间的错误数增加。大多数 PUT 调用来自少数使用特定 API 密钥进行身份验证的客户端。\n解决方案架构师已确定大量 PUT 请求源自一个客户端。API 是非关键性的，客户端可以容忍重试不成功的调用。但是，这些错误会显示给客户，并导致 API 的声誉受损。\n解决方案架构师应该推荐什么来改善客户体验？",
      "a_cn": [
        "A.在客户端应用程序中实现具有指数退避和不规则变化的重试逻辑。确保捕获错误并使用描述性错误消息进行处理。",
        "B.通过 API 网关级别的使用计划实现 API 限制。确保客户端应用程序处理代码 429 回复时没有错误。",
        "C.启用 API 缓存以增强生产阶段的响应能力。运行 10 分钟的负载测试。验证缓存容量是否适合工作负载。",
        "D.在 Lambda 函数级别实施预留并发，以提供流量突然增加时所需的资源。"
      ],
      "aa": "A",
      "qK": "PUT",
      "aK": [
        "descriptive error messages"
      ]
    },
    {
      "no": 199,
      "q": "A media storage application uploads user photos to Amazon S3 for processing. End users are reporting that some uploaded photos are not being processed properly. The Application Developers trace the logs and find that AWS Lambda is experiencing execution issues when thousands of users are on the system simultaneously. Issues are caused by:\n - Limits around concurrent executions.\n - The performance of Amazon DynamoDB when saving data.\nWhich actions can be taken to increase the performance and reliability of the application?(Choose two.) ",
      "a": [
        "A.Evaluate and adjust the read capacity units (RCUs) for the DynamoDB tables.",
        "B.Evaluate and adjust the write capacity units (WCUs) for the DynamoDB tables.",
        "C.Add an Amazon ElastiCache layer to increase the performance of Lambda functions.",
        "D.Configure a dead letter queue that will reprocess failed or timed-out Lambda functions.",
        "E.Use S3 Transfer Acceleration to provide lower-latency access to end users."
      ],
      "q_cn": "媒体存储应用程序将用户照片上传到 Amazon S3 进行处理。最终用户报告说，某些上传的照片未得到正确处理。应用程序开发人员跟踪日志，发现当数千个用户同时在系统上时，AWS Lambda 遇到执行问题。问题由以下原因引起：\n - 并发执行的限制。\n - 保存数据时 Amazon DynamoDB 的性能。\n可以采取哪些措施来提高应用程序的性能和可靠性？（选择两个。",
      "a_cn": [
        "A.评估和调整 DynamoDB 表的读取容量单位 （RCU）。",
        "B.评估和调整 DynamoDB 表的写入容量单位 （WCU）。",
        "C.添加 Amazon ElastiCache 层以提高 Lambda 函数的性能。",
        "D.配置将重新处理失败或超时的 Lambda 函数的死信队列。",
        "E.使用 S3 传输加速为最终用户提供低延迟访问。"
      ],
      "aa": "B,D",
      "qK": "uploads user photos,thousands of users",
      "aK": [
        "WCUs,dead letter queue"
      ]
    },
    {
      "no": 233,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 275,
      "q": "A company is running a containerized application in the AWS Cloud. The application is running by using Amazon Elastic Container Service (Amazon ECS) on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group.\nThe company uses Amazon Elastic Container Registry (Amazon ECR) to store its container images. When a new image version is uploaded, the new image version receives a unique tag.\nThe company needs a solution that inspects new image versions for common vulnerabilities and exposures. The solution must automatically delete new image tags that have Critical or High severity findings. The solution also must notify the development team when such a deletion occurs.\nWhich solution meets these requirements?",
      "a": [
        "A.Configure scan on push on the repository. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Step Functions state machine when a scan is complete for images that have Critical or High severity findings. Use the Step Functions state machine to delete the image tag for those images and to notify the development team through Amazon Simple Notification Service (Amazon SNS).",
        "B.Configure scan on push on the repository. Configure scan results to be pushed to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Lambda function when a new message is added to the SQS queue. Use the Lambda function to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).",
        "C.Schedule an AWS Lambda function to start a manual image scan every hour. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke another Lambda function when a scan is complete. Use the second Lambda function to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).",
        "D.Configure periodic image scan on the repository. Configure scan results to be added to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Step Functions state machine when a new message is added to the SQS queue. Use the Step Functions state machine to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES)."
      ],
      "q_cn": "一家公司在 AWS 云中运行容器化应用程序。应用程序正在使用 Amazon Elastic Container Service （Amazon ECS） 在一组 Amazon EC2 实例上运行。EC2 实例在 Auto Scaling 组中运行。\n该公司使用 Amazon Elastic Container Registry （Amazon ECR） 来存储其容器映像。上载新映像版本时，新映像版本将收到唯一标记。\n公司需要一个解决方案来检查新映像版本是否存在常见漏洞和暴露情况。解决方案必须自动删除具有严重性或高严重性结果的新映像标记。当发生此类删除操作时，解决方案还必须通知开发团队。\n哪个解决方案满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "containerized application",
      "aK": [
        "Configure scan on push on the repository,EventBridge,SNS"
      ]
    },
    {
      "no": 180,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 222,
      "q": "A company has migrated a legacy application to the AWS Cloud. The application runs on three Amazon EC2 instances that are spread across three Availability Zones. One EC2instance is in each Availability Zone. The EC2 instances are running in three private subnets of the VPC and are set up as targets for an Application Load Balancer (ALB) that is associated with three public subnets. The application needs to communicate with on-premises systems. Only traffic from lP addresses in the company's lP address range are allowed to access the on-premises systems. The company's security team is bringing only one lP address from its internal lP address range to the cloud. The company has added this IP address to the allow list for the company firewall. The company also has created an Elastic IP address for this IP address. A solutions architect needs to create a solution that gives the application the ability to communicate with the on-premises systems. The solution also must be able to mitigate failures automatically.Which solution will meet these requirements?",
      "a": [
        "A.Deploy three NAT gateways, one in each public subnet. Assign the Elastic IP address to the NAT gateways. Turn on health checks for the NAT gateways. If a NAT gateway fails a health check, recreate the NAT gateway and assign the Elastic IP address to the new NAT gateway.",
        "B.Replace the ALB with a Network Load Balancer (NLB) Assign the Elastic lP address to the NLB Turn on health checks for the NLB.In the case of a failed health check, redeploy the NLB in different subnets.",
        "C.Deploy a single NAT gateway in a public subnet.Assign the Elastic lP address to the NAT gateway.Use Amazon CloudWatch with a custom metric to monitor the NAT gateway. lf the NAT gateway is unhealthy, invoke an AWS Lambda function to create a new NAT gateway in a different subnet. Assign the Elastic IP address to the new NAT gateway.",
        "D.Assign the Elastic IP address to the ALB.Create an Amazon Route 53simple record with the Elastic IP address as the value.Create a Route 53 health check. In the case of a failed health check, recreate the ALB in different subnets."
      ],
      "q_cn": "一家公司已将旧版应用程序迁移到 AWS 云。该应用程序在分布在三个可用区的三个 Amazon EC2 实例上运行。每个可用区中都有一个 EC2 实例。EC2 实例在 VPC 的三个私有子网中运行，并设置为与三个公有子网关联的应用程序负载均衡器 （ALB） 的目标。应用程序需要与本地系统通信。仅允许来自公司 lP 地址范围内的 lP 地址的流量访问本地系统。该公司的安全团队仅将内部 lP 地址范围中的一个 lP 地址引入云。公司已将此 IP 地址添加到公司防火墙的允许列表中。该公司还为此 IP 地址创建了一个弹性 IP 地址。解决方案架构师需要创建一个解决方案，使应用程序能够与本地系统通信。解决方案还必须能够自动缓解故障。哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "a legacy application,only one lP",
      "aK": [
        "Deploy a single NAT gateway,CloudWatch"
      ]
    },
    {
      "no": 188,
      "q": "A company is running a compute workload by using Amazon EC2 Spot Instances that are in an Auto Scaling group. The launch template uses two placement groups and a single instance type.\nRecently, a monitoring system reported Auto Scaling instance launch failures that correlated with longer wait times for system users.The company needs to improve the overall reliability of the workload.\nWhich solution will meet this requirement ? ",
      "a": [
        "A.Replace the launch template with a launch configuration to use an Auto Scaling group that uses attribute-based instance type selection.",
        "B.Create a new launch template version that uses attribute-based instance type selection.Configure the Auto Scaling group to use the new launch template version.",
        "C.Update the launch template Auto Scaling group to increase the number of placement groups.",
        "D.Update the launch template to use a larger instance type."
      ],
      "q_cn": "一家公司正在使用 Auto Scaling 组中的 Amazon EC2 竞价型实例运行计算工作负载。启动模板使用两个置放群组和一种实例类型。\n最近，一个监控系统报告了 Auto Scaling 实例启动失败，这与系统用户的等待时间更长有关。公司需要提高工作负载的整体可靠性。\n哪种解决方案可以满足此要求？",
      "a_cn": [
        "A.将启动模板替换为启动配置，以使用使用基于属性的实例类型选择的 Auto Scaling 组。",
        "B.创建使用基于属性的实例类型选择的新启动模板版本。将 Auto Scaling 组配置为使用新的启动模板版本。",
        "C.更新启动模板 Auto Scaling 组以增加归置组的数量。",
        "D.更新启动模板以使用更大的实例类型。"
      ],
      "aa": "B",
      "qK": "compute workload,EC2 Spot Instances,Auto Scaling group",
      "aK": [
        "template version"
      ]
    },
    {
      "no": 141,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 149,
      "q": "A company recently acquired several other companies. Each company has a separate AWS account with a different billing and reporting method. The acquiring company has consolidated all the accounts into one organization in AWS Organizations. However, the acquiring company has found it difficult to generate a cost report that contains meaningful groups for all the teams.\nThe acquiring company’s finance team needs a solution to report on costs for all the companies through a self-managed application.\nWhich solution will meet these requirements ? ",
      "a": [
        "A.Create an AWS Cost and Usage Report for the organization. Define tags and cost categories in the report. Create a table in Amazon Athena. Create an Amazon QuickSight dataset based on the Athena table. Share the dataset with the finance team.",
        "B.Create an AWS Cost and Usage Report for the organization.Define tags and cost categories in the report.Create a specialized template in AWS Cost Explorer that the finance department will use to build reports.",
        "C.Create an Amazon QuickSight dataset that receives spending information from the AWS Price List Query API.Share the dataset with the finance team.",
        "D.Use the AWS Price List Query API to collect account spending information.Create a specialized template in AWS Cost Explorer that the finance department will use to build reports."
      ],
      "q_cn": "一家公司最近收购了其他几家公司。每家公司都有一个单独的 AWS 账户，采用不同的账单和报告方法。收购公司已将所有账户合并到 AWS 组织中的一个组织中。但是，收购公司发现很难生成包含所有团队有意义的组的成本报表。\n收购公司的财务团队需要一个解决方案，通过自我管理的应用程序报告所有公司的成本。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.为组织创建 AWS 成本和使用情况报告。在报表中定义标记和成本类别。在亚马逊雅典娜中创建表。基于 Athena 表创建 Amazon QuickSight 数据集。与财务团队共享数据集。",
        "B.为组织创建 AWS 成本和使用情况报告。在报表中定义标记和成本类别。在 AWS 成本管理器中创建财务部门将用于构建报告的专用模板。",
        "C.创建一个 Amazon QuickSight 数据集，该数据集从 AWS 价目表查询 API 接收支出信息。与财务团队共享数据集。",
        "D.使用 AWS 价目表查询 API 收集账户支出信息。在 AWS 成本管理器中创建财务部门将用于构建报告的专用模板。"
      ],
      "aa": "A",
      "qK": "acquired several other companies",
      "aK": [
        "Athena,[QuickSight]"
      ]
    },
    {
      "no": 129,
      "q": "A company is hosting a critical application on a single Amazon EC2 instance. The application uses an Amazon ElastiCache for Redis single-node cluster for an in-memory data store. The application uses an Amazon RDS for MariaDB DB instance for a relational database. For the application to function, each piece of the infrastructure must be healthy and must be in an active state.\nA solutions architect needs to improve the application's architecture so that the infrastructure can automatically recover from failure with the least possible downtime.\nWhich combination of steps will meet these requirements?(Choose three.) ",
      "a": [
        "A.Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances. Ensure that the EC2 instances are part of an Auto Scaling group that has a minimum capacity of two instances.",
        "B.Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances.Ensure that the EC2 instances are configured in unlimited mode.",
        "C.Modify the DB instance to create a read replica in the same Availability Zone.Promote the read replica to be the primary DB instance in failure scenarios.",
        "D.Modify the DB instance to create a Multi-AZ deployment that extends across two Availability Zones.",
        "E.Create a replication group for the ElastiCache for Redis cluster.Configure the cluster to use an Auto Scaling group that has a minimum capacity of two instances.",
        "F.Create a replication group for the ElastiCache for Redis cluster.Enable Multi-AZ on the cluster"
      ],
      "q_cn": "一家公司在单个 Amazon EC2 实例上托管关键应用程序。该应用程序使用 Amazon ElastiCache for Redis 单节点集群作为内存数据存储。该应用程序将 Amazon RDS for MariaDB 数据库实例用于关系数据库。要使应用程序正常运行，基础结构的每个部分都必须正常运行，并且必须处于活动状态。\n解决方案架构师需要改进应用程序的体系结构，以便基础结构能够以尽可能少的停机时间自动从故障中恢复。\n哪些步骤组合将满足这些要求？（选择三个。",
      "a_cn": [
        "A.使用弹性负载均衡器在多个 EC2 实例之间分配流量。确保 EC2 实例是最小容量为 2 个实例的 Auto Scaling 组的一部分。",
        "B.使用弹性负载均衡器在多个 EC2 实例之间分配流量。确保 EC2 实例配置为无限制模式。",
        "C.修改数据库实例以在同一可用区中创建只读副本。将只读副本提升为故障情况下的主数据库实例。",
        "D.修改数据库实例以创建跨两个可用区扩展的多可用区部署。",
        "E.为 ElastiCache for Redis 集群创建复制组。将集群配置为使用最小容量为两个实例的 Auto Scaling 组。",
        "F.为 ElastiCache for Redis 集群创建复制组。在集群上启用多可用区"
      ],
      "aa": "A,D,F",
      "qK": "ElastiCache for Redis,MariaDB",
      "aK": [
        "part of an Auto",
        "Multi-AZ",
        "Multi-AZ"
      ]
    },
    {
      "no": 171,
      "q": "A company is migrating a document processing workload to AWS. The company has updated many applications to natively use the Amazon S3 API to store, retrieve, and modify documents that a processing server generates at a rate of approximately 5 documents every second. After the document processing is finished, customers can download the documents directly from Amazon S3.\nDuring the migration, the company discovered that it could not immediately update the processing server that generates many documents to support the S3 API.The server runs on Linux and requires fast local access to the files that the server generates and modifies.When the server finishes processing, the files must be available to the public for download within 30 minutes.\nWhich solution will meet these requirements with the LEAST amount of effort?",
      "a": [
        "A.Migrate the application to an AWS Lambda function. Use the AWS SDK for Java to generate, modify, and access the files that the company stores directly in Amazon S3.",
        "B.Set up an Amazon S3 File Gateway and configure a file share that is linked to the document store. Mount the file share on an Amazon EC2 instance by using NFS. When changes occur in Amazon S3, initiate a RefreshCache API call to update the S3 File Gateway.",
        "C.Configure Amazon FSx for Lustre with an import and export policy. Link the new file system to an S3 bucket. Install the Lustre client and mount the document store to an Amazon EC2 instance by using NFS.",
        "D.Configure AWS DataSync to connect to an Amazon EC2 instance. Configure a task to synchronize the generated files to and from Amazon S3."
      ],
      "q_cn": "一家公司正在将文档处理工作负载迁移到 AWS。该公司更新了许多应用程序，以本机使用 Amazon S3 API 来存储、检索和修改处理服务器以每秒大约 5 个文档的速度生成的文档。文档处理完成后，客户可以直接从 Amazon S3 下载文档。\n在迁移过程中，该公司发现它无法立即更新生成许多文档以支持 S3 API 的处理服务器。服务器在 Linux 上运行，需要对服务器生成和修改的文件进行快速本地访问。服务器完成处理后，必须在 30 分钟内向公众提供文件供下载。\n      哪种解决方案能够以最少的努力满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "S3,5 documents every second,30 minutes",
      "aK": [
        "FSx for Lustre"
      ]
    },
    {
      "no": 179,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 245,
      "q": "A company has an organization in AWS Organizations. The company is using AWS Control Tower to deploy a landing zone for the organization. The company wants to implement governance and policy enforcement. The company must implement a policy that will detect Amazon RDS DB instances that are not encrypted at rest in the company’s production OU.\nWhich solution will meet this requirement ?",
      "a": [
        "A.Turn on mandatory guardrails in AWS Control Tower. Apply the mandatory guardrails to the production OU.",
        "B.Enable the appropriate guardrail from the list of strongly recommended guardrails in AWS Control Tower. Apply the guardrail to the production OU.",
        "C.Use AWS Config to create a new mandatory guardrail. Apply the rule to all accounts in the production OU.",
        "D.Create a custom SCP in AWS Control Tower. Apply the SCP to the production OU."
      ],
      "q_cn": "公司拥有 AWS 组织中的组织。该公司正在使用 AWS Control Tower 为组织部署登陆区域。该公司希望实施治理和策略实施。公司必须实施一项策略，以检测公司生产 OU 中未静态加密的 Amazon RDS 数据库实例。\n哪种解决方案可以满足此要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "landing zone,detect Amazon RDS DB,not encrypted",
      "aK": [
        "Enable the appropriate guardrail,recommended"
      ]
    },
    {
      "no": 96,
      "q": "A company is running an application in the AWS Cloud. The application collects and stores a large amount of unstructured data in an Amazon S3 bucket. The S3 bucket contains several terabytes of data and uses the S3 Standard storage class. The data increases in size by several gigabytes every day.\nThe company needs to query and analyze the data.The company does not access data that is more than 1 year old.However, the company must retain all the data indefinitely for compliance reasons.\nWhich solution will meet these requirements MOST cost-effectively ? ",
      "a": [
        "A.Use S3 Select to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.",
        "B.Use Amazon Redshift Spectrum to query the data.Create an S3 Lifecycle policy to transition data that is more than 1 year old 10 S3 Glacier Deep Archive.",
        "C.Use an AWS Glue Data Catalog and Amazon Athena to query the data.Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.",
        "D.Use Amazon Redshift Spectrum to query the data.Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Intelligent-Tiering."
      ],
      "q_cn": "一家公司在 AWS 云中运行应用程序。该应用程序在 Amazon S3 存储桶中收集和存储大量非结构化数据。S3 存储桶包含数 TB 的数据，并使用 S3 标准存储类。数据的大小每天增加几千兆字节。\n公司需要查询和分析数据。该公司不会访问超过 1 年的数据。但是，出于合规性原因，公司必须无限期保留所有数据。\n      哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "A.使用 S3 选择查询数据。创建 S3 生命周期策略，将超过 1 年的数据转换为 S3 Glacier Deep Archive。",
        "B.使用 Amazon Redshift Spectrum 查询数据。创建 S3 生命周期策略以转换超过 1 年的数据 10 S3 冰川深度存档。",
        "C.使用 AWS Glue Data Catalog 和 Amazon Athena 查询数据。创建 S3 生命周期策略，将超过 1 年的数据转换为 S3 Glacier Deep Archive。",
        "D.使用 Amazon Redshift Spectrum 查询数据。创建 S3 生命周期策略，将超过 1 年的数据转换为 S3 智能分层。"
      ],
      "aa": "C",
      "qK": "unstructured data,S3,query and analyze,not access data that is more than 1 year old,must retain all the data",
      "aK": [
        "Glue Data Catalog, Athena to query"
      ]
    },
    {
      "no": 79,
      "q": "A company has introduced a new policy that allows employees to work remotely from their homes if they connect by using a VPN. The company is hosting internal applications with VPCs in multiple AWS accounts. Currently, the applications are accessible from the company's on-premises office network through an AWS Site-to-Site VPN connection. The VPC in the company's main AWS account has peering connections established with VPCs in other AWS accounts.\nA solutions architect must design a scalable AWS Client VPN solution for employees to use while they work from home.\nWhat is the MOST cost-effective solution that meets these requirements ? ",
      "a": [
        "A.Create a Client VPN endpoint in each AWS account. Configure required routing that allows access to internal applications.",
        "B.Create a Client VPN endpoint in the main AWS account.Configure required routing that allows access to internal applications.",
        "C.Create a Client VPN endpoint in the main AWS account.Provision a transit gateway that is connected to each AWS account.Configure required routing that allows access to internal applications.",
        "D.Create a Client VPN endpoint in the main AWS account.Establish connectivity between the Client VPN endpoint and the AWS Site-to-Site VPN."
      ],
      "q_cn": "一家公司推出了一项新政策，允许员工在使用 VPN 进行连接时在家中远程工作。该公司在多个 AWS 账户中托管具有 VPC 的内部应用程序。目前，可以通过 AWS 站点到站点 VPN 连接从公司的本地办公网络访问这些应用程序。公司主 AWS 账户中的 VPC 与其他 AWS 账户中的 VPC 建立了对等连接。\n解决方案架构师必须设计可扩展的 AWS 客户端 VPN 解决方案，供员工在家工作时使用。\n满足这些要求的最具成本效益的解决方案是什么？",
      "a_cn": [
        "A.在每个 AWS 账户中创建一个客户端 VPN 终端节点。配置允许访问内部应用程序所需的路由。",
        "B.在主 AWS 账户中创建客户端 VPN 终端节点。配置允许访问内部应用程序所需的路由。",
        "C.在主 AWS 账户中创建客户端 VPN 终端节点。预置连接到每个 AWS 账户的中转网关。配置允许访问内部应用程序所需的路由。",
        "D.在主 AWS 账户中创建客户端 VPN 终端节点。在客户端 VPN 终端节点和 AWS 站点到站点 VPN 之间建立连接。"
      ],
      "aa": "B",
      "qK": "from their homes,VPN",
      "aK": [
        "main,routing that allows"
      ]
    },
    {
      "no": 69,
      "q": "A company is building an electronic document management system in which users upload their documents. The application stack is entirely serverless and runs on AWS in the eu-central-1 Region. The system includes a web application that uses an Amazon CloudFront distribution for delivery with Amazon S3 as the origin.\nThe web application communicates with Amazon API Gateway Regional endpoints.The API Gateway APIs call AWS Lambda functions that store metadata in an Amazon Aurora Serverless database and put the documents into an S3 bucket.\nThe company is growing steadily and has completed a proof of concept with its largest customer.The company must improve latency outside of Europe.\nWhich combination of actions will meet these requirements?(Choose two.) ",
      "a": [
        "A.Enable S3 Transfer Acceleration on the S3 bucket. Ensure that the web application uses the Transfer Acceleration signed URLs.",
        "B.Create an accelerator in AWS Global Accelerator.Attach the accelerator to the CloudFront distribution.",
        "C.Change the API Gateway Regional endpoints to edge-optimized endpoints.",
        "D.Provision the entire stack in two other locations that are spread across the world.Use global databases on the Aurora Serverless cluster.",
        "E.Add an Amazon RDS proxy between the Lambda functions and the Aurora Serverless database."
      ],
      "q_cn": "一家公司正在构建一个电子文档管理系统，用户可以在其中上传他们的文档。应用程序堆栈完全无服务器，在 AWS 的欧洲中部 1 区域上运行。该系统包含一个 Web 应用程序，该应用程序使用 Amazon CloudFront 分配进行交付，以 Amazon S3 作为源进行交付。\nWeb 应用程序与 Amazon API 网关区域终端节点通信。API 网关 API 调用 AWS Lambda 函数，这些函数将元数据存储在Amazon Aurora Serverless 数据库，并将文档放入 S3 存储桶中。\n该公司正在稳步增长，并已完成与其最大客户的概念验证。该公司必须改善欧洲以外的延迟。\n哪些操作组合将满足这些要求？（选择两个。",
      "a_cn": [
        "A.在 S3 存储桶上启用 S3 传输加速。确保 Web 应用程序使用传输加速签名 URL。",
        "B.在 AWS 全球加速器中创建加速器。将加速器附加到 CloudFront 分配。",
        "C.将 API 网关区域终结点更改为边缘优化终结点。",
        "D.在分布在世界各地的其他两个位置预配整个堆栈。使用 Aurora 无服务器集群上的全局数据库。",
        "E.在 Lambda 函数和 Aurora Serverless 数据库之间添加 Amazon RDS 代理。"
      ],
      "aa": "A,C",
      "qK": "upload their documents,improve latency outside of Europe",
      "aK": [
        "S3 Transfer Acceleration",
        "[API Gateway],edge-optimized endpoints"
      ]
    },
    {
      "no": 243,
      "q": "A company is running a critical stateful web application on two Linux Amazon EC2 instances behind an Application Load Balancer (ALB) with an Amazon RDS for MySQL database. The company hosts the DNS records for the application in Amazon Route 53. A solutions architect must recommend a solution to improve the resiliency of the application.The solution must meet the following objectives: • Application tier: RPO of 2 minutes. RTO of 30 minutes. • Database tier: RPO of 5 minutes. RTO of 30 minutes.The company does not want to make significant changes to the existing application architecture. The company must ensure optimal latency after a failover.Which solution will meet these requirements?",
      "a": [
        "A.Configure the EC2 instances to use AWS Elastic Disaster Recovery. Create a cross-Region read replica for the RDS DB instance. Create an ALB in a second AWS Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs. Update DNS records to point to the Global Accelerator endpoint.",
        "B.Configure the EC2 instances to use Amazon Data Lifecycle Manager (Amazon DLM) to take snapshots of the EBS volumes. Configure RDS automated backups. Configure backup replication to a second AWS Region. Create an ALB in the second Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs. Update DNS records to point to the Global Accelerator endpoint.",
        "C.Create a backup plan in AWS Backup for the EC2 instances and RDS DB instance. Configure backup replication to a second AWS Region. Create an ALB in the second Region. Configure an Amazon CloudFront distribution in front of the ALB. Update DNS records to point to CloudFront.",
        "D.Configure the EC2 instances to use Amazon Data Lifecycle Manager (Amazon DLM) to take snapshots of the EBS volumes. Create a cross-Region read replica for the RDS DB instance. Create an ALB in a second AWS Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs."
      ],
      "q_cn": "一家公司在应用程序负载均衡器 （ALB） 后面的两个 Linux Amazon EC2 实例上运行一个关键的有状态 Web 应用程序，该实例具有 Amazon RDS for MySQL 数据库。该公司在 Amazon Route 53 中托管应用程序的 DNS 记录。解决方案架构师必须推荐一个解决方案来提高应用程序的复原能力。解决方案必须满足以下目标： • 应用层：RPO 为 2 分钟。30 分钟的 RTO。• 数据库层：RPO 为 5 分钟。30 分钟的 RTO。该公司不希望对现有应用程序体系结构进行重大更改。公司必须确保故障转移后的最佳延迟。哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.将 EC2 实例配置为使用 AWS 弹性灾难恢复。为 RDS 数据库实例创建跨区域只读副本。在第二个 AWS 区域中创建 ALB。创建 AWS 全球加速器终端节点，并将该终端节点与 ALB 关联。更新 DNS 记录以指向全局加速器终结点。",
        "B.将 EC2 实例配置为使用 Amazon Data Lifecycle Manager （Amazon DLM） 拍摄 EBS 卷的快照。配置 RDS 自动备份。配置到第二个 AWS 区域的备份复制。在第二个区域中创建 ALB。创建 AWS 全球加速器终端节点，并将该终端节点与 ALB 关联。更新 DNS 记录以指向全局加速器终结点。",
        "C.在 AWS Backup 中为 EC2 实例和 RDS 数据库实例创建备份计划。配置到第二个 AWS 区域的备份复制。在第二个区域中创建 ALB。在 ALB 前面配置 Amazon CloudFront 分配。更新 DNS 记录以指向 CloudFront。",
        "D.将 EC2 实例配置为使用 Amazon Data Lifecycle Manager （Amazon DLM） 拍摄 EBS 卷的快照。为 RDS 数据库实例创建跨区域只读副本。在第二个 AWS 区域中创建 ALB。创建 AWS 全球加速器终端节点，并将该终端节点与 ALB 关联。"
      ],
      "aa": "A",
      "qK": "RPO of 2 minutes,RTO of 30 minutes,RPO of 5 minutes",
      "aK": [
        "Elastic Disaster Recovery"
      ]
    },
    {
      "no": 103,
      "q": "A company has a multi-tier web application that runs on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Auto Scaling group. The ALB and the Auto Scaling group are replicated in a backup AWS Region. The minimum value and the maximum value for the Auto Scaling group are set to zero. An Amazon RDS Multi-AZ DB instance stores the application's data. The DB instance has a read replica in the backup Region. The application presents an endpoint to end users by using an Amazon Route 53 record.\nThe company needs to reduce its RTO to less than 15 minutes by giving the application the ability to automatically fail over to the backup Region.The company does not have a large enough budget for an active-active strategy.\nWhat should a solutions architect recommend to meet these requirements ? ",
      "a": [
        "A.Reconfigure the application's Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region. Configure the CloudWatch alarm to invoke the Lambda function.",
        "B.Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values.Configure Route 53 with a health check that monitors the web application and sends an Amazon Simple Notification Service(Amazon SNS) notification to the Lambda function when the health check status is unhealthy.Update the application's Route 53 record with a failover policy that routes traffic to the ALB in the backup Region when a health check failure occurs.",
        "C.Configure the Auto Scaling group in the backup Region to have the same values as the Auto Scaling group in the primary Region.Reconfigure the application's Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Remove the read replica. Replace the read replica with a standalone RDS DB instance. Configure Cross-Region Replication between the RDS DB instances by using snapshots and Amazon S3.",
        "D.Configure an endpoint in AWS Global Accelerator with the two ALBs as equal weighted targets.Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values.Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region.Configure the CloudWatch alarm to invoke the Lambda function."
      ],
      "q_cn": "一家公司有一个多层 Web 应用程序，该应用程序在应用程序负载均衡器 （ALB） 后面的 Amazon EC2 实例队列上运行。实例位于弹性伸缩组中。ALB 和弹性伸缩组在备份 AWS 区域中复制。弹性伸缩组的最小值和最大值设置为零。Amazon RDS 多可用区数据库实例存储应用程序的数据。数据库实例在备份区域中具有只读副本。应用程序使用 Amazon Route 53 记录向最终用户提供终端节点。\n该公司需要通过使应用程序能够自动故障转移到备份区域，将其 RTO 减少到 15 分钟以内。该公司没有足够大的预算来实施主动-主动战略。\n解决方案架构师应该建议什么来满足这些要求？",
      "a_cn": [
        "A.使用基于延迟的路由策略重新配置应用程序的 Route 53 记录，该策略对两个 ALB 之间的流量进行负载均衡。在备份区域中创建一个 AWS Lambda 函数以提升只读副本并修改 Auto Scaling 组值。创建基于主要区域中 ALB 的HTTPCode_Target_5XX_Count指标的 Amazon CloudWatch 警报。配置 CloudWatch 警报以调用 Lambda 函数。",
        "B.在备份区域中创建 AWS Lambda 函数以提升只读副本并修改 Auto Scaling 组值。使用 Route 53 配置运行状况检查，以监控 Web 应用程序，并在运行状况检查状态为运行状况不佳时向 Lambda 函数发送 Amazon Simple Notification Service （Amazon SNS） 通知。使用故障转移策略更新应用程序的 Route 53 记录，该策略在发生运行状况检查失败时将流量路由到备份区域中的 ALB。",
        "C.将备份区域中的 Auto Scaling 组配置为与主区域中的 Auto Scaling 组具有相同的值。使用基于延迟的路由策略重新配置应用程序的 Route 53 记录，该策略可在两个 ALB 之间对流量进行负载均衡。删除只读副本。将只读副本替换为独立的 RDS 数据库实例。使用快照和 Amazon S3 在 RDS 数据库实例之间配置跨区域复制。",
        "D.在 AWS 全球加速器中配置终端节点，并将两个 ALB 作为相等加权的目标。在备份区域中创建一个 AWS Lambda 函数以提升只读副本并修改 Auto Scaling 组值。创建基于主要区域中 ALB 的HTTPCode_Target_5XX_Count指标的 Amazon CloudWatch 警报。配置 CloudWatch 警报以调用 Lambda 函数。"
      ],
      "aa": "B",
      "qK": "Auto Scaling,minimum value,maximum value,zero,less than 15 minutes",
      "aK": [
        "SNS"
      ]
    },
    {
      "no": 127,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 107,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 186,
      "q": "A company developed a pilot application by using AWS Elastic Beanstalk and Java. To save costs during development, the company's development team deployed the application into a single-instance environment. Recent tests indicate that the application consumes more CPU than expected. CPU utilization is regularly greater than 85%, which causes some performance bottlenecks.\nA solutions architect must mitigate the performance issues before the company launches the application to production.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      "a": [
        "A.Create a new Elastic Beanstalk application. Select a load-balanced environment type. Select all Availability Zones. Add a scale-out rule that will run if the maximum CPU utilization is over 85% for 5 minutes.",
        "B.Create a second Elastic Beanstalk environment.Apply the traffic-splitting deployment policy.Specify a percentage of incoming traffic to direct to the new environment in the average CPU utilization is over 85 % for 5 minutes.",
        "C.Modify the existing environment’s capacity configuration to use a load-balanced environment type.Select all Availability Zones.Add a scale-out rule that will run if the average CPU utilization is over 85 % for 5 minutes.",
        "D.Select the Rebuild environment action with the load balancing option.Select an Availability Zones.Add a scale-out rule that will run if the sum CPU utilization is over 85 % for 5 minutes."
      ],
      "q_cn": "一家公司使用 AWS Elastic Beanstalk 和 Java 开发了一个试点应用程序。为了节省开发过程中的成本，该公司的开发团队将应用程序部署到单实例环境中。最近的测试表明，应用程序消耗的 CPU 比预期的要多。CPU 利用率通常大于 85%，这会导致一些性能瓶颈。\n解决方案架构师必须在公司将应用程序启动到生产环境之前缓解性能问题。\n      哪种解决方案能够以最少的运营开销满足这些要求？",
      "a_cn": [
        "A.创建一个新的 Elastic Beanstalk 应用程序。选择负载均衡环境类型。选择所有可用区。添加一个横向扩展规则，该规则将在最大 CPU 利用率超过 85% 持续 5 分钟时运行。",
        "B.创建第二个 Elastic Beanstalk 环境。应用流量拆分部署策略。指定要定向到新环境的传入流量的百分比，平均 CPU 利用率在 5 分钟内超过 85 %。",
        "C.修改现有环境的容量配置以使用负载平衡环境类型。选择所有可用区。添加一个横向扩展规则，如果平均 CPU 利用率超过 85 %，持续 5 分钟，该规则将运行。",
        "D.D.选择“使用负载平衡”选项重新生成环境操作。选择可用区。添加一个横向扩展规则，如果 CPU 总利用率超过 85 %，则在 5 分钟内运行该规则。"
      ],
      "aa": "A",
      "qK": "Beanstalk and Java,85%",
      "aK": [
        "Create a new Elastic Beanstalk"
      ]
    },
    {
      "no": 125,
      "q": "A company is processing videos in the AWS Cloud by Using Amazon EC2 instances in an Auto Scaling group. It takes 30 minutes to process a video Several EC2 instances scale in and out depending on the number of videos in an Amazon Simple Queue Service (Amazon SQS) queue.\nThe company has configured the SQS queue with a redrive policy that specifies a target dead-letter queue and a maxReceiveCount of 1. The company has set the visibility timeout for the SQS queue to 1 hour. The company has set up an Amazon CloudWatch alarm to notify the development team when there are messages in the dead-letter queue.\nSeveral times during the day. the development team receives notification that messages are in the dead-letter queue and that videos have not been processed property. An investigation finds no errors m the application logs.\nHow can the company solve this problem?",
      "a": [
        "A.Turn on termination protection tor the EC2 Instances",
        "B.Update the visibility timeout for the SQS queue to 3 hours",
        "C.Configure scale-in protection for the instances during processing",
        "D.Update the redrive policy and set maxReceiveCount to 0."
      ],
      "q_cn": "一家公司正在使用 Auto Scaling 组中的 Amazon EC2 实例在 AWS 云中处理视频。处理一个视频需要 30 分钟 多个 EC2 实例根据 Amazon Simple Queue Service （Amazon SQS） 队列中的视频数量进行扩展和缩减。\n该公司已使用 redrive 策略为 SQS 队列配置了重新驱动策略，该策略指定目标死信队列，maxReceiveCount 为 1。该公司已将 SQS 队列的可见性超时设置为 1 小时。该公司设置了一个 Amazon CloudWatch 警报，以便在死信队列中有消息时通知开发团队。\n白天有几次。开发团队收到消息处于死信队列中且视频尚未处理属性的通知。调查未发现应用程序日志中的错误。\n公司如何解决这个问题？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "dead-letter,1 hour",
      "aK": [
        "scale-in"
      ]
    },
    {
      "no": 310,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 135,
      "q": "A company has registered 10 new domain names. The company uses the domains for online marketing. The company needs a solution that will redirect online visitors to a specific URL for each domain. All domains and target URLS are defined in a JSON document. All DNS records are managed by Amazon Route 53.\nA solutions architect must implement a redirect service that accepts HTTP and HTTPS requests.\nWhich combination of steps should the solutions architect take to meet these requirements with the LEAST amount of operational effort?(Choose three.) ",
      "a": [
        "A.Create a dynamic webpage that runs on an Amazon EC2 instance. Configure the webpage to use the JSON document in combination with the event message to look up and respond with a redirect URL.",
        "B.Create an Application Load Balancer that includes HTTP and HTTPS listeners.",
        "C.Create an AWS Lambda function that uses the JSON document in combination with the event message to look up and respond with a redirect URL.",
        "D.Use an Amazon API Gateway API with a custom domain to publish an AWS Lambda function.",
        "E.Create an Amazon CloudFront distribution.Deploy a Lambda@Edge function.",
        "F.Create an SSL certificate by using AWS Certificate Manager(ACM).Include the domains as Subject Alternative Names."
      ],
      "q_cn": "一家公司注册了 10 个新域名。该公司使用这些域进行在线营销。该公司需要一个解决方案，将在线访问者重定向到每个域的特定URL。所有域和目标 URL 都在 JSON 文档中定义。所有 DNS 记录均由 Amazon Route 53 管理。\n解决方案架构师必须实现接受 HTTP 和 HTTPS 请求的重定向服务。\n解决方案架构师应采取哪些步骤组合，以最少的运营工作量满足这些要求？（选择三个。",
      "a_cn": [
        "A.创建在 Amazon EC2 实例上运行的动态网页。将网页配置为将 JSON 文档与事件消息结合使用，以查找并使用重定向 URL 进行响应。",
        "B.创建包含 HTTP 和 HTTPS 侦听器的应用程序负载均衡器。",
        "C.创建一个 AWS Lambda 函数，该函数将 JSON 文档与事件消息结合使用，以查找并使用重定向 URL 进行响应。",
        "D.将 Amazon API Gateway API 与自定义域结合使用，以发布 AWS Lambda 函数。",
        "E.创建 Amazon CloudFront 分配。部署Lambda@Edge函数。",
        "F.使用 AWS 证书管理器 （ACM） 创建 SSL 证书。将域作为主题备用名称包括在内。"
      ],
      "aa": "C,E,F",
      "qK": "10 new domain names",
      "aK": [
        "Lambda ,JSON",
        "Lambda@Edge",
        "SSL,ACM"
      ]
    },
    {
      "no": 172,
      "q": "Example Corp. has an on-premises data center and a VPC named VPC A in the Example Corp. AWS account. The on-premises network connects to VPC A through an AWS Site-To-Site VPN. The on-premises servers can properly access VPC A.Example Corp. just acquired AnyCompany, which has a VPC named VPC B. There is no IP address overlap among these networks. Example Corp. has peered VPC A and VPC B.\nExample Corp.wants to connect from its on-premise servers to VPC B.Example Corp.has properly set up the network ACL and security groups.\nWhich solution will meet this requirement with the LEAST operational effort?",
      "a": [
        "A.Create a transit gateway. Attach the Site-to-Site VPN, VPC A, and VPC B to the transit gateway. Update the transit gateway route tables for all networks to add IP range routes for all other networks.",
        "B.Create a transit gateway.Create a Site-to-Site VPN connection between the on-premises network and VPC B, and connect the VPN connection to the transit gateway.Add a route to direct traffic to the peered VPCs, and add an authorization rule to give clients access to the VPCs A and B.",
        "C.Update the route tables for the Site-to-Site VPN and both VPCs for all three networks.Configure BGP propagation for all three networks.Wait for up to 5 minutes for BGP propagation to finish.",
        "D.Modify the Site-to-Site VPN’s virtual private gateway definition to include VPC A and VPC B.Split the two routers of the virtual private getaway between the two VPCs."
      ],
      "q_cn": "Example Corp. 有一个本地数据中心，在 Example Corp. AWS 账户中具有一个名为 VPC A 的 VPC。本地网络通过 AWS 站点到站点 VPN 连接到 VPC A。本地服务器可以正确访问 VPC A.Example Corp. 刚刚收购了 AnyCompany，后者拥有一个名为 VPC B 的 VPC。这些网络之间没有 IP 地址重叠。Example Corp. 已对等互连 VPC A 和 VPC B。\n示例公司希望从其本地服务器连接到 VPC B.示例公司已正确设置网络 ACL 和安全组。\n哪种解决方案能够以最少的运营工作量满足这一要求？",
      "a_cn": [
        "A.创建中转网关。将站点到站点 VPN、VPC A 和 VPC B 连接到中转网关。更新所有网络的中转网关路由表，为所有其他网络添加 IP 范围路由。",
        "B.创建中转网关。在本地网络和 VPC B 之间创建站点到站点 VPN 连接，并将 VPN 连接连接到中转网关。添加路由以将流量定向到对等 VPC，并添加授权规则以授予客户端对 VPC A 和 B 的访问权限。",
        "C.更新站点到站点 VPN 和所有三个网络的两个 VPC 的路由表。为所有三个网络配置 BGP 传播。等待最多 5 分钟，让 BGP 传播完成。",
        "D.修改站点到站点 VPN 的虚拟私有网关定义以包含 VPC A 和 VPC B。 在两个 VPC 之间拆分虚拟私有度假的两个路由器。"
      ],
      "aa": "B",
      "qK": "Example Corp,VPC A,VPC B",
      "aK": [
        "between the on-premises network and VPC B,transit gateway,peered VPCs"
      ]
    },
    {
      "no": 86,
      "q": "A company is running a web application in the AWS Cloud. The application consists of dynamic content that is created on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group that is configured as a target group for an Application Load Balancer(ALB).\nThe company is using an Amazon CloudFront distribution to distribute the application globally.The CloudFront distribution uses the ALB as an origin.The company uses Amazon Route 53 for DNS and has created an A record of www.example.com for the CloudFront distribution.\nA solutions architect must configure the application so that itis highly available and fault tolerant.\nWhich solution meets these requirements?",
      "a": [
        "A.Provision a full, secondary application deployment in a different AWS Region. Update the Route 53 A record to be a failover record. Add both of the CloudFront distributions as values. Create Route 53 health checks.",
        "B.Provision an ALB, an Auto Scaling group, and EC2 instances in a different AWS Region.Update the CloudFront distribution, and create a second origin for the new ALB.Create an origin group for the two origins.Configure one origin as primary and one origin as secondary.",
        "C.Provision an Auto Scaling group and EC2 instances in a different AWS Region.Create a second target for the new Auto Scaling group in the ALB.Set up the failover routing algorithm on the ALB.",
        "D.Provision a full, secondary application deployment in a different AWS Region.Create a second CloudFront distribution, and add the new application setup as an origin.Create an AWS Global Accelerator accelerator.Add both of the CloudFront distributions as endpoints."
      ],
      "q_cn": "一家公司在 AWS 云中运行 Web 应用程序。该应用程序由在一组 Amazon EC2 实例上创建的动态内容组成。这EC2 实例在配置为应用程序负载均衡器 （ALB） 的目标组的 Auto Scaling 组中运行。\n该公司正在使用 Amazon CloudFront 分配在全球范围内分发应用程序。CloudFront 分配使用 ALB 作为源。该公司将 Amazon Route 53 用于 DNS，并为 CloudFront 分配创建了 A www.example.com 记录。\n解决方案架构师必须配置应用程序，使其具有高可用性和容错能力。\n哪种解决方案满足这些要求？",
      "a_cn": [
        "A.在不同的 AWS 区域中预置完整的辅助应用程序部署。将 Route 53 A 记录更新为故障转移记录。将两个 CloudFront 分配添加为值。创建 Route 53 运行状况检查。",
        "B.在不同的 AWS 区域中预置 ALB、Auto Scaling 组和 EC2 实例。更新 CloudFront 分配，并为新 ALB 创建第二个源。为两个源创建源组。将一个源配置为主源，将一个源配置为辅助源。",
        "C.在不同的 AWS 区域中预置 Auto Scaling 组和 EC2 实例。在 ALB 中为新的弹性伸缩组创建第二个目标。在 ALB 上设置故障转移路由算法。",
        "D.在不同的 AWS 区域中预置完整的辅助应用程序部署。创建第二个 CloudFront 分配，并将新的应用程序设置添加为源。创建 AWS 全球加速器加速器。将两个 CloudFront 分配添加为终端节点。"
      ],
      "aa": "B",
      "qK": "www.example.com",
      "aK": [
        "an ALB,an Auto Scaling"
      ]
    },
    {
      "no": 124,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 265,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 165,
      "q": "A company needs to monitor a growing number of Amazon S3 buckets across two AWS Regions.The company also needs to track the percentage of objects that are encrypted in Amazon S3. The company needs a dashboard to display this information for internal compliance teams. Which solution will meet these requirements with the LEAST operational overhead?",
      "a": [
        "A.Create a new S3 Storage Lens dashboard in each Region to track bucket and encryption metrics Aggregate data from both Region dashboards into a single dashboard in Amazon QuickSight for the compliance teams",
        "B.Deploy an AWS Lambda function in each Region to list the number of buckets and the encryption status of objects. Store this data in Amazon S3. Use Amazon Athena queries to display the data on a custom dashboard in Amazon QuickSight for the compliance teams",
        "C.Use the S3 Storage Lens default dashboard to track bucket and encryption metrics.Give the compliance teams access to the dashboard directly in the S3 console",
        "D.Create an Amazon EventBridge rule to detect AWS CloudTrail events for S3 object creation.Configure the rule to invoke an AWS Lambda function to record encryption metrics in Amazon DynamoDB. Use Amazon QuickSight to display the metrics in a dashboard for the compliance teams"
      ],
      "q_cn": "公司需要监控两个 AWS 区域中越来越多的 Amazon S3 存储桶。该公司还需要跟踪 Amazon S3 中加密对象的百分比。公司需要一个仪表板来为内部合规团队显示此信息。哪种解决方案能够以最少的运营开销满足这些要求？",
      "a_cn": [
        "A.在每个区域中创建新的 S3 Storage Lens 控制面板以跟踪存储桶和加密指标 将两个区域控制面板中的数据聚合到 Amazon QuickSight 中的单个控制面板中，供合规团队使用",
        "B.在每个区域中部署一个 AWS Lambda 函数，以列出存储桶的数量和对象的加密状态。将此数据存储在 Amazon S3 中。使用 Amazon Athena 查询在 Amazon QuickSight 中的自定义控制面板上为合规团队显示数据",
        "C.使用 S3 Storage Lens 默认控制面板跟踪存储桶和加密指标。允许合规团队直接在 S3 控制台中访问控制面板",
        "D.创建 Amazon EventBridge 规则以检测用于创建 S3 对象的 AWS CloudTrail 事件。配置规则以调用 AWS Lambda 函数以在 Amazon DynamoDB 中记录加密指标。使用 Amazon QuickSight 在控制面板中为合规团队显示指标"
      ],
      "aa": "C",
      "qK": "monitor,S3,track,encrypted",
      "aK": [
        "S3 console"
      ]
    },
    {
      "no": 59,
      "q": "A company runs a serverless application in a single AWS Region. The application accesses external URLs and extracts metadata from those sites. The company uses an Amazon Simple Notification Service (Amazon SNS) topic to publish URLs to an Amazon Simple Queue Service (Amazon SQS) queue. An AWS Lambda function uses the queue as an event source and processes the URLs from the queue. Results are saved to an Amazon S3 bucket.\nThe company wants to process each URL in other Regions to compare possible differences in site localization.URLs must be published from the existing Region.\nResults must be written to the existing S3 bucket in the current Region.\nWhich combination of changes will produce multi-Region deployment that meets these requirements ? (Choose two.) ",
      "a": [
        "A.Deploy the SQS queue with the Lambda function to other Regions.",
        "B.Subscribe the SNS topic in each Region to the SQS queue.",
        "C.Subscribe the SQS queue in each Region to the SNS topic.",
        "D.Configure the SQS queue to publish URLs to SNS topics in each Region.",
        "E.Deploy the SNS topic and the Lambda function to other Regions."
      ],
      "q_cn": "一家公司在单个 AWS 区域中运行无服务器应用程序。应用程序访问外部 URL 并从这些站点中提取元数据。该公司使用 Amazon Simple Notification Service （Amazon SNS） 主题将 URL 发布到 Amazon Simple Queue Service （Amazon SQS） 队列。AWS Lambda 函数使用队列作为事件源并处理队列中的 URL。结果将保存到 Amazon S3 存储桶中。\n该公司希望处理其他区域中的每个 URL，以比较网站本地化的可能差异。必须从现有区域发布 URL。\n结果必须写入当前区域中的现有 S3 存储桶。\n    哪些更改组合将产生满足这些要求的多区域部署？（选择两个。",
      "a_cn": [
        "A.将带有 Lambda 函数的 SQS 队列部署到其他区域。",
        "B.将每个区域中的 SNS 主题订阅到 SQS 队列。",
        "C.将每个区域中的 SQS 队列订阅到 SNS 主题。",
        "D.配置 SQS 队列以将 URL 发布到每个区域中的 SNS 主题。",
        "E.将 SNS 主题和 Lambda 函数部署到其他区域。"
      ],
      "aa": "A,C",
      "qK": "SNS,SQS,Lambda,S3,URL,multi-Region",
      "aK": [
        "SQS,other Regions",
        "Subscribe,SQS,SNS"
      ]
    },
    {
      "no": 153,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 193,
      "q": "A company has IoT sensors that monitor traffic patterns throughout a large city. The company wants to read and collect data from the sensors and perform aggregations on the data.\nA solutions architect designs a solution in which the IoT devices are streaming to Amazon Kinesis Data Streams.Several applications are reading from the stream.However, several consumers are experiencing throttling and are periodically encountering a ReadProvisionedThroughputExceeded error.\nWhich actions should the solutions architect take to resolve this issue ? (Choose three.) ",
      "a": [
        "A.Reshard the stream to increase the number of shards in the stream.",
        "B.Use the Kinesis Producer Library (KPL). Adjust the polling frequency.",
        "C.Use consumers with the enhanced fan-out feature.",
        "D.Reshard the stream to reduce the number of shards in the stream.",
        "E.Use an error retry and exponential backoff mechanism in the consumer logic.",
        "F.Configure the stream to use dynamic partitioning."
      ],
      "q_cn": "一家公司拥有物联网传感器，可以监控整个大城市的交通模式。该公司希望从传感器读取和收集数据，并对数据进行聚合。\n解决方案架构师设计了一个解决方案，其中 IoT 设备流式传输到 Amazon Kinesis Data Streams。多个应用程序正在从流中读取。但是，一些使用者遇到限制，并定期遇到读取预配吞吐量超出错误。\n      解决方案架构师应采取哪些操作来解决此问题？（选择三个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,C,E",
      "qK": "IoT sensors,large city,Kinesis Data Streams",
      "aK": [
        "increase,fan-out,error retry"
      ]
    },
    {
      "no": 311,
      "q": "A company has a website that runs on four Amazon EC2 instances that are behind an Application Load Balancer (ALB). When the ALB detects that an EC2 instance is no longer available, an Amazon CloudWatch alarm enters the ALARM state. A member of the company's operations team then manually adds a new EC2 instance behind the ALB.\nA solutions architect needs to design a highly available solution that automatically handles the replacement of EC2 instances.The company needs to minimize downtime during the switch to the new solution.\nWhich set of steps should the solutions architect take to meet these requirements?",
      "a": [
        "A.Delete the existing ALB. Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Create a new ALB. Attach the Auto Scaling group to the new ALB. Attach the existing EC2 instances to the Auto Scaling group.",
        "B.Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Attach the Auto Scaling group to the existing ALB. Attach the existing EC2 instances to the Auto Scaling group.",
        "C.Delete the existing ALB and the EC2 instances. Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Create a new ALB. Attach the Auto Scaling group to the new ALB. Wait for the Auto Scaling group to launch the minimum number of EC2 instances.",
        "D.Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Attach the Auto Scaling group to the existing ALB. Wait for the existing ALB to register the existing EC2 instances with the Auto Scaling group."
      ],
      "q_cn": "一家公司有一个网站，该网站在应用程序负载均衡器 （ALB） 后面的四个 Amazon EC2 实例上运行。当 ALB 检测到 EC2 实例不再可用时，Amazon CloudWatch 警报将进入 ALARM 状态。然后，公司运营团队的一名成员在 ALB 后面手动添加新的 EC2 实例。n解决方案架构师需要设计一个高可用性解决方案，以自动处理 EC2 实例的替换。公司需要最大限度地减少切换到新解决方案期间的停机时间。\n解决方案架构师应采取哪一组步骤来满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "four Amazon EC2",
      "aK": [
        "Create,Attach the existing EC2"
      ]
    },
    {
      "no": 307,
      "q": "A company owns a chain of travel agencies and is running an application in the AWS Cloud. Company employees use the application to search for information about travel destinations. Destination content is updated four times each year.\nTwo fixed Amazon EC2 instances serve the application.The company uses an Amazon Route 53 public hosted zone with a multivalue record of travel.example.com that returns the Elastic IP addresses for the EC2 instances.The application uses Amazon DynamoDB as its primary data store.The company uses a self-hosted Redis instance as a caching solution.\nDuring content updates, the load on the EC2 instances and the caching solution increases drastically.This increased load has led to downtime on several occasions.A solutions architect must update the application so that the application is highly available and can handle the load that is generated by the content updates.\nWhich solution will meet these requirements ?",
      "a": [
        "A.Set up DynamoDB Accelerator (DAX) as in-memory cache. Update the application to use DAX. Create an Auto Scaling group for the EC2 instances. Create an Application Load Balancer (ALB). Set the Auto Scaling group as a target for the ALB. Update the Route 53 record to use a simple routing policy that targets the ALB's DNS alias. Configure scheduled scaling for the EC2 instances before the content updates.",
        "B.Set up Amazon ElastiCache for Redis. Update the application to use ElastiCache. Create an Auto Scaling group for the EC2 instances. Create an Amazon CloudFront distribution, and set the Auto Scaling group as an origin for the distribution. Update the Route 53 record to use a simple routing policy that targets the CloudFront distribution's DNS alias. Manually scale up EC2 instances before the content updates.",
        "C.Set up Amazon ElastiCache for Memcached. Update the application to use ElastiCache Create an Auto Scaling group for the EC2 instances. Create an Application Load Balancer (ALB). Set the Auto Scaling group as a target for the ALB. Update the Route 53 record to use a simple routing policy that targets the ALB's DNS alias. Configure scheduled scaling for the application before the content updates.",
        "D.Set up DynamoDB Accelerator (DAX) as in-memory cache. Update the application to use DAX. Create an Auto Scaling group for the EC2 instances. Create an Amazon CloudFront distribution, and set the Auto Scaling group as an origin for the distribution. Update the Route 53 record to use a simple routing policy that targets the CloudFront distribution's DNS alias. Manually scale up EC2 instances before the content updates."
      ],
      "q_cn": "一家公司拥有一系列旅行社，并在 AWS 云中运行应用程序。公司员工使用该应用程序搜索有关旅行目的地的信息。目标内容每年更新四次。\n两个固定的 Amazon EC2 实例为应用程序提供服务。该公司使用具有多值 travel.example.com 记录的 Amazon Route 53 公有托管区域返回 EC2 实例的弹性 IP 地址。应用程序使用 Amazon DynamoDB 作为其主数据存储。该公司使用自托管 Redis 实例作为缓存解决方案。\n在内容更新期间，EC2 实例和缓存解决方案上的负载急剧增加。这种增加的负载导致多次停机。解决方案架构师必须更新应用程序，以便应用程序具有高可用性，并且可以处理内容更新生成的负载。\n哪种解决方案将满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "travel.example.com",
      "aK": [
        "DAX,ALB"
      ]
    },
    {
      "no": 145,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 210,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 300,
      "q": "A company wants to use Amazon WorkSpaces in combination with thin client devices to replace aging desktops. Employees use the desktops to access applications that work with clinical trial data. Corporate security policy states that access to the applications must be restricted to only company branch office locations. The company is considering adding an additional branch office in the next 6 months.\nWhich solution meets these requirements with the MOST operational efficiency?",
      "a": [
        "A.Create an IP access control group rule with the list of public addresses from the branch offices. Associate the IP access control group with the WorkSpaces directory.",
        "B.Use AWS Firewall Manner to create a web ACL rule with an IPSet with the list of public addresses from the branch office locations. Associate the web ACL with the WorkSpaces directory.",
        "C.Use AWS Certificate Manager (ACM) to issue trusted device certificates to the machines deployed in the branch office locations. Enable restricted access on the WorkSpaces directory.",
        "D.Create a custom WorkSpace image with Windows Firewall configured to restrict access to the public addresses of the branch offices. Use the image to deploy the WorkSpaces."
      ],
      "q_cn": "一家公司希望将 Amazon WorkSpaces 与瘦客户端设备结合使用，以替换老化的桌面。员工使用桌面访问处理临床试验数据的应用程序。公司安全策略规定，对应用程序的访问必须仅限于公司分支机构位置。该公司正在考虑在未来6个月内增加一个分支机构。\n哪种解决方案以最高的运营效率满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "Amazon WorkSpaces,replace aging desktops,adding an additional branch office in the next 6 months",
      "aK": [
        "Create an IP access control group"
      ]
    },
    {
      "no": 319,
      "q": "A company uses AWS Organizations to manage a multi-account structure. The company has hundreds of AWS accounts and expects the number of accounts to increase. The company is building a new application that uses Docker images The company will push the Docker images to Amazon Elastic Container Registry (Amazon ECR). Only accounts that are within the company's organization should have access to the images.The company has a Cl/CD process that runs freguently. The company wants to retain all the tagged images. However, the company wants to retain only the five most recent untagged images. Which solution will meet these requirements with the LEAST operational overhead?",
      "a": [
        "A.Create a private repository in Amazon ECR. Create a permissions policy for the repository that allows only required ECR operations. Include a condition to allow the ECR operations if the value of the aws:PrincipalOrglD condition key is equal to the ID of the company's organization. Add a lifecycle rule to the ECR repository that deletes all untagged images over the count of five",
        "B.Create a public repository in Amazon ECR. Create an IAM role in the ECR account. Set permissions so that any account can assume the role if the value of the aws:PrincipalOrglD condition key is equal to the ID of the company's organization. Add a lifecycle rule to the ECR repository that deletes all untagged images over the count of five",
        "C.Create a private repository in Amazon ECR. Create a permissions policy for the repository that includes only required ECR operations.Include a condition to allow the ECR operations for all account IDs in the organization. Schedule a daily Amazon EventBridge rule to invoke an AWS Lambda function that deletes all untagged images over the count of five",
        "D.Create a public repository in Amazon ECR. Configure Amazon ECR to use an interface VPC endpoint with an endpoint policy that includes the required permissions for images that the company needs to pull. nclude a condition to allow the ECR operations for all account IDs in the company's organization.Schedule a daily Amazon EventBridge rule to invoke an AWS Lambda function that deletes all untagged images over the count of five"
      ],
      "q_cn": "一家公司使用 AWS Organizations 来管理多账户结构。该公司拥有数百个AWS账户，预计账户数量会增加。该公司正在构建一个使用Docker镜像的新应用程序，该公司将把Docker镜像推送到Amazon Elastic Container Registry（Amazon ECR）。只有公司组织内的帐户才能访问映像。该公司有一个频繁运行的 Cl/CD 流程。该公司希望保留所有标记的图像。但是，该公司希望仅保留五个最新的未标记图像。哪种解决方案能够以最少的运营开销满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "multi-account structure,hundreds of AWS accounts",
      "aK": [
        "private repository,allows only"
      ]
    },
    {
      "no": 140,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,E",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 174,
      "q": "A company wants to migrate to AWS. The company is running thousands of VMs in a VMware ESXi environment. The company has no configuration management database and has little knowledge about the utilization of the VMware portfolio.A solutions architect must provide the company with an accurate inventory so that the company can plan for a cost-effective migration.Which solution will meet these requirements with the LEAST operational overhead?",
      "a": [
        "A.Use AWS Systems Manager Patch Manager to deploy Migration Evaluator to each VM. Review the collected data in Amazon QuickSight.Identify servers that have high utilization Remove the servers that have high utilization from the migration list. lmport the data to AWS Migration Hub",
        "B.Export the VMware portfolio to a .csv file. Check the disk utilization for each server. Remove servers that have high utilization. Export the data to AWS Application Migration Service.Use AWS Server Miaration Service (AWS SMS) to migrate the remaining servers",
        "C.Deploy the Migration Evaluator agentless collector to the ESXi hypervisor. Review the collected data in Migration Evaluator. ldentify inactive servers. Remove the inactive servers from the migration list.lmport the data to AWS Migration Hub",
        "D.Deploy the AWS Application Migration Service Agent to each VM. When the data is collected, use Amazon Redshift to import and analyze the data. Use Amazon QuickSight for data visualization"
      ],
      "q_cn": "一家公司想要迁移到 AWS。该公司在VMware ESXi环境中运行数千个虚拟机。该公司没有配置管理数据库，对 VMware 产品组合的利用率知之甚少。解决方案架构师必须为公司提供准确的清单，以便公司可以规划经济高效的迁移。哪种解决方案能够以最少的运营开销满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "VMware ESXi",
      "aK": [
        "Migration Evaluator agentless,ESXi hypervisor"
      ]
    },
    {
      "no": 254,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 318,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 252,
      "q": "A solutions architect has implemented a SAML 2.0 federated identity solution with their company’s on-premises identity provider (IdP) to authenticate users’ access to the AWS environment. When the solutions architect tests authentication through the federated identity web portal, access to the AWS environment is granted. However, when test users attempt to authenticate through the federated identity web portal, they are not able to access the AWS environment.Which items should the solutions architect check to ensure identity federation is properly configured? (Choose three.)",
      "a": [
        "A.The IAM user’s permissions policy has allowed the use of SAML federation for that user.",
        "B.The IAM roles created for the federated users’ or federated groups’ trust policy have set the SAML provider as the principal.",
        "C.Test users are not in the AWSFederatedUsers group in the company’s IdR.",
        "D.The web portal calls the AWS STS AssumeRoleWithSAML API with the ARN of the SAML provider, the ARN of the IAM role, and the SAML assertion from IdR.",
        "E.The on-premises IdP’s DNS hostname is reachable from the AWS environment VPCs.",
        "F.The company’s IdP defines SAML assertions that properly map users or groups in the company to IAM roles with appropriate permissions."
      ],
      "q_cn": "解决方案架构师已与其公司的本地身份提供商 （IdP） 实施了 SAML 2.0 联合身份解决方案，以验证用户对 AWS 环境的访问。当解决方案架构师通过联合身份 Web 门户测试身份验证时，将授予对 AWS 环境的访问权限。但是，当测试用户尝试通过联合身份 Web 门户进行身份验证时，他们无法访问 AWS 环境。解决方案架构师应检查哪些项目以确保正确配置联合身份验证？（选择三个。",
      "a_cn": [
        "A.IAM 用户的权限策略已允许对该用户使用 SAML 联合身份验证。",
        "B.为联合身份用户或联合组的信任策略创建的 IAM 角色已将 SAML 提供程序设置为委托人。",
        "C.测试用户不在公司 IdR 的 AWSFederatedUsers 组中。",
        "D.Web 门户使用 SAML 提供程序的 ARN、IAM 角色的 ARN 和来自 IdR 的 SAML 断言调用 AWS STS AssumeRoleWithSAML API。",
        "E.可从 AWS 环境 VPC 访问本地 IdP 的 DNS 主机名。",
        "F.公司的 IdP 定义了 SAML 断言，这些断言将公司中的用户或组正确映射到具有适当权限的 IAM 角色。"
      ],
      "aa": "B,D,F",
      "qK": "SAML 2.0,(IdP)",
      "aK": [
        "principal",
        "STS",
        "map"
      ]
    },
    {
      "no": 100,
      "q": "A company that uses AWS Organizations allows developers to experiment on AWS. As part of the landing zone that the company has deployed, developers use their company email address to request an account. The company wants to ensure that developers are not launching costly services or running services unnecessarily. The company must give developers a fixed monthly budget to limit their AWS costs.\nWhich combination of steps will meet these requirements?(Choose three.) ",
      "a": [
        "A.Create an SCP to set a fixed monthly account usage limit. Apply the SCP to the developer accounts.",
        "B.Use AWS Budgets to create a fixed monthly budget for each developer’s account as part of the account creation process.",
        "C.Create an SCP to deny access to costly services and components.Apply the SCP to the developer accounts.",
        "D.Create an IAM policy to deny access to costly services and components.Apply the IAM policy to the developer accounts.",
        "E.Create an AWS Budgets alert action to terminate services when the budgeted amount is reached.Configure the action to terminate all services.",
        "F.Create an AWS Budgets alert action to send an Amazon Simple Notification Service(Amazon SNS) notification when the budgeted amount is reached.Invoke an AWS Lambda function to terminate all services."
      ],
      "q_cn": "使用 AWS Organizations 的公司允许开发人员在 AWS 上进行试验。作为公司已部署的登陆区域的一部分，开发人员使用其公司电子邮件地址请求帐户。该公司希望确保开发人员不会推出昂贵的服务或不必要地运行服务。该公司必须为开发人员提供固定的每月预算，以限制其AWS成本。\n哪些步骤组合将满足这些要求？（选择三个。",
      "a_cn": [
        "A.创建 SCP 以设置固定的每月帐户使用限制。将 SCP 应用于开发人员帐户。",
        "B.在账户创建过程中，使用 AWS 预算为每个开发人员的账户创建固定的每月预算。",
        "C.创建 SCP 以拒绝访问昂贵的服务和组件。将 SCP 应用于开发人员帐户。",
        "D.创建 IAM 策略以拒绝对成本高昂的服务和组件的访问。将 IAM 策略应用于开发人员账户。",
        "E.创建 AWS 预算警报操作，以便在达到预算金额时终止服务。配置操作以终止所有服务。",
        "F.创建 AWS 预算警报操作，以便在达到预算金额时发送 Amazon Simple Notification Service （Amazon SNS） 通知。调用 AWS Lambda 函数以终止所有服务。"
      ],
      "aa": "B,C,F",
      "qK": "email,request an account,not launching costly,fixed monthly budget to limit",
      "aK": [
        "Use,fixed monthly budget",
        "SCP to deny",
        "SNS"
      ]
    },
    {
      "no": 197,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "B,E",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 312,
      "q": "A company has AWS accounts that are in an organization in AWS Organizations. The company wants to track Amazon EC2 usage as a metric. The company's architecture team must receive a daily alert if the EC2 usage is more than 10% higher than the average EC2 usage from the last 30 days.Which solution will meet these requirements?",
      "a": [
        "A.Configure AWS Budgets in the organization's management account. Specify a usage type of EC2 running hours. Specify a daily period. Set the budget amount to be 10% more than the reported average usage for the last 30 davs from AWS Cost Explorer. Configure an alert to notify the architecture team if the usage threshold is met.",
        "B.Configure AWS Cost Anomaly Detection in the organization's management account. Configure a monitor type of AWS Service. Apply a filter of Amazon EC2. Configure an alert subscription to notify the architecture team if the usage is 10% more than the average usage for the last 30 days",
        "C.Enable AWS Trusted Advisor in the organization's management account.Configure a cost optimization advisory alert to notify the architecture team if the EC2 usage is 10% more than the reported average usage for the last 30 days",
        "D.Configure Amazon Detective in the organization's management account. Configure an EC2 usage anomaly alert to notify the architecture team if Detective identifies a usage anomaly of more than 10 % "
      ],
      "q_cn": "公司拥有位于 AWS 组织中的 AWS 账户。该公司希望将 Amazon EC2 使用情况作为指标进行跟踪。如果 EC2 使用率比过去 30 天的平均 EC2 使用率高出 10% 以上，公司的架构团队必须收到每日警报。哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "10% higher,last 30 days",
      "aK": [
        "Configure AWS Cost Anomaly"
      ]
    },
    {
      "no": 231,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 183,
      "q": "A company has deployed an application on AWS Elastic Beanstalk. The application uses Amazon Aurora for the database layer. An Amazon CloudFront distribution serves web requests and includes the Elastic Beanstalk domain name as the origin server. The distribution is configured with an alternate domain name that visitors use when they access the application.\nEach week, the company takes the application out of service for routine maintenance.During the time that the application is unavailable, the company wants visitors to receive an informational message instead of a CloudFront error message.\nA solutions architect creates an Amazon S3 bucket as the first step in the process.\nWhich combination of steps should the solutions architect take next to meet the requirements?(Choose three.) ",
      "a": [
        "A.Upload static informational content to the S3 bucket.",
        "B.Create a new CloudFront distribution.Set the S3 bucket as the origin.",
        "C.Set the S3 bucket as a second origin in the original CloudFront distribution.Configure the distribution and the S3 bucket to use an origin access identity(OAI).",
        "D.During the weekly maintenance, edit the default cache behavior to use the S3 origin.Revert the change when the maintenance is complete.",
        "E.During the weekly maintenance, create a cache behavior for the S3 origin on the new distribution.Set the path pattern to  Set the precedence to 0. Delete the cache behavior when the maintenance is complete.",
        "F.During the weekly maintenance, configure Elastic Beanstalk to serve traffic from the S3 bucket."
      ],
      "q_cn": "一家公司在 AWS Elastic Beanstalk 上部署了一个应用程序。应用程序将 Amazon Aurora 用于数据库层。Amazon CloudFront 分配为 Web 请求提供服务，并将 Elastic Beanstalk 域名作为源服务器。分配配置了访问者在访问应用程序时使用的备用域名。\n每周，该公司都会停止使用该应用程序以进行日常维护。在应用程序不可用期间，该公司希望访问者收到信息性消息，而不是 CloudFront 错误消息。\n解决方案架构师创建 Amazon S3 存储桶作为该过程的第一步。\n解决方案架构师接下来应采取哪些步骤组合来满足要求？（选择三个。",
      "a_cn": [
        "A.将静态信息内容上传到 S3 存储桶。",
        "B.创建新的 CloudFront 分配。将 S3 存储桶设置为源。",
        "C.将 S3 存储桶设置为原始 CloudFront 分配中的第二个源。将分配和 S3 存储桶配置为使用源访问身份 （OAI）。",
        "D.在每周维护期间，编辑默认缓存行为以使用 S3 源。维护完成后还原更改。",
        "E.在每周维护期间，在新分配上为 S3 源创建缓存行为。将路径模式设置为  将优先级设置为 0。维护完成后删除缓存行为。",
        "F.在每周维护期间，将 Elastic Beanstalk 配置为提供来自 S3 存储桶的流量。"
      ],
      "aa": "A,C,D",
      "qK": "Beanstalk,out of service,informational message instead of a CloudFront error",
      "aK": [
        "static,[S3]",
        "second origin,OAI",
        "edit,Revert"
      ]
    },
    {
      "no": 294,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 277,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "B,D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 304,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 187,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 161,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 160,
      "q": "A company gives users the ability to upload images from a custom application. The upload process invokes an AWS Lambda function that processes and stores the image in an Amazon S3 bucket. The application invokes the Lambda function by using a specific function version ARN.\nThe Lambda function accepts image processing parameters by using environment variables.The company often adjusts the environment variables of the Lambda function to achieve optimal image processing output.The company tests different parameters and publishes a new function version with the updated environment variables after validating results.This update process also requires frequent changes to the custom application to invoke the new function version ARN.These changes cause interruptions for users.\nA solutions architect needs to simplify this process to minimize disruption to users.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      "a": [
        "A.Directly modify the environment variables of the published Lambda function version. Use the SLATEST version to test image processing parameters.",
        "B.Create an Amazon DynamoDB table to store the image processing parameters.Modify the Lambda function to retrieve the image processing parameters from the DynamoDB table.",
        "C.Directly code the image processing parameters within the Lambda function and remove the environment variables.Publish a new function version when the company updates the parameters.",
        "D.Create a Lambda function alias.Modify the client application to use the function alias ARN.Reconfigure the Lambda alias to point to new versions of the function when the company finishes testing."
      ],
      "q_cn": "公司使用户能够从自定义应用程序上传图像。上传过程会调用 AWS Lambda 函数，该函数处理映像并将其存储在 Amazon S3 存储桶中。应用程序使用特定函数版本 ARN 调用 Lambda 函数。\nLambda 函数使用环境变量接受图像处理参数。该公司经常调整 Lambda 函数的环境变量，以实现最佳图像处理输出。该公司测试了不同的参数，并在验证结果后发布了具有更新环境变量的新函数版本。此更新过程还需要频繁更改自定义应用程序以调用新功能版本 ARN。这些更改会导致用户中断。\n解决方案架构师需要简化此过程，以最大程度地减少对用户的干扰。\n哪种解决方案能够以最少的运营开销满足这些要求？",
      "a_cn": [
        "A.直接修改已发布的 Lambda 函数版本的环境变量。使用 SLATEST 版本测试图像处理参数。",
        "B.创建一个 Amazon DynamoDB 表来存储图像处理参数。修改 Lambda 函数以从 DynamoDB 表中检索图像处理参数。",
        "C.直接在 Lambda 函数中对图像处理参数进行编码，并删除环境变量。在公司更新参数时发布新的函数版本。",
        "D.创建 Lambda 函数别名。修改客户端应用程序以使用函数别名 ARN。重新配置 Lambda 别名，以便在公司完成测试时指向函数的新版本。"
      ],
      "aa": "D",
      "qK": "upload images,Lambda function,environment variables",
      "aK": [
        "alias"
      ]
    },
    {
      "no": 106,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 84,
      "q": "A company recently deployed an application on AWS. The application uses Amazon DynamoDB. The company measured the application load and configured the RCUs and WCUs on the DynamoDB table to match the expected peak load. The peak load occurs once a week for a 4-hour period and is double the average load. The application load is close to the average load for the rest of the week. The access pattern includes many more writes to the table than reads of the table.\nA solutions architect needs to implement a solution to minimize the cost of the table.\nWhich solution will meet these requirements?",
      "a": [
        "A.Use AWS Application Auto Scaling to increase capacity during the peak period. Purchase reserved RCUs and WCUs to match the average load.",
        "B.Configure on-demand capacity mode for the table.",
        "C.Configure DynamoDB Accelerator(DAX) in front of the table.Reduce the provisioned read capacity to match the new peak load on the table.",
        "D.Configure DynamoDB Accelerator(DAX) in front of the table.Configure on-demand capacity mode for the table."
      ],
      "q_cn": "一家公司最近在 AWS 上部署了一个应用程序。该应用程序使用 Amazon DynamoDB。该公司测量了应用程序负载，并在 DynamoDB 表上配置 RCU 和 WCU，以匹配预期的峰值负载。峰值负载每周发生一次，持续 4 小时，是平均负载的两倍。应用程序负载接近一周剩余时间的平均负载。访问模式包括对表的写入比对表的读取多得多。\n解决方案架构师需要实现解决方案以最大程度地降低表的成本。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.使用 AWS 应用程序 Auto Scaling 在高峰期增加容量。购买预留的 RCU 和 WCU 以匹配平均负载。",
        "B.为表配置按需容量模式。",
        "C.在表前面配置 DynamoDB 加速器 （DAX）。减少预置的读取容量以匹配表上的新峰值负载。",
        "D.在表前面配置 DynamoDB 加速器 （DAX）。为表配置按需容量模式。"
      ],
      "aa": "A",
      "qK": "DynamoDB,RCUs,WCUs,4-hour,double the average load",
      "aK": [
        "RCUs,WCUs"
      ]
    },
    {
      "no": 64,
      "q": "A retail company needs to provide a series of data files to another company, which is its business partner. These files are saved in an Amazon S3 bucket under Account A, which belongs to the retail company.The business partner company wants one of its IAM users, User_DataProcessor, to access the files from its own AWS account(Account B).\nWhich combination of steps must the companies take so that User_DataProcessor can access the S3 bucket successfully?(Choose two.) ",
      "a": [
        "A.Turn on the cross-origin resource sharing (CORS) feature for the S3 bucket in Account A.",
        "B.InAccountA, set the S3 bucket policy to the following:\n        {\n          \"Effect\": \"Allow\",\n          \"Action\": {\n            \"s3:GetObject\",\n            \"s3:ListBucket\"\n          },\n          \"Resource\": \"arn:aws:s3:::AccountABucketName/*\"\n        }",
        "C.InAccount A, set the S3 bucket policy to the following:\n        {\n          \"Effect\": \"Allow\",\n          \"Principal\": {\n            \"AWS\": \"arn:aws:iam::AccountB:use/User_DataProcessor\"\n          },\n          \"Action\": {\n            \"s3:GetObject\",\n            \"s3:ListBucket\"\n          },\n          \"Resource\": \"arn:aws:s3:::AccountABucketName/*\"\n        }",
        "D.InAccount B, set the permissions of User_DataProcessor to the following:\n        {\n          \"Effect\": \"Allow\",\n          \"Action\": {\n            \"s3:GetObject\",\n            \"s3:ListBucket\"\n          },\n          \"Resource\": \"arn:aws:s3:::AccountABucketName/*\"\n        }",
        "E.InAccount B, set the permissions of User_DataProcessor to the following: \n        {\n          \"Effect\": \"Allow\",\n          \"Principal\": {\n            \"AWS\": \"arn:aws:iam::AccountB:use/User_DataProcessor\"\n          },\n          \"Action\": {\n            \"s3:GetObject\",\n            \"s3:ListBucket\"\n          },\n          \"Resource\": \"arn:aws:s3:::AccountABucketName/*\"\n        }"
      ],
      "q_cn": "零售公司需要向另一家公司（其业务合作伙伴）提供一系列数据文件。这些文件保存在 Amazon S3 存储桶中，位于帐户 A，属于零售公司。业务合作伙伴公司希望其 IAM 用户之一（User_DataProcessor）从自己的文件访问文件AWS 账户（账户 B）。\n公司必须采取哪些步骤组合才能User_DataProcessor成功访问 S3 存储桶？（选择两个。",
      "a_cn": [
        "A.为账户 A 中的 S3 存储桶启用跨源资源共享 （CORS） 功能。",
        "B.在账户 A 中，将 S3 存储桶策略设置为以下内容：\n        {\n          \"Effect\": \"Allow\",\n          \"Action\": {\n            \"s3:GetObject\",\n            \"s3:ListBucket\"\n          },\n          \"Resource\": \"arn:aws:s3:::AccountABucketName\"\n        }",
        "C.在账户 A 中，将 S3 存储桶策略设置为以下内容：\n        {\n          \"Effect\": \"Allow\",\n          \"Principal\": {\n            \"AWS\": \"arn:aws:iam::AccountB:use/User_DataProcessor\"\n          },\n          \"Action\": {\n            \"s3:GetObject\",\n            \"s3:ListBucket\"\n          },\n          \"Resource\": \"arn:aws:s3:::AccountABucketName/*\"\n        }",
        "D.在帐户 B 中，将User_DataProcessor的权限设置为以下内容：\n        {\n          \"Effect\": \"Allow\",\n          \"Action\": {\n            \"s3:GetObject\",\n            \"s3:ListBucket\"\n          },\n          \"Resource\": \"arn:aws:s3:::AccountABucketName/*\"\n        }",
        "E.在账号 B 中，将User_DataProcessor的权限设置为以下内容：\n        {\n          \"Effect\": \"Allow\",\n          \"Principal\": {\n            \"AWS\": \"arn:aws:iam::AccountB:use/User_DataProcessor\"\n          },\n          \"Action\": {\n            \"s3:GetObject\",\n            \"s3:ListBucket\"\n          },\n          \"Resource\": \"arn:aws:s3:::AccountABucketName/*\"\n        }"
      ],
      "aa": "C,D",
      "qK": "User_DataProcessor",
      "aK": [
        "InAccount A, Principal",
        "InAccount B, no Principal"
      ]
    },
    {
      "no": 313,
      "q": "A company's compliance audit reveals that some Amazon Elastic Block Store (Amazon EBS) volumes that were created in an AWS account were not encrypted.\nA solutions architect must implement a solution to encrypt all new EBS volumes at rest.\nWhich solution will meet this requirement with the LEAST effort?",
      "a": [
        "A.Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect the creation of unencrypted EBS volumes. Invoke an AWS Lambda function to delete noncompliant volumes.",
        "B.Use AWS Audit Manager with data encryption.",
        "C.Create an AWS Config rule to detect the creation of a new EBS volume. Encrypt the volume by using AWS Systems Manager Automation.",
        "D.Turn on EBS encryption by default in all AWS Regions."
      ],
      "q_cn": "一家公司的合规性审计显示，在 AWS 账户中创建的某些 Amazon Elastic Block Store （Amazon EBS） 卷未加密。\n解决方案架构师必须实施一个解决方案来加密所有新的静态 EBS 卷。\n哪种解决方案可以以最少的努力满足此要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "EBS,encrypt all",
      "aK": [
        "all AWS Regions"
      ]
    },
    {
      "no": 292,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 138,
      "q": "A company is running an application that uses an Amazon ElastiCache for Redis cluster as a caching layer. A recent security audit revealed that the company has configured encryption at rest for ElastiCache. However, the company did not configure ElastiCache to use encryption in transit. Additionally, users can access the cache without authentication.\nA solutions architect must make changes to require user authentication and to ensure that the company is using end-to-end encryption.\nWhich solution will meet these requirements ? ",
      "a": [
        "A.Create an AUTH token. Store the token in AWS System Manager Parameter Store, as an encrypted parameter. Create a new cluster with AUTH, and configure encryption in transit. Update the application to retrieve the AUTH token from Parameter Store when necessary and to use the AUTH token for authentication.",
        "B.Create an AUTH token.Store the token in AWS Secrets Manager.Configure the existing cluster to use the AUTH token, and configure encryption in transit.Update the application to retrieve the AUTH token from Secrets Manager when necessary and to use the AUTH token for authentication.",
        "C.Create an SSL certificate.Store the certificate in AWS Secrets Manager.Create a new cluster, and configure encryption in transit.Update the application to retrieve the SSL certificate from Secrets Manager when necessary and to use the certificate for authentication.",
        "D.Create an SSL certificate.Store the certificate in AWS Systems Manager Parameter Store, as an encrypted advanced parameter.Update the existing cluster to configure encryption in transit.Update the application to retrieve the SSL certificate from Parameter Store when necessary and to use the certificate for authentication."
      ],
      "q_cn": "一家公司正在运行一个应用程序，该应用程序使用 Amazon ElastiCache for Redis 集群作为缓存层。最近的安全审计显示，该公司已经为ElastiCache配置了静态加密。但是，该公司没有将ElastiCache配置为使用传输中加密。此外，用户无需身份验证即可访问缓存。\n解决方案架构师必须进行更改以要求用户身份验证并确保公司使用端到端加密。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A.创建身份验证令牌。将令牌作为加密参数存储在 AWS 系统管理器参数存储中。使用 AUTH 创建新集群，并配置传输中加密。更新应用程序以在必要时从参数存储中检索 AUTH 令牌，并使用 AUTH 令牌进行身份验证。",
        "B.创建身份验证令牌。将令牌存储在 AWS 密钥管理器中。将现有群集配置为使用 AUTH 令牌，并配置传输中加密。更新应用程序以在必要时从机密管理器检索 AUTH 令牌，并使用 AUTH 令牌进行身份验证。",
        "C.创建 SSL 证书。将证书存储在 AWS 密钥管理器中。创建新群集，并配置传输中加密。更新应用程序以在必要时从机密管理器检索 SSL 证书，并使用该证书进行身份验证。",
        "D.创建 SSL 证书。将证书作为加密的高级参数存储在 AWS 系统管理器参数存储中。更新现有群集以配置传输中加密。更新应用程序以在必要时从参数存储中检索 SSL 证书，并使用证书进行身份验证。"
      ],
      "aa": "B",
      "qK": "ElastiCache for Redis,end-to-end encryption",
      "aK": [
        "AUTH token,Secrets Manager"
      ]
    },
    {
      "no": 238,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,B,E",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 317,
      "q": "An online survey company runs its application in the AWS Cloud. The application is distributed and consists of microservices that run in an automatically scaled Amazon Elastic Container Service (Amazon ECS) cluster. The ECS cluster is a target for an Application Load Balancer(ALB). The ALB is a custom origin for an Amazon CloudFront distribution. The company has a survey that contains sensitive data. The sensitive data must be encrypted when it moves through the application. The application's data-handling microservice is the only microservice that should be able to decrypt the data.Which solution will meet these requirements?",
      "a": [
        "A.Create a symmetric AWS Key Management Service (AWS KMS) key that is dedicated to the data-handling microservice. Create a field-level encryption profile and a configuration. Associate the KMS key and the configuration with the CloudFront cache behavior",
        "B.Create an RSA key pair that is dedicated to the data-handling microservice. Upload the public key to the CloudFront distribution. Create a field-level encryption profile and a configuration. Add the configuration to the CloudFront cache behavior",
        "C.Create a symmetric AWS Key Management Service (AWS KMS) key that is dedicated to the data-handling microservice. Create a Lambda@Edge function. Program the function to use the KMS key to encrypt the sensitive data",
        "D.Create an RSA key pair that is dedicated to the data-handling microservice. Create a Lambda@Edge function. Program the function to use the private key of the RSA key pair to encrypt the sensitive data"
      ],
      "q_cn": "一家在线调查公司在 AWS 云中运行其应用程序。该应用程序是分布式的，由在自动扩展的 Amazon Elastic Container Service （Amazon ECS） 集群中运行的微服务组成。ECS 集群是应用程序负载均衡器 （ALB） 的目标。ALB 是 Amazon CloudFront 分配的自定义源。该公司有一项包含敏感数据的调查。敏感数据在应用程序中移动时必须加密。应用程序的数据处理微服务是唯一应该能够解密数据的微服务。哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "An online survey company",
      "aK": [
        "KMS,field-level"
      ]
    },
    {
      "no": 121,
      "q": "A manufacturing company has developed a process to gather factory floor device telemetry. The company uses AWS Control Tower. The company also uses an AWS CloudFormation stack to provision a new VPC for each factory location with a set of containers in Amazon Elastic Container Service(Amazon ECS)and Amazon CloudWatch. The company is now acquiring another manufacturing company that has geographically remote plants. The company wants to modernize these plants. One of the tasks is to apply the same telemetry-gathering process. The network latency that results from connecting the devices directly to the services in the AWS network is very high which can affect reliability. How can the company integrate the new plants into the existing architecture?",
      "a": [
        "A.Use AWS Control Tower to create new OUs to add new accounts for the new plants. Deploy the ECS containers and CloudWatch into the accounts",
        "B.Request an AWS Snowball Edge device for the newly acquired plants. Connect the device to AwS loT Core and register all the factory floor devices through AWS loT Core. Map the devices into the existing VPC and connect the devices to the ECS containers",
        "C.Request and install an AWS Outposts server in the newly acquired plants. Within the Outposts server, use the CloudFormation stack to provision required VPC and ECS containers to connect to the devices.Connect to CloudWatch in the AWS Region",
        "D.Use Amazon EC2 Dedicated lnstances. Use the CloudFormation stack to provision required VPC and ECS containers. Connect to CloudWatch in the AWS Region"
      ],
      "q_cn": "一家制造公司开发了一个收集工厂车间设备遥测数据的流程。该公司使用 AWS Control Tower。该公司还使用 AWS CloudFormation 堆栈为每个工厂位置预置一个新的 VPC，其中包含 Amazon Elastic Container Service （Amazon ECS） 和 Amazon CloudWatch 中的一组容器。该公司现在正在收购另一家拥有偏远工厂的制造公司。该公司希望对这些工厂进行现代化改造。任务之一是应用相同的遥测收集过程。将设备直接连接到 AWS 网络中的服务而导致的网络延迟非常高，这可能会影响可靠性。公司如何将新工厂整合到现有架构中？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "telemetry-gathering process",
      "aK": [
        "AWS Outposts"
      ]
    },
    {
      "no": 178,
      "q": "A company wants to containerize a multi-tier web application and move the application from an on-premises data center to AWS. The application includes web. application, and database tiers. The company needs to make the application fault tolerant and scalable. Some frequently accessed data must always be available across application servers. Frontend web servers need session persistence and must scale to meet increases in traffic.\nWhich solution will meet these requirements with the LEAST ongoing operational overhead?",
      "a": [
        "A.Run the application on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. Use Amazon Elastic File System (Amazon EFS) for data that is frequently accessed between the web and application tiers. Store the frontend web server session data in Amazon Simple Queue Service (Amazon SQS).",
        "B.Run the application on Amazon Elastic Container Service(Amazon ECS) on Amazon EC2.Use Amazon ElastiCache for Redis to cache frontend web server session data.Use Amazon Elastic Block Store(Amazon EBS) with Multi-Attach on EC2 instances that are distributed across multiple Availability Zones.",
        "C.Run the application on Amazon Elastic Kubernetes Service(Amazon EKS).Configure Amazon EKS to use managed node groups.Use ReplicaSets to run the web servers and applications.Create an Amazon Elastic File System(Amazon EFS) file system.Mount the EFS file system across all EKS pods to store frontend web server session data.",
        "D.Deploy the application on Amazon Elastic Kubernetes Service(Amazon EKS).Configure Amazon EKS to use managed node groups.Run the web servers and application as Kubernetes deployments in the EKS cluster.Store the frontend web server session data in an Amazon DynamoDB table.Create an Amazon Elastic File System(Amazon EFS) volume that all applications will mount at the time of deployment."
      ],
      "q_cn": "一家公司希望容器化多层 Web 应用程序，并将应用程序从本地数据中心迁移到 AWS。该应用程序包括网络。应用程序和数据库层。公司需要使应用程序具有容错能力和可扩展性。某些经常访问的数据必须始终跨应用程序服务器可用。前端 Web 服务器需要会话持久性，并且必须扩展以满足流量的增加。\n哪种解决方案能够以最少的日常运营开销满足这些要求？",
      "a_cn": [
        "A.在 AWS Fargate 上的 Amazon Elastic Container Service （Amazon ECS） 上运行应用程序。将 Amazon Elastic File System （Amazon EFS） 用于在 Web 层和应用程序层之间频繁访问的数据。将前端 Web 服务器会话数据存储在 Amazon Simple Queue Service （Amazon SQS） 中。",
        "B.在 Amazon EC2 上的 Amazon Elastic Container Service （Amazon ECS） 上运行应用程序。使用 Amazon ElastiCache for Redis 缓存前端 Web 服务器会话数据。在分布在多个可用区的 EC2 实例上将 Amazon Elastic Block Store （Amazon EBS） 与多重挂载结合使用。",
        "C.在 Amazon Elastic Kubernetes Service （Amazon EKS） 上运行应用程序。将 Amazon EKS 配置为使用托管节点组。使用副本集运行 Web 服务器和应用程序。创建 Amazon Elastic File System （Amazon EFS） 文件系统。在所有 EKS 容器中挂载 EFS 文件系统以存储前端 Web 服务器会话数据。",
        "D.在 Amazon Elastic Kubernetes Service （Amazon EKS） 上部署应用程序。将 Amazon EKS 配置为使用托管节点组。在 EKS 集群中将 Web 服务器和应用程序作为 Kubernetes 部署运行。将前端 Web 服务器会话数据存储在 Amazon DynamoDB 表中。创建一个 Amazon Elastic File System（Amazon EFS） 卷，所有应用程序都将在部署时挂载该卷。"
      ],
      "aa": "D",
      "qK": "containerize,LEAST,operational",
      "aK": [
        "EKS,DynamoDB"
      ]
    },
    {
      "no": 278,
      "q": "A software-as-a-service (SaaS) provider exposes APIs through an Application Load Balancer (ALB). The ALB connects to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that is deployed in the us-east-1 Region. The exposed APIs contain usage of a few non-standard REST methods: LINK, UNLINK, LOCK, and UNLOCK.\nUsers outside the United States are reporting long and inconsistent response times for these APIs. A solutions architect needs to resolve this problem with a solution that minimizes operational overhead.\nWhich solution meets these requirements?",
      "a": [
        "A.Add an Amazon CloudFront distribution. Configure the ALB as the origin.",
        "B.Add an Amazon API Gateway edge-optimized API endpoint to expose the APIs. Configure the ALB as the target.",
        "C.Add an accelerator in AWS Global Accelerator. Configure the ALB as the origin.",
        "D.Deploy the APIs to two additional AWS Regions: eu-west-1 and ap-southeast-2. Add latency-based routing records in Amazon Route 53."
      ],
      "q_cn": "软件即服务 （SaaS） 提供商通过应用程序负载均衡器 （ALB） 公开 API。ALB 连接到部署在 us-east-1 区域中的 Amazon Elastic Kubernetes Service （Amazon EKS） 集群。公开的 API 包含一些非标准 REST 方法的使用：链接、取消链接、锁定和解锁。\n美国以外的用户报告这些 API 的响应时间过长且不一致。解决方案架构师需要使用能够最大程度地减少操作开销的解决方案来解决此问题。\n哪个解决方案满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "SaaS,LINK,UNLINK,LOCK,UNLOCK",
      "aK": [
        "AWS Global Accelerator"
      ]
    },
    {
      "no": 217,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 276,
      "q": "A company has more than 10,000 sensors that send data to an on-premises Apache Kafka server by using the Message Queuing Telemetry Transport (MQTT) protocol. The on-premises Kafka server transforms the data and then stores the results as objects in an Amazon S3 bucket.\nRecently, the Kafka server crashed. The company lost sensor data while the server was being restored. A solutions architect must create a new design on AWS that is highly available and scalable to prevent a similar occurrence.\nWhich solution will meet these requirements?",
      "a": [
        "A.Launch two Amazon EC2 instances to host the Kafka server in an active/standby configuration across two Availability Zones. Create a domain name in Amazon Route 53. Create a Route 53 failover policy. Route the sensors to send the data to the domain name.",
        "B.Migrate the on-premises Kafka server to Amazon Managed Streaming for Apache Kafka (Amazon MSK). Create a Network Load Balancer (NLB) that points to the Amazon MSK broker. Enable NLB health checks. Route the sensors to send the data to the NLB.",
        "C.Deploy AWS IoT Core, and connect it to an Amazon Kinesis Data Firehose delivery stream. Use an AWS Lambda function to handle data transformation. Route the sensors to send the data to AWS IoT Core.",
        "D.Deploy AWS IoT Core, and launch an Amazon EC2 instance to host the Kafka server. Configure AWS IoT Core to send the data to the EC2 instance. Route the sensors to send the data to AWS IoT Core."
      ],
      "q_cn": "一家公司拥有 10,000 多个传感器，这些传感器使用消息队列遥测传输 （MQTT） 协议将数据发送到本地 Apache Kafka 服务器。本地 Kafka 服务器转换数据，然后将结果作为对象存储在 Amazon S3 存储桶中。\n最近，Kafka 服务器崩溃了。该公司在服务器恢复时丢失了传感器数据。解决方案架构师必须在 AWS 上创建一个高度可用且可扩展的新设计，以防止类似情况发生。\n哪种解决方案将满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "10,000 sensors,Kafka,MQTT",
      "aK": [
        "IoT Core,Kinesis Data Firehose"
      ]
    },
    {
      "no": 237,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 110,
      "q": "A company has its cloud infrastructure on AWS. A solutions architect needs to define the infrastructure as code. The infrastructure is currently deployed in one AWS Region.The company's business expansion plan includes deployments in multiple Regions across multiple AWS accounts.\nWhat should the solutions architect do to meet these requirements?",
      "a": [
        "A.Use AWS CloudFormation templates. Add IAM policies to control the various accounts. Deploy the templates across the multiple Regions.",
        "B.Use AWS Organizations.Deploy AWS CloudFormation templates from the management account.Use AWS Control Tower to manage deployments across accounts.",
        "C.Use AWS Organizations and AWS CloudFormation StackSets.Deploy a CloudFormation template from an account that has the necessary IAM permissions.",
        "D.Use nested stacks with AWS CloudFormation templates.Change the Region by using nested stacks."
      ],
      "q_cn": "一家公司在 AWS 上拥有其云基础设施。解决方案架构师需要将基础结构定义为代码。基础设施目前部署在一个AWS 区域。该公司的业务扩展计划包括在多个 AWS 账户的多个区域中进行部署。\n解决方案架构师应该做些什么来满足这些要求？",
      "a_cn": [
        "A.使用 AWS CloudFormation 模板。添加 IAM 策略以控制各种账户。跨多个区域部署模板。",
        "B.使用 AWS 组织。从管理账户部署 AWS CloudFormation 模板。使用 AWS 控制塔跨账户管理部署。",
        "C.使用 AWS Organizations 和 AWS CloudFormation StackSets。从具有必要 IAM 权限的账户部署 CloudFormation 模板。",
        "D.将嵌套堆栈与 AWS CloudFormation 模板结合使用。使用嵌套堆栈更改区域。"
      ],
      "aa": "C",
      "qK": "as code,multiple Regions across multiple AWS accounts",
      "aK": [
        "CloudFormation StackSets"
      ]
    },
    {
      "no": 152,
      "q": "A solutions architect is redesigning a three-tier application that a company hosts on premises. The application provides personalized recommendations based on user profiles. The company already has an AWS account and has configured a VPC to host the application. The frontend is a Java-based application that runs in on-premises VMs. The company hosts a personalization model on a physical application server and uses TensorFlow to implement the model. The personalization model uses artificial intelligence and machine learning (AI/ML). The company stores user information in a Microsoft SQL Server database The web application calls the personalization model, which reads the user profiles from the database and provides recommendations. The company wants to migrate the redesigned application to AWS.Which solution will meet this requirement with the LEAST operational overhead?",
      "a": [
        "A.Use AWS Server Migration Service (AWS SMS) to migrate the on-premises physical application server and the web application VMs to AWS. Use AWS Database Migration Service (AWS DMS) to migrate the SQL Server database to Amazon RDS for SQL Server",
        "B.Export the personalization model. Store the model artifacts in Amazon S3. Deploy the model to Amazon SageMaker and create an endpoint Host the Java application in AWS Elastic Beanstalk.Use AWS Database Migration Service (AWS DMS) to migrate the SQL Server database to Amazon RDS for SQL Server",
        "C.Use AWS Application Migration Service to migrate the on-premises personalization model and VMs to Amazon EC2 instances in Auto Scaling groups.Use AWS Database Migration Service (AWS DMS) to migrate the SQL Server database on an EC2 instance",
        "D.Containerize the personalization model and the Java application.Use Amazon Elastic Kubernetes Service (Amazon EKS) managed node groups to deploy the model and the application to Amazon EKS.Host the node groups in a VPC. Use AWS Database Migration Servoce (AWS DMS) to migrate the SLQ Server database to Amazon RDS for SQL Server"
      ],
      "q_cn": "解决方案架构师正在重新设计公司在本地托管的三层应用程序。该应用程序根据用户配置文件提供个性化建议。该公司已经拥有一个 AWS 账户，并已配置一个 VPC 来托管应用程序。前端是在本地 VM 中运行的基于 Java 的应用程序。该公司在物理应用程序服务器上托管个性化模型，并使用TensorFlow来实现该模型。个性化模型使用人工智能和机器学习 （AI/ML）。该公司将用户信息存储在Microsoft SQL Server 数据库中 Web 应用程序调用个性化模型，该模型从数据库中读取用户配置文件并提供建议。该公司希望将重新设计的应用程序迁移到 AWS。哪种解决方案能够以最少的运营开销满足此要求？",
      "a_cn": [
        "A.使用 AWS 服务器迁移服务 （AWS SMS） 将本地物理应用程序服务器和 Web 应用程序虚拟机迁移到 AWS。使用 AWS Database Migration Service （AWS DMS） 将 SQL Server 数据库迁移到 Amazon RDS for SQL Server",
        "B.导出个性化模型。将模型构件存储在 Amazon S3 中。将模型部署到 Amazon SageMaker 并创建一个终端节点 在 AWS Elastic Beanstalk 中托管 Java 应用程序。使用 AWS Database Migration Service （AWS DMS） 将 SQL Server 数据库迁移到 Amazon RDS for SQL Server",
        "C.使用 AWS 应用程序迁移服务将本地个性化模型和虚拟机迁移到 Auto Scaling 组中的 Amazon EC2 实例。使用 AWS Database Migration Service （AWS DMS） 迁移 EC2 实例上的 SQL Server 数据库",
        "D.容器化个性化模型和 Java 应用程序。使用 Amazon Elastic Kubernetes Service （Amazon EKS） 托管节点组将模型和应用程序部署到 Amazon EKS。在 VPC 中托管节点组。使用 AWS Database Migration Servoce （AWS DMS） 将 SLQ Server 数据库迁移到 Amazon RDS for SQL Server"
      ],
      "aa": "A",
      "qK": "TensorFlow,AI",
      "aK": [
        "SMS"
      ]
    },
    {
      "no": 49,
      "q": "A company wants to migrate its data analytics environment from on premises to AWS. The environment consists of two simple Node.js applications. One of the applications collects sensor data and loads it into a MySQL database. The other application aggregates the data into reports. When the aggregation jobs run, some of the load jobs fail to run correctly.\nThe company must resolve the data loading issue.The company also needs the migration to occur without interruptions or changes for the company's customers.\nWhat should a solutions architect do to meet these requirements?",
      "a": [
        "A.Set up an Amazon Aurora MySQL database as a replication target for the on-premises database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind a Network Load Balancer (NLB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the NLB.",
        "B.Set up an Amazon Aurora MySQL database.Use AWS Database Migration Service(AWS DMS) to perform continuous data replication from the on-premises database to Aurora.Move the aggregation jobs to run against the Aurora MySQL database.Set up collection endpoints behind an Application Load Balancer(ALB) as Amazon EC2 instances in an Auto Scaling group.When the databases are synced, point the collector DNS record to the ALB.Disable the AWS DMS sync task after the cutover from on premises to AWS.",
        "C.Set up an Amazon Aurora MySQL database.Use AWS Database Migration Service(AWS DMS) to perform continuous data replication from the on-premises database to Aurora.Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica.Set up collection endpoints as AWS Lambda functions behind an Application Load Balancer(ALB), and use Amazon RDS Proxy to write to the Aurora MySQL database.When the databases are synced, point the collector DNS record to the ALB.Disable the AWS DMS sync task after the cutover from on premises to AWS.",
        "D.Set up an Amazon Aurora MySQL database.Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica.Set up collection endpoints as an Amazon Kinesis data stream.Use Amazon Kinesis Data Firehose to replicate the data to the Aurora MySQL database.When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance.Point the collector DNS record to the Kinesis data stream."
      ],
      "q_cn": "一家公司希望将其数据分析环境从本地迁移到 AWS。该环境由两个简单的 Node.js 应用程序组成。其中一个应用程序收集传感器数据并将其加载到 MySQL 数据库中。另一个应用程序将数据聚合到报表中。聚合作业运行时，某些加载作业无法正常运行。\n公司必须解决数据加载问题。公司还需要在不中断或更改公司客户的情况下进行迁移。\n解决方案架构师应该做些什么来满足这些要求？",
      "a_cn": [
        "A.将 Amazon Aurora MySQL 数据库设置为本地数据库的复制目标。为 Aurora MySQL 数据库创建 Aurora 副本，并将聚合作业移动到针对 Aurora 副本运行。将收集终端节点设置为网络负载均衡器 （NLB） 后面的 AWS Lambda 函数，并使用 Amazon RDS Proxy 写入 Aurora MySQL 数据库。同步数据库后，禁用复制作业并重新启动 Aurora 副本作为主实例。将收集器 DNS 记录指向 NLB。",
        "B.设置 Amazon Aurora MySQL 数据库。使用 AWS Database Migration Service （AWS DMS） 执行从本地数据库到 Aurora 的连续数据复制。移动聚合作业以针对 Aurora MySQL 数据库运行。将应用程序负载均衡器 （ALB） 后面的收集终端节点设置为弹性伸缩组中的 Amazon EC2 实例。同步数据库时，将收集器 DNS 记录指向 ALB。在从本地切换到 AWS 后禁用 AWS DMS 同步任务。",
        "C.设置 Amazon Aurora MySQL 数据库。使用 AWS Database Migration Service （AWS DMS） 执行从本地数据库到 Aurora 的连续数据复制。为 Aurora MySQL 数据库创建 Aurora 副本，并将聚合作业移动到针对 Aurora 副本运行。将收集终端节点设置为应用程序负载均衡器 （ALB） 后面的 AWS Lambda 函数，并使用 Amazon RDS 代理写入 Aurora MySQL 数据库。同步数据库时，将收集器 DNS 记录指向 ALB。在从本地切换到 AWS 后禁用 AWS DMS 同步任务。",
        "D.设置 Amazon Aurora MySQL 数据库。为 Aurora MySQL 数据库创建 Aurora 副本，并将聚合作业移动到针对 Aurora Replica 运行。将收集终端节点设置为 Amazon Kinesis 数据流。使用 Amazon Kinesis Data Firehose 将数据复制到 Aurora MySQL 数据库。同步数据库后，禁用复制作业并重新启动 Aurora 副本作为主实例。将收集器 DNS 记录指向 Kinesis 数据流。"
      ],
      "aa": "C",
      "qK": "two simple Node.js",
      "aK": [
        "DMS, Replica"
      ]
    },
    {
      "no": 316,
      "q": "An online retail company is migrating its legacy on-premises .NET application to AWS. The application runs on load-balanced frontend web servers, load-balanced application servers, and a Microsoft SQL Server database.\nThe company wants to use AWS managed services where possible and does not want to rewrite the application. A solutions architect needs to implement a solution to resolve scaling issues and minimize licensing costs as the application scales.\nWhich solution will meet these requirements MOST cost-effectively?",
      "a": [
        "A.Deploy Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer for the web tier and for the application tier. Use Amazon Aurora PostgreSQL with Babelfish turned on to replatform the SQL Server database.",
        "B.Create images of all the servers by using AWS Database Migration Service (AWS DMS). Deploy Amazon EC2 instances that are based on the on-premises imports. Deploy the instances in an Auto Scaling group behind a Network Load Balancer for the web tier and for the application tier. Use Amazon DynamoDB as the database tier.",
        "C.Containerize the web frontend tier and the application tier. Provision an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Create an Auto Scaling group behind a Network Load Balancer for the web tier and for the application tier. Use Amazon RDS for SQL Server to host the database.",
        "D.Separate the application functions into AWS Lambda functions. Use Amazon API Gateway for the web frontend tier and the application tier. Migrate the data to Amazon S3. Use Amazon Athena to query the data."
      ],
      "q_cn": "一家在线零售公司正在将其旧的本地 .NET 应用程序迁移到 AWS。应用程序在负载平衡的前端 Web 服务器、负载平衡的应用程序服务器和Microsoft SQL Server 数据库上运行。\n该公司希望尽可能使用 AWS 托管服务，并且不希望重写应用程序。解决方案架构师需要实施一个解决方案来解决缩放问题，并在应用程序缩放时最大限度地降低许可成本。\n哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": ".NET,Microsoft SQL Server",
      "aK": [
        "Babelfish"
      ]
    },
    {
      "no": 11,
      "q": "An enterprise company wants to allow its developers to purchase third-party software through AWS Marketplace. The company uses an AWS Organizations account structure with full features enabled, and has a shared services account in each organizational unit (OU) that will be used by procurement managers. The procurement team’s policy indicates that developers should be able to obtain third-party software from an approved list only and use Private Marketplace in AWS Marketplace to achieve this requirement. The procurement team wants administration of Private Marketplace to be restricted to a role named procurement-manager-role, which could be assumed by procurement managers. Other IAM users, groups, roles, and account administrators in the company should be denied Private Marketplace administrative access.\nWhat is the MOST efficient way to design an architecture to meet these requirements?",
      "a": [
        "A.Create an IAM role named procurement-manager-role in all AWS accounts in the organization. Add the PowerUserAccess managed policy to the role. Apply an inline policy to all IAM users and roles in every AWS account to deny permissions on the AWSPrivateMarketplaceAdminFullAccess managed policy.",
        "B.Create an IAM role named procurement-manager-role in all AWS accounts in the organization. Add the AdministratorAccess managed policy to the role. Define a permissions boundary with the AWSPrivateMarketplaceAdminFullAccess managed policy and attach it to all the developer roles.",
        "C.Create an IAM role named procurement-manager-role in all the shared services accounts in the organization. Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role. Create an organization root-level SCP to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role. Create another organization root-level SCP to deny permissions to create an IAM role named procurement-manager-role to everyone in the organization.",
        "D.Create an IAM role named procurement-manager-role in all AWS accounts that will be used by developers. Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role. Create an SCP in Organizations to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role. Apply the SCP to all the shared services accounts in the organization."
      ],
      "q_cn": "一家企业公司希望允许其开发人员通过 AWS Marketplace 购买第三方软件。该公司使用启用了全部功能的 AWS 组织账户结构，并在采购经理将使用的每个组织单位 （OU） 中都有一个共享服务账户。采购团队的政策表明，开发人员应只能从批准的列表中获取第三方软件，并使用 AWS Marketplace 中的私有市场来实现此要求。采购团队希望将专用市场的管理限制为名为“采购经理-角色”的角色，该角色可由采购经理承担。应拒绝公司中的其他 IAM 用户、组、角色和账户管理员私有市场管理访问权限。\n设计架构以满足这些要求的最有效方法是什么？",
      "a_cn": [
        "A.在组织中的所有 AWS 账户中创建名为采购经理角色的 IAM 角色。将高级用户访问托管策略添加到角色。将内联策略应用于每个 AWS 账户中的所有 IAM 用户和角色，以拒绝对 AWSPrivateMarketplaceAdminFullAccess 托管策略的权限。",
        "B.在组织中的所有 AWS 账户中创建名为“采购-经理-角色”的 IAM 角色。将管理员访问托管策略添加到角色。使用 AWSPrivateMarketplaceAdminFullAccess 托管策略定义权限边界，并将其附加到所有开发人员角色。",
        "C.在组织中的所有共享服务账户中创建名为“采购-经理-角色”的 IAM 角色。将 AWSPrivateMarketplaceAdminFullAccess 托管策略添加到角色。创建组织根级别 SCP，以拒绝除名为“采购-经理-角色”的角色之外的所有人管理专用市场的权限。创建另一个组织根级 SCP，以拒绝组织中每个人创建名为采购经理角色的 IAM 角色的权限。",
        "D.在开发人员将使用的所有 AWS 账户中创建名为“采购 - 经理 - 角色”的 IAM 角色。将 AWSPrivateMarketplaceAdminFullAccess 托管策略添加到角色。在组织中创建 SCP，以拒绝除名为“采购 - 经理 - 角色”的角色之外的所有人管理专用市场的权限。将 SCP 应用于组织中的所有共享服务帐户。"
      ],
      "aa": "C",
      "qK": "third-party software,AWS Marketplace,procurement-manager-role",
      "aK": [
        "root-level SCP"
      ]
    },
    {
      "no": 206,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 214,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 272,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 76,
      "q": "A digital marketing company has multiple AWS accounts that belong to various teams. The creative team uses an Amazon S3 bucket in its AWS account to securely store images and media files that are used as content for the company's marketing campaigns. The creative team wants to share the S3 bucket with the strategy team so that the strategy team can view the objects.\nA solutions architect has created an IAM role that is named strategy_reviewer in the Strategy account.The solutions architect also has set up a custom AWS Key\nManagement Service(AWS KMS) key in the Creative account and has associated the key with the S3 bucket.However, when users from the Strategy account assume the IAM role and try to access objects in the S3 bucket, they receive an Access Denied error.\nThe solutions architect must ensure that users in the Strategy account can access the S3 bucket.The solution must provide these users with only the minimum permissions that they need.\nWhich combination of steps should the solutions architect take to meet these requirements?(Choose three.) ",
      "a": [
        "A.Create a bucket policy that includes read permissions for the S3 bucket. Set the principal of the bucket policy to the account ID of the Strategy account.",
        "B.Update the strategy_reviewer IAM role to grant full permissions for the S3 bucket and to grant decrypt permissions for the custom KMS key.",
        "C.Update the custom KMS key policy in the Creative account to grant decrypt permissions to the strategy_reviewer IAM role.",
        "D.Create a bucket policy that includes read permissions for the S3 bucket.Set the principal of the bucket policy to an anonymous user.",
        "E.Update the custom KMS key policy in the Creative account to grant encrypt permissions to the strategy_reviewer IAM role.",
        "F.Update the strategy_reviewer IAM role to grant read permissions for the S3 bucket and to grant decrypt permissions for the custom KMS key."
      ],
      "q_cn": "一家数字营销公司拥有属于不同团队的多个 AWS 账户。创意团队在其 AWS 账户中使用 Amazon S3 存储桶安全地存储图像和媒体文件，这些文件用作公司营销活动的内容。创意团队希望与策略团队共享 S3 存储桶，以便策略团队可以查看对象。\n解决方案架构师在策略账户中创建了一个名为 strategy_reviewer 的 IAM 角色。解决方案架构师还设置了自定义 AWS 密钥管理服务 （AWS KMS） 密钥在创意账户中，并已将该密钥与 S3 存储桶关联。但是，当策略账户中的用户代入 IAM 角色并尝试访问 S3 存储桶中的对象时，他们会收到拒绝访问错误。\n解决方案架构师必须确保策略账户中的用户可以访问 S3 存储桶。解决方案必须仅向这些用户提供所需的最低权限。\n解决方案架构师应采取哪些步骤组合来满足这些要求？（选择三个。",
      "a_cn": [
        "A.创建包含 S3 存储桶读取权限的存储桶策略。将存储桶策略的委托人设置为策略账户的账户 ID。",
        "B.更新 strategy_reviewer IAM 角色以授予对 S3 存储桶的完全权限，并授予自定义 KMS 密钥的解密权限。",
        "C.更新创意账户中的自定义 KMS 密钥策略，以向strategy_reviewer IAM 角色授予解密权限。",
        "D.创建包含 S3 存储桶读取权限的存储桶策略。将存储桶策略的委托人设置为匿名用户。",
        "E.更新创意账户中的自定义 KMS 密钥策略，以向strategy_reviewer IAM 角色授予加密权限。",
        "F.更新 strategy_reviewer IAM 角色以授予对 S3 存储桶的读取权限，并授予自定义 KMS 密钥的解密权限。"
      ],
      "aa": "A,C,F",
      "qK": "strategy_reviewer,[Creative]",
      "aK": [
        "ID",
        "Creative,decrypt",
        "grant read permissions,[decrypt]"
      ]
    },
    {
      "no": 104,
      "q": "A company uses an on-premises data analytics platform. The system is highly available in a fully redundant configuration across 12 servers in the company's data center.\nThe system runs scheduled jobs, both hourly and daily, in addition to one-time requests from users. Scheduled jobs can take between 20 minutes and 2 hours to finish running and have tight SLAs. The scheduled jobs account for 65% of the system usage. User jobs typically finish running in less than 5 minutes and have no SLA. The user jobs account for 35% of system usage. During system failures, scheduled jobs must continue to meet SLAs. However, user jobs can be delayed.\nA solutions architect needs to move the system to Amazon EC2 instances and adopt a consumption-based model to reduce costs with no long-term commitments. The solution must maintain high availability and must not affect the SLAs.\nWhich solution will meet these requirements MOST cost-effectively?",
      "a": [
        "A.Split the 12 instances across two Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run four instances in each Availability Zone as Spot Instances.",
        "B.Split the 12 instances across three Availability Zones in the chosen AWS Region. In one of the Availability Zones, run all four instances as On-Demand Instances with Capacity Reservations. Run the remaining instances as Spot Instances.",
        "C.Split the 12 instances across three Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with a Savings Plan. Run two instances in each Availability Zone as Spot Instances.",
        "D.Split the 12 instances across three Availability Zones in the chosen AWS Region. Run three instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run one instance in each Availability Zone as a Spot Instance."
      ],
      "q_cn": "公司使用本地数据分析平台。该系统在公司数据中心的 12 台服务器上以完全冗余的配置高度可用。\n除了用户的一次性请求外，系统还每小时和每天运行计划作业。计划作业可能需要 20 分钟到 2 小时才能完成运行，并且具有严格的 SLA。计划作业占系统使用率的 65%。用户作业通常在 5 分钟内完成运行，并且没有 SLA。用户作业占系统使用率的 35%。在系统故障期间，计划的作业必须继续满足 SLA。但是，用户作业可能会延迟。\n      解决方案架构师需要将系统迁移到 Amazon EC2 实例，并采用基于消费的模型来降低成本，而无需长期承诺。解决方案必须保持高可用性，并且不得影响 SLA。\n哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "12 servers",
      "aK": [
        "Run three"
      ]
    },
    {
      "no": 290,
      "q": "A company wants to send data from its on-premises systems to Amazon S3 buckets. The company created the S3 buckets in three different accounts. The company must send the data privately without the data traveling across the internet. The company has no existing dedicated connectivity to AWS.\nWhich combination of steps should a solutions architect take to meet these requirements?(Choose two.) ",
      "a": [
        "A.Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a private VIF between the on-premises environment and the private VPC.",
        "B.Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a public VIF between the on-premises environment and the private VPC.",
        "C.Create an Amazon S3 interface endpoint in the networking account.",
        "D.Create an Amazon S3 gateway endpoint in the networking account.",
        "E.Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Peer VPCs from the accounts that host the S3 buckets with the VPC in the network account."
      ],
      "q_cn": "一家公司希望将数据从其本地系统发送到 Amazon S3 存储桶。该公司在三个不同的账户中创建了 S3 存储桶。公司必须私下发送数据，而数据不会通过互联网传输。该公司目前没有与 AWS 的专用连接。\n解决方案架构师应采取哪些步骤组合来满足这些要求？（选择两个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,C",
      "qK": "S3,three different accounts,privately without,internet",
      "aK": [
        "private VIF,Create an Amazon S3 interface endpoint"
      ]
    },
    {
      "no": 53,
      "q": "A team collects and routes behavioral data for an entire company. The company runs a Multi-AZ VPC environment with public subnets, private subnets, and in internet gateway. Each public subnet also contains a NAT gateway. Most of the company's applications read from and write to Amazon Kinesis Data Streams.\nMost of the workloads run in private subnets.\nA solutions architect must review the infrastructure.The solution architect needs to reduce costs and maintain the function of the applications.The solutions architect uses Cost Explorer and notices that the cost in the EC2-Other category is consistently high.A further review shows that NatGateway-Bytes charges are increasing the cost in the EC2-Other category.\nWhat should the solutions architect do to meet these requirements?",
      "a": [
        "A.Enable VPC Flow Logs. Use Amazon Athena to analyze the logs for traffic that can be removed. Ensure that security groups are blocking traffic that is responsible for high costs.",
        "B.Add an interface VPC endpoint for Kinesis Data Streams to the VPC.Ensure that applications have the correct IAM permissions to use the interface VPC endpoint.",
        "C.Enable VPC Flow Logs and Amazon Detective.Review Detective findings for traffic that is not related to Kinesis Data Streams.Configure security groups to block that traffic.",
        "D.Add an interface VPC endpoint for Kinesis Data Streams to the VPC.Ensure that the VPC endpoint policy allows traffic from the applications."
      ],
      "q_cn": "团队收集和路由整个公司的行为数据。该公司运行具有公有子网、私有子网和互联网网关的多可用区 VPC 环境。每个公有子网还包含一个 NAT 网关。该公司的大多数应用程序都读取和写入 Amazon Kinesis Data Streams。\n大多数工作负载都在私有子网中运行。\n解决方案架构师必须检查基础设施。解决方案架构师需要降低成本并维护应用程序的功能。解决方案架构师使用 成本管理器 并注意到 EC2-其他类别中的成本一直很高。进一步的审查表明，NatGateway-字节费用正在增加 EC2-其他类别的成本。\n解决方案架构师应采取哪些措施来满足这些要求？",
      "a_cn": [
        "A.启用 VPC 流日志。使用 Amazon Athena 分析日志中可移除的流量。确保安全组阻止导致高成本的流量。",
        "B.将 Kinesis 数据流的接口 VPC 终端节点添加到该 VPC。确保应用程序具有正确的 IAM 权限以使用接口 VPC 终端节点。",
        "c.启用 VPC 流日志和亚马逊侦探。查看与 Kinesis 数据流无关的流量的检测结果。配置安全组以阻止该流量。",
        "D.将 Kinesis 数据流的接口 VPC 终端节点添加到 VPC。确保 VPC 终端节点策略允许来自应用程序的流量。"
      ],
      "aa": "D",
      "qK": "NatGateway-Bytes",
      "aK": [
        "[Add],endpoint policy"
      ]
    },
    {
      "no": 173,
      "q": "",
      "a": [
        "",
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 36,
      "q": "A large company is running a popular web application. The application runs on several Amazon EC2 Linux instances in an Auto Scaling group in a private subnet.\nAn Application Load Balancer is targeting the instances in the Auto Scaling group in the private subnet.AWS Systems Manager Session Manager is configured, and AWS Systems Manager Agent is running on all the EC2 instances.\nThe company recently released a new version of the application.Some EC2 instances are now being marked as unhealthy and are being terminated.As a result, the application is running at reduced capacity.A solutions architect tries to determine the root cause by analyzing Amazon CloudWatch logs that are collected from the application, but the logs are inconclusive.\nHow should the solutions architect gain access to an EC2 instance to troubleshoot the issue?",
      "a": [
        "A.Suspend the Auto Scaling group's HealthCheck scaling process. Use Session Manager to log in to an instance that is marked as unhealthy.",
        "B.Enable EC2 instance termination protection.Use Session Manager to log in to an instance that is marked as unhealthy.",
        "C.Set the termination policy to OldestInstance on the Auto Scaling group.Use Session Manager to log in to an instance that is marked an unhealthy.",
        "D.Suspend the Auto Scaling group's Terminate process. Use Session Manager to log in to an instance that is marked as unhealthy."
      ],
      "q_cn": "一家大公司正在运行一个流行的 Web 应用程序。该应用程序在私有子网中的 Auto Scaling 组中的多个 Amazon EC2 Linux 实例上运行。\n应用程序负载均衡器以私有子网中 Auto Scaling 组中的实例为目标。AWS Systems Manager Session Manager 已配置，AWS Systems Manager Agent 正在所有 EC2 实例上运行。\n该公司最近发布了该应用程序的新版本。某些 EC2 实例现在被标记为运行状况不佳并正在终止。因此，应用程序以减少的容量运行。解决方案架构师尝试通过分析从应用程序收集的 Amazon CloudWatch 日志来确定根本原因，但这些日志尚无定论。\n解决方案架构师应如何访问 EC2 实例以排查问题？",
      "a_cn": [
        "A.暂停弹性伸缩组的运行状况检查扩展过程。使用会话管理器登录到标记为运行状况不佳的实例。",
        "B.启用 EC2 实例终止保护。使用会话管理器登录到标记为运行状况不佳的实例。",
        "C.在弹性伸缩分组上，将终止策略设置为最旧的实例。使用会话管理器登录到标记为运行状况不佳的实例。",
        "D.暂停弹性伸缩组的终止进程。使用会话管理器登录到标记为运行状况不佳的实例。"
      ],
      "aa": "D",
      "qK": "unhealthy,terminated",
      "aK": [
        "Terminate"
      ]
    },
    {
      "no": 157,
      "q": "A company uses Amazon S3 to store files and images in a variety of storage classes. The company's S3 costs have increased substantially during the past year.\nA solutions architect needs to review data trends for the past 12 months and identity the appropriate storage class for the objects.\nWhich solution will meet these requirements?",
      "a": [
        "A.Download AWS Cost and Usage Reports for the last 12 months of S3 usage. Review AWS Trusted Advisor recommendations for cost savings.",
        "B.Use S3 storage class analysis. Import data trends into an Amazon QuickSight dashboard to analyze storage trends.",
        "C.Use Amazon S3 Storage Lens. Upgrade the default dashboard to include advanced metrics for storage trends.",
        "D.Use Access Analyzer for S3. Download the Access Analyzer for S3 report for the last 12 months. Import the .csv file to an Amazon QuickSight dashboard."
      ],
      "q_cn": "一家公司使用 Amazon S3 将文件和图像存储在各种存储类中。该公司的S3成本在过去一年中大幅增加。\n解决方案架构师需要查看过去 12 个月的数据趋势，并为对象确定适当的存储类。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "store files and images,S3,past 12 months",
      "aK": [
        "S3 Storage Lens"
      ]
    },
    {
      "no": 181,
      "q": "A delivery company is running a serverless solution in the AWS Cloud. The solution manages user data, delivery information, and past purchase details. The solution consists of several microservices. The central user service stores sensitive data in an Amazon DynamoDB table. Several of the other microservices store a copy of parts of the sensitive data in different storage services.\nThe company needs the ability to delete user information upon request.As soon as the central user service deletes a user, every other microservice must also delete its copy of the data immediately.\nWhich solution will meet these requirements?",
      "a": [
        "A.Activate DynamoDB Streams on the DynamoDB table. Create an AWS Lambda trigger for the DynamoDB stream that will post events about user deletion in an Amazon Simple Queue Service (Amazon SQS) queue. Configure each microservice to poll the queue and delete the user from the DynamoDB table.",
        "B.Set up DynamoDB event notifications on the DynamoDB table. Create an Amazon Simple Notification Service (Amazon SNS) topic as a target for the DynamoDB event notification. Configure each microservice to subscribe to the SNS topic and to delete the user from the DynamoDB table.",
        "C.Configure the central user service to post an event on a custom Amazon EventBridge event bus when the company deletes a user. Create an EventBridge rule for each microservice to match the user deletion event pattern and invoke logic in the microservice to delete the user from the DynamoDB table.",
        "D.Configure the central user service to post a message on an Amazon Simple Queue Service (Amazon SQS) queue when the company deletes a user. Configure each microservice to create an event filter on the SQS queue and to delete the user from the DynamoDB table."
      ],
      "q_cn": "一家交付公司在 AWS 云中运行无服务器解决方案。该解决方案管理用户数据、交付信息和过去的购买详细信息。该解决方案由多个微服务组成。中央用户服务将敏感数据存储在 Amazon DynamoDB 表中。其他几个微服务在不同的存储服务中存储部分敏感数据的副本。\n公司需要能够根据要求删除用户信息。一旦中央用户服务删除用户，其他每个微服务也必须立即删除其数据副本。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "DynamoDB,central,delete,every other",
      "aK": [
        "post an event,EventBridge"
      ]
    },
    {
      "no": 256,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 128,
      "q": "A company has a legacy monolithic application that is critical to the company's business. The company hosts the application on an Amazon EC2 instance that runs Amazon Linux 2. The company's application team receives a directive from the legal department to back up the data from the instance's encrypted Amazon Elastic Block Store(Amazon EBS) volume to an Amazon S3 bucket.The application team does not have the administrative SSH key pair for the instance.The application must continue to serve the users.\nWhich solution will meet these requirements?",
      "a": [
        "A.Attach a role to the instance with permission to write to Amazon S3. Use the AWS Systems Manager Session Manager option to gain access to the instance and run commands to copy data into Amazon S3.",
        "B.Create an image of the instance with the reboot option turned on. Launch a new EC2 instance from the image. Attach a role to the new instance with permission to write to Amazon S3. Run a command to copy data into Amazon S3.",
        "C.Take a snapshot of the EBS volume by using Amazon Data Lifecycle Manager (Amazon DLM). Copy the data to Amazon S3.",
        "D.Create an image of the instance. Launch a new EC2 instance from the image. Attach a role to the new instance with permission to write to Amazon S3. Run a command to copy data into Amazon S3."
      ],
      "q_cn": "公司有一个对公司业务至关重要的旧式整体式应用程序。该公司在运行 Amazon Linux 2 的 Amazon EC2 实例上托管应用程序。该公司的应用程序团队收到来自法律部门的指令，要求将实例的加密 Amazon Elastic Block Store（Amazon EBS） 卷中的数据备份到 Amazon S3 存储桶。应用程序团队没有实例的管理 SSH 密钥对。应用程序必须继续为用户提供服务。\n哪种解决方案将满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "not have,SSH key",
      "aK": [
        "Attach a role,Session Manager"
      ]
    },
    {
      "no": 38,
      "q": "A software company hosts an application on AWS with resources in multiple AWS accounts and Regions. The application runs on a group of Amazon EC2 instances in an application VPC located in the us-east-1 Region with an IPv4 CIDR block of 10.10.0.0/16. In a different AWS account, a shared services VPC is located in the us-east-2 Region with an IPv4 CIDR block of 10.10.10.0/24. When a cloud engineer uses AWS CloudFormation to attempt to peer the application VPC with the shared services VPC, an error message indicates a peering failure.\nWhich factors could cause this error ? (Choose two.) ",
      "a": [
        "A.The IPv4 CIDR ranges of the two VPCs overlap",
        "B.The VPCs are not in the same Region",
        "C.One or both accounts do not have access to an Internet gateway",
        "D.One of the VPCs was not shared through AWS Resource Access Manager",
        "E.The IAM role in the peer accepter account does not have the correct permissions"
      ],
      "q_cn": "一家软件公司在 AWS 上托管一个应用程序，该应用程序的资源位于多个 AWS 账户和区域中。该应用程序在位于 us-east-1 区域的应用程序 VPC 中的一组 Amazon EC2 实例上运行，IPv4 CIDR 块为 10.10.0.0/16。在不同的 AWS 账户中，共享服务 VPC 位于 us-east-2 区域，IPv4 CIDR 块为 10.10.10.0/24。当云工程师使用 AWS CloudFormation 尝试将应用程序 VPC 与共享服务 VPC 对等互连时，将显示一条错误消息，指示对等互连失败。\n哪些因素可能导致此错误？（选择两个。",
      "a_cn": [
        "A.两个VPC的IPv4网段重叠",
        "B.VPC 不在同一区域中",
        "C.一个或两个帐户无法访问互联网网关",
        "D.其中一个 VPC 未通过 AWS 资源访问管理器共享",
        "E.对等接受者账户中的 IAM 角色没有正确的权限"
      ],
      "aa": "A,E",
      "qK": "10.10.0.0/16, 10.10.10.0/24",
      "aK": [
        "CIDR",
        "peer accepter"
      ]
    },
    {
      "no": 279,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 66,
      "q": "A company has developed a web application. The company is hosting the application on a group of Amazon EC2 instances behind an Application Load Balancer.\nThe company wants to improve the security posture of the application and plans to use AWS WAF web ACLs.The solution must not adversely affect legitimate traffic to the application.\nHow should a solutions architect configure the web ACLs to meet these requirements?",
      "a": [
        "A.Set the action of the web ACL rules to Count. Enable AWS WAF logging. Analyze the requests for false positives. Modify the rules to avoid any false positive. Over time, change the action of the web ACL rules from Count to Block.",
        "B.Use only rate-based rules in the web ACLs, and set the throttle limit as high as possible.Temporarily block all requests that exceed the limit.Define nested rules to narrow the scope of the rate tracking.",
        "C.Set the action of the web ACL rules to Block.Use only AWS managed rule groups in the web ACLs.Evaluate the rule groups by using Amazon CloudWatch metrics with AWS WAF sampled requests or AWS WAF logs.",
        "D.Use only custom rule groups in the web ACLs, and set the action to Allow.Enable AWS WAF logging.Analyze the requests for false positives.Modify the rules to avoid any false positive.Over time, change the action of the web ACL rules from Allow to Block."
      ],
      "q_cn": "一家公司开发了一个 Web 应用程序。该公司在应用程序负载均衡器后面的一组 Amazon EC2 实例上托管应用程序。\n该公司希望改善应用程序的安全状况，并计划使用 AWS WAF Web ACL。解决方案不得对应用程序的合法流量产生负面影响。\n      解决方案架构师应如何配置 Web ACL 以满足这些要求？",
      "a_cn": [
        "A.将 Web ACL 规则的操作设置为计数。启用 AWS WAF 日志记录。分析误报请求。修改规则以避免任何误报。随着时间的推移，将 Web ACL 规则的操作从计数更改为阻止。",
        "B.在 Web ACL 中仅使用基于速率的规则，并将限制设置得尽可能高。暂时阻止超出限制的所有请求。定义嵌套规则以缩小费率跟踪的范围。",
        "C.将 Web ACL 规则的操作设置为“阻止”。在 Web ACL 中仅使用 AWS 托管规则组。通过将 Amazon CloudWatch 指标与 AWS WAF 采样请求或 AWS WAF 日志结合使用来评估规则组。",
        "D.仅使用 Web ACL 中的自定义规则组，并将操作设置为允许。启用 AWS WAF 日志记录。分析误报请求。修改规则以避免任何误报。随着时间的推移，将 Web ACL 规则的操作从“允许”更改为“阻止”。"
      ],
      "aa": "A",
      "qK": "WAF web ACLs",
      "aK": [
        "[Set],Count,[WAF logging]"
      ]
    },
    {
      "no": 287,
      "q": "A company has automated the nightly retraining of its machine learning models by using AWS Step Functions. The workflow consists of multiple steps that use AWS Lambda. Each step can fail for various reasons, and any failure causes a failure of the overall workflow.\nA review reveals that the retraining has failed multiple nights in a row without the company noticing the failure. A solutions architect needs to improve the workflow so that notifications are sent for all types of failures in the retraining process.\nWhich combination of steps should the solutions architect take to meet these requirements? (Choose three.)",
      "a": [
        "A. Create an Amazon Simple Notification Service (Amazon SNS) topic with a subscription of type \"Email\" that targets the team's mailing list.",
        "B. Create a task named \"Email\" that forwards the input arguments to the SNS topic.",
        "C. Add a Catch field to all Task, Map, and Parallel states that have a statement of \"ErrorEquals\": [ \"States.ALL\" ] and \"Next\": \"Email\".",
        "D. Add a new email address to Amazon Simple Email Service (Amazon SES). Verify the email address.",
        "E. Create a task named \"Email\" that forwards the input arguments to the SES email address.",
        "F.Add a Catch field to all Task, Map, and Parallel states that have a statement of \"ErrorEquals\": [ \"States.Runtime\" ] and \"Next\": \"Email\"."
      ],
      "q_cn": "一家公司使用 AWS Step Functions 自动对其机器学习模型进行夜间重新训练。该工作流由使用 AWS Lambda 的多个步骤组成。每个步骤都可能由于各种原因而失败，任何失败都会导致整个工作流失败。\n审查显示，重新培训已连续多个晚上失败，而公司没有注意到失败。解决方案架构师需要改进工作流，以便针对重新训练过程中所有类型的故障发送通知。\n解决方案架构师应采取哪些步骤组合来满足这些要求？（选择三个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,B,C",
      "qK": "machine learning models,Step Functions",
      "aK": [
        "SNS,States.ALL"
      ]
    },
    {
      "no": 112,
      "q": "A company has an organization in AWS Organizations that includes multiple AWS accounts. Each account has a single VPC. In an account named Shared Services, there is a transit gateway that is connected to a Direct Connect gateway that provides access to the company's on-premises network.The company configured AWS Resource Access Manager (AWS RAM) to share the transit gateway to all the accounts that are in the organization.The company has attached all the VPCs to the transit gateway to facilitate routing between each other.The company uses a DNS server for on-premises servers.There are a pair of DNS servers on premises and in the Shared Services account VPC.The company discovers that Amazon EC2 instances that the company starts within the VPCs are not able to resolve addresses in the private on-premises domain. Which soluton will allow EC2 instances in all VPCs to resolve on-premises addresses",
      "a": [
        "A.Define an Amazon Route 53 Resolver outbound endpoint for the on-premises domain in the Shared Services account VPC.Configure the outbound endpoint to use the IP addresses of the DNS servers for the on-premises domain.Configure a forwarder on the DNS servers to point to the internal DNS resolver of the VPC.",
        "B.Create an Amazon Route 53 private hosted zone for the on-premises domain in the Shared Services account VPC.Configure AWS Resource Access Manager (AWS RAM) to share the hosted zone to all accounts in the organization.Associate the Route 53 private hosted zone with each VPC.",
        "C.Define an Amazon Route 53 Resolver outbound endpoint for the on-premises domain in the Shared Services account VPC.Configure the outbound endpoint to use the IP addresses of the DNS servers for the on-premises domain.Configure AWS Resource Access Manager (AWS RAM) to share the Route 53 Resolver rule to all accounts in the organization.Associate the Route 53 Resolver rule with each VPC.",
        "D.Define an Amazon Route 53 Resolver inbound endpoint for the on-premises domain in the Shared Services account VPC.Configure the inbound endpoint to use the IP addresses of the DNS servers for the on-premises domain.Configure AWS Resource Access Manager (AWS RAM) to share the Route 53 Resolver rule to all accounts in the organization.Associate the Route 53 Resolver rule with each VPC."
      ],
      "q_cn": "一家公司在 AWS 组织中拥有一个包含多个 AWS 账户的组织。每个账户都有一个 VPC。在名为“共享服务”的帐户中，有一个中转网关连接到提供对公司本地网络的访问权限的专线网关。该公司将 AWS 资源访问管理器 （AWS RAM） 配置为与组织中的所有账户共享中转网关。该公司已将所有VPC连接到中转网关，以方便彼此之间的路由。该公司将 DNS 服务器用于本地服务器。本地和共享服务账户 VPC 中有一对 DNS 服务器。该公司发现，该公司在 VPC 内启动的 Amazon EC2 实例无法解析私有本地域中的地址。哪个解决方案将允许所有 VPC 中的 EC2 实例解析本地地址",
      "a_cn": [
        "A.在共享服务账户 VPC 中为本地域定义 Amazon Route 53 解析程序出站终端节点。将出站终结点配置为使用本地域的 DNS 服务器的 IP 地址。在 DNS 服务器上配置转发器以指向 VPC 的内部 DNS 解析器。",
        "B.为共享服务账户 VPC 中的本地域创建 Amazon Route 53 私有托管区域。配置 AWS 资源访问管理器 （AWS RAM） 以将托管区域共享给组织中的所有账户。将 Route 53 私有托管区域与每个 VPC 关联。",
        "C.为共享服务账户 VPC 中的本地域定义 Amazon Route 53 解析程序出站终端节点。将出站终结点配置为使用本地域的 DNS 服务器的 IP 地址。配置 AWS 资源访问管理器 （AWS RAM） 以与组织中的所有账户共享 Route 53 解析程序规则。将 Route 53 解析程序规则与每个 VPC 关联。",
        "D.为共享服务账户 VPC 中的本地域定义 Amazon Route 53 解析程序入站终端节点。将入站终结点配置为使用本地域的 DNS 服务器的 IP 地址。配置 AWS 资源访问管理器 （AWS RAM） 以与组织中的所有账户共享 Route 53 解析程序规则。将 Route 53 解析程序规则与每个 VPC 关联。"
      ],
      "aa": "C",
      "qK": "Shared Services,transit gateway,Direct Connect gateway,on-premises,not able to resolve addresses in the private on-premises domain",
      "aK": [
        "outbound,RAM"
      ]
    },
    {
      "no": 32,
      "q": "A startup company hosts a fleet of Amazon EC2 instances in private subnets using the latest Amazon Linux 2 AMI. The company's engineers rely heavily on SSH access to the instances for troubleshooting.\nThe company's existing architecture includes the following:\nA VPC with private and public subnets, and a NAT gateway\n Site-to-Site VPN for connectivity with the on-premises environment\n EC2 security groups with direct SSH access from the on-premises environment\nThe company needs to increase security controls around SSH access and provide auditing of commands run by the engineers.\nWhich strategy should a solutions architect use ? ",
      "a": [
        "A.Install and configure EC2 Instance Connect on the fleet of EC2 instances. Remove all security group rules attached to EC2 instances that allow inbound TCP on port 22. Advise the engineers to remotely access the instances by using the EC2 Instance Connect CLI.",
        "B.Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Install the Amazon CloudWatch agent on all EC2 instances and send operating system audit logs to CloudWatch Logs.",
        "C.Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Enable AWS Config for EC2 security group resource changes. Enable AWS Firewall Manager and apply a security group policy that automatically remediates changes to rules.",
        "D.Create an IAM role with the Amazon SSM Managed InstanceCore managed policy attached.Attach the IAM role to all the EC2 instances.Remove all security group rules attached to the EC2 instances that allow inbound TCP on port 22. Have the engineers install the AWS Systems Manager Session Manager plugin for their devices and remotely access the instances by using the start-session API call from Systems Manager."
      ],
      "q_cn": "一家初创公司使用最新的 Amazon Linux 2 AMI 在私有子网中托管一组 Amazon EC2 实例。\n该公司的工程师严重依赖对实例的 SSH 访问来进行故障排除。\n该公司的现有体系结构包括以下内容：\n具有私有和公有子网的 VPC 以及用于与本地环境连接的 NAT 网关\n站点到站点 VPN，用于与本地环境连接\n从本地环境直接通过 SSH 访问进行 SSH 访问的 EC2 安全组\n公司需要加强对 SSH 访问的安全控制，并对工程师运行的命令进行审核。\n解决方案架构师应该使用哪种策略？",
      "a_cn": [
        "A.在 EC2 实例队列上安装和配置 EC2 实例连接。删除附加到允许端口 22 上入站 TCP 的 EC2 实例的所有安全组规则。建议工程师使用 EC2 实例连接 CLI 远程访问实例。",
        "B.更新 EC2 安全组，使其仅允许端口 22 上的入站 TCP 到工程师设备的 IP 地址。在所有 EC2 实例上安装 Amazon CloudWatch 代理，并将操作系统审核日志发送到 CloudWatch Logs。",
        "C.更新 EC2 安全组，使其仅允许端口 22 上的入站 TCP 到工程师设备的 IP 地址。为 EC2 安全组资源更改启用 AWS Config。启用 AWS 防火墙管理器并应用可自动修复规则更改的安全组策略。",
        "D.创建附加了 AmazonSSMM 实例核心托管策略的 IAM 角色。将 IAM 角色附加到所有 EC2 实例。删除附加到允许端口 22 上的入站 TCP 的 EC2 实例的所有安全组规则。让工程师为其设备安装 AWS 系统管理器会话管理器插件，并使用系统管理器中的启动会话 API 调用远程访问实例。"
      ],
      "aa": "D",
      "qK": "EC2,Linux 2 AMI,SSH",
      "aK": [
        "IAM role,SSM Managed,AWS Systems Manager Session Manager plugin"
      ]
    },
    {
      "no": 194,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 232,
      "q": "A company is running applications on AWS in a multi-account environment. The company's sales team and marketing team use separate AWS accounts in AWS Organizations.\nThe sales team stores petabytes of data in an Amazon S3 bucket.The marketing team uses Amazon QuickSight for data visualizations.The marketing team needs access to data that the sates team stores in the S3 bucket.The company has encrypted the S3 bucket with an AWS Key Management Service(AWS KMS) key.The marketing team has already created the IAM service role for QuickSight to provide QuickSight access in the marketing AWS account.The company needs a solution that will provide secure access to the data in the S3 bucket across AWS accounts.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      "a": [
        "A.Create a new S3 bucket in the marketing account. Create an S3 replication rule in the sales account to copy the objects to the new S3 bucket in the marketing account. Update the QuickSight permissions in the marketing account to grant access to the new S3 bucket.",
        "B.Create an SCP to grant access to the S3 bucket to the marketing account. Use AWS Resource Access Manager (AWS RAM) to share the KMS key from the sates account with the marketing account. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket.",
        "C.Update the S3 bucket policy in the marketing account to grant access to the QuickSight role. Create a KMS grant for the encryption key that is used in the S3 bucket. Grant decrypt access to the QuickSight role. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket.",
        "D.Create an IAM role in the sales account and grant access to the S3 bucket. From the marketing account, assume the IAM role in the sales account to access the S3 bucket. Update the QuickSight rote, to create a trust relationship with the new IAM role in the sales account."
      ],
      "q_cn": "一家公司在多账户环境中在 AWS 上运行应用程序。该公司的销售团队和营销团队在 AWS Organizations 中使用单独的 AWS 账户。\n销售团队将数 PB 的数据存储在 Amazon S3 存储桶中。营销团队使用 Amazon QuickSight 进行数据可视化。营销团队需要访问 sates 团队存储在 S3 存储桶中的数据。该公司已使用 AWS 密钥管理服务 （AWS KMS） 密钥对 S3 存储桶进行了加密。营销团队已经为 QuickSight 创建了 IAM 服务角色，以便在营销 AWS 账户中提供 QuickSight 访问权限。该公司需要一个能够跨 AWS 账户安全访问 S3 存储桶中数据的解决方案。\n哪种解决方案能够以最少的运营开销满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "sales team,marketing team ",
      "aK": [
        "IAM role"
      ]
    },
    {
      "no": 35,
      "q": "A company has many AWS accounts and uses AWS Organizations to manage all of them. A solutions architect must implement a solution that the company can use to share a common network across multiple accounts.\nThe company’s infrastructure team has a dedicated infrastructure account that has a VPC.The infrastructure team must use this account to manage the network.Individual accounts cannot have the ability to manage their own networks.However, individual accounts must be able to create AWS resources within subnets.\nWhich combination of actions should the solutions architect perform to meet these requirements?(Choose two.) ",
      "a": [
        "A.Create a transit gateway in the infrastructure account.",
        "B.Enable resource sharing from the AWS Organizations management account.",
        "C.Create VPCs in each AWS account within the organization in AWS Organizations.Configure the VPCs to share the same CIDR range and subnets as the VPC in the infrastructure account.Peer the VPCs in each individual account with the VPC in the infrastructure account.",
        "D.Create a resource share in AWS Resource Access Manager in the infrastructure account.Select the specific AWS Organizations OU that will use the shared network.Select each subnet to associate with the resource share.",
        "E.Create a resource share in AWS Resource Access Manager in the infrastructure account.Select the specific AWS Organizations OU that will use the shared network.Select each prefix list to associate with the resource share."
      ],
      "q_cn": "一家公司拥有许多 AWS 账户，并使用 AWS Organizations 来管理所有这些账户。解决方案架构师必须实现公司可用于跨多个帐户共享公共网络的解决方案。\n该公司的基础设施团队有一个具有 VPC 的专用基础设施账户。基础结构团队必须使用此帐户来管理网络。个人帐户无法管理自己的网络。但是，个人账户必须能够在子网中创建 AWS 资源。\n     解决方案架构师应执行哪些操作组合来满足这些要求？（选择两个。",
      "a_cn": [
        "A.在基础架构帐户中创建中转网关。",
        "B.从 AWS Organizations 管理账户启用资源共享。",
        "C.在 AWS 组织的组织内的每个 AWS 账户中创建 VPC。将 VPC 配置为与基础设施账户中的 VPC 共享相同的 CIDR 范围和子网。将每个单独账户中的 VPC 与基础设施账户中的 VPC 对等。",
        "D.在基础设施账户的 AWS 资源访问管理器中创建资源共享。选择将使用共享网络的特定 AWS Organizations OU。选择要与资源共享关联的每个子网。",
        "E.在基础设施账户的 AWS 资源访问管理器中创建资源共享。选择将使用共享网络的特定 AWS Organizations OU。选择要与资源共享关联的每个前缀列表。"
      ],
      "aa": "B,D",
      "qK": "cannot,own networks,able to create AWS resources",
      "aK": [
        "sharing,[management account]",
        "subnet"
      ]
    },
    {
      "no": 14,
      "q": "A company is developing a new service that will be accessed using TCP on a static port. A solutions architect must ensure that the service is highly available, has redundancy across Availability Zones, and is accessible using the DNS name my.service.com, which is publicly accessible. The service must use fixed address assignments so other companies can add the addresses to their allow lists.\nAssuming that resources are deployed in multiple Availability Zones in a single Region, which solution will meet these requirements?",
      "a": [
        "A.Create Amazon EC2 instances with an Elastic IP address for each instance. Create a Network Load Balancer (NLB) and expose the static TCP port. Register EC2 instances with the NLB. Create a new name server record set named my.service.com, and assign the Elastic IP addresses of the EC2 instances to the record set. Provide the Elastic IP addresses of the EC2 instances to the other companies to add to their allow lists.",
        "B.Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP addresses for the ECS cluster. Create a Network Load Balancer (NLB) and expose the TCP port. Create a target group and assign the ECS cluster name to the NLB. Create a new A record set named my.service.com, and assign the public IP addresses of the ECS cluster to the record set. Provide the public IP addresses of the ECS cluster to the other companies to add to their allow lists.",
        "C.Create Amazon EC2 instances for the service. Create one Elastic IP address for each Availability Zone. Create a Network Load Balancer (NLB) and expose the assigned TCP port. Assign the Elastic IP addresses to the NLB for each Availability Zone. Create a target group and register the EC2 instances with the NLB. Create a new A (alias) record set named my.service.com, and assign the NLB DNS name to the record set.",
        "D.Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP address for each host in the cluster. Create an Application Load Balancer (ALB) and expose the static TCP port. Create a target group and assign the ECS service definition name to the ALB. Create a new CNAME record set and associate the public IP addresses to the record set. Provide the Elastic IP addresses of the Amazon EC2 instances to the other companies to add to their allow lists."
      ],
      "q_cn": "一家公司正在开发一项新服务，该服务将在静态端口上使用TCP进行访问。解决方案架构师必须确保服务高度可用，跨可用性区域具有冗余，并且可以使用可公开访问的 DNS 名称 my.service.com 进行访问。该服务必须使用固定地址分配，以便其他公司可以将地址添加到其允许列表中。\n假设资源部署在单个区域的多个可用区中，哪种解决方案将满足这些要求？",
      "a_cn": [
        "A.为每个实例创建一个弹性 IP 地址的 Amazon EC2 实例。创建网络负载均衡器 （NLB） 并公开静态 TCP 端口。向 NLB 注册 EC2 实例。创建一个名为 my.service.com 的新名称服务器记录集，并将 EC2 实例的弹性 IP 地址分配给该记录集。向其他公司提供 EC2 实例的弹性 IP 地址以添加到其允许列表中。",
        "B.为应用程序创建 Amazon ECS 集群和服务定义。为ECS集群创建并分配公网IP地址。创建网络负载均衡器 （NLB） 并公开 TCP 端口。创建目标组并将 ECS 集群名称分配给 NLB。创建一个名为 my.service.com 的新 A 记录集，并将 ECS 集群的公网 IP 地址分配给该记录集。将 ECS 集群的公网 IP 地址提供给其他公司以添加到其允许列表中。",
        "C.为服务创建 Amazon EC2 实例。为每个可用区创建一个弹性 IP 地址。创建网络负载均衡器 （NLB） 并公开分配的 TCP 端口。将弹性 IP 地址分配给每个可用区的 NLB。创建目标组并将 EC2 实例注册到 NLB。创建名为 my.service.com 的新 A（别名）记录集，并将 NLB DNS 名称分配给该记录集。",
        "D.为应用程序创建 Amazon ECS 集群和服务定义。为群集中的每个主机创建和分配公共 IP 地址。创建应用程序负载均衡器 （ALB） 并公开静态 TCP 端口。创建目标组并将ECS服务定义名称分配给ALB。创建新的 CNAME 记录集并将公共 IP 地址关联到该记录集。向其他公司提供 Amazon EC2 实例的弹性 IP 地址，以添加到其允许列表中。"
      ],
      "aa": "C",
      "qK": "my.service.com",
      "aK": [
        "A (alias)"
      ]
    },
    {
      "no": 244,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 221,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 315,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 60,
      "q": "A video streaming company recently launched a mobile app for video sharing. The app uploads various files to an Amazon S3 bucket in the us-east-1 Region. The files range in size from 1 GB to 10 GB.\nUsers who access the app from Australia have experienced uploads that take long periods of time.Sometimes the files fail to completely upload for these users.A solutions architect must improve the app's performance for these uploads.\nWhich solutions will meet these requirements?(Choose two.) ",
      "a": [
        "A.Enable S3 Transfer Acceleration on the S3 bucket. Configure the app to use the Transfer Acceleration endpoint for uploads.",
        "B.Configure an S3 bucket in each Region to receive the uploads.Use S3 Cross-Region Replication to copy the files to the distribution S3 bucket.",
        "C.Set up Amazon Route 53 with latency-based routing to route the uploads to the nearest S3 bucket Region.",
        "D.Configure the app to break the video files into chunks.Use a multipart upload to transfer files to Amazon S3.",
        "E.Modify the app to add random prefixes to the files before uploading."
      ],
      "q_cn": "一家视频流媒体公司最近推出了一款用于视频共享的移动应用程序。该应用程序将各种文件上传到 us-east-1 区域中的 Amazon S3 存储桶。文件的大小范围从 1 GB 到 10 GB。\n从澳大利亚访问该应用程序的用户经历了需要很长时间的上传。有时，文件无法为这些用户完全上传。解决方案架构师必须提高这些上传的应用性能。\n哪些解决方案可以满足这些要求？（选择两个。",
      "a_cn": [
        "A.在 S3 存储桶上启用 S3 传输加速。将应用配置为使用传输加速终端节点进行上传。",
        "B.在每个区域中配置一个 S3 存储桶以接收上传。使用 S3 跨区域复制将文件复制到分配 S3 存储桶。",
        "C.使用基于延迟的路由设置 Amazon Route 53，以将上传路由到最近的 S3 存储桶区域。",
        "D.配置应用程序以将视频文件分解为块。使用分段上传将文件传输到 Amazon S3。",
        "E.修改应用程序以在上传之前为文件添加随机前缀。"
      ],
      "aa": "A,D",
      "qK": "video,1 GB to 10 GB,upload,Australia",
      "aK": [
        "S3 Transfer Acceleration",
        "multipart upload"
      ]
    },
    {
      "no": 250,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "A",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 154,
      "q": "A company recently completed the migration from an on-premises data center to the AWS Cloud by using a replatforming strategy. One of the migrated servers is running a legacy Simple Mail Transfer Protocol (SMTP) service that a critical application relies upon. The application sends outbound email messages to the company’s customers. The legacy SMTP server does not support TLS encryption and uses TCP port 25. The application can use SMTP only.\nThe company decides to use Amazon Simple Email Service(Amazon SES) and to decommission the legacy SMTP server.The company has created and validated the SES domain.The company has lifted the SES limits.\nWhat should the company do to modify the application to send email messages from Amazon SES?",
      "a": [
        "A.Configure the application to connect to Amazon SES by using TLS Wrapper. Create an IAM role that has ses:SendEmail and ses:SendRawEmail permissions. Attach the IAM role to an Amazon EC2 instance.",
        "B.Configure the application to connect to Amazon SES by using STARTTLS. Obtain Amazon SES SMTP credentials.Use the credentials to authenticate with Amazon SES.",
        "C.Configure the application to use the SES API to send email messages.Create an IAM role that has ses: SendEmail and ses: SendRawEmail permissions.Use the IAM role as a service role for Amazon SES.",
        "D.Configure the application to use AWS SDKs to send email messages.Create an IAM user for Amazon SES.Generate API access keys.Use the access keys to authenticate with Amazon SES."
      ],
      "q_cn": "一家公司最近使用平台重构策略完成了从本地数据中心到 AWS 云的迁移。其中一个迁移的服务器正在运行关键应用程序所依赖的旧版简单邮件传输协议 （SMTP） 服务。应用程序向公司的客户发送出站电子邮件。旧版 SMTP 服务器不支持 TLS 加密，并使用 TCP 端口 25。应用程序只能使用 SMTP。\n该公司决定使用 Amazon Simple Email Service （Amazon SES） 并停用旧版 SMTP 服务器。该公司已创建并验证了SES域。该公司已经取消了SES限制。\n公司应如何修改应用程序以从 Amazon SES 发送电子邮件？",
      "a_cn": [
        "A.将应用程序配置为使用 TLS 包装器连接到 Amazon SES。创建具有 ses：SendEmail 和 ses：SendRawEmail 权限的 IAM 角色。将 IAM 角色附加到 Amazon EC2 实例。",
        "B.将应用程序配置为使用 STARTTLS 连接到 Amazon SES。获取 Amazon SES SMTP 凭证。使用凭证向 Amazon SES 进行身份验证。",
        "C.将应用程序配置为使用 SES API 发送电子邮件。创建具有 ses：SendEmail 和 ses：SendRawEmail 权限的 IAM 角色。将 IAM 角色用作 Amazon SES 的服务角色。",
        "D.将应用程序配置为使用 AWS 开发工具包发送电子邮件。为 Amazon SES 创建 IAM 用户。生成 API 访问密钥。使用访问密钥向 Amazon SES 进行身份验证。"
      ],
      "aa": "B",
      "qK": "SMTP,SES",
      "aK": [
        "STARTTLS,SES SMTP"
      ]
    },
    {
      "no": 101,
      "q": "A company wants to migrate its workloads from on premises to AWS. The workloads run on Linux and Windows. The company has a large on-premises infrastructure that consists of physical machines and VMs that host numerous applications.\nThe company must capture details about the system configuration, system performance, running processes, and network connections of its on- premises workloads.The company also must divide the on - premises applications into groups for AWS migrations.The company needs recommendations for Amazon EC2 instance types so that the company can run its workloads on AWS in the most cost- effective manner.\nWhich combination of steps should a solutions architect take to meet these requirements ? (Choose three.) ",
      "a": [
        "A.Assess the existing applications by installing AWS Application Discovery Agent on the physical machines and VMs.",
        "B.Assess the existing applications by installing AWS Systems Manager Agent on the physical machines and VMs.",
        "C.Group servers into applications for migration by using AWS Systems Manager Application Manager.",
        "D.Group servers into applications for migration by using AWS Migration Hub.",
        "E.Generate recommended instance types and associated costs by using AWS Migration Hub.",
        "F.Import data about server sizes into AWS Trusted Advisor. Follow the recommendations for cost optimization."
      ],
      "q_cn": "一家公司希望将其工作负载从本地迁移到 AWS。工作负载在 Linux 和 Windows 上运行。该公司拥有大型本地基础结构，该基础结构由托管大量应用程序的物理机和 VM 组成。\n公司必须捕获有关其本地工作负载的系统配置、系统性能、正在运行的进程和网络连接的详细信息。公司还必须将本地应用程序划分为用于 AWS 迁移的组。该公司需要针对 Amazon EC2 实例类型的建议，以便该公司能够以最具成本效益的方式在 AWS 上运行其工作负载。\n解决方案架构师应采取哪些步骤组合来满足这些要求？（选择三个。",
      "a_cn": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "aa": "A,D,E",
      "qK": "workloads,Linux and Windows,physical machines and VMs",
      "aK": [
        "Application Discovery Agent,Migration Hub"
      ]
    },
    {
      "no": 147,
      "q": "A solutions architect needs to copy data from an Amazon S3 bucket in an AWS account to a new S3 bucket in a new AWS account. The solutions architect must implement a solution that uses the AWS CLI.\nWhich combination of steps will successfully copy the data?(Choose three.) ",
      "a": [
        "A.Create a bucket policy to allow the source bucket to list its contents and to put objects and set object ACLs in the destination bucket. Attach the bucket policy to the destination bucket.",
        "B.Create a bucket policy to allow a user in the destination account to list the source bucket’s contents and read the source bucket’s objects.Attach the bucket policy to the source bucket.",
        "C.Create an IAM policy in the source account.Configure the policy to allow a user in the source account to list contents and get objects in the source bucket, and to list contents, put objects, and set object ACLs in the destination bucket.Attach the policy to the user.",
        "D.Create an IAM policy in the destination account.Configure the policy to allow a user in the destination account to list contents and get objects in the source bucket, and to list contents, put objects, and set objectACLs in the destination bucket.Attach the policy to the user.",
        "E.Run the aws s3 sync command as a user in the source account.Specify the source and destination buckets to copy the data.",
        "F.Run the aws s3 sync command as a user in the destination account.Specify the source and destination buckets to copy the data."
      ],
      "q_cn": "解决方案架构师需要将数据从 Amazon S3 存储桶和 AWS 账户复制到新 AWS 账户中的新 S3 存储桶。解决方案架构师必须实施使用 AWS CLI 的解决方案。\n哪些步骤组合将成功复制数据？（选择三个。",
      "a_cn": [
        "A.创建存储桶策略以允许源存储桶列出其内容，并在目标存储桶中放置对象和设置对象 ACL。将存储桶策略附加到目标存储桶。",
        "B.创建存储桶策略，以允许目标账户中的用户列出源存储桶的内容并读取源存储桶的对象。将存储桶策略附加到源存储桶。",
        "C.在源账户中创建 IAM 策略。配置策略以允许源账户中的用户列出内容和获取源存储桶中的对象，以及在目标存储桶中列出内容、放置对象和设置对象 ACL。将策略附加到用户。",
        "D.在目标账户中创建 IAM 策略。配置策略以允许目标账户中的用户列出内容和获取源存储桶中的对象，以及在目标存储桶中列出内容、放置对象和设置 objectACL。将策略附加到用户。",
        "E.以源账户中的用户身份运行 aws s3 sync 命令。指定要复制数据的源存储桶和目标存储桶。",
        "F.以目标账户中的用户身份运行 aws s3 sync 命令。指定要复制数据的源存储桶和目标存储桶。"
      ],
      "aa": "B,D,F",
      "qK": "copy data,S3 bucket in an AWS account to a new S3 bucket",
      "aK": [
        "in the destination account",
        "in the destination account",
        "in the destination account"
      ]
    },
    {
      "no": 240,
      "q": "",
      "a": [
        "",
        "",
        "",
        ""
      ],
      "q_cn": "",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "D",
      "qK": "",
      "aK": [
        ""
      ]
    },
    {
      "no": 146,
      "q": "A company’s interactive web application uses an Amazon CloudFront distribution to serve images from an Amazon S3 bucket. Occasionally, third-party tools ingest corrupted images into the S3 bucket. This image corruption causes a poor user experience in the application later. The company has successfully implemented and tested Python logic to detect corrupt images.\nA solutions architect must recommend a solution to integrate the detection logic with minimal latency between the ingestion and serving.\nWhich solution will meet these requirements?",
      "a": [
        "A.Use a Lambda@Edge function that is invoked by a viewer-response event.",
        "B.Use a Lambda@Edge function that is invoked by an origin-response event.",
        "C.Use an S3 event notification that invokes an AWS Lambda function.",
        "D.Use an S3 event notification that invokes an AWS Step Functions state machine."
      ],
      "q_cn": "公司的交互式 Web 应用程序使用 Amazon CloudFront 分配来提供来自 Amazon S3 存储桶的图像。有时，第三方工具会将损坏的映像摄取到 S3 存储桶中。此映像损坏会导致以后应用程序中的用户体验不佳。该公司已成功实施并测试了Python逻辑来检测损坏的图像。\n解决方案架构师必须推荐一个解决方案，以在引入和服务之间以最小的延迟集成检测逻辑。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "C",
      "qK": "CloudFront,serve images,S3,Python,minimal latency",
      "aK": [
        "S3,Lambda"
      ]
    },
    {
      "no": 143,
      "q": "A company runs an IoT application in the AWS Cloud. The company has millions of sensors that collect data from houses in the United States. The sensors use the MQTT protocol to connect and send data to a custom MQTT broker. The MQTT broker stores the data on a single Amazon EC2 instance. The sensors connect to the broker through the domain named iot.example.com. The company uses Amazon Route 53 as its DNS service. The company stores the data in Amazon DynamoDB.\nOn several occasions, the amount of data has overloaded the MQTT broker and has resulted in lost sensor data.The company must improve the reliability of the solution.\nWhich solution will meet these requirements?",
      "a": [
        "A.Create an Application Load Balancer (ALB) and an Auto Scaling group for the MQTT broker. Use the Auto Scaling group as the target for the ALB. Update the DNS record in Route 53 to an alias record. Point the alias record to the ALB. Use the MQTT broker to store the data.",
        "B.Set up AWS IoT Core to receive the sensor data. Create and configure a custom domain to connect to AWS IoT Core. Update the DNS record in Route 53 to point to the AWS IoT Core Data-ATS endpoint. Configure an AWS IoT rule to store the data.",
        "C.Create a Network Load Balancer (NLB). Set the MQTT broker as the target. Create an AWS Global Accelerator accelerator. Set the NLB as the endpoint for the accelerator. Update the DNS record in Route 53 to a multivalue answer record. Set the Global Accelerator IP addresses as values. Use the MQTT broker to store the data.",
        "D.Set up AWS IoT Greengrass to receive the sensor data. Update the DNS record in Route 53 to point to the AWS IoT Greengrass endpoint. Configure an AWS IoT rule to invoke an AWS Lambda function to store the data."
      ],
      "q_cn": "一家公司在 AWS 云中运行 IoT 应用程序。该公司拥有数百万个传感器，可以从美国的房屋收集数据。传感器使用 MQTT 协议连接数据并将其发送到自定义 MQTT 代理。MQTT 代理将数据存储在单个 Amazon EC2 实例上。传感器通过名为 iot.example.com 的域连接到代理。该公司使用Amazon Route 53作为其DNS服务。该公司将数据存储在 Amazon DynamoDB 中。\n在某些情况下，数据量使 MQTT 代理过载，并导致传感器数据丢失。公司必须提高解决方案的可靠性。\n      哪种解决方案可以满足这些要求？",
      "a_cn": [
        "",
        "",
        "",
        ""
      ],
      "aa": "B",
      "qK": "IoT,MQTT,iot.example.com",
      "aK": [
        "Data-ATS"
      ]
    }
  ],
  "path": "D:/ASrc/gitee/wwj/pj/demo2/js",
  "lv": {
    "lv154": "9",
    "lv165": "9",
    "lv64": "9",
    "lv196": "2",
    "lv88": "8",
    "lv84": "8",
    "lv159": "8",
    "lv108": "8",
    "lv144": "8",
    "lv72": "8",
    "lv147": "8",
    "lv100": "2",
    "lv28": "8",
    "lv178": "2",
    "lv89": "8",
    "lv160": "8",
    "lv56": "2",
    "lv43": "2",
    "lv31": "2",
    "lv156": "2",
    "lv150": "2",
    "lv112": "2",
    "lv49": "2",
    "lv158": "8",
    "lv103": "8",
    "lv257": "8",
    "lv35": "8",
    "lv172": "8",
    "lv169": "8",
    "lv38": "9",
    "lv135": "2",
    "lv213": "8",
    "lv45": "2",
    "lv116": "9",
    "lv280": "2",
    "lv79": "2",
    "lv162": "8",
    "lv122": "8",
    "lv243": "2",
    "lv151": "8",
    "lv44": "2",
    "lv115": "8",
    "lv276": "8",
    "lv176": "8",
    "lv166": "8",
    "lv155": "2",
    "lv148": "8",
    "lv69": "2",
    "lv86": "2",
    "lv32": "8",
    "lv175": "8",
    "lv168": "2",
    "lv149": "8",
    "lv274": "2",
    "lv58": "8",
    "lv37": "9",
    "lv12": "2",
    "lv34": "2",
    "lv19": "2",
    "lv275": "2",
    "lv278": "2",
    "lv164": "8",
    "lv183": "2",
    "lv232": "2",
    "lv246": "8",
    "lv184": "8",
    "lv138": "8",
    "lv188": "8",
    "lv57": "8",
    "lv15": "2",
    "lv113": "2",
    "lv130": "8",
    "lv253": "2",
    "lv65": "2",
    "lv11": "2",
    "lv33": "8",
    "lv247": "2",
    "lv60": "9",
    "lv269": "2",
    "lv263": "8",
    "lv236": "2",
    "lv271": "2",
    "lv209": "2",
    "lv48": "9",
    "lv96": "9",
    "lv195": "2",
    "lv9": "2",
    "lv273": "2",
    "lv76": "8",
    "lv202": "2",
    "lv230": "2",
    "lv268": "2",
    "lv139": "9",
    "lv120": "9",
    "lv59": "9",
    "lv152": "9",
    "lv203": "9",
    "lv215": "2",
    "lv235": "2",
    "lv252": "2",
    "lv129": "2",
    "lv63": "9",
    "lv207": "2",
    "lv5": "2",
    "lv66": "9",
    "lv53": "2",
    "lv266": "2",
    "lv36": "9",
    "lv186": "2",
    "lv14": "8",
    "lv242": "2",
    "lv270": "2",
    "lv177": "9",
    "lv245": "2",
    "lv191": "2",
    "lv119": "8",
    "lv110": "9",
    "lv30": "9",
    "lv198": "8",
    "lv222": "8",
    "lv109": "4",
    "lv233": "4",
    "lv145": "4",
    "lv240": "4",
    "lv187": "4",
    "lv173": "4",
    "lv279": "4",
    "lv231": "4",
    "lv126": "4",
    "lv214": "4",
    "lv255": "4",
    "lv234": "4",
    "lv297": "4",
    "lv223": "4",
    "lv258": "4",
    "lv305": "4",
    "lv117": "4",
    "lv179": "4",
    "lv310": "4",
    "lv256": "4",
    "lv267": "4",
    "lv204": "4",
    "lv194": "4",
    "lv229": "4",
    "lv224": "4",
    "lv318": "4",
    "lv294": "4",
    "lv106": "4",
    "lv182": "4",
    "lv141": "4",
    "lv167": "4",
    "lv248": "4",
    "lv124": "4",
    "lv107": "4",
    "lv239": "4",
    "lv254": "4",
    "lv211": "4",
    "lv244": "4",
    "lv250": "4",
    "lv161": "4",
    "lv289": "4",
    "lv261": "4",
    "lv314": "4",
    "lv189": "4",
    "lv308": "4",
    "lv288": "4",
    "lv259": "4",
    "lv241": "4",
    "lv216": "4",
    "lv111": "4",
    "lv137": "4",
    "lv201": "4",
    "lv190": "4",
    "lv277": "4",
    "lv272": "4",
    "lv298": "4",
    "lv208": "4",
    "lv265": "4",
    "lv205": "4",
    "lv180": "4",
    "lv192": "4",
    "lv118": "4",
    "lv237": "4",
    "lv262": "4",
    "lv185": "4",
    "lv293": "4",
    "lv292": "4",
    "lv127": "4",
    "lv295": "4",
    "lv251": "4",
    "lv249": "4",
    "lv210": "4",
    "lv284": "4",
    "lv304": "4",
    "lv153": "4",
    "lv163": "4",
    "lv212": "4",
    "lv303": "4",
    "lv132": "4",
    "lv134": "4",
    "lv226": "4",
    "lv206": "4",
    "lv140": "4",
    "lv221": "4",
    "lv228": "4",
    "lv136": "4",
    "lv217": "4",
    "lv219": "4",
    "lv105": "4",
    "lv286": "4",
    "lv296": "4",
    "lv197": "4",
    "lv260": "4",
    "lv220": "4",
    "lv315": "4",
    "lv227": "4",
    "lv238": "4",
    "lv225": "4",
    "lv264": "4",
    "lv218": "4",
    "lv309": "4",
    "lv121": "8",
    "lv114": "2",
    "lv102": "2",
    "lv322": "2",
    "lv282": "2",
    "lv104": "8",
    "lv125": "8",
    "lv307": "2",
    "lv311": "2",
    "lv281": "2",
    "lv146": "2",
    "lv291": "2",
    "lv317": "2",
    "lv143": "2",
    "lv299": "2",
    "lv170": "8",
    "lv285": "2",
    "lv171": "2",
    "lv200": "2",
    "lv319": "2",
    "lv321": "2",
    "lv313": "8",
    "lv287": "2",
    "lv302": "2",
    "lv300": "2",
    "lv199": "8",
    "lv301": "2",
    "lv128": "2",
    "lv133": "8",
    "lv101": "2",
    "lv181": "2",
    "lv320": "8",
    "lv131": "2",
    "lv306": "2",
    "lv283": "2",
    "lv157": "8",
    "lv290": "2",
    "lv174": "8",
    "lv142": "2",
    "lv312": "2",
    "lv193": "2",
    "lv316": "2",
    "lv123": "2",
    "lv21": "2",
    "lv23": "2",
    "lv27": "2",
    "lv29": "2",
    "lv40": "2",
    "lv46": "2",
    "lv50": "2",
    "lv42": "8",
    "lv52": "8",
    "lv1": "4",
    "lv2": "4",
    "lv3": "4",
    "lv4": "4",
    "lv6": "4",
    "lv7": "4",
    "lv8": "4",
    "lv10": "4",
    "lv13": "4",
    "lv16": "4",
    "lv17": "4",
    "lv18": "4",
    "lv22": "4",
    "lv24": "4",
    "lv25": "4",
    "lv26": "4",
    "lv20": "4",
    "lv39": "4",
    "lv41": "4",
    "lv47": "4",
    "lv51": "4",
    "lv54": "4"
  }
};