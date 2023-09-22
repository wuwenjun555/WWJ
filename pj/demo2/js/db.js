$.db =
{
  "awsSAP": [

    {
      "no": 28,
      "q": "A company is using AWS Organizations to manage multiple AWS accounts. For security purposes, the company requires the creation of an Amazon Simple Notification Service(Amazon SNS) topic that enables integration with a third- party alerting system in all the Organizations member accounts.A solutions architect used an AWS CloudFormation template to create the SNS topic and stack sets to automate the deployment of CloudFormation stacks.Trusted access has been enabled in Organizations.What should the solutions architect do to deploy the CloudFormation StackSets in all AWS accounts?",
      "a": [
        "A. Create a stack set in the Organizations member accounts. Use service-managed permissions. Set deployment options to deploy to an organization. Use CloudFormation StackSets drift detection.",
        "B.Create stacks in the Organizations member accounts.Use self - service permissions.Set deployment options to deploy to an organization.Enable the CloudFormation StackSets automatic deployment.",
        "C.Create a stack set in the Organizations master account.Use service - managed permissions.Set deployment options to deploy to the organization.Enable CloudFormation StackSets automatic deployment.",
        "D.Create stacks in the Organizations master account.Use service - managed permissions.Set deployment options to deploy to the organization.Enable CloudFormation StackSets drift detection."
      ],
      "q_cn": "一家公司正在使用 AWS Organizations 来管理多个 AWS 账户。出于安全考虑，该公司要求创建一个 Amazon Simple Notification Service （Amazon SNS） 主题，该主题允许与所有组织成员账户中的第三方警报系统集成。解决方案架构师使用 AWS CloudFormation 模板创建 SNS 主题和堆栈集，以自动部署 CloudFormation 堆栈。已在组织中启用可信访问。解决方案架构师应如何在所有 AWS 账户中部署 CloudFormation StackSets？",
      "a_cn": [
        "A. 在组织成员账户中创建堆栈集。使用服务托管权限。设置要部署到组织的部署选项。使用 CloudFormation StackSets 漂移检测。",
        "B.在组织成员账户中创建堆栈。使用自助服务权限。设置要部署到组织的部署选项。启用 CloudFormation StackSet 自动部署。",
        "C.在组织主账户中创建堆栈集。使用服务 - 托管权限。设置要部署到组织的部署选项。启用 CloudFormation StackSet 自动部署。",
        "D.在组织主账户中创建堆栈。使用服务 - 托管权限。设置要部署到组织的部署选项。启用 CloudFormation StackSet 偏移检测。"
      ],
      "aa": "C",
      "qK": "SNS,CloudFormation stacks,CloudFormation StackSets",
      "aK": ["master,automatic"]
    },
    {
      "no": 30,
      "q": "An AWS customer has a web application that runs on premises. The web application fetches data from a third-party API that is behind a firewall. The third party accepts only one public CIDR block in each client's allow list.The customer wants to migrate their web application to the AWS Cloud.The application will be hosted on a set of Amazon EC2 instances behind an Application Load Balancer(ALB) in a VPC.The ALB is located in public subnets.The EC2 instances are located in private subnets.NAT gateways provide internet access to the private subnets.How should a solutions architect ensure that the web application can continue to call the third- party API after the migration ? ",
      "a": [
        "A. Associate a block of customer-owned public IP addresses to the VPC. Enable public IP addressing for public subnets in the VPC.",
        "B.Register a block of customer - owned public IP addresses in the AWS account.Create Elastic IP addresses from the address block and assign them to the NAT gateways in the VPC.",
        "C.Create Elastic IP addresses from the block of customer - owned IP addresses.Assign the static Elastic IP addresses to the ALB.",
        "D.Register a block of customer - owned public IP addresses in the AWS account.Set up AWS Global Accelerator to use Elastic IP addresses from the address block.Set the ALB as the accelerator endpoint."
      ],
      "q_cn": "AWS 客户有一个在本地运行的 Web 应用程序。Web 应用程序从防火墙后面的第三方 API 获取数据。第三方在每个客户端的允许列表中只接受一个公网网段。客户希望将其 Web 应用程序迁移到 AWS 云。应用程序将托管在应用程序后面的一组 Amazon EC2 实例上VPC 中的负载均衡器 （ALB）。ALB 位于公有子网中。EC2 实例位于私有子网中。NAT 网关提供对私有子网的互联网访问。解决方案架构师应如何确保 Web 应用程序在迁移后可以继续调用第三方 API？",
      "a_cn": [
        "A. 将客户拥有的公有 IP 地址块关联到 VPC。为 VPC 中的公有子网启用公有 IP 寻址。",
        "B.在 AWS 账户中注册客户拥有的公有 IP 地址块。从地址块创建弹性 IP 地址，并将其分配给 VPC 中的 NAT 网关。",
        "C.从客户拥有的 IP 地址块创建弹性 IP 地址。将静态弹性 IP 地址分配给 ALB。",
        "D.在 AWS 账户中注册客户拥有的公有 IP 地址块。设置 AWS 全球加速器以使用地址块中的弹性 IP 地址。将 ALB 设置为加速器终结点。"
      ],
      "aa": "B",
      "qK": "third-party API,public CIDR,ALB,NAT",
      "aK": ["NAT"]
    },
    {
      "no": 31,
      "q": "A company needs to architect a hybrid DNS solution. This solution will use an Amazon Route 53 private hosted zone for the domain cloud.example.com for the resources stored within VPCs. The company has the following DNS resolution requirements: On- premises systems should be able to resolve and connect to cloud.example.com.All VPCs should be able to resolve cloud.example.com.There is already an AWS Direct Connect connection between the on - premises corporate network and AWS Transit Gateway.Which architecture should the company use to meet these requirements with the HIGHEST performance?",
      "a": [
        "A. Associate the private hosted zone to all the VPCs. Create a Route 53 inbound resolver in the shared services VPC. Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.",
        "B.Associate the private hosted zone to all the VPCs.Deploy an Amazon EC2 conditional forwarder in the shared services VPC.Attach all VPCs to the transit gateway and create forwarding rules in the on - premises DNS server for cloud.example.com that point to the conditional forwarder.",
        "C.Associate the private hosted zone to the shared services VPC.Create a Route 53 outbound resolver in the shared services VPC.Attach all VPCs to the transit gateway and create forwarding rules in the on- premises DNS server for cloud.example.com that point to the outbound resolver.",
        "D.Associate the private hosted zone to the shared services VPC.Create a Route 53 inbound resolver in the shared services VPC.Attach the shared services VPC to the transit gateway and create forwarding rules in the on- premises DNS server for cloud.example.com that point to the inbound resolver."
      ],
      "q_cn": "公司需要构建混合 DNS 解决方案。此解决方案将对 VPC 中存储的资源的域 cloud.example.com 使用 Amazon Route 53 私有托管区域。 该公司有以下 DNS 解析要求： 本地系统应该能够解析并连接到 cloud.example.com。所有 VPC 都应该能够解析 cloud.example.com。本地企业网络和 AWS Transit 网关之间已存在 AWS Direct Connect 连接。      公司应该使用哪种架构来满足这些要求，并具有最高的性能？",
      "a_cn": [
        "A. 将私有托管区域关联到所有 VPC。 在共享服务 VPC 中创建 Route 53 入站解析程序。将所有 VPC 附加到中转网关，并在本地 DNS 服务器中为指向入站解析程序 cloud.example.com 创建转发规则。",
        "B.将私有托管区域关联到所有 VPC。 在共享服务 VPC 中部署 Amazon EC2 条件转发器。将所有 VPC 附加到中转网关，并在本地 DNS 服务器中为指向条件转发器的 cloud.example.com 创建转发规则。",
        "C.将私有托管区域关联到共享服务 VPC。在共享服务 VPC 中创建 Route 53 出站解析程序。将所有 VPC 附加到中转网关，并在本地 DNS 服务器中为指向出站解析程序 cloud.example.com 创建转发规则。",
        "D.将私有托管区域关联到共享服务 VPC。在共享服务 VPC 中创建 Route 53 入站解析程序。将共享服务 VPC 附加到中转网关，并在本地 DNS 服务器中为指向入站解析程序 cloud.example.com 创建转发规则。"
      ],
      "aa": "A",
      "qK": "hybird DNS",
      "aK": ["all VPCs,inbound"]
    },
    {
      "no": 32,
      "q": "A startup company hosts a fleet of Amazon EC2 instances in private subnets using the latest Amazon Linux 2 AMI. The company's engineers rely heavily on SSH access to the instances for troubleshooting.\nThe company's existing architecture includes the following:\nA VPC with private and public subnets, and a NAT gateway\n Site- to - Site VPN for connectivity with the on- premises environment\n EC2 security groups with direct SSH access from the on - premises environment\nThe company needs to increase security controls around SSH access and provide auditing of commands run by the engineers.\nWhich strategy should a solutions architect use ? ",
      "a": [
        "A. Install and configure EC2 Instance Connect on the fleet of EC2 instances. Remove all security group rules attached to EC2 instances that allow inbound TCP on port 22. Advise the engineers to remotely access the instances by using the EC2 Instance Connect CLI.",
        "B.Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Install the Amazon CloudWatch agent on all EC2 instances and send operating system audit logs to CloudWatch Logs.",
        "C.Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Enable AWS Config for EC2 security group resource changes. Enable AWS Firewall Manager and apply a security group policy that automatically remediates changes to rules.",
        "D.Create an IAM role with the AmazonSSMManagedInstanceCore managed policy attached.Attach the IAM role to all the EC2 instances.Remove all security group rules attached to the EC2 instances that allow inbound TCP on port 22. Have the engineers install the AWS Systems Manager Session Manager plugin for their devices and remotely access the instances by using the start- session API call from Systems Manager."
      ],
      "q_cn": "一家初创公司使用最新的 Amazon Linux 2 AMI 在私有子网中托管一组 Amazon EC2 实例。\n该公司的工程师严重依赖对实例的 SSH 访问来进行故障排除。\n该公司的现有体系结构包括以下内容：\n具有私有和公有子网的 VPC 以及用于与本地环境连接的 NAT 网关\n站点到站点 VPN，用于与本地环境连接\n从本地环境直接通过 SSH 访问进行 SSH 访问的 EC2 安全组n公司需要加强对 SSH 访问的安全控制，并对工程师运行的命令进行审核。\n解决方案架构师应该使用哪种策略？",
      "a_cn": [
        "A. 在 EC2 实例队列上安装和配置 EC2 实例连接。删除附加到允许端口 22 上入站 TCP 的 EC2 实例的所有安全组规则。建议工程师使用 EC2 实例连接 CLI 远程访问实例。",
        "B.更新 EC2 安全组，使其仅允许端口 22 上的入站 TCP 到工程师设备的 IP 地址。在所有 EC2 实例上安装 Amazon CloudWatch 代理，并将操作系统审核日志发送到 CloudWatch Logs。",
        "C.更新 EC2 安全组，使其仅允许端口 22 上的入站 TCP 到工程师设备的 IP 地址。为 EC2 安全组资源更改启用 AWS Config。启用 AWS 防火墙管理器并应用可自动修复规则更改的安全组策略。",
        "D.创建附加了 AmazonSSMM 实例核心托管策略的 IAM 角色。将 IAM 角色附加到所有 EC2 实例。删除附加到允许端口 22 上的入站 TCP 的 EC2 实例的所有安全组规则。让工程师为其设备安装 AWS 系统管理器会话管理器插件，并使用系统管理器中的启动会话 API 调用远程访问实例。"
      ],
      "aa": "D",
      "qK": "EC2,Linux 2 AMI,SSH",
      "aK": ["IAM role"]
    },
    {
      "no": 33,
      "q": "A company is storing data on premises on a Windows file server. The company produces 5 GB of new data daily.\nThe company migrated part of its Windows- based workload to AWS and needs the data to be available on a file system in the cloud.The company already has established an AWS Direct Connect connection between the on - premises network and AWS.\nWhich data migration strategy should the company use ? ",
      "a": [
        "A. Use the file gateway option in AWS Storage Gateway to replace the existing Windows file server, and point the existing file share to the new file gateway",
        "B.Use AWS DataSync to schedule a daily task to replicate data between the on - premises Windows file server and Amazon FSx Most Voted",
        "C.Use AWS Data Pipeline to schedule a daily task to replicate data between the on - premises Windows file server and Amazon Elastic File System(Amazon EFS)",
        "D.Use AWS DataSync to schedule a daily task to replicate data between the on - premises Windows file server and Amazon Elastic File System(Amazon EFS) "
      ],
      "q_cn": "一家公司正在将本地数据存储在 Windows 文件服务器上。该公司每天产生 5 GB 的新数据。\n该公司将其部分基于 Windows 的工作负载迁移到 AWS，并且需要数据在云中的文件系统上可用。该公司已经在本地网络和 AWS 之间建立了 AWS Direct Connect 连接。\n公司应使用哪种数据迁移策略？",
      "a_cn": [
        "A. 使用 AWS Storage Gateway 中的文件网关选项替换现有的 Windows 文件服务器，并将现有文件共享指向新的文件网关",
        "B.使用 AWS DataSync 计划每日任务，在本地 Windows 文件服务器和 Amazon FSx 投票最多",
        "C.使用 AWS Data Pipeline 计划每日任务，在本地 Windows 文件服务器和 Amazon Elastic File System （Amazon EFS） 之间复制数据",
        "D.使用 AWS DataSync 计划每日任务，以在本地 Windows 文件服务器和 Amazon Elastic File System （Amazon EFS） 之间复制数据"
      ],
      "aa": "B",
      "qK": "Windows,5GB",
      "aK": ["FSx"]
    },
    {
      "no": 34,
      "q": "A company is developing and hosting several projects in the AWS Cloud. The projects are developed across multiple AWS accounts under the same organization in AWS Organizations. The company requires the cost for cloud infrastructure to be allocated to the owning project. The team responsible for all of the AWS accounts has discovered that several Amazon EC2 instances are lacking the Project tag used for cost allocation.\nWhich actions should a solutions architect take to resolve the problem and prevent it from happening in the future?(Choose three.) ",
      "a": [
        "A. Create an AWS Config rule in each account to find resources with missing tags.",
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
        "AWS Config [rule]",
        "SCP",
        "AWS Config [aggregator]"
      ]
    },
    {
      "no": 35,
      "q": "A company has many AWS accounts and uses AWS Organizations to manage all of them. A solutions architect must implement a solution that the company can use to share a common network across multiple accounts.\nThe company’s infrastructure team has a dedicated infrastructure account that has a VPC.The infrastructure team must use this account to manage the network.Individual accounts cannot have the ability to manage their own networks.However, individual accounts must be able to create AWS resources within subnets.\nWhich combination of actions should the solutions architect perform to meet these requirements?(Choose two.) ",
      "a": [
        "A. Create a transit gateway in the infrastructure account.",
        "B.Enable resource sharing from the AWS Organizations management account.",
        "C.Create VPCs in each AWS account within the organization in AWS Organizations.Configure the VPCs to share the same CIDR range and subnets as the VPC in the infrastructure account.Peer the VPCs in each individual account with the VPC in the infrastructure account.",
        "D.Create a resource share in AWS Resource Access Manager in the infrastructure account.Select the specific AWS Organizations OU that will use the shared network.Select each subnet to associate with the resource share.",
        "E.Create a resource share in AWS Resource Access Manager in the infrastructure account.Select the specific AWS Organizations OU that will use the shared network.Select each prefix list to associate with the resource share."
      ],
      "q_cn": "一家公司拥有许多 AWS 账户，并使用 AWS Organizations 来管理所有这些账户。解决方案架构师必须实现公司可用于跨多个帐户共享公共网络的解决方案。\n该公司的基础设施团队有一个具有 VPC 的专用基础设施账户。基础结构团队必须使用此帐户来管理网络。个人帐户无法管理自己的网络。但是，个人账户必须能够在子网中创建 AWS 资源。\n     解决方案架构师应执行哪些操作组合来满足这些要求？（选择两个。",
      "a_cn": [
        "A. 在基础架构帐户中创建中转网关。",
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
      "no": 36,
      "q": "A large company is running a popular web application. The application runs on several Amazon EC2 Linux instances in an Auto Scaling group in a private subnet.\nAn Application Load Balancer is targeting the instances in the Auto Scaling group in the private subnet.AWS Systems Manager Session Manager is configured, and AWS Systems Manager Agent is running on all the EC2 instances.\nThe company recently released a new version of the application.Some EC2 instances are now being marked as unhealthy and are being terminated.As a result, the application is running at reduced capacity.A solutions architect tries to determine the root cause by analyzing Amazon CloudWatch logs that are collected from the application, but the logs are inconclusive.\nHow should the solutions architect gain access to an EC2 instance to troubleshoot the issue?",
      "a": [
        "A. Suspend the Auto Scaling group's HealthCheck scaling process. Use Session Manager to log in to an instance that is marked as unhealthy.",
        "B.Enable EC2 instance termination protection.Use Session Manager to log in to an instance that is marked as unhealthy.",
        "C.Set the termination policy to OldestInstance on the Auto Scaling group.Use Session Manager to log in to an instance that is marked an unhealthy.",
        "D.Suspend the Auto Scaling group's Terminate process. Use Session Manager to log in to an instance that is marked as unhealthy."
      ],
      "q_cn": "一家大公司正在运行一个流行的 Web 应用程序。该应用程序在私有子网中的 Auto Scaling 组中的多个 Amazon EC2 Linux 实例上运行。\n应用程序负载均衡器以私有子网中 Auto Scaling 组中的实例为目标。AWS Systems Manager Session Manager 已配置，AWS Systems Manager Agent 正在所有 EC2 实例上运行。\n该公司最近发布了该应用程序的新版本。某些 EC2 实例现在被标记为运行状况不佳并正在终止。因此，应用程序以减少的容量运行。解决方案架构师尝试通过分析从应用程序收集的 Amazon CloudWatch 日志来确定根本原因，但这些日志尚无定论。\n解决方案架构师应如何访问 EC2 实例以排查问题？",
      "a_cn": [
        "A. 暂停弹性伸缩组的运行状况检查扩展过程。使用会话管理器登录到标记为运行状况不佳的实例。",
        "B.启用 EC2 实例终止保护。使用会话管理器登录到标记为运行状况不佳的实例。",
        "C.在弹性伸缩分组上，将终止策略设置为最旧的实例。使用会话管理器登录到标记为运行状况不佳的实例。",
        "D.暂停弹性伸缩组的终止进程。使用会话管理器登录到标记为运行状况不佳的实例。"
      ],
      "aa": "D",
      "qK": "unhealthy,terminated",
      "aK": ["Terminate"]
    },
    {
      "no": 37,
      "q": "A company wants to migrate an application to Amazon EC2 from VMware Infrastructure that runs in an on-premises data center. A solutions architect must preserve the software and configuration settings during the migration.\nWhat should the solutions architect do to meet these requirements?",
      "a": [
        "A. Configure the AWS DataSync agent to start replicating the data store to Amazon FSx for Windows File Server. Use the SMB share to host the VMware data store. Use VM Import/Export to move the VMs to Amazon EC2.",
        "B.Use the VMware vSphere client to export the application as an image in Open Virtualization Format(OVF) format.Create an Amazon S3 bucket to store the image in the destination AWS Region.Create and apply an IAM role for VM Import.Use the AWS CLI to run the EC2 import command.",
        "C.Configure AWS Storage Gateway for files service to export a Common Internet File System(CIFS) share.Create a backup copy to the shared folder.Sign in to the AWS Management Console and create an AMI from the backup copy.Launch an EC2 instance that is based on the AMI.",
        "D.Create a managed- instance activation for a hybrid environment in AWS Systems Manager.Download and install Systems Manager Agent on the on- premises VM.Register the VM with Systems Manager to be a managed instance.Use AWS Backup to create a snapshot of the VM and create an AMI.Launch an EC2 instance that is based on the AMI."
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
      "aK": ["VMware vSphere"]
    },
    {
      "no": 38,
      "q": "A software company hosts an application on AWS with resources in multiple AWS accounts and Regions. The application runs on a group of Amazon EC2 instances in an application VPC located in the us-east-1 Region with an IPv4 CIDR block of 10.10.0.0/16. In a different AWS account, a shared services VPC is located in the us-east-2 Region with an IPv4 CIDR block of 10.10.10.0/24. When a cloud engineer uses AWS CloudFormation to attempt to peer the application VPC with the shared services VPC, an error message indicates a peering failure.\nWhich factors could cause this error ? (Choose two.) ",
      "a": [
        "A. The IPv4 CIDR ranges of the two VPCs overlap",
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
      "no": 43,
      "q": "A company is planning to host a web application on AWS and wants to load balance the traffic across a group of Amazon EC2 instances. One of the security requirements is to enable end-to-end encryption in transit between the client and the web server.\nWhich solution will meet this requirement ? ",
      "a": [
        "A. Place the EC2 instances behind an Application Load Balancer (ALB). Provision an SSL certificate using AWS Certificate Manager (ACM), and associate the SSL certificate with the ALB. Export the SSL certificate and install it on each EC2 instance. Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.",
        "B.Associate the EC2 instances with a target group.Provision an SSL certificate using AWS Certificate Manager(ACM).Create an Amazon CloudFront distribution and configure it to use the SSL certificate.Set CloudFront to use the target group as the origin server.",
        "C.Place the EC2 instances behind an Application Load Balancer(ALB) Provision an SSL certificate using AWS Certificate Manager(ACM), and associate the SSL certificate with the ALB.Provision a third- party SSL certificate and install it on each EC2 instance.Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.",
        "D.Place the EC2 instances behind a Network Load Balancer(NLB).Provision a third - party SSL certificate and install it on the NLB and on each EC2 instance.Configure the NLB to listen on port 443 and to forward traffic to port 443 on the instances."
      ],
      "q_cn": "一家公司计划在 AWS 上托管一个 Web 应用程序，并希望在一组 Amazon EC2 实例之间对流量进行负载均衡。安全要求之一是在客户端和 Web 服务器之间启用传输中的端到端加密。\n哪种解决方案可以满足此要求？",
      "a_cn": [
        "A. 将 EC2 实例放在应用程序负载均衡器 （ALB） 后面。使用 AWS 证书管理器 （ACM） 预置 SSL 证书，并将 SSL 证书与 ALB 关联。导出 SSL 证书并将其安装在每个 EC2 实例上。将 ALB 配置为侦听端口 443，并将流量转发到实例上的端口 443。",
        "B.将 EC2 实例与目标组关联。使用 AWS 证书管理器 （ACM） 预置 SSL 证书。创建 Amazon CloudFront 分配并将其配置为使用 SSL 证书。设置 CloudFront 以使用目标组作为源服务器。",
        "C.将 EC2 实例放在应用程序负载均衡器 （ALB） 后面 使用 AWS 证书管理器 （ACM） 预置 SSL 证书，并将 SSL 证书与 ALB 关联。预置第三方 SSL 证书并将其安装在每个 EC2 实例上。将 ALB 配置为侦听端口 443，并将流量转发到实例上的端口 443。",
        "D.将 EC2 实例放在网络负载均衡器 （NLB） 后面。预置第三方 SSL 证书并将其安装在 NLB 和每个 EC2 实例上。将 NLB 配置为侦听端口 443，并将流量转发到实例上的端口 443。"
      ],
      "aa": "C",
      "qK": "Web app,EC2,end-to-end encryption",
      "aK": ["ALB.Provision"]
    },
    {
      "no": 44,
      "q": "A company is running several workloads in a single AWS account. A new company policy states that engineers can provision only approved resources and that engineers must use AWS CloudFormation to provision these resources. A solutions architect needs to create a solution to enforce the new restriction on the IAM role that the engineers use for access.\nWhat should the solutions architect do to create the solution?",
      "a": [
        "A. Upload AWS CloudFormation templates that contain approved resources to an Amazon S3 bucket. Update the IAM policy for the engineers’ IAM role to only allow access to Amazon S3 and AWS CloudFormation. Use AWS CloudFormation templates to provision resources.",
        "B.Update the IAM policy for the engineers’ IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation.Use AWS CloudFormation templates to create stacks with approved resources.",
        "C.Update the IAM policy for the engineers’ IAM role with permissions to only allow AWS CloudFormation actions.Create a new IAM policy with permission to provision approved resources, and assign the policy to a new IAM service role.Assign the IAM service role to AWS CloudFormation during stack creation.",
        "D.Provision resources in AWS CloudFormation stacks.Update the IAM policy for the engineers’ IAM role to only allow access to their own AWS CloudFormation stack."
      ],
      "q_cn": "一家公司在单个 AWS 账户中运行多个工作负载。新的公司政策规定，工程师只能预置批准的资源，并且工程师必须使用 AWS CloudFormation 来预置这些资源。解决方案架构师需要创建一个解决方案，以对工程师用于访问的 IAM 角色强制实施新的限制。\n解决方案架构师应该做什么来创建解决方案？",
      "a_cn": [
        "A. 将包含已批准资源的 AWS CloudFormation 模板上传到 Amazon S3 存储桶。更新工程师 IAM 角色的 IAM 策略，以仅允许访问 Amazon S3 和 AWS CloudFormation。使用 AWS CloudFormation 模板预置资源。",
        "B.更新工程师 IAM 角色的 IAM 策略，使其权限仅允许预置批准的资源和 AWS CloudFormation。使用 AWS CloudFormation 模板创建具有已批准资源的堆栈。",
        "C.更新工程师 IAM 角色的 IAM 策略，使其权限仅允许 AWS CloudFormation 操作。创建有权预置已批准资源的新 IAM 策略，并将该策略分配给新的 IAM 服务角色。在堆栈创建期间将 IAM 服务角色分配给 AWS CloudFormation。",
        "D.在 AWS CloudFormation 堆栈中预置资源。更新工程师 IAM 角色的 IAM 策略，以仅允许访问其自己的 AWS CloudFormation 堆栈。"
      ],
      "aa": "C",
      "qK": "approved resources,CloudFormation",
      "aK": ["[Update,policy,new IAM policy,new IAM ]service role"]
    },
    {
      "no": 45,
      "q": "A company with global offices has a single 1 Gbps AWS Direct Connect connection to a single AWS Region. The company's on-premises network uses the connection to communicate with the company's resources in the AWS Cloud. The connection has a single private virtual interface that connects to a single VPC.\nA solutions architect must implement a solution that adds a redundant Direct Connect connection in the same Region.The solution also must provide connectivity to other Regions through the same pair of Direct Connect connections as the company expands into other Regions.\nWhich solution meets these requirements?",
      "a": [
        "A. Provision a Direct Connect gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the Direct Connect gateway. Connect the Direct Connect gateway to the single VPC.",
        "B.Keep the existing private virtual interface.Create the second Direct Connect connection.Create a new private virtual interface on the new connection, and connect the new private virtual interface to the single VPC.",
        "C.Keep the existing private virtual interface.Create the second Direct Connect connection.Create a new public virtual interface on the new connection and connect the new public virtual interface to the single VPC.",
        "D.Provision a transit gateway.Delete the existing private virtual interface from the existing connection.Create the second Direct Connect connection.Create a new private virtual interface on each connection, and connect both private virtual interfaces to the transit gateway.Associate the transit gateway with the single VPC."
      ],
      "q_cn": "拥有全球办事处的公司与单个 AWS 区域只有一条 1 Gbps 的 AWS Direct Connect 连接。公司的本地网络使用该连接与 AWS 云中的公司资源进行通信。该连接具有连接到单个 VPC 的单个私有虚拟接口。\n解决方案架构师必须实现在同一区域添加冗余专线连接的解决方案。当公司扩展到其他区域时，该解决方案还必须通过同一对直接连接提供与其他区域的连接。\n哪种解决方案满足这些要求",
      "a_cn": [
        "A. 配置专线网关。从现有连接中删除现有私有虚拟接口。创建第二个直接连接。在每个连接上创建新的私有虚拟接口，并将两个私有虚拟接口连接到专线网关。将专线网关连接到单个VPC。",
        "B.保留现有的私有虚拟接口。创建第二个直接连接。在新连接上创建新的私有虚拟接口，并将新的私有虚拟接口连接到单个 VPC。",
        "C.保留现有的私有虚拟接口。创建第二个直接连接。在新连接上创建新的公有虚拟接口，并将新的公有虚拟接口连接到单个 VPC。",
        "D.配置中转网关。从现有连接中删除现有私有虚拟接口。创建第二个直接连接。在每个连接上创建一个新的私有虚拟接口，并将两个私有虚拟接口连接到中转网关。将中转网关与单个 VPC 关联。"
      ],
      "aa": "A",
      "qK": "1 Gbps,Direct Connect,adds a redundant Direct Connect",
      "aK": ["Direct Connect gateway"]
    },
    {
      "no": 48,
      "q": "A company hosts a community forum site using an Application Load Balancer(ALB) and a Docker application hosted in an Amazon ECS cluster.The site data is stored in Amazon RDS for MySQL and the container image is stored in ECR.The company needs to provide their customers with a disaster recovery SIA with an RTO of no more than 24 hours and RPO of no more than 8 hours.\nWhich of the following solutions is the MOST cost-effective way to meet the requirements?",
      "a": [
        "A.Use AWS CloudFormation to deplov identical ALB, EC2, ECS and RDS resources in two redions.Schedule RDS snapshots every 8 hours.Use RDS multi-region replication to update the secondary region's copy of the database. In the event of a failure, restore from the latest snapshot, and use an Amazon Route 53 DNS failover policy to automatically redirect customers to the ALB in the secondary region.",
        "B.Store the Docker image in ECR in two regions.Schedule RDS snapshots every 8 hours with snapshots copied to the secondary region.In the event of failure, use AWS CloudFormation to deploy the ALB, EC2, ECS and RDS resources in the secondary region, restore from the latest snapshot, and update the DNS record to point to the ALB in the secondary region.",
        "C.Use AWS CloudFormation to deplov identical ALB, EC2, ECS and RDS resources in a secondarv region.Schedule hourly RDS MySOL backups to Amazon S3 and use cross-region replication to replicate data to a bucket in the secondary region.In the event of a failure, import the latest Docker image to Amazon ECR in the secondary region, deploy to the EC2 instance. restore the latest MySQL backup, and update the DNS record to point to the ALB in the secondary region.",
        "D.Deploy a pilot light environment in a secondary region with an ALB and a minimal resource EC2 deployment for Focker in an AWS Auto Scaling group with a scaling policy to increase instance size anf number of nodes Create a cross-region read replica of the RDS data.In the event of a failure.promote the replica to primary, and update the DNS record to point to the ALB in the second an region."
      ],
      "q_cn": "一家公司使用应用程序负载均衡器 （ALB） 和托管在 Amazon ECS 集群中的 Docker 应用程序托管社区论坛站点。站点数据存储在适用于 MySQL 的 Amazon RDS 中，容器映像存储在 ECR 中。该公司需要为其客户提供 RTO 不超过 24 小时、RPO 不超过 8 小时的灾难恢复 SIA。以下哪种解决方案是满足要求的最具成本效益的方法？",
      "a_cn": [
        "A.使用 AWS CloudFormation 在两个资源中删除相同的 ALB、EC2、ECS 和 RDS 资源。每 8 小时安排一次 RDS 快照。使用 RDS 多区域复制更新次要区域的数据库副本。发生故障时，请从最新快照还原，并使用 Amazon Route 53 DNS 故障转移策略自动将客户重定向到次要区域中的 ALB。",
        "B.在两个区域中 B.Store ECR 中的 Docker 映像。每 8 小时计划一次 RDS 快照，并将快照复制到次要区域。发生故障时，使用 AWS CloudFormation 在次要区域中部署 ALB、EC2、ECS 和 RDS 资源，从最新快照还原，并更新 DNS 记录以指向次要区域中的 ALB。",
        "C.使用 AWS CloudFormation 在二级ARV区域中删除相同的ALB、EC2、ECS和RDS资源。计划每小时将 RDS MySOL 备份到 Amazon S3，并使用跨区域复制将数据复制到次要区域中的存储桶。如果发生故障，请将最新的 Docker 映像导入次要区域中的 Amazon ECR，部署到 EC2 实例。还原最新的 MySQL 备份，并更新 DNS 记录以指向次要区域中的 ALB。",
        "D.在具有 ALB 的次要区域中部署 Pilot Light 环境，并在具有扩展策略的 AWS Auto Scaling 组中为 Focker 部署最少资源 EC2，以增加实例大小和节点数 创建 RDS 数据的跨区域只读副本。发生故障时。将副本提升为主副本，并更新 DNS 记录以指向第二个区域中的 ALB。"
      ],
      "aa": "B",
      "qK": "RTO,24 hours,RPO,8 hours",
      "aK": ["Store the Docker image in ECR in two regions"]
    },
    {
      "no": 49,
      "q": "A company wants to migrate its data analytics environment from on premises to AWS. The environment consists of two simple Node.js applications. One of the applications collects sensor data and loads it into a MySQL database. The other application aggregates the data into reports. When the aggregation jobs run, some of the load jobs fail to run correctly.\nThe company must resolve the data loading issue.The company also needs the migration to occur without interruptions or changes for the company's customers.\nWhat should a solutions architect do to meet these requirements?",
      "a": [
        "A. Set up an Amazon Aurora MySQL database as a replication target for the on-premises database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind a Network Load Balancer (NLB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the NLB.",
        "B.Set up an Amazon Aurora MySQL database.Use AWS Database Migration Service(AWS DMS) to perform continuous data replication from the on - premises database to Aurora.Move the aggregation jobs to run against the Aurora MySQL database.Set up collection endpoints behind an Application Load Balancer(ALB) as Amazon EC2 instances in an Auto Scaling group.When the databases are synced, point the collector DNS record to the ALB.Disable the AWS DMS sync task after the cutover from on premises to AWS.",
        "C.Set up an Amazon Aurora MySQL database.Use AWS Database Migration Service(AWS DMS) to perform continuous data replication from the on - premises database to Aurora.Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica.Set up collection endpoints as AWS Lambda functions behind an Application Load Balancer(ALB), and use Amazon RDS Proxy to write to the Aurora MySQL database.When the databases are synced, point the collector DNS record to the ALB.Disable the AWS DMS sync task after the cutover from on premises to AWS.",
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
      "aK": ["DMS, Replica"]
    },
    {
      "no": 53,
      "q": "A team collects and routes behavioral data for an entire company. The company runs a Multi-AZ VPC environment with public subnets, private subnets, and in internet gateway. Each public subnet also contains a NAT gateway. Most of the company's applications read from and write to Amazon Kinesis Data Streams.\nMost of the workloads run in private subnets.\nA solutions architect must review the infrastructure.The solution architect needs to reduce costs and maintain the function of the applications.The solutions architect uses Cost Explorer and notices that the cost in the EC2- Other category is consistently high.A further review shows that NatGateway - Bytes charges are increasing the cost in the EC2 - Other category.\nWhat should the solutions architect do to meet these requirements?",
      "a": [
        "A. Enable VPC Flow Logs. Use Amazon Athena to analyze the logs for traffic that can be removed. Ensure that security groups are blocking traffic that is responsible for high costs.",
        "B.Add an interface VPC endpoint for Kinesis Data Streams to the VPC.Ensure that applications have the correct IAM permissions to use the interface VPC endpoint.",
        "C.Enable VPC Flow Logs and Amazon Detective.Review Detective findings for traffic that is not related to Kinesis Data Streams.Configure security groups to block that traffic.",
        "D.Add an interface VPC endpoint for Kinesis Data Streams to the VPC.Ensure that the VPC endpoint policy allows traffic from the applications."
      ],
      "q_cn": "团队收集和路由整个公司的行为数据。该公司运行具有公有子网、私有子网和互联网网关的多可用区 VPC 环境。每个公有子网还包含一个 NAT 网关。该公司的大多数应用程序都读取和写入 Amazon Kinesis Data Streams。\n大多数工作负载都在私有子网中运行。\n解决方案架构师必须检查基础设施。解决方案架构师需要降低成本并维护应用程序的功能。解决方案架构师使用 成本管理器 并注意到 EC2 - 其他类别中的成本一直很高。进一步的审查表明，NatGateway - 字节费用正在增加 EC2 - 其他类别的成本。n解决方案架构师应采取哪些措施来满足这些要求？",
      "a_cn": [
        "A.启用 VPC 流日志。使用 Amazon Athena 分析日志中可移除的流量。确保安全组阻止导致高成本的流量。",
        "B.将 Kinesis 数据流的接口 VPC 终端节点添加到该 VPC。确保应用程序具有正确的 IAM 权限以使用接口 VPC 终端节点。",
        "c.启用 VPC 流日志和亚马逊侦探。查看与 Kinesis 数据流无关的流量的检测结果。配置安全组以阻止该流量。",
        "D.将 Kinesis 数据流的接口 VPC 终端节点添加到 VPC。确保 VPC 终端节点策略允许来自应用程序的流量。"
      ],
      "aa": "D",
      "qK": "NatGateway - Bytes",
      "aK": ["[Add],endpoint policy"]
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
        "A. 激活代表应用程序和团队的用户定义成本分配标记。",
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
      "no": 57,
      "q": "A company wants to deploy an AWS WAF solution to manage AWS WAF rules across multiple AWS accounts. The accounts are managed under different OUs in AWS Organizations.\nAdministrators must be able to add or remove accounts or OUs from managed AWS WAF rule sets as needed.Administrators also must have the ability to automatically update and remediate noncompliant AWS WAF rules in all accounts.\nWhich solution meets these requirements with the LEAST amount of operational overhead?",
      "a": [
        "A. Use AWS Firewall Manager to manage AWS WAF rules across accounts in the organization. Use an AWS Systems Manager Parameter Store parameter to store account numbers and OUs to manage. Update the parameter as needed to add or remove accounts or OUs. Use an Amazon EventBridge rule to identify any changes to the parameter and to invoke an AWS Lambda function to update the security policy in the Firewall Manager administrative account.",
        "B.Deploy an organization - wide AWS Config rule that requires all resources in the selected OUs to associate the AWS WAF rules.Deploy automated remediation actions by using AWS Lambda to fix noncompliant resources.Deploy AWS WAF rules by using an AWS CloudFormation stack set to target the same OUs where the AWS Config rule is applied.",
        "C.Create AWS WAF rules in the management account of the organization.Use AWS Lambda environment variables to store account numbers and OUs to manage.Update environment variables as needed to add or remove accounts or OUs.Create cross - account IAM roles in member accounts.Assume the roles by using AWS Security Token Service(AWS STS) in the Lambda function to create and update AWS WAF rules in the member accounts.",
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
      "aK": ["[Use AWS ]Firewall Manager"]
    },
    {
      "no": 58,
      "q": "A solutions architect must analyze a company's Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes to determine whether the company is using resources efficiently. The company is running several large, high-memory EC2 instances to host database clusters that are deployed in active/ passive configurations. The utilization of these EC2 instances varies by the applications that use the databases, and the company has not identified a pattern.\nThe solutions architect must analyze the environment and take action based on the findings.\nWhich solution meets these requirements MOST cost- effectively ? ",
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
      "aK": ["CloudWatch agent"]
    },
    {
      "no": 59,
      "q": "A company runs a serverless application in a single AWS Region. The application accesses external URLs and extracts metadata from those sites. The company uses an Amazon Simple Notification Service (Amazon SNS) topic to publish URLs to an Amazon Simple Queue Service (Amazon SQS) queue. An AWS Lambda function uses the queue as an event source and processes the URLs from the queue. Results are saved to an Amazon S3 bucket.\nThe company wants to process each URL in other Regions to compare possible differences in site localization.URLs must be published from the existing Region.\nResults must be written to the existing S3 bucket in the current Region.\nWhich combination of changes will produce multi- Region deployment that meets these requirements ? (Choose two.) ",
      "a": [
        "A. Deploy the SQS queue with the Lambda function to other Regions.",
        "B.Subscribe the SNS topic in each Region to the SQS queue.",
        "C.Subscribe the SQS queue in each Region to the SNS topic.",
        "D.Configure the SQS queue to publish URLs to SNS topics in each Region.",
        "E.Deploy the SNS topic and the Lambda function to other Regions."
      ],
      "q_cn": "一家公司在单个 AWS 区域中运行无服务器应用程序。应用程序访问外部 URL 并从这些站点中提取元数据。该公司使用 Amazon Simple Notification Service （Amazon SNS） 主题将 URL 发布到 Amazon Simple Queue Service （Amazon SQS） 队列。AWS Lambda 函数使用队列作为事件源并处理队列中的 URL。结果将保存到 Amazon S3 存储桶中。\n该公司希望处理其他区域中的每个 URL，以比较网站本地化的可能差异。必须从现有区域发布 URL。\n结果必须写入当前区域中的现有 S3 存储桶。\n    哪些更改组合将产生满足这些要求的多区域部署？（选择两个。",
      "a_cn": [
        "A. 将带有 Lambda 函数的 SQS 队列部署到其他区域。",
        "B.将每个区域中的 SNS 主题订阅到 SQS 队列。",
        "C.将每个区域中的 SQS 队列订阅到 SNS 主题。",
        "D.配置 SQS 队列以将 URL 发布到每个区域中的 SNS 主题。",
        "E.将 SNS 主题和 Lambda 函数部署到其他区域。"
      ],
      "aa": "A,C",
      "qK": "SNS,SQS,Lambda,S3,URL,multi- Region",
      "aK": [
        "SQS,other Regions",
        "Subscribe,SQS,SNS"
      ]
    },
    {
      "no": 60,
      "q": "A video streaming company recently launched a mobile app for video sharing. The app uploads various files to an Amazon S3 bucket in the us-east-1 Region. The files range in size from 1 GB to 10 GB.\nUsers who access the app from Australia have experienced uploads that take long periods of time.Sometimes the files fail to completely upload for these users.A solutions architect must improve the app's performance for these uploads.\nWhich solutions will meet these requirements?(Choose two.) ",
      "a": [
        "A. Enable S3 Transfer Acceleration on the S3 bucket. Configure the app to use the Transfer Acceleration endpoint for uploads.",
        "B.Configure an S3 bucket in each Region to receive the uploads.Use S3 Cross - Region Replication to copy the files to the distribution S3 bucket.",
        "C.Set up Amazon Route 53 with latency - based routing to route the uploads to the nearest S3 bucket Region.",
        "D.Configure the app to break the video files into chunks.Use a multipart upload to transfer files to Amazon S3.",
        "E.Modify the app to add random prefixes to the files before uploading."
      ],
      "q_cn": "一家视频流媒体公司最近推出了一款用于视频共享的移动应用程序。该应用程序将各种文件上传到 us-east-1 区域中的 Amazon S3 存储桶。文件的大小范围从 1 GB 到 10 GB。\n从澳大利亚访问该应用程序的用户经历了需要很长时间的上传。有时，文件无法为这些用户完全上传。解决方案架构师必须提高这些上传的应用性能。\n哪些解决方案可以满足这些要求？（选择两个。",
      "a_cn": [
        "A. 在 S3 存储桶上启用 S3 传输加速。将应用配置为使用传输加速终端节点进行上传。",
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
        "A. 在客户端应用程序中实现具有指数退避和不规则变化的重试逻辑。确保捕获错误并使用描述性错误消息进行处理。",
        "B.通过 API 网关级别的使用计划实现 API 限制。确保客户端应用程序处理代码 429 回复时没有错误。",
        "C.启用 API 缓存以增强生产阶段的响应能力。运行 10 分钟的负载测试。验证缓存容量是否适合工作负载。",
        "D.在 Lambda 函数级别实施预留并发，以提供流量突然增加时所需的资源。"
      ],
      "aa": "A",
      "qK": "PUT",
      "aK": ["Implement retry logic"]
    },
    {
      "no": 64,
      "q": "A retail company needs to provide a series of data files to another company, which is its business partner. These files are saved in an Amazon S3 bucket under Account A, which belongs to the retail company.The business partner company wants one of its IAM users, User_DataProcessor, to access the files from its own AWS account(Account B).\nWhich combination of steps must the companies take so that User_DataProcessor can access the S3 bucket successfully?(Choose two.) ",
      "a": [
        "A. Turn on the cross-origin resource sharing (CORS) feature for the S3 bucket in Account A.",
        `B.InAccountA, set the S3 bucket policy to the following:
        {
          "Effect": "Allow",
          "Action": {
            "s3:GetObject",
            "s3:ListBucket"
          },
          "Resource": "arn:aws:s3:::AccountABucketName/*"
        }`,
        `C.InAccount A, set the S3 bucket policy to the following:
        {
          "Effect": "Allow",
          "Principal": {
            "AWS": "arn:aws:iam::AccountB:use/User_DataProcessor"
          },
          "Action": {
            "s3:GetObject",
            "s3:ListBucket"
          },
          "Resource": "arn:aws:s3:::AccountABucketName/*"
        }`,
        `D.InAccount B, set the permissions of User_DataProcessor to the following:
        {
          "Effect": "Allow",
          "Action": {
            "s3:GetObject",
            "s3:ListBucket"
          },
          "Resource": "arn:aws:s3:::AccountABucketName/*"
        }`,
        `E.InAccount B, set the permissions of User_DataProcessor to the following: 
        {
          "Effect": "Allow",
          "Principal": {
            "AWS": "arn:aws:iam::AccountB:use/User_DataProcessor"
          },
          "Action": {
            "s3:GetObject",
            "s3:ListBucket"
          },
          "Resource": "arn:aws:s3:::AccountABucketName/*"
        }`
      ],
      "q_cn": "零售公司需要向另一家公司（其业务合作伙伴）提供一系列数据文件。这些文件保存在 Amazon S3 存储桶中，位于帐户 A，属于零售公司。业务合作伙伴公司希望其 IAM 用户之一（User_DataProcessor）从自己的文件访问文件AWS 账户（账户 B）。\n公司必须采取哪些步骤组合才能User_DataProcessor成功访问 S3 存储桶？（选择两个。",
      "a_cn": [
        "A. 为账户 A 中的 S3 存储桶启用跨源资源共享 （CORS） 功能。",
        `B.在账户 A 中，将 S3 存储桶策略设置为以下内容：
        {
          "Effect": "Allow",
          "Action": {
            "s3:GetObject",
            "s3:ListBucket"
          },
          "Resource": "arn:aws:s3:::AccountABucketName"
        }`,
        `C.在账户 A 中，将 S3 存储桶策略设置为以下内容：
        {
          "Effect": "Allow",
          "Principal": {
            "AWS": "arn:aws:iam::AccountB:use/User_DataProcessor"
          },
          "Action": {
            "s3:GetObject",
            "s3:ListBucket"
          },
          "Resource": "arn:aws:s3:::AccountABucketName/*"
        }`,
        `D.在帐户 B 中，将User_DataProcessor的权限设置为以下内容：
        {
          "Effect": "Allow",
          "Action": {
            "s3:GetObject",
            "s3:ListBucket"
          },
          "Resource": "arn:aws:s3:::AccountABucketName/*"
        }`,
        `E.在账号 B 中，将User_DataProcessor的权限设置为以下内容：
        {
          "Effect": "Allow",
          "Principal": {
            "AWS": "arn:aws:iam::AccountB:use/User_DataProcessor"
          },
          "Action": {
            "s3:GetObject",
            "s3:ListBucket"
          },
          "Resource": "arn:aws:s3:::AccountABucketName/*"
        }`
      ],
      "aa": "C,D",
      "qK": "User_DataProcessor",
      "aK": [
        "InAccount A, Principal",
        "InAccount B, no Principal"
      ]
    },
    {
      "no": 65,
      "q": "A company has an organization that has many AWS accounts in AWS Organizations. A solutions architect must improve how the company manages common security group rules for the AWS accounts in the organization.\nThe company has a common set of IP CIDR ranges in an allow list in each AWS account to allow access to and from the company's on-premises network.\nDevelopers within each account are responsible for adding new IP CIDR ranges to their security groups.The security team has its own AWS account.Currently, the security team notifies the owners of the other AWS accounts when changes are made to the allow list.\nThe solutions architect must design a solution that distributes the common set of CIDR ranges across all accounts.\nWhich solution meets these requirements with the LEAST amount of operational overhead?",
      "a": [
        "A.Set up an Amazon Simple Notification Service (Amazon SNS) topic in the security team's AWS account. Deploy an AWS Lambda function in each AWS account. Configure the Lambda function to run every time an SNS topic receives a message. Configure the Lambda function to take an IP address as input and add it to a list of security groups in the account. Instruct the security team to distribute changes by publishing messages to its SNS topic.",
        "B.Create new customer - managed prefix lists in each AWS account within the organization.Populate the prefix lists in each account with all internal CIDR ranges.Notify the owner of each AWS account to allow the new customer - managed prefix list IDs in their accounts in their security groups.Instruct the security team to share updates with each AWS account owner.",
        "C.Create a new customer - managed prefix list in the security team's AWS account. Populate the customer-managed prefix list with all internal CIDR ranges. Share the customer-managed prefix list with the organization by using AWS Resource Access Manager. Notify the owner of each AWS account to allow the new customer-managed prefix list ID in their security groups.",
        "D.Create an IAM role in each account in the organization.Grant permissions to update security groups.Deploy an AWS Lambda function in the security team's AWS account. Configure the Lambda function to take a list of internal IP addresses as input, assume a role in each organization account, and add the list of IP addresses to the security groups in each account."
      ],
      "q_cn": "一家公司的组织在 AWS 组织中拥有许多 AWS 账户。解决方案架构师必须改进公司管理组织中 AWS 账户的常见安全组规则的方式。\n该公司在每个 AWS 账户的允许列表中都有一组通用的 IP CIDR 范围，以允许访问公司的本地网络。\n每个账户中的开发人员负责将新的 IP CIDR 范围添加到其安全组。安全团队拥有自己的 AWS 账户。目前，安全团队会在对允许列表进行更改时通知其他 AWS 账户的所有者。\n      解决方案架构师必须设计一个解决方案，在所有账户中分配一组通用的 CIDR 范围。\n哪种解决方案以最少的运营开销满足这些要求？",
      "a_cn": [
        "A.在安全团队的 AWS 账户中设置 Amazon Simple Notification Service （Amazon SNS） 主题。在每个 AWS 账户中部署一个 AWS Lambda 函数。将 Lambda 函数配置为在每次 SNS 主题收到消息时运行。将 Lambda 函数配置为将 IP 地址作为输入，并将其添加到账户中的安全组列表中。指示安全团队通过将消息发布到其 SNS 主题来分发更改。",
        "B.在组织内的每个 AWS 账户中创建新的客户管理的前缀列表。使用所有内部 CIDR 范围填充每个账户中的前缀列表。通知每个 AWS 账户的所有者允许其安全组中账户中的新客户管理的前缀列表 ID。指示安全团队与每个 AWS 账户所有者共享更新。",
        "C.在安全团队的 AWS 账户中创建新的客户 - 托管前缀列表。使用所有内部 CIDR 范围填充客户管理的前缀列表。使用 AWS 资源访问管理器与组织共享客户管理的前缀列表。通知每个 AWS 账户的拥有者允许在其安全组中使用新的客户管理的前缀列表 ID。",
        "D.在组织中的每个账户中创建一个 IAM 角色。授予更新安全组的权限。在安全团队的 AWS 账户中部署 AWS Lambda 函数。将 Lambda 函数配置为将内部 IP 地址列表作为输入，在每个组织账户中代入一个角色，并将 IP 地址列表添加到每个账户中的安全组。"
      ],
      "aa": "C",
      "qK": "IP CIDR",
      "aK": ["customer - managed,security team's[ AWS Account]"]
    },
    {
      "no": 66,
      "q": "A company has developed a web application. The company is hosting the application on a group of Amazon EC2 instances behind an Application Load Balancer.\nThe company wants to improve the security posture of the application and plans to use AWS WAF web ACLs.The solution must not adversely affect legitimate traffic to the application.\nHow should a solutions architect configure the web ACLs to meet these requirements?",
      "a": [
        "A.Set the action of the web ACL rules to Count. Enable AWS WAF logging. Analyze the requests for false positives. Modify the rules to avoid any false positive. Over time, change the action of the web ACL rules from Count to Block.",
        "B.Use only rate - based rules in the web ACLs, and set the throttle limit as high as possible.Temporarily block all requests that exceed the limit.Define nested rules to narrow the scope of the rate tracking.",
        "C.Set the action of the web ACL rules to Block.Use only AWS managed rule groups in the web ACLs.Evaluate the rule groups by using Amazon CloudWatch metrics with AWS WAF sampled requests or AWS WAF logs.",
        "D.Use only custom rule groups in the web ACLs, and set the action to Allow.Enable AWS WAF logging.Analyze the requests for false positives.Modify the rules to avoid any false positive.Over time, change the action of the web ACL rules from Allow to Block."
      ],
      "q_cn": "一家公司开发了一个 Web 应用程序。该公司在应用程序负载均衡器后面的一组 Amazon EC2 实例上托管应用程序。\n该公司希望改善应用程序的安全状况，并计划使用 AWS WAF Web ACL。解决方案不得对应用程序的合法流量产生负面影响。\n      解决方案架构师应如何配置 Web ACL 以满足这些要求？",
      "a_cn": [
        "A. 将 Web ACL 规则的操作设置为计数。启用 AWS WAF 日志记录。分析误报请求。修改规则以避免任何误报。随着时间的推移，将 Web ACL 规则的操作从计数更改为阻止。",
        "B.在 Web ACL 中仅使用基于速率的规则，并将限制设置得尽可能高。暂时阻止超出限制的所有请求。定义嵌套规则以缩小费率跟踪的范围。",
        "C.将 Web ACL 规则的操作设置为“阻止”。在 Web ACL 中仅使用 AWS 托管规则组。通过将 Amazon CloudWatch 指标与 AWS WAF 采样请求或 AWS WAF 日志结合使用来评估规则组。",
        "D.仅使用 Web ACL 中的自定义规则组，并将操作设置为允许。启用 AWS WAF 日志记录。分析误报请求。修改规则以避免任何误报。随着时间的推移，将 Web ACL 规则的操作从“允许”更改为“阻止”。"
      ],
      "aa": "A",
      "qK": "WAF web ACLs",
      "aK": ["[Set],Count,[WAF logging]"]
    },
    {
      "no": 69,
      "q": "A company is building an electronic document management system in which users upload their documents. The application stack is entirely serverless and runs on AWS in the eu-central-1 Region. The system includes a web application that uses an Amazon CloudFront distribution for delivery with Amazon S3 as the origin.\nThe web application communicates with Amazon API Gateway Regional endpoints.The API Gateway APIs call AWS Lambda functions that store metadata in an Amazon Aurora Serverless database and put the documents into an S3 bucket.\nThe company is growing steadily and has completed a proof of concept with its largest customer.The company must improve latency outside of Europe.\nWhich combination of actions will meet these requirements?(Choose two.) ",
      "a": [
        "A.Enable S3 Transfer Acceleration on the S3 bucket. Ensure that the web application uses the Transfer Acceleration signed URLs.",
        "B.Create an accelerator in AWS Global Accelerator.Attach the accelerator to the CloudFront distribution.",
        "C.Change the API Gateway Regional endpoints to edge - optimized endpoints.",
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
        "[API Gateway],edge - optimized endpoints"
      ]
    },
    {
      "no": 72,
      "q": "A company manages multiple AWS accounts by using AWS Organizations. Under the root OU, the company has two OUs: Research and DataOps.\nBecause of regulatory requirements, all resources that the company deploys in the organization must reside in the ap- northeast - 1 Region.Additionally, EC2 instances that the company deploys in the DataOps OU must use a predefined list of instance types.\nA solutions architect must implement a solution that applies these restrictions.The solution must maximize operational efficiency and must minimize ongoing maintenance.\nWhich combination of steps will meet these requirements ? (Choose two.) ",
      "a": [
        "A.Create an IAM role in one account under the DataOps OU. Use the ec2:InstanceType condition key in an inline policy on the role to restrict access to specific instance type.",
        "B.Create an IAM user in all accounts under the root OU.Use the aws: RequestedRegion condition key in an inline policy on each user to restrict access to all AWS Regions except ap - northeast - 1.",
        "C.Create an SCP.Use the aws: RequestedRegion condition key to restrict access to all AWS Regions except ap - northeast - 1. Apply the SCP to the root OU.",
        "D.Create an SCP.Use the ec2: Region condition key to restrict access to all AWS Regions except ap - northeast - 1. Apply the SCP to the root OU, the DataOps OU, and the Research OU.",
        "E.Create an SCP.Use the ec2: InstanceType condition key to restrict access to specific instance types.Apply the SCP to the DataOps OU."
      ],
      "q_cn": "一家公司使用 AWS 组织管理多个 AWS 账户。在根 OU 下，公司有两个 OU：研究和数据运营。\n由于法规要求，公司在组织中部署的所有资源都必须驻留在 ap - northeast - 1 区域中。此外，公司在 DataOps OU 中部署的 EC2 实例必须使用预定义的实例类型列表。\n解决方案架构师必须实现应用这些限制的解决方案。解决方案必须最大限度地提高运营效率，并且必须最大限度地减少日常维护。\n    哪些步骤组合将满足这些要求？（选择两个。",
      "a_cn": [
        "A. 在数据运营 OU 下的一个账户中创建 IAM 角色。在角色的内联策略中使用 ec2：InstanceType 条件键来限制对特定实例类型的访问。",
        "B.在根 OU 下的所有账户中创建 IAM 用户。在每个用户的内联策略中使用 aws：RequestRegion 条件键来限制对除 ap - northeast - 1 之外的所有 AWS 区域的访问。",
        "C.创建 SCP。使用 aws：RequestRegion 条件键限制对除 ap - northeast - 1 之外的所有 AWS 区域的访问。将 SCP 应用于根 OU。",
        "D.创建 SCP。使用 ec2：Region 条件键限制对除 ap - northeast - 1 之外的所有 AWS 区域的访问。将 SCP 应用于根 OU、DataOps OU 和 Research OU。",
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
        "A. 创建包含 S3 存储桶读取权限的存储桶策略。将存储桶策略的委托人设置为策略账户的账户 ID。",
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
        "strategy_reviewer,grant read permissions,[decrypt]"
      ]
    },
    {
      "no": 79,
      "q": "A company has introduced a new policy that allows employees to work remotely from their homes if they connect by using a VPN. The company is hosting internal applications with VPCs in multiple AWS accounts. Currently, the applications are accessible from the company's on-premises office network through an AWS Site- to-Site VPN connection. The VPC in the company's main AWS account has peering connections established with VPCs in other AWS accounts.\nA solutions architect must design a scalable AWS Client VPN solution for employees to use while they work from home.\nWhat is the MOST cost- effective solution that meets these requirements ? ",
      "a": [
        "A.Create a Client VPN endpoint in each AWS account. Configure required routing that allows access to internal applications.",
        "B.Create a Client VPN endpoint in the main AWS account.Configure required routing that allows access to internal applications.",
        "C.Create a Client VPN endpoint in the main AWS account.Provision a transit gateway that is connected to each AWS account.Configure required routing that allows access to internal applications.",
        "D.Create a Client VPN endpoint in the main AWS account.Establish connectivity between the Client VPN endpoint and the AWS Site - to - Site VPN."
      ],
      "q_cn": "一家公司推出了一项新政策，允许员工在使用 VPN 进行连接时在家中远程工作。该公司在多个 AWS 账户中托管具有 VPC 的内部应用程序。目前，可以通过 AWS 站点到站点 VPN 连接从公司的本地办公网络访问这些应用程序。公司主 AWS 账户中的 VPC 与其他 AWS 账户中的 VPC 建立了对等连接。\n解决方案架构师必须设计可扩展的 AWS 客户端 VPN 解决方案，供员工在家工作时使用。\n满足这些要求的最具成本效益的解决方案是什么？",
      "a_cn": [
        "A. 在每个 AWS 账户中创建一个客户端 VPN 终端节点。配置允许访问内部应用程序所需的路由。",
        "B.在主 AWS 账户中创建客户端 VPN 终端节点。配置允许访问内部应用程序所需的路由。",
        "C.在主 AWS 账户中创建客户端 VPN 终端节点。预置连接到每个 AWS 账户的中转网关。配置允许访问内部应用程序所需的路由。",
        "D.在主 AWS 账户中创建客户端 VPN 终端节点。在客户端 VPN 终端节点和 AWS 站点到站点 VPN 之间建立连接。"
      ],
      "aa": "B",
      "qK": "from their homes,VPN",
      "aK": ["main,routing that allows"]
    },
    {
      "no": 84,
      "q": "A company recently deployed an application on AWS. The application uses Amazon DynamoDB. The company measured the application load and configured the RCUs and WCUs on the DynamoDB table to match the expected peak load. The peak load occurs once a week for a 4-hour period and is double the average load. The application load is close to the average load for the rest of the week. The access pattern includes many more writes to the table than reads of the table.\nA solutions architect needs to implement a solution to minimize the cost of the table.\nWhich solution will meet these requirements?",
      "a": [
        "A.Use AWS Application Auto Scaling to increase capacity during the peak period. Purchase reserved RCUs and WCUs to match the average load.",
        "B.Configure on - demand capacity mode for the table.",
        "C.Configure DynamoDB Accelerator(DAX) in front of the table.Reduce the provisioned read capacity to match the new peak load on the table.",
        "D.Configure DynamoDB Accelerator(DAX) in front of the table.Configure on- demand capacity mode for the table."
      ],
      "q_cn": "一家公司最近在 AWS 上部署了一个应用程序。该应用程序使用 Amazon DynamoDB。该公司测量了应用程序负载，并在 DynamoDB 表上配置 RCU 和 WCU，以匹配预期的峰值负载。峰值负载每周发生一次，持续 4 小时，是平均负载的两倍。应用程序负载接近一周剩余时间的平均负载。访问模式包括对表的写入比对表的读取多得多。\n解决方案架构师需要实现解决方案以最大程度地降低表的成本。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A. 使用 AWS 应用程序 Auto Scaling 在高峰期增加容量。购买预留的 RCU 和 WCU 以匹配平均负载。",
        "B.为表配置按需容量模式。",
        "C.在表前面配置 DynamoDB 加速器 （DAX）。减少预置的读取容量以匹配表上的新峰值负载。",
        "D.在表前面配置 DynamoDB 加速器 （DAX）。为表配置按需容量模式。"
      ],
      "aa": "A",
      "qK": "DynamoDB,RCUs,WCUs,4-hour,double the average load",
      "aK": ["RCUs,WCUs"]
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
      "aK": ["an ALB,an Auto Scaling"]
    },
    {
      "no": 88,
      "q": "An application is using an Amazon RDS for MySQL Multi-AZ DB instance in the us-east-1 Region. After a failover test, the application lost the connections to the database and could not re-establish the connections. After a restart of the application, the application re-established the connections.\nA solutions architect must implement a solution so that the application can re- establish connections to the database without requiring a restart.\nWhich solution will meet these requirements ? ",
      "a": [
        "A.Create an Amazon Aurora MySQL Serverless v1 DB instance. Migrate the RDS DB instance to the Aurora Serverless v1 DB instance. Update the connection settings in the application to point to the Aurora reader endpoint.",
        "B.Create an RDS proxy.Configure the existing RDS endpoint as a target.Update the connection settings in the application to point to the RDS proxy endpoint.",
        "C.Create a two - node Amazon Aurora MySQL DB cluster.Migrate the RDS DB instance to the Aurora DB cluster.Create an RDS proxy.Configure the existing RDS endpoint as a target.Update the connection settings in the application to point to the RDS proxy endpoint.",
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
      "aK": ["B.Create an RDS proxy"]
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
        "[centralized account],IAM role that has the Lambda",
        "[other AWS accounts],[minimal permissions],centralized account's Lambda IAM role"
      ]
    },
    {
      "no": 96,
      "q": "A company is running an application in the AWS Cloud. The application collects and stores a large amount of unstructured data in an Amazon S3 bucket. The S3 bucket contains several terabytes of data and uses the S3 Standard storage class. The data increases in size by several gigabytes every day.\nThe company needs to query and analyze the data.The company does not access data that is more than 1 year old.However, the company must retain all the data indefinitely for compliance reasons.\nWhich solution will meet these requirements MOST cost- effectively ? ",
      "a": [
        "A.Use S3 Select to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.",
        "B.Use Amazon Redshift Spectrum to query the data.Create an S3 Lifecycle policy to transition data that is more than 1 year old 10 S3 Glacier Deep Archive.",
        "C.Use an AWS Glue Data Catalog and Amazon Athena to query the data.Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.",
        "D.Use Amazon Redshift Spectrum to query the data.Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Intelligent - Tiering."
      ],
      "q_cn": "一家公司在 AWS 云中运行应用程序。该应用程序在 Amazon S3 存储桶中收集和存储大量非结构化数据。S3 存储桶包含数 TB 的数据，并使用 S3 标准存储类。数据的大小每天增加几千兆字节。\n公司需要查询和分析数据。该公司不会访问超过 1 年的数据。但是，出于合规性原因，公司必须无限期保留所有数据。\n      哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "A. 使用 S3 选择查询数据。创建 S3 生命周期策略，将超过 1 年的数据转换为 S3 Glacier Deep Archive。",
        "B.使用 Amazon Redshift Spectrum 查询数据。创建 S3 生命周期策略以转换超过 1 年的数据 10 S3 冰川深度存档。",
        "C.使用 AWS Glue Data Catalog 和 Amazon Athena 查询数据。创建 S3 生命周期策略，将超过 1 年的数据转换为 S3 Glacier Deep Archive。",
        "D.使用 Amazon Redshift Spectrum 查询数据。创建 S3 生命周期策略，将超过 1 年的数据转换为 S3 智能分层。"
      ],
      "aa": "C",
      "qK": "unstructured data,S3,query and analyze,not access data that is more than 1 year old,must retain all the data",
      "aK": ["Glue Data Catalog, Athena to query"]
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
        "A. 创建 SCP 以设置固定的每月帐户使用限制。将 SCP 应用于开发人员帐户。",
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
      "no": 103,
      "q": "A company has a multi-tier web application that runs on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Auto Scaling group. The ALB and the Auto Scaling group are replicated in a backup AWS Region. The minimum value and the maximum value for the Auto Scaling group are set to zero. An Amazon RDS Multi-AZ DB instance stores the application's data. The DB instance has a read replica in the backup Region. The application presents an endpoint to end users by using an Amazon Route 53 record.\nThe company needs to reduce its RTO to less than 15 minutes by giving the application the ability to automatically fail over to the backup Region.The company does not have a large enough budget for an active- active strategy.\nWhat should a solutions architect recommend to meet these requirements ? ",
      "a": [
        "A.Reconfigure the application's Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region. Configure the CloudWatch alarm to invoke the Lambda function.",
        "B.Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values.Configure Route 53 with a health check that monitors the web application and sends an Amazon Simple Notification Service(Amazon SNS) notification to the Lambda function when the health check status is unhealthy.Update the application's Route 53 record with a failover policy that routes traffic to the ALB in the backup Region when a health check failure occurs.",
        "C.Configure the Auto Scaling group in the backup Region to have the same values as the Auto Scaling group in the primary Region.Reconfigure the application's Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Remove the read replica. Replace the read replica with a standalone RDS DB instance. Configure Cross-Region Replication between the RDS DB instances by using snapshots and Amazon S3.",
        "D.Configure an endpoint in AWS Global Accelerator with the two ALBs as equal weighted targets.Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values.Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region.Configure the CloudWatch alarm to invoke the Lambda function."
      ],
      "q_cn": "一家公司有一个多层 Web 应用程序，该应用程序在应用程序负载均衡器 （ALB） 后面的 Amazon EC2 实例队列上运行。实例位于弹性伸缩组中。ALB 和弹性伸缩组在备份 AWS 区域中复制。弹性伸缩组的最小值和最大值设置为零。Amazon RDS 多可用区数据库实例存储应用程序的数据。数据库实例在备份区域中具有只读副本。应用程序使用 Amazon Route 53 记录向最终用户提供终端节点。\n该公司需要通过使应用程序能够自动故障转移到备份区域，将其 RTO 减少到 15 分钟以内。该公司没有足够大的预算来实施主动 - 主动战略。\n解决方案架构师应该建议什么来满足这些要求？",
      "a_cn": [
        "A.使用基于延迟的路由策略重新配置应用程序的 Route 53 记录，该策略对两个 ALB 之间的流量进行负载均衡。在备份区域中创建一个 AWS Lambda 函数以提升只读副本并修改 Auto Scaling 组值。创建基于主要区域中 ALB 的HTTPCode_Target_5XX_Count指标的 Amazon CloudWatch 警报。配置 CloudWatch 警报以调用 Lambda 函数。",
        "B.在备份区域中创建 AWS Lambda 函数以提升只读副本并修改 Auto Scaling 组值。使用 Route 53 配置运行状况检查，以监控 Web 应用程序，并在运行状况检查状态为运行状况不佳时向 Lambda 函数发送 Amazon Simple Notification Service （Amazon SNS） 通知。使用故障转移策略更新应用程序的 Route 53 记录，该策略在发生运行状况检查失败时将流量路由到备份区域中的 ALB。",
        "C.将备份区域中的 Auto Scaling 组配置为与主区域中的 Auto Scaling 组具有相同的值。使用基于延迟的路由策略重新配置应用程序的 Route 53 记录，该策略可在两个 ALB 之间对流量进行负载均衡。删除只读副本。将只读副本替换为独立的 RDS 数据库实例。使用快照和 Amazon S3 在 RDS 数据库实例之间配置跨区域复制。",
        "D.在 AWS 全球加速器中配置终端节点，并将两个 ALB 作为相等加权的目标。在备份区域中创建一个 AWS Lambda 函数以提升只读副本并修改 Auto Scaling 组值。创建基于主要区域中 ALB 的HTTPCode_Target_5XX_Count指标的 Amazon CloudWatch 警报。配置 CloudWatch 警报以调用 Lambda 函数。"
      ],
      "aa": "B",
      "qK": "web,ALB,EC2,Auto Scaling,minimum value,maximum value,zero",
      "aK": ["SNS"]
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
        "D.从 AWS 提供的 ip - range json 文档中提取 CloudFront IP。更新 ALB 安全组入口以仅允许从云前 IP 进行访问"
      ],
      "aa": "C",
      "qK": "ALB,CloudFront,ECS,must,only,CloudFront",
      "aK": ["VPC[ interface endpoint]"]
    },
    {
      "no": 110,
      "q": "A company has its cloud infrastructure on AWS. A solutions architect needs to define the infrastructure as code. The infrastructure is currently deployed in one AWS Region.The company's business expansion plan includes deployments in multiple Regions across multiple AWS accounts.\nWhat should the solutions architect do to meet these requirements?",
      "a": [
        "A. Use AWS CloudFormation templates. Add IAM policies to control the various accounts. Deploy the templates across the multiple Regions.",
        "B.Use AWS Organizations.Deploy AWS CloudFormation templates from the management account.Use AWS Control Tower to manage deployments across accounts.",
        "C.Use AWS Organizations and AWS CloudFormation StackSets.Deploy a CloudFormation template from an account that has the necessary IAM permissions.",
        "D.Use nested stacks with AWS CloudFormation templates.Change the Region by using nested stacks."
      ],
      "q_cn": "一家公司在 AWS 上拥有其云基础设施。解决方案架构师需要将基础结构定义为代码。基础设施目前部署在一个AWS 区域。该公司的业务扩展计划包括在多个 AWS 账户的多个区域中进行部署。\n解决方案架构师应该做些什么来满足这些要求？",
      "a_cn": [
        "A. 使用 AWS CloudFormation 模板。添加 IAM 策略以控制各种账户。跨多个区域部署模板。",
        "B.使用 AWS 组织。从管理账户部署 AWS CloudFormation 模板。使用 AWS 控制塔跨账户管理部署。",
        "C.使用 AWS Organizations 和 AWS CloudFormation StackSets。从具有必要 IAM 权限的账户部署 CloudFormation 模板。",
        "D.将嵌套堆栈与 AWS CloudFormation 模板结合使用。使用嵌套堆栈更改区域。"
      ],
      "aa": "C",
      "qK": "as code,multiple Regions across multiple AWS accounts",
      "aK": ["CloudFormation StackSets"]
    },
    {
      "no": 112,
      "q": "A company has an organization in AWS Organizations that includes multiple AWS accounts. Each account has a single VPC.In an account named Shared Services, there is a transit gateway that is connected to a Direct Connect gateway that provides access to the company's on-premises network.The company configured AWS Resource Access Manager (AWS RAM) to share the transit gateway to all the accounts that are in the organization.The company has attached all the VPCs to the transit gateway to facilitate routing between each other.The company uses a DNS server for on-premises servers.There are a pair of DNS servers on premises and in the Shared Services account VPC.The company discovers that Amazon EC2 instances that the company starts within the VPCs are not able to resolve addresses in the private on-premises domain. Which soluton will allow EC2 instances in all VPCs to resolve on-premises addresses",
      "a": [
        "A.Define an Amazon Route 53 Resolver outbound endpoint for the on-premises domain in the Shared Services account VPC.Configure the outbound endpoint to use the IP addresses of the DNS servers for the on-premises domain.Configure a forwarder on the DNS servers to point to the internal DNS resolver of the VPC.",
        "B.Create an Amazon Route 53 private hosted zone for the on-premises domain in the Shared Services account VPC.Configure AWS Resource Access Manager (AWS RAM) to share the hosted zone to all accounts in the organization.Associate the Route 53 private hosted zone with each VPC.",
        "C.Define an Amazon Route 53 Resolver outbound endpoint for the on-premises domain in the Shared Services account VPC.Configure the outbound endpoint to use the IP addresses of the DNS servers for the on-premises domain.Configure AWS Resource Access Manager (AWS RAM) to share the Route 53 Resolver rule to all accounts in the organization.Associate the Route 53 Resolver rule with each VPC.",
        "D.Define an Amazon Route 53 Resolver inbound endpoint for the on-premises domain in the Shared Services account VPC.Configure the inbound endpoint to use the IP addresses of the DNS servers for the on-premises domain.Configure AWS Resource Access Manager (AWS RAM) to share the Route 53 Resolver rule to all accounts in the organization.Associate the Route 53 Resolver rule with each VPC."
      ],
      "q_cn": "一家公司在 AWS 组织中拥有一个包含多个 AWS 账户的组织。每个帐户都有一个 VPC.In 一个名为共享服务的帐户，有一个连接到直接连接网关的中转网关，该网关提供对公司本地网络的访问权限。该公司将 AWS 资源访问管理器 （AWS RAM） 配置为与组织中的所有账户共享中转网关。该公司已将所有VPC连接到中转网关，以方便彼此之间的路由。该公司将 DNS 服务器用于本地服务器。本地和共享服务账户 VPC 中有一对 DNS 服务器。该公司发现，该公司在 VPC 内启动的 Amazon EC2 实例无法解析私有本地域中的地址。哪个解决方案将允许所有 VPC 中的 EC2 实例解析本地地址",
      "a_cn": [
        "A.在共享服务账户 VPC 中为本地域定义 Amazon Route 53 解析程序出站终端节点。将出站终结点配置为使用本地域的 DNS 服务器的 IP 地址。在 DNS 服务器上配置转发器以指向 VPC 的内部 DNS 解析器。",
        "B.为共享服务账户 VPC 中的本地域创建 Amazon Route 53 私有托管区域。配置 AWS 资源访问管理器 （AWS RAM） 以将托管区域共享给组织中的所有账户。将 Route 53 私有托管区域与每个 VPC 关联。",
        "C.为共享服务账户 VPC 中的本地域定义 Amazon Route 53 解析程序出站终端节点。将出站终结点配置为使用本地域的 DNS 服务器的 IP 地址。配置 AWS 资源访问管理器 （AWS RAM） 以与组织中的所有账户共享 Route 53 解析程序规则。将 Route 53 解析程序规则与每个 VPC 关联。",
        "D.为共享服务账户 VPC 中的本地域定义 Amazon Route 53 解析程序入站终端节点。将入站终结点配置为使用本地域的 DNS 服务器的 IP 地址。配置 AWS 资源访问管理器 （AWS RAM） 以与组织中的所有账户共享 Route 53 解析程序规则。将 Route 53 解析程序规则与每个 VPC 关联。"
      ],
      "aa": "C",
      "qK": "Shared Services,transit gateway,Direct Connect gateway,on-premises,not able to resolve addresses in the private on-premises domain",
      "aK": ["outbound,RAM"]
    },
    {
      "no": 113,
      "q": "A company is running an application in the AWS Cloud. The company's security team must approve the creation of all new IAM users. When a new IAM user is created, all access for the user must be removed automatically. The security team must then receive a notification to approve the user. The company has a multi-Region AWS CloudTrail trail in the AWS account.\nWhich combination of steps will meet these requirements?(Choose three.) ",
      "a": [
        "A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule. Define a pattern with the detail-type value set to AWS API Call via CloudTrail and an eventName of CreateUser.",
        "B.Configure CloudTrail to send a notification for the CreateUser event to an Amazon Simple Notification Service(Amazon SNS) topic.",
        "C.Invoke a container that runs in Amazon Elastic Container Service(Amazon ECS) with AWS Fargate technology to remove access.",
        "D.Invoke an AWS Step Functions state machine to remove access.",
        "E.Use Amazon Simple Notification Service(Amazon SNS) to notify the security team.",
        "F.Use Amazon Pinpoint to notify the security team."
      ],
      "q_cn": "一家公司在 AWS 云中运行应用程序。公司的安全团队必须批准创建所有新的 IAM 用户。创建新的 IAM 用户时，必须自动删除该用户的所有访问权限。然后，安全团队必须收到批准用户的通知。该公司拥有多AWS 账户中的区域 AWS CloudTrail 跟踪。\n哪些步骤组合将满足这些要求？（选择三个。",
      "a_cn": [
        "A. 创建 Amazon EventBridge （Amazon CloudWatch Events） 规则。定义一个模式，将详细信息类型值设置为 AWS API 通过 CloudTrail 调用，并将 eventName 设置为 CreateUser。",
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
        "SNS,[security team]"
      ]
    },
    {
      "no": 115,
      "q": "A company is running a critical application that uses an Amazon RDS for MySQL database to store data. The RDS DB instance is deployed in Multi-AZ mode.\nA recent RDS database failover test caused a 40-second outage to the application.A solutions architect needs to design a solution to reduce the outage time to less than 20 seconds.\nWhich combination of steps should the solutions architect take to meet these requirements?(Choose three.) ",
      "a": [
        "A. Use Amazon ElastiCache for Memcached in front of the database",
        "B.Use Amazon ElastiCache for Redis in front of the database",
        "C.Use RDS Proxy in front of the database.",
        "D.Migrate the database to Amazon Aurora MySQL.",
        "E.Create an Amazon Aurora Replica.",
        "F.Create an RDS for MySQL read replica"
      ],
      "q_cn": "一家公司正在运行一个关键应用程序，该应用程序使用 Amazon RDS for MySQL 数据库来存储数据。RDS 实例以多可用区模式部署。\n最近的 RDS 数据库故障转移测试导致应用程序中断 40 秒。解决方案架构师需要设计一个解决方案，将中断时间缩短到不到 20 秒。\n解决方案架构师应采取哪些步骤组合来满足这些要求？（选择三个。",
      "a_cn": [
        "A. 在数据库前面使用 Amazon ElastiCache for Memcached",
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
      "no": 116,
      "q": "A company uses AWS Organizations for a multi-account setup in the AWS Cloud. The company uses AWS Control Tower for governance and uses AWS Transit Gateway for VPC connectivity across accounts.\nIn an AWS application account, the company's application team has deployed a web application that uses AWS Lambda and Amazon RDS. The company's database administrators have a separate DBA account and use the account to centrally manage all the databases across the organization.The database administrators use an Amazon EC2 instance that is deployed in the DBA account to access an RDS database that is deployed in the application account.\nThe application team has stored the database credentials as secrets in AWS Secrets Manager in the application account.The application team is manually sharing the secrets with the database administrators.The secrets are encrypted by the default AWS managed key for Secrets Manager in the application account.A solutions architect needs to implement a solution that gives the database administrators access to the database and eliminates the need to manually share the secrets.\nWhich solution will meet these requirements?",
      "a": [
        "A. Use AWS Resource Access Manager (AWS RAM) to share the secrets from the application account with the DBA account. In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the shared secrets. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.",
        "B.In the application account, create an IAM role that is named DBA - Secret.Grant the role the required permissions to access the secrets.In the DBA account, create an IAM role that is named DBA - Admin.Grant the DBA - Admin role the required permissions to assume the DBA - Secret role in the application account.Attach the DBA - Admin role to the EC2 instance for access to the cross- account secrets.",
        "C.In the DBA account, create an IAM role that is named DBA - Admin.Grant the role the required permissions to access the secrets and the default AWS managed key in the application account.In the application account, attach resource- based policies to the key to allow access from the DBA account.Attach the DBA - Admin role to the EC2 instance for access to the cross - account secrets.",
        "D.In the DBA account, create an IAM role that is named DBA - Admin.Grant the role the required permissions to access the secrets in the application account.Attach an SCP to the application account to allow access to the secrets from the DBA account.Attach the DBA - Admin role to the EC2 instance for access to the cross - account secrets."
      ],
      "q_cn": "一家公司使用 AWS Organizations 在 AWS 云中进行多账户设置。该公司使用 AWS Control Tower 进行治理，并使用 AWS Transit Gateway 进行跨账户的 VPC 连接。\n在 AWS 应用程序账户中，该公司的应用程序团队部署了一个使用 AWS Lambda 和 Amazon RDS 的 Web 应用程序。公司的数据库管理员有一个单独的 DBA 帐户，并使用该帐户集中管理整个组织中的所有数据库。数据库管理员使用部署在 DBA 账户中的 Amazon EC2 实例来访问部署在应用程序账户中的 RDS 数据库。\n应用程序团队已将数据库凭证作为密钥存储在应用程序账户的 AWS 密钥管理器中。应用程序团队正在与数据库管理员手动共享机密。密钥由应用程序账户中密钥管理器的默认 AWS 托管式密钥加密。解决方案架构师需要实现一个解决方案，使数据库管理员能够访问数据库，并且无需手动共享机密。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A. 使用 AWS Resource Access Manager （AWS RAM） 与 DBA 账户共享应用程序账户中的密钥。在 DBA 账户中，创建名为 DBA-Admin 的 IAM 角色。向角色授予访问共享密钥所需的权限。将 DBA-Admin 角色附加到 EC2 实例以访问跨账户密钥。",
        "B.在应用程序账户中，创建名为 DBA 密钥的 IAM 角色。向角色授予访问密钥所需的权限。在 DBA 账户中，创建名为 DBA - Admin 的 IAM 角色。授予 DBA 管理员角色在应用程序帐户中担任 DBA - Secret 角色所需的权限。将 DBA - Admin 角色附加到 EC2 实例以访问跨账户密钥。",
        "C.In DBA 账户，创建名为 DBA - Admin.Admin 的 IAM 角色。向该角色授予访问应用程序账户中的密钥和默认 AWS 托管式密钥所需的权限。在应用程序帐户中，将基于资源的策略附加到密钥以允许从 DBA 帐户进行访问。将 DBA - 管理员角色附加到 EC2 实例，以访问跨账户密钥。",
        "D.In DBA 账户，创建名为 DBA - Admin.Admin.授予该角色访问应用程序账户中密钥所需的权限。将 SCP 附加到应用程序帐户以允许从 DBA 帐户访问机密。将 DBA - 管理员角色附加到 EC2 实例，以访问跨账户密钥。"
      ],
      "aa": "B",
      "qK": "DBA,Secrets Manager",
      "aK": ["DBA - Secret"]
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
      "aK": ["Customize,CCP"]
    },
    {
      "no": 120,
      "q": "A company consists or two separate business units. Each business unit has its own AWS account within a single organization in AWS Organizations. The business units regularly share sensitive documents with each other. To facilitate sharing, the company created an Amazon S3 bucket in each account and configured low-way replication between the S3 buckets. The S3 buckets have millions of objects.\nRecently, a security audit identified that neither S3 bucket has encryption at rest enabled.Company policy requires that all documents must be stored with encryption at rest.The company wants to implement server- side encryption with Amazon S3 managed encryption keys(SSE- S3).\nWhat is the MOST operationally efficient solution that meets these requirements ? ",
      "a": [
        "A.Turn on SSE-S3 on both S3 buckets. Use S3 Batch Operations to copy and encrypt the objects in the same location.",
        "B.Create an AWS Key Management Service(AWS KMS) key in each account.Turn on server - side encryption with AWS KMS keys(SSE- KMS) on each S3 bucket by using the corresponding KMS key in that AWS account.Encrypt the existing objects by using an S3 copy command in the AWS CLI.",
        "C.Turn on SSE - S3 on both S3 buckets.Encrypt the existing objects by using an S3 copy command in the AWS CLI.",
        "D.Create an AWS Key Management Service, (AWS KMS) key in each account.Turn on server - side encryption with AWS KMS keys(SSE- KMS) on each S3 bucket by using the corresponding KMS key in that AWS account.Use S3 Batch Operations to copy the objects into the same location."
      ],
      "q_cn": "公司由两个独立的业务部门组成。每个业务部门在 AWS 组织的单个组织中都有自己的 AWS 账户。业务部门定期相互共享敏感文档。为了便于共享，该公司在每个账户中创建了一个 Amazon S3 存储桶，并在 S3 存储桶之间配置了低路复制。S3 存储桶有数百万个对象。\n最近，一项安全审计发现，两个 S3 存储桶都没有启用静态加密。公司策略要求所有文档必须以静态加密存储。该公司希望使用 Amazon S3 托管加密密钥 （SSE- S3） 实施服务器端加密。\n    满足这些要求的最具运营效率的解决方案是什么？",
      "a_cn": [
        "A.在两个 S3 存储桶上打开 SSE-S3。使用 S3 分批操作复制和加密同一位置的对象。",
        "B.在每个账户中创建 AWS 密钥管理服务 （AWS KMS） 密钥。通过使用每个 AWS 账户中的相应 KMS 密钥，在每个 S3 存储桶上启用使用 AWS KMS 密钥 （SSE - KMS） 的服务器端加密。使用 AWS CLI 中的 S3 复制命令加密现有对象。",
        "C.在两个 S3 存储桶上打开 SSE - S3。使用 AWS CLI 中的 S3 复制命令加密现有对象。",
        "D.在每个账户中创建一个 AWS 密钥管理服务 （AWS KMS） 密钥。通过使用每个 AWS 账户中的相应 KMS 密钥，在每个 S3 存储桶上启用使用 AWS KMS 密钥 （SSE - KMS） 的服务器端加密。使用 S3 分批操作将对象复制到同一位置。"
      ],
      "aa": "A",
      "qK": "low-way replication,SSE- S3",
      "aK": ["SSE-S3,S3 Batch"]
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
      "no": 129,
      "q": "A company is hosting a critical application on a single Amazon EC2 instance. The application uses an Amazon ElastiCache for Redis single-node cluster for an in-memory data store. The application uses an Amazon RDS for MariaDB DB instance for a relational database. For the application to function, each piece of the infrastructure must be healthy and must be in an active state.\nA solutions architect needs to improve the application's architecture so that the infrastructure can automatically recover from failure with the least possible downtime.\nWhich combination of steps will meet these requirements?(Choose three.) ",
      "a": [
        "A. Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances. Ensure that the EC2 instances are part of an Auto Scaling group that has a minimum capacity of two instances.",
        "B.Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances.Ensure that the EC2 instances are configured in unlimited mode.",
        "C.Modify the DB instance to create a read replica in the same Availability Zone.Promote the read replica to be the primary DB instance in failure scenarios.",
        "D.Modify the DB instance to create a Multi - AZ deployment that extends across two Availability Zones.",
        "E.Create a replication group for the ElastiCache for Redis cluster.Configure the cluster to use an Auto Scaling group that has a minimum capacity of two instances.",
        "F.Create a replication group for the ElastiCache for Redis cluster.Enable Multi - AZ on the cluster"
      ],
      "q_cn": "一家公司在单个 Amazon EC2 实例上托管关键应用程序。该应用程序使用 Amazon ElastiCache for Redis 单节点集群作为内存数据存储。该应用程序将 Amazon RDS for MariaDB 数据库实例用于关系数据库。要使应用程序正常运行，基础结构的每个部分都必须正常运行，并且必须处于活动状态。\n解决方案架构师需要改进应用程序的体系结构，以便基础结构能够以尽可能少的停机时间自动从故障中恢复。\n哪些步骤组合将满足这些要求？（选择三个。",
      "a_cn": [
        "A. 使用弹性负载均衡器在多个 EC2 实例之间分配流量。确保 EC2 实例是最小容量为 2 个实例的 Auto Scaling 组的一部分。",
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
        "Multi - AZ",
        "Multi - AZ"
      ]
    },
    {
      "no": 130,
      "q": "A company has an environment that has a single AWS account. A solutions architect is reviewing the environment to recommend what the company could improve specifically in terms of access to the AWS Management Console. The company's IT support workers currently access the console for administrative tasks, authenticating with named IAM users that have been mapped to their job role.\nThe IT support workers no longer want to maintain both their Active Directory and IAM user accounts.They want to be able to access the console by using their existing Active Directory credentials.The solutions architect is using AWS IAM Identity Center (AWS Single Sign-On) to implement this functionality.\nWhich solution will meet these requirements MOST cost-effectively? ",
      "a": [
        "A. Create an organization in AWS Organizations.Turn on the IAM Identity Center feature in Organizations.Create and configure a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory. Configure AWS IAM Identity Center and set the AWS Managed Microsoft AD directory as the identity source. Create permission sets and map them to the existing groups within the AWS Managed Microsoft AD directory.",
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
      "aK": ["IAM Identity Center,AD Connector"]
    },
    {
      "no": 135,
      "q": "A company has registered 10 new domain names. The company uses the domains for online marketing. The company needs a solution that will redirect online visitors to a specific URL for each domain. All domains and target URLS are defined in a JSON document. All DNS records are managed by Amazon Route 53.\nA solutions architect must implement a redirect service that accepts HTTP and HTTPS requests.\nWhich combination of steps should the solutions architect take to meet these requirements with the LEAST amount of operational effort?(Choose three.) ",
      "a": [
        "A. Create a dynamic webpage that runs on an Amazon EC2 instance. Configure the webpage to use the JSON document in combination with the event message to look up and respond with a redirect URL.",
        "B.Create an Application Load Balancer that includes HTTP and HTTPS listeners.",
        "C.Create an AWS Lambda function that uses the JSON document in combination with the event message to look up and respond with a redirect URL.",
        "D.Use an Amazon API Gateway API with a custom domain to publish an AWS Lambda function.",
        "E.Create an Amazon CloudFront distribution.Deploy a Lambda@Edge function.",
        "F.Create an SSL certificate by using AWS Certificate Manager(ACM).Include the domains as Subject Alternative Names."
      ],
      "q_cn": "一家公司注册了 10 个新域名。该公司使用这些域进行在线营销。该公司需要一个解决方案，将在线访问者重定向到每个域的特定URL。所有域和目标 URL 都在 JSON 文档中定义。所有 DNS 记录均由 Amazon Route 53 管理。\n解决方案架构师必须实现接受 HTTP 和 HTTPS 请求的重定向服务。\n解决方案架构师应采取哪些步骤组合，以最少的运营工作量满足这些要求？（选择三个。",
      "a_cn": [
        "A. 创建在 Amazon EC2 实例上运行的动态网页。将网页配置为将 JSON 文档与事件消息结合使用，以查找并使用重定向 URL 进行响应。",
        "B.创建包含 HTTP 和 HTTPS 侦听器的应用程序负载均衡器。",
        "C.创建一个 AWS Lambda 函数，该函数将 JSON 文档与事件消息结合使用，以查找并使用重定向 URL 进行响应。",
        "D.将 Amazon API Gateway API 与自定义域结合使用，以发布 AWS Lambda 函数。",
        "E.创建 Amazon CloudFront 分配。部署Lambda@Edge函数。",
        "F.使用 AWS 证书管理器 （ACM） 创建 SSL 证书。将域作为主题备用名称包括在内。"
      ],
      "aa": "C,E,F",
      "qK": "10 new domain names",
      "aK": [
        "Lambda,JSON",
        "Lambda@Edge",
        "SSL,ACM"
      ]
    },
    {
      "no": 138,
      "q": "A company is running an application that uses an Amazon ElastiCache for Redis cluster as a caching layer. A recent security audit revealed that the company has configured encryption at rest for ElastiCache. However, the company did not configure ElastiCache to use encryption in transit. Additionally, users can access the cache without authentication.\nA solutions architect must make changes to require user authentication and to ensure that the company is using end-to-end encryption.\nWhich solution will meet these requirements ? ",
      "a": [
        "A. Create an AUTH token. Store the token in AWS System Manager Parameter Store, as an encrypted parameter. Create a new cluster with AUTH, and configure encryption in transit. Update the application to retrieve the AUTH token from Parameter Store when necessary and to use the AUTH token for authentication.",
        "B.Create an AUTH token.Store the token in AWS Secrets Manager.Configure the existing cluster to use the AUTH token, and configure encryption in transit.Update the application to retrieve the AUTH token from Secrets Manager when necessary and to use the AUTH token for authentication.",
        "C.Create an SSL certificate.Store the certificate in AWS Secrets Manager.Create a new cluster, and configure encryption in transit.Update the application to retrieve the SSL certificate from Secrets Manager when necessary and to use the certificate for authentication.",
        "D.Create an SSL certificate.Store the certificate in AWS Systems Manager Parameter Store, as an encrypted advanced parameter.Update the existing cluster to configure encryption in transit.Update the application to retrieve the SSL certificate from Parameter Store when necessary and to use the certificate for authentication."
      ],
      "q_cn": "一家公司正在运行一个应用程序，该应用程序使用 Amazon ElastiCache for Redis 集群作为缓存层。最近的安全审计显示，该公司已经为ElastiCache配置了静态加密。但是，该公司没有将ElastiCache配置为使用传输中加密。此外，用户无需身份验证即可访问缓存。\n解决方案架构师必须进行更改以要求用户身份验证并确保公司使用端到端加密。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A. 创建身份验证令牌。将令牌作为加密参数存储在 AWS 系统管理器参数存储中。使用 AUTH 创建新集群，并配置传输中加密。更新应用程序以在必要时从参数存储中检索 AUTH 令牌，并使用 AUTH 令牌进行身份验证。",
        "B.创建身份验证令牌。将令牌存储在 AWS 密钥管理器中。将现有群集配置为使用 AUTH 令牌，并配置传输中加密。更新应用程序以在必要时从机密管理器检索 AUTH 令牌，并使用 AUTH 令牌进行身份验证。",
        "C.创建 SSL 证书。将证书存储在 AWS 密钥管理器中。创建新群集，并配置传输中加密。更新应用程序以在必要时从机密管理器检索 SSL 证书，并使用该证书进行身份验证。",
        "D.创建 SSL 证书。将证书作为加密的高级参数存储在 AWS 系统管理器参数存储中。更新现有群集以配置传输中加密。更新应用程序以在必要时从参数存储中检索 SSL 证书，并使用证书进行身份验证。"
      ],
      "aa": "B",
      "qK": "ElastiCache for Redis,end-to-end encryption",
      "aK": ["AUTH token,Secrets Manager"]
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
      "aK": ["Amazon Connect,Pinpoint"]
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
      "aK": ["DMS,CDC"]
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
      "no": 148,
      "q": "A company wants to optimize AWS data-transfer costs and compute costs across developer accounts within the company's organization in AWS Organizations. Developers can configure VPCs and launch Amazon EC2 instances in a single AWS Region. The EC2 instances retrieve approximately 1 TB of data each day from Amazon S3.\nThe developer activity leads to excessive monthly data- transfer charges and NAT gateway processing charges between EC2 instances and S3 buckets, along with high compute costs.The company wants to proactively enforce approved architectural patterns for any EC2 instance and VPC infrastructure that developers deploy within the AWS accounts.The company does not want this enforcement to negatively affect the speed at which the developers can perform their tasks.\nWhich solution will meet these requirements MOST cost- effectively ? ",
      "a": [
        "A. Create SCPs to prevent developers from launching unapproved EC2 instance types. Provide the developers with an AWS CloudFormation template to deploy an approved VPC configuration with S3 interface endpoints. Scope the developers' IAM permissions so that the developers can launch VPC resources only with CloudFormation.",
        "B.Create a daily forecasted budget with AWS Budgets to monitor EC2 compute costs and S3 data- transfer costs across the developer accounts.When the forecasted cost is 75 % of the actual budget cost, send an alert to the developer teams.If the actual budget cost is 100 %, create a budget action to terminate the developers' EC2 instances and VPC infrastructure.",
        "C.Create an AWS Service Catalog portfolio that users can use to create an approved VPC configuration with S3 gateway endpoints and approved EC2 instances.Share the portfolio with the developer accounts.Configure an AWS Service Catalog launch constraint to use an approved IAM role.Scope the developers' IAM permissions to allow access only to AWS Service Catalog.",
        "D.Create and deploy AWS Config rules to monitor the compliance of EC2 and VPC resources in the developer AWS accounts.If developers launch unapproved EC2 instances or if developers create VPCs without S3 gateway endpoints, perform a remediation action to terminate the unapproved resources."
      ],
      "q_cn": "一家公司希望在 AWS 组织中优化公司组织内开发人员账户的 AWS 数据传输成本和计算成本。开发人员可以在单个 AWS 区域中配置 VPC 并启动 Amazon EC2 实例。EC2 实例每天从 Amazon S3 检索大约 1 TB 的数据。\n开发人员活动会导致 EC2 实例和 S3 存储桶之间的月度数据传输费用和 NAT 网关处理费用过高，以及高昂的计算成本。该公司希望为开发人员在 AWS 账户中部署的任何 EC2 实例和 VPC 基础设施主动实施批准的架构模式。该公司不希望这种实施对开发人员执行任务的速度产生负面影响。\n哪种解决方案最经济高效地满足这些要求？",
      "a_cn": [
        "A. 创建 SCP 以防止开发人员启动未经批准的 EC2 实例类型。为开发人员提供 AWS CloudFormation 模板，以部署具有 S3 接口终端节点的已批准的 VPC 配置。限定开发人员的 IAM 权限范围，以便开发人员只能使用 CloudFormation 启动 VPC 资源。",
        "B.使用 AWS 预算创建每日预测预算，以监控开发人员账户中的 EC2 计算成本和 S3 数据传输成本。当预测成本为实际预算成本的 75 % 时，向开发人员团队发送警报。如果实际预算成本为 100 %，请创建预算操作以终止开发人员的 EC2 实例和 VPC 基础设施。",
        "C.创建 AWS 服务目录产品组合，用户可以使用该产品组合创建具有 S3 网关终端节点和批准的 EC2 实例的已批准的 VPC 配置。与开发者帐号共享产品组合。配置 AWS 服务目录启动约束以使用批准的 IAM 角色。限定开发人员的 IAM 权限范围，以仅允许访问 AWS 服务目录。",
        "D.创建和部署 AWS Config 规则，以监控开发人员 AWS 账户中 EC2 和 VPC 资源的合规性。如果开发人员启动未经批准的 EC2 实例，或者开发人员创建的 VPC 没有 S3 网关终端节点，请执行修复操作以终止未批准的资源。"
      ],
      "aa": "C",
      "qK": "1 TB",
      "aK": ["AWS Service Catalog"]
    },
    {
      "no": 149,
      "q": "A company recently acquired several other companies. Each company has a separate AWS account with a different billing and reporting method. The acquiring company has consolidated all the accounts into one organization in AWS Organizations. However, the acquiring company has found it difficult to generate a cost report that contains meaningful groups for all the teams.\nThe acquiring company’s finance team needs a solution to report on costs for all the companies through a self- managed application.\nWhich solution will meet these requirements ? ",
      "a": [
        "A. Create an AWS Cost and Usage Report for the organization. Define tags and cost categories in the report. Create a table in Amazon Athena. Create an Amazon QuickSight dataset based on the Athena table. Share the dataset with the finance team.",
        "B.Create an AWS Cost and Usage Report for the organization.Define tags and cost categories in the report.Create a specialized template in AWS Cost Explorer that the finance department will use to build reports.",
        "C.Create an Amazon QuickSight dataset that receives spending information from the AWS Price List Query API.Share the dataset with the finance team.",
        "D.Use the AWS Price List Query API to collect account spending information.Create a specialized template in AWS Cost Explorer that the finance department will use to build reports."
      ],
      "q_cn": "一家公司最近收购了其他几家公司。每家公司都有一个单独的 AWS 账户，采用不同的账单和报告方法。收购公司已将所有账户合并到 AWS 组织中的一个组织中。但是，收购公司发现很难生成包含所有团队有意义的组的成本报表。\n收购公司的财务团队需要一个解决方案，通过自我管理的应用程序报告所有公司的成本。\n哪种解决方案可以满足这些要求？",
      "a_cn": [
        "A. 为组织创建 AWS 成本和使用情况报告。在报表中定义标记和成本类别。在亚马逊雅典娜中创建表。基于 Athena 表创建 Amazon QuickSight 数据集。与财务团队共享数据集。",
        "B.为组织创建 AWS 成本和使用情况报告。在报表中定义标记和成本类别。在 AWS 成本管理器中创建财务部门将用于构建报告的专用模板。",
        "C.创建一个 Amazon QuickSight 数据集，该数据集从 AWS 价目表查询 API 接收支出信息。与财务团队共享数据集。",
        "D.使用 AWS 价目表查询 API 收集账户支出信息。在 AWS 成本管理器中创建财务部门将用于构建报告的专用模板。"
      ],
      "aa": "A",
      "qK": "acquired several other companies",
      "aK": ["Athena,[QuickSight]"]
    },
    {
      "no": 150,
      "q": "A company wants to use AWS to create a business continuity solution in case the company's main on-premises application fails. The application runs on physical servers that also run other applications. The on-premises application that the company is planning to migrate uses a MySQL database as a data store. All the company's on-premises applications use operating systems that are compatible with Amazon EC2.\nWhich solution will achieve the company's goal with the LEAST operational overhead?",
      "a": [
        "A. Install the AWS Replication Agent on the source servers, including the MySQL servers. Set up replication for all servers. Launch test instances for regular drills. Cut over to the test instances to fail over the workload in the case of a failure event.",
        "B.Install the AWS Replication Agent on the source servers, including the MySQL servers.Initialize AWS Elastic Disaster Recovery in the target AWS Region.Define the launch settings.Frequently perform failover and fallback from the most recent point in time.",
        "C.Create AWS Database Migration Service(AWS DMS) replication servers and a target Amazon Aurora MySQL DB cluster to host the database.Create a DMS replication task to copy the existing data to the target DB cluster.Create a local AWS Schema Conversion Tool(AWS SCT) change data capture(CDC) task to keep the data synchronized.Install the rest of the software on EC2 instances by starting with a compatible base AMI.",
        "D.Deploy an AWS Storage Gateway Volume Gateway on premises.Mount volumes on all on- premises servers.Install the application and the MySQL database on the new volumes.Take regular snapshots.Install all the software on EC2 Instances by starting with a compatible base AMI.Launch a Volume Gateway on an EC2 instance.Restore the volumes from the latest snapshot.Mount the new volumes on the EC2 instances in the case of a failure event."
      ],
      "q_cn": "一家公司希望使用 AWS 创建业务连续性解决方案，以防该公司的主要本地应用程序出现故障。应用程序在也运行其他应用程序的物理服务器上运行。公司计划迁移的本地应用程序使用 MySQL 数据库作为数据存储。该公司的所有本地应用程序都使用与 Amazon EC2 兼容的操作系统。\n哪种解决方案能够以最少的运营开销实现公司的目标？",
      "a_cn": [
        "A. 在源服务器（包括 MySQL 服务器）上安装 AWS 复制代理。为所有服务器设置复制。启动测试实例以进行常规演练。切换到测试实例，以便在发生故障事件时故障转移工作负载。",
        "B.在源服务器（包括 MySQL 服务器）上安装 AWS 复制代理。在目标 AWS 区域中初始化 AWS 弹性灾难恢复。定义启动设置。经常从最近的时间点执行故障转移和回退。",
        "C.创建 AWS Database Migration Service （AWS DMS） 复制服务器和目标 Amazon Aurora MySQL 数据库集群来托管数据库。创建 DMS 复制任务以将现有数据复制到目标数据库集群。创建本地 AWS 架构转换工具 （AWS SCT） 更改数据捕获 （CDC） 任务以保持数据同步。从兼容的基本 AMI 开始，在 EC2 实例上安装其余软件。",
        "D.在本地部署 AWS 存储网关卷网关。在所有本地服务器上装载卷。在新卷上安装应用程序和 MySQL 数据库。定期拍摄快照。从兼容的基本 AMI 开始，在 EC2 实例上安装所有软件。在 EC2 实例上启动卷网关。从最新快照还原卷。在发生故障事件时在 EC2 实例上挂载新卷。"
      ],
      "aa": "C",
      "qK": "application runs on physical servers",
      "aK": ["DMS,SCT,CDC"]
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
      "aK": ["Optimizer,EventBridge"]
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
      "aK": ["SMS"]
    },
    {
      "no": 154,
      "q": "A company recently completed the migration from an on-premises data center to the AWS Cloud by using a replatforming strategy. One of the migrated servers is running a legacy Simple Mail Transfer Protocol (SMTP) service that a critical application relies upon. The application sends outbound email messages to the company’s customers. The legacy SMTP server does not support TLS encryption and uses TCP port 25. The application can use SMTP only.\nThe company decides to use Amazon Simple Email Service(Amazon SES) and to decommission the legacy SMTP server.The company has created and validated the SES domain.The company has lifted the SES limits.\nWhat should the company do to modify the application to send email messages from Amazon SES?",
      "a": [
        "A.Configure the application to connect to Amazon SES by using TLS Wrapper. Create an IAM role that has ses:SendEmail and ses:SendRawEmail permissions. Attach the IAM role to an Amazon EC2 instance.",
        "B.Configure the application to connect to Amazon SES by using STARTTLS.Obtain Amazon SES SMTP credentials.Use the credentials to authenticate with Amazon SES.",
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
      "aa": "C",
      "qK": "SMTP,SES",
      "aK": ["SES API"]
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
        "CloudFront",
        "WAF"
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
        "Recovery"
      ]
    },
    {
      "no": 158,
      "q": "A company is building a serverless application that runs on an AWS Lambda function that is attached to a VPC. The company needs to integrate the application with a new service from an external provider. The external provider supports only requests that come from public IPv4 addresses that are in an allow list.\nThe company must provide a single public IP address to the external provider before the application can start using the new service.\nWhich solution will give the application the ability to access the new service ? ",
      "a": [
        "A. Deploy a NAT gateway. Associate an Elastic IP address with the NAT gateway. Configure the VPC to use the NAT gateway.",
        "B.Deploy an egress - only internet gateway.Associate an Elastic IP address with the egress- only internet gateway.Configure the elastic network interface on the Lambda function to use the egress - only internet gateway.",
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
      "aK": ["NAT gateway"]
    },
    {
      "no": 159,
      "q": "A solutions architect wants to cost-optimize and appropriately size Amazon EC2 instances in a single AWS account. The solutions architect wants to ensure that the instances are optimized based on CPU, memory, and network metrics.\nWhich combination of steps should the solutions architect take to meet these requirements?(Choose two.) ",
      "a": [
        "A. Purchase AWS Business Support or AWS Enterprise Support for the account.",
        "B.Turn on AWS Trusted Advisor and review any “Low Utilization Amazon EC2 Instances” recommendations.",
        "C.Install the Amazon CloudWatch agent and configure memory metric collection on the EC2 instances.",
        "D.Configure AWS Compute Optimizer in the AWS account to receive findings and optimization recommendations.",
        "E.Create an EC2 Instance Savings Plan for the AWS Regions, instance families, and operating systems of interest."
      ],
      "q_cn": "解决方案架构师希望在单个 AWS 账户中对 Amazon EC2 实例进行成本优化并适当调整其大小。解决方案架构师希望确保根据 CPU、内存和网络指标优化实例。\n解决方案架构师应采取哪些步骤组合来满足这些要求？（选择两个。",
      "a_cn": [
        "A. 为账户购买 AWS 业务支持或 AWS 企业支持。",
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
      "no": 203,
      "q": "A solutions architect needs to define a reference architectlure for a solution for three-tier applications with web, application, and NoSQL data layers. The reference architecture must meet the folowing reduirements:-  High availability within an AWS Region - Able to fail over in 1 minute to another AWS Region for disaster recovery - Provide the most efficient solution while minimizing the impact on the user experience Which combination of steps will meet these requirements? (Choose three.)",
      "a": [
        "A. Use an Amazon Route 53 weighted routing policy set to 100/0 across the two selected Regions. Set Time to Live (TTL) to 1 hour.",
        "B. Use an Amazon Route 53 failover routing policy for failover from the primary Region to the disaster recovery Region. Set Time to Live (TTL) to 30 seconds.",
        "C. Use a global table within Amazon DynamoDB so data can be accessed in the two selected Regions.",
        "D. Back up data from an Amazon DynamoDB table in the primary Region every 60 minutes and then write the data to Amazon S3. Use S3 cross-Region replication to copy the data from the primary Region to the disaster recovery Region. Have a script import the data into DynamoDB in a disaster recovery scenario. ",
        "E. Implement a hot standby model using Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use zonal Reserved Instances for the minimum number of servers and On-Demand Instances for any additional resources.",
        "F. Use Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use Spot Instances for the required resources."
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
      "aa": "B,C,E",
      "qK": [
        "1 minute"
      ],
      "aK": [
        "30 seconds",
        "global table",
        "hot standby model"
      ]
    },
    {
      "no": 209,
      "q": "A company has a data lake in Amazon S3 that needs to be accessed by hundreds of applications across many AWS accounts. The company's information security policy states that the S3 bucket must not be accessed over the public internet and that each application should have the minimum permissions necessary to function.To meet these requirements, a solutions architect plans to use an S3 access point that is restricted to specific VPCs for each application.Which combination of steps should the solutions architect take to implement this solution? (Choose two.)",
      "a": [
        "A. Create an S3 access point for each application in the AWS account that owns the S3 bucket. Configure each access point to be accessible only from the application's VPC. Update the bucket policy to require access from an access point",
        "B. Create an interface endpoint for Amazon S3 in each application's VPC. Configure the endpoint policy to allow access to an S3 access point. Create a VPC gateway attachment for the S3 endpoint",
        "C. Create a gateway endpoint for Amazon S3 in each application's VPC. Configure the endpoint policy to allow access to an S3 access point. Specify the route table that is used to access the access point.",
        "D. Create an S3 access point for each application in each AWS account and attach the access points to the S3 bucket. Configure each access point to be accessible only from the application's VPC. Update the bucket policy to require access from an access point.",
        "E. Create a gateway endpoint for Amazon S3 in the data lake's VPC. Attach an endpoint policy to allow access to the S3 bucket. Specify the route table that is used to access the bucket"
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
      "aa": "A,C",
      "qK": [
        "data lake",
        "specific VPCs"
      ],
      "aK": [
        "owns",
        "gateway endpoint|application's VPC"
      ]
    },
    {
      "no": 213,
      "q": "A company has an application that runs on Amazon EC2 instances in an Amazon EC2 Auto Scaling group. The company uses AWS CodePipeline to deploy the application. The instances that run in the Auto Scaling group are constantly changing because of scaling events.When the company deploys new application code versions, the company installs the AWS CodeDeploy agent on any new target EC2 instances and associates the instances with the CodeDeploy deployment group. The application is set to go live within the next 24 hours.What should a solutions architect recommend to automate the application deployment process with the LEAST amount of operational overhead?",
      "a": [
        "A. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function when a new EC2 instance is launched into the Auto Scaling group. Code the Lambda function to associate the EC2 instances with the CodeDeploy deployment group.",
        "B. Write a script to suspend Amazon EC2 Auto Scaling operations before the deployment of new code. When the deployment is complete, create a new AMI and configure the Auto Scaling group's launch template to use the new AMI for new launches. Resume Amazon EC2 Auto Scaling operations.",
        "C. Create a new AWS CodeBuild project that creates a new AMI that contains the new code. Configure CodeBuild to update the Auto Scaling group's launch template to the new AMI. Run an Amazon EC2 Auto Scaling instance refresh operation.",
        "D. Create a new AMI that has the CodeDeploy agent installed. Configure the Auto Scaling group's launch template to use the new AMI. Associate the CodeDeploy deployment group with the Auto Scaling group instead of the EC2 instances."
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
      "aa": "D",
      "qK": [
        "CodePipeline",
        "24 hours"
      ],
      "aK": ["CodeDeploy agent"]
    },
    {
      "no": 235,
      "q": "An environmental company is deploying sensors in major cities throughout a country to measure air quality. The sensors connect to AWS IoT Core to ingest timeseries data readings. The company stores the data in Amazon DynamoDB.For business continuity, the company must have the ability to ingest and store data in two AWS Regions.Which solution will meet these requirements?",
      "a": [
        "A. Create an Amazon Route 53 alias failover routing policy with values for AWS IoT Core data endpoints in both Regions Migrate data to Amazon Aurora global tables.",
        "B. Create a domain configuration for AWS IoT Core in each Region. Create an Amazon Route 53 latency-based routing policy. Use AWS IoT Core data endpoints in both Regions as values. Migrate the data to Amazon MemoryDB for Redis and configure cross-Region replication.",
        "C. Create a domain configuration for AWS IoT Core in each Region. Create an Amazon Route 53 health check that evaluates domain configuration health. Create a failover routing policy with values for the domain name from the AWS IoT Core domain configurations. Update the DynamoDB table to a global table.",
        "D. Create an Amazon Route 53 latency-based routing policy. Use AWS IoT Core data endpoints in both Regions as values. Configure DynamoDB streams and cross-Region data replication."
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
      "aa": "D",
      "examtopics": "C",
      "qK": [
        "air quality",
        "IoT Core",
        "timeseries data"
      ],
      "aK": ["streams"]
    },
    {
      "no": 242,
      "q": "A company is designing a new website that hosts static content. The website will give users the ability to upload and download large files. According to company requirements, all data must be encrypted in transit and at rest. A solutions architect is building the solution by using Amazon S3 and Amazon CloudFront.Which combination of steps will meet the encryption requirements? (Choose three.)",
      "a": [
        "A. Turn on S3 server-side encryption for the S3 bucket that the web application uses.",
        "B. Add a policy attribute of \"aws:SecureTransport\": \"true\" for read and write operations in the S3 ACLs.",
        "C. Create a bucket policy that denies any unencrypted operations in the S3 bucket that the web application uses.",
        "D. Configure encryption at rest on CloudFront by using server-side encryption with AWS KMS keys (SSE-KMS).",
        "E. Configure redirection of HTTP requests to HTTPS requests in CloudFront.",
        "F. Use the RequireSSL option in the creation of presigned URLs for the S3 bucket that the web application uses."
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
      "aa": "A,D,E",
      "qK": [
        "upload and download",
        "encrypted in transit and at rest"
      ],
      "aK": [
        "server-side",
        "server-side",
        "HTTPS"
      ]
    },
    {
      "no": 243,
      "q": "A company is running a critical stateful web application on two Linux Amazon EC2 instances behind an Application Load Balancer (ALB) with an Amazon RDS for MySQL database. The company hosts the DNS records for the application in Amazon Route 53. A solutions architect must recommend a solution to improve the resiliency of the application.The solution must meet the following objectives: • Application tier: RPO of 2 minutes. RTO of 30 minutes. • Database tier: RPO of 5 minutes. RTO of 30 minutes.The company does not want to make significant changes to the existing application architecture. The company must ensure optimal latency after a failover.Which solution will meet these requirements?",
      "a": [
        "A. Configure the EC2 instances to use AWS Elastic Disaster Recovery. Create a cross-Region read replica for the RDS DB instance. Create an ALB in a second AWS Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs. Update DNS records to point to the Global Accelerator endpoint.",
        "B. Configure the EC2 instances to use Amazon Data Lifecycle Manager (Amazon DLM) to take snapshots of the EBS volumes. Configure RDS automated backups. Configure backup replication to a second AWS Region. Create an ALB in the second Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs. Update DNS records to point to the Global Accelerator endpoint.",
        "C. Create a backup plan in AWS Backup for the EC2 instances and RDS DB instance. Configure backup replication to a second AWS Region. Create an ALB in the second Region. Configure an Amazon CloudFront distribution in front of the ALB. Update DNS records to point to CloudFront.",
        "D. Configure the EC2 instances to use Amazon Data Lifecycle Manager (Amazon DLM) to take snapshots of the EBS volumes. Create a cross-Region read replica for the RDS DB instance. Create an ALB in a second AWS Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs."
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
      "aa": "D",
      "qK": [
        "RPO of 2 minutes",
        "RTO of 30 minutes"
      ],
      "aK": [
        "DLM",
        "cross-Region"
      ]
    },
    {
      "no": 252,
      "q": "A solutions architect has implemented a SAML 2.0 federated identity solution with their company’s on-premises identity provider (IdP) to authenticate users’ access to the AWS environment. When the solutions architect tests authentication through the federated identity web portal, access to the AWS environment is granted. However, when test users attempt to authenticate through the federated identity web portal, they are not able to access the AWS environment.Which items should the solutions architect check to ensure identity federation is properly configured? (Choose three.)",
      "a": [
        "A. The IAM user’s permissions policy has allowed the use of SAML federation for that user.",
        "B. The IAM roles created for the federated users’ or federated groups’ trust policy have set the SAML provider as the principal.",
        "C. Test users are not in the AWSFederatedUsers group in the company’s IdR.",
        "D. The web portal calls the AWS STS AssumeRoleWithSAML API with the ARN of the SAML provider, the ARN of the IAM role, and the SAML assertion from IdR.",
        "E. The on-premises IdP’s DNS hostname is reachable from the AWS environment VPCs.",
        "F. The company’s IdP defines SAML assertions that properly map users or groups in the company to IAM roles with appropriate permissions."
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
      "aa": "B,D,F",
      "qK": [
        "SAML 2.0",
        "(IdP)"
      ],
      "aK": [
        "SAML principal",
        "STS SAML",
        "SAML map"
      ]
    },
    {
      "no": 257,
      "q": "A solutions architect has an operational workload deployed on Amazon EC2 instances in an Auto Scaling group. The VPC architecture spans two Availability Zones (AZ) with a subnet in each that the Auto Scaling group is targeting. The VPC is connected to an on-premises environment and connectivity cannot be interrupted. The maximum size of the Auto Scaling group is 20 instances in service. The VPC IPv4 addressing is as follows: VPC CIDR: 10.0.0.0/23 - AZ1 subnet CIDR: 10.0.0.0/24 - AZ2 subnet CIDR: 10.0.1.0/24 - Since deployment, a third AZ has become available in the Region. The solutions architect wants to adopt the new AZ without adding additional IPv4 address space and without service downtime.Which solution will meet these requirements?",
      "a": [
        "A. Update the Auto Scaling group to use the AZ2 subnet only. Delete and re-create the AZ1 subnet using half the previous address space. Adjust the Auto Scaling group to also use the new AZ1 subnet. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Remove the current AZ2 subnet. Create a new AZ2 subnet using the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.",
        "B. Terminate the EC2 instances in the AZ1 subnet. Delete and re-create the AZ1 subnet using half the address space. Update the Auto Scaling group to use this new subnet. Repeat this for the second AZ. Define a new subnet in AZ3, then update the Auto Scaling group to target all three new subnets.",
        "C. Create a new VPC with the same IPv4 address space and define three subnets, with one for each AZ. Update the existing Auto Scaling group to target the new subnets in the new VPC.",
        "D. Update the Auto Scaling group to use the AZ2 subnet only. Update the AZ1 subnet to have the previous address space. Adjust the Auto Scaling group to also use the AZ1 subnet again. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Update the current AZ2 subnet and assign the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets."
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
      "qK": [
        "10.0.0.0/23",
        "AZ1 10.0.0.0/24",
        "AZ2 10.0.1.0/24"
      ],
      "aK": [
        "AZ2 subnet only",
        "Delete and re-create the AZ1"
      ]
    }
  ]
};