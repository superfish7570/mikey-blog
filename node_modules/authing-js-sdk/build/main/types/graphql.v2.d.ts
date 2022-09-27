export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: any;
}> = {
    [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** Arbitrary object */
    Object: any;
};
export declare type Query = {
    isActionAllowed: Scalars['Boolean'];
    isActionDenied: Scalars['Boolean'];
    authorizedTargets?: Maybe<PaginatedAuthorizedTargets>;
    qiniuUptoken?: Maybe<Scalars['String']>;
    isDomainAvaliable?: Maybe<Scalars['Boolean']>;
    /** 获取社会化登录定义 */
    socialConnection?: Maybe<SocialConnection>;
    /** 获取所有社会化登录定义 */
    socialConnections: Array<SocialConnection>;
    /** 获取当前用户池的社会化登录配置 */
    socialConnectionInstance: SocialConnectionInstance;
    /** 获取当前用户池的所有社会化登录配置 */
    socialConnectionInstances: Array<SocialConnectionInstance>;
    emailTemplates: Array<EmailTemplate>;
    previewEmail: Scalars['String'];
    /** 获取函数模版 */
    templateCode: Scalars['String'];
    function?: Maybe<Function>;
    functions: PaginatedFunctions;
    group?: Maybe<Group>;
    groups: PaginatedGroups;
    /** 查询 MFA 信息 */
    queryMfa?: Maybe<Mfa>;
    nodeById?: Maybe<Node>;
    /** 通过 code 查询节点 */
    nodeByCode?: Maybe<Node>;
    /** 查询组织机构详情 */
    org: Org;
    /** 查询用户池组织机构列表 */
    orgs: PaginatedOrgs;
    /** 查询子节点列表 */
    childrenNodes: Array<Node>;
    rootNode: Node;
    isRootNode?: Maybe<Scalars['Boolean']>;
    searchNodes: Array<Node>;
    checkPasswordStrength: CheckPasswordStrengthResult;
    policy?: Maybe<Policy>;
    policies: PaginatedPolicies;
    policyAssignments: PaginatedPolicyAssignments;
    /** 获取一个对象被授权的资源列表 */
    authorizedResources?: Maybe<PaginatedAuthorizedResources>;
    /** 通过 **code** 查询角色详情 */
    role?: Maybe<Role>;
    /** 获取角色列表 */
    roles: PaginatedRoles;
    /** 查询某个实体定义的自定义数据 */
    udv: Array<UserDefinedData>;
    /** 查询用户池定义的自定义字段 */
    udf: Array<UserDefinedField>;
    /** 批量查询多个对象的自定义数据 */
    udfValueBatch: Array<UserDefinedDataMap>;
    user?: Maybe<User>;
    userBatch: Array<User>;
    users: PaginatedUsers;
    /** 已归档的用户列表 */
    archivedUsers: PaginatedUsers;
    searchUser: PaginatedUsers;
    checkLoginStatus?: Maybe<JwtTokenStatus>;
    isUserExists?: Maybe<Scalars['Boolean']>;
    findUser?: Maybe<User>;
    checkPassword?: Maybe<CheckPasswordResult>;
    /** 查询用户池详情 */
    userpool: UserPool;
    /** 查询用户池列表 */
    userpools: PaginatedUserpool;
    userpoolTypes: Array<UserPoolType>;
    /** 获取 accessToken ，如 SDK 初始化 */
    accessToken: AccessTokenRes;
    /** 用户池注册白名单列表 */
    whitelist: Array<WhiteList>;
};
export declare type QueryIsActionAllowedArgs = {
    resource: Scalars['String'];
    action: Scalars['String'];
    userId: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
};
export declare type QueryIsActionDeniedArgs = {
    resource: Scalars['String'];
    action: Scalars['String'];
    userId: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
};
export declare type QueryAuthorizedTargetsArgs = {
    namespace: Scalars['String'];
    resourceType: ResourceType;
    resource: Scalars['String'];
    targetType?: Maybe<PolicyAssignmentTargetType>;
    actions?: Maybe<AuthorizedTargetsActionsInput>;
};
export declare type QueryQiniuUptokenArgs = {
    type?: Maybe<Scalars['String']>;
};
export declare type QueryIsDomainAvaliableArgs = {
    domain: Scalars['String'];
};
export declare type QuerySocialConnectionArgs = {
    provider: Scalars['String'];
};
export declare type QuerySocialConnectionInstanceArgs = {
    provider: Scalars['String'];
};
export declare type QueryPreviewEmailArgs = {
    type: EmailTemplateType;
};
export declare type QueryFunctionArgs = {
    id?: Maybe<Scalars['String']>;
};
export declare type QueryFunctionsArgs = {
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
};
export declare type QueryGroupArgs = {
    code: Scalars['String'];
};
export declare type QueryGroupsArgs = {
    userId?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
};
export declare type QueryQueryMfaArgs = {
    id?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['String']>;
    userPoolId?: Maybe<Scalars['String']>;
};
export declare type QueryNodeByIdArgs = {
    id: Scalars['String'];
};
export declare type QueryNodeByCodeArgs = {
    orgId: Scalars['String'];
    code: Scalars['String'];
};
export declare type QueryOrgArgs = {
    id: Scalars['String'];
};
export declare type QueryOrgsArgs = {
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
};
export declare type QueryChildrenNodesArgs = {
    orgId?: Maybe<Scalars['String']>;
    nodeId: Scalars['String'];
};
export declare type QueryRootNodeArgs = {
    orgId: Scalars['String'];
};
export declare type QueryIsRootNodeArgs = {
    nodeId: Scalars['String'];
    orgId: Scalars['String'];
};
export declare type QuerySearchNodesArgs = {
    keyword: Scalars['String'];
};
export declare type QueryCheckPasswordStrengthArgs = {
    password: Scalars['String'];
};
export declare type QueryPolicyArgs = {
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
};
export declare type QueryPoliciesArgs = {
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    namespace?: Maybe<Scalars['String']>;
    excludeDefault?: Maybe<Scalars['Boolean']>;
};
export declare type QueryPolicyAssignmentsArgs = {
    namespace?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    targetType?: Maybe<PolicyAssignmentTargetType>;
    targetIdentifier?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};
export declare type QueryAuthorizedResourcesArgs = {
    targetType?: Maybe<PolicyAssignmentTargetType>;
    targetIdentifier?: Maybe<Scalars['String']>;
    namespace?: Maybe<Scalars['String']>;
    resourceType?: Maybe<Scalars['String']>;
};
export declare type QueryRoleArgs = {
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
};
export declare type QueryRolesArgs = {
    namespace?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
};
export declare type QueryUdvArgs = {
    targetType: UdfTargetType;
    targetId: Scalars['String'];
};
export declare type QueryUdfArgs = {
    targetType: UdfTargetType;
};
export declare type QueryUdfValueBatchArgs = {
    targetType: UdfTargetType;
    targetIds: Array<Maybe<Scalars['String']>>;
};
export declare type QueryUserArgs = {
    id?: Maybe<Scalars['String']>;
};
export declare type QueryUserBatchArgs = {
    ids: Array<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};
export declare type QueryUsersArgs = {
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
    excludeUsersInOrg?: Maybe<Scalars['Boolean']>;
};
export declare type QueryArchivedUsersArgs = {
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};
export declare type QuerySearchUserArgs = {
    query: Scalars['String'];
    fields?: Maybe<Array<Maybe<Scalars['String']>>>;
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    departmentOpts?: Maybe<Array<Maybe<SearchUserDepartmentOpt>>>;
    groupOpts?: Maybe<Array<Maybe<SearchUserGroupOpt>>>;
    roleOpts?: Maybe<Array<Maybe<SearchUserRoleOpt>>>;
};
export declare type QueryCheckLoginStatusArgs = {
    token?: Maybe<Scalars['String']>;
};
export declare type QueryIsUserExistsArgs = {
    email?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
    externalId?: Maybe<Scalars['String']>;
};
export declare type QueryFindUserArgs = {
    email?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
    externalId?: Maybe<Scalars['String']>;
    identity?: Maybe<FindUserByIdentityInput>;
};
export declare type QueryCheckPasswordArgs = {
    password?: Maybe<Scalars['String']>;
};
export declare type QueryUserpoolsArgs = {
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
};
export declare type QueryAccessTokenArgs = {
    userPoolId: Scalars['String'];
    secret: Scalars['String'];
};
export declare type QueryWhitelistArgs = {
    type: WhitelistType;
};
export declare enum ResourceType {
    Data = "DATA",
    Api = "API",
    Menu = "MENU",
    Ui = "UI",
    Button = "BUTTON"
}
export declare enum PolicyAssignmentTargetType {
    User = "USER",
    Role = "ROLE",
    Group = "GROUP",
    Org = "ORG",
    AkSk = "AK_SK"
}
export declare type AuthorizedTargetsActionsInput = {
    op: Operator;
    list: Array<Maybe<Scalars['String']>>;
};
export declare enum Operator {
    And = "AND",
    Or = "OR"
}
export declare type PaginatedAuthorizedTargets = {
    list?: Maybe<Array<Maybe<ResourcePermissionAssignment>>>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type ResourcePermissionAssignment = {
    targetType?: Maybe<PolicyAssignmentTargetType>;
    targetIdentifier?: Maybe<Scalars['String']>;
    actions?: Maybe<Array<Scalars['String']>>;
};
export declare type SocialConnection = {
    /** 社会化登录服务商唯一标志 */
    provider: Scalars['String'];
    /** 名称 */
    name: Scalars['String'];
    /** logo */
    logo: Scalars['String'];
    /** 描述信息 */
    description?: Maybe<Scalars['String']>;
    /** 表单字段 */
    fields?: Maybe<Array<SocialConnectionField>>;
};
export declare type SocialConnectionField = {
    key?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    placeholder?: Maybe<Scalars['String']>;
    children?: Maybe<Array<Maybe<SocialConnectionField>>>;
};
export declare type SocialConnectionInstance = {
    provider: Scalars['String'];
    enabled: Scalars['Boolean'];
    fields?: Maybe<Array<Maybe<SocialConnectionInstanceField>>>;
};
export declare type SocialConnectionInstanceField = {
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare type EmailTemplate = {
    /** 邮件模版类型 */
    type: EmailTemplateType;
    /** 模版名称 */
    name: Scalars['String'];
    /** 邮件主题 */
    subject: Scalars['String'];
    /** 显示的邮件发送人 */
    sender: Scalars['String'];
    /** 邮件模版内容 */
    content: Scalars['String'];
    /** 重定向链接，操作成功后，用户将被重定向到此 URL。 */
    redirectTo?: Maybe<Scalars['String']>;
    hasURL?: Maybe<Scalars['Boolean']>;
    /** 验证码过期时间（单位为秒） */
    expiresIn?: Maybe<Scalars['Int']>;
    /** 是否开启（自定义模版） */
    enabled?: Maybe<Scalars['Boolean']>;
    /** 是否是系统默认模版 */
    isSystem?: Maybe<Scalars['Boolean']>;
};
export declare enum EmailTemplateType {
    /** 重置密码确认 */
    ResetPassword = "RESET_PASSWORD",
    /** 重置密码通知 */
    PasswordResetedNotification = "PASSWORD_RESETED_NOTIFICATION",
    /** 修改密码验证码 */
    ChangePassword = "CHANGE_PASSWORD",
    /** 注册欢迎邮件 */
    Welcome = "WELCOME",
    /** 验证邮箱 */
    VerifyEmail = "VERIFY_EMAIL",
    /** 修改绑定邮箱 */
    ChangeEmail = "CHANGE_EMAIL"
}
/** 函数 */
export declare type Function = {
    /** ID */
    id: Scalars['String'];
    /** 函数名称 */
    name: Scalars['String'];
    /** 源代码 */
    sourceCode: Scalars['String'];
    /** 描述信息 */
    description?: Maybe<Scalars['String']>;
    /** 云函数链接 */
    url?: Maybe<Scalars['String']>;
};
export declare enum SortByEnum {
    /** 按照创建时间降序（后创建的在前面） */
    CreatedatDesc = "CREATEDAT_DESC",
    /** 按照创建时间升序（先创建的在前面） */
    CreatedatAsc = "CREATEDAT_ASC",
    /** 按照更新时间降序（最近更新的在前面） */
    UpdatedatDesc = "UPDATEDAT_DESC",
    /** 按照更新时间升序（最近更新的在后面） */
    UpdatedatAsc = "UPDATEDAT_ASC"
}
export declare type PaginatedFunctions = {
    list: Array<Function>;
    totalCount: Scalars['Int'];
};
export declare type Group = {
    /** 唯一标志 code */
    code: Scalars['String'];
    /** 名称 */
    name: Scalars['String'];
    /** 描述 */
    description?: Maybe<Scalars['String']>;
    /** 创建时间 */
    createdAt?: Maybe<Scalars['String']>;
    /** 修改时间 */
    updatedAt?: Maybe<Scalars['String']>;
    /** 包含的用户列表 */
    users: PaginatedUsers;
    /** 被授权访问的所有资源 */
    authorizedResources?: Maybe<PaginatedAuthorizedResources>;
};
export declare type GroupUsersArgs = {
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};
export declare type GroupAuthorizedResourcesArgs = {
    namespace?: Maybe<Scalars['String']>;
    resourceType?: Maybe<Scalars['String']>;
};
export declare type PaginatedUsers = {
    totalCount: Scalars['Int'];
    list: Array<User>;
};
export declare type User = {
    /** 用户 ID */
    id: Scalars['String'];
    arn: Scalars['String'];
    /** 用户在组织机构中的状态 */
    status?: Maybe<UserStatus>;
    /** 用户池 ID */
    userPoolId: Scalars['String'];
    /** 用户名，用户池内唯一 */
    username?: Maybe<Scalars['String']>;
    /** 邮箱，用户池内唯一 */
    email?: Maybe<Scalars['String']>;
    /** 邮箱是否已验证 */
    emailVerified?: Maybe<Scalars['Boolean']>;
    /** 手机号，用户池内唯一 */
    phone?: Maybe<Scalars['String']>;
    /** 手机号是否已验证 */
    phoneVerified?: Maybe<Scalars['Boolean']>;
    unionid?: Maybe<Scalars['String']>;
    openid?: Maybe<Scalars['String']>;
    /** 用户的身份信息 */
    identities?: Maybe<Array<Maybe<Identity>>>;
    /** 昵称，该字段不唯一。 */
    nickname?: Maybe<Scalars['String']>;
    /** 注册方式 */
    registerSource?: Maybe<Array<Scalars['String']>>;
    /** 头像链接，默认为 https://usercontents.authing.cn/authing-avatar.png */
    photo?: Maybe<Scalars['String']>;
    /** 用户密码，数据库使用密钥加 salt 进行加密，非原文密码。 */
    password?: Maybe<Scalars['String']>;
    /** 用户社会化登录第三方身份提供商返回的原始用户信息，非社会化登录方式注册的用户此字段为空。 */
    oauth?: Maybe<Scalars['String']>;
    /** 用户登录凭证，开发者可以在后端检验该 token 的合法性，从而验证用户身份。详细文档请见：[验证 Token](https://docs.authing.co/advanced/verify-jwt-token.html) */
    token?: Maybe<Scalars['String']>;
    /** token 过期时间 */
    tokenExpiredAt?: Maybe<Scalars['String']>;
    /** 用户登录总次数 */
    loginsCount?: Maybe<Scalars['Int']>;
    /** 用户最近一次登录时间 */
    lastLogin?: Maybe<Scalars['String']>;
    /** 用户上一次登录时使用的 IP */
    lastIP?: Maybe<Scalars['String']>;
    /** 用户注册时间 */
    signedUp?: Maybe<Scalars['String']>;
    /** 该账号是否被禁用 */
    blocked?: Maybe<Scalars['Boolean']>;
    /** 账号是否被软删除 */
    isDeleted?: Maybe<Scalars['Boolean']>;
    device?: Maybe<Scalars['String']>;
    browser?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    givenName?: Maybe<Scalars['String']>;
    familyName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    profile?: Maybe<Scalars['String']>;
    preferredUsername?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
    gender?: Maybe<Scalars['String']>;
    birthdate?: Maybe<Scalars['String']>;
    zoneinfo?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    formatted?: Maybe<Scalars['String']>;
    streetAddress?: Maybe<Scalars['String']>;
    locality?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    /** 授权的角色列表 */
    roles?: Maybe<PaginatedRoles>;
    /** 用户所在的分组列表 */
    groups?: Maybe<PaginatedGroups>;
    /** 用户所在的部门列表 */
    departments?: Maybe<PaginatedDepartments>;
    /** 被授权访问的所有资源 */
    authorizedResources?: Maybe<PaginatedAuthorizedResources>;
    /** 用户外部 ID */
    externalId?: Maybe<Scalars['String']>;
    /** 用户自定义数据 */
    customData?: Maybe<Array<Maybe<UserCustomData>>>;
    phoneCountryCode?: Maybe<Scalars['String']>;
    /** 用户设置的主部门信息 */
    mainDepartmentId?: Maybe<Scalars['String']>;
    mainDepartmentCode?: Maybe<Scalars['String']>;
    /** 表示是否为新创建的用户 */
    newlyCreated?: Maybe<Scalars['Boolean']>;
};
export declare type UserRolesArgs = {
    namespace?: Maybe<Scalars['String']>;
};
export declare type UserDepartmentsArgs = {
    orgId?: Maybe<Scalars['String']>;
};
export declare type UserAuthorizedResourcesArgs = {
    namespace?: Maybe<Scalars['String']>;
    resourceType?: Maybe<Scalars['String']>;
};
export declare enum UserStatus {
    /** 已停用 */
    Suspended = "Suspended",
    /** 已离职 */
    Resigned = "Resigned",
    /** 已激活（正常状态） */
    Activated = "Activated",
    /** 已归档 */
    Archived = "Archived"
}
export declare type Identity = {
    openid?: Maybe<Scalars['String']>;
    userIdInIdp?: Maybe<Scalars['String']>;
    userInfoInIdp?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['String']>;
    connectionId?: Maybe<Scalars['String']>;
    isSocial?: Maybe<Scalars['Boolean']>;
    provider?: Maybe<Scalars['String']>;
    userPoolId?: Maybe<Scalars['String']>;
    refreshToken?: Maybe<Scalars['String']>;
    accessToken?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    extIdpId?: Maybe<Scalars['String']>;
};
export declare type PaginatedRoles = {
    totalCount: Scalars['Int'];
    list: Array<Role>;
};
export declare type Role = {
    id: Scalars['String'];
    /** 权限组 code */
    namespace: Scalars['String'];
    /** 唯一标志 code */
    code: Scalars['String'];
    /** 资源描述符 arn */
    arn: Scalars['String'];
    /** 角色描述 */
    description?: Maybe<Scalars['String']>;
    /** 是否为系统内建，系统内建的角色不能删除 */
    isSystem?: Maybe<Scalars['Boolean']>;
    /** 创建时间 */
    createdAt?: Maybe<Scalars['String']>;
    /** 修改时间 */
    updatedAt?: Maybe<Scalars['String']>;
    /** 被授予此角色的用户列表 */
    users: PaginatedUsers;
    /** 被授权访问的所有资源 */
    authorizedResources?: Maybe<PaginatedAuthorizedResources>;
    /** 父角色 */
    parent?: Maybe<Role>;
};
export declare type RoleUsersArgs = {
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};
export declare type RoleAuthorizedResourcesArgs = {
    resourceType?: Maybe<Scalars['String']>;
};
export declare type PaginatedAuthorizedResources = {
    totalCount: Scalars['Int'];
    list: Array<AuthorizedResource>;
};
export declare type AuthorizedResource = {
    code: Scalars['String'];
    type?: Maybe<ResourceType>;
    actions?: Maybe<Array<Scalars['String']>>;
    apiIdentifier?: Maybe<Scalars['String']>;
};
export declare type PaginatedGroups = {
    totalCount: Scalars['Int'];
    list: Array<Group>;
};
export declare type PaginatedDepartments = {
    list: Array<UserDepartment>;
    totalCount: Scalars['Int'];
};
export declare type UserDepartment = {
    department: Node;
    /** 是否为主部门 */
    isMainDepartment: Scalars['Boolean'];
    /** 加入该部门的时间 */
    joinedAt?: Maybe<Scalars['String']>;
};
export declare type Node = {
    id: Scalars['String'];
    /** 组织机构 ID */
    orgId?: Maybe<Scalars['String']>;
    /** 节点名称 */
    name: Scalars['String'];
    /** 多语言名称，**key** 为标准 **i18n** 语言编码，**value** 为对应语言的名称。 */
    nameI18n?: Maybe<Scalars['String']>;
    /** 描述信息 */
    description?: Maybe<Scalars['String']>;
    /** 多语言描述信息 */
    descriptionI18n?: Maybe<Scalars['String']>;
    /** 在父节点中的次序值。**order** 值大的排序靠前。有效的值范围是[0, 2^32) */
    order?: Maybe<Scalars['Int']>;
    /** 节点唯一标志码，可以通过 code 进行搜索 */
    code?: Maybe<Scalars['String']>;
    /** 是否为根节点 */
    root?: Maybe<Scalars['Boolean']>;
    /** 距离父节点的深度（如果是查询整棵树，返回的 **depth** 为距离根节点的深度，如果是查询某个节点的子节点，返回的 **depth** 指的是距离该节点的深度。） */
    depth?: Maybe<Scalars['Int']>;
    path: Array<Scalars['String']>;
    codePath: Array<Maybe<Scalars['String']>>;
    namePath: Array<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    /** 该节点的子节点 **ID** 列表 */
    children?: Maybe<Array<Scalars['String']>>;
    /** 节点的用户列表 */
    users: PaginatedUsers;
    /** 授权的角色列表 */
    roles?: Maybe<PaginatedRoles>;
    /** 被授权访问的所有资源 */
    authorizedResources?: Maybe<PaginatedAuthorizedResources>;
};
export declare type NodeUsersArgs = {
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
    includeChildrenNodes?: Maybe<Scalars['Boolean']>;
};
export declare type NodeRolesArgs = {
    namespace?: Maybe<Scalars['String']>;
};
export declare type NodeAuthorizedResourcesArgs = {
    namespace?: Maybe<Scalars['String']>;
    resourceType?: Maybe<Scalars['String']>;
};
export declare type UserCustomData = {
    key: Scalars['String'];
    value?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    dataType: UdfDataType;
};
export declare enum UdfDataType {
    String = "STRING",
    Number = "NUMBER",
    Datetime = "DATETIME",
    Boolean = "BOOLEAN",
    Object = "OBJECT",
    Select = "SELECT"
}
export declare type Mfa = {
    /** MFA ID */
    id: Scalars['String'];
    /** 用户 ID */
    userId: Scalars['String'];
    /** 用户池 ID */
    userPoolId: Scalars['String'];
    /** 是否开启 MFA */
    enable: Scalars['Boolean'];
    /** 密钥 */
    secret?: Maybe<Scalars['String']>;
};
export declare type Org = {
    /** 组织机构 ID */
    id: Scalars['String'];
    /** 根节点 */
    rootNode: Node;
    /** 组织机构节点列表 */
    nodes: Array<Node>;
    /** 租户 ID */
    tenantId?: Maybe<Scalars['String']>;
};
export declare type PaginatedOrgs = {
    totalCount: Scalars['Int'];
    list: Array<Org>;
};
export declare type CheckPasswordStrengthResult = {
    valid: Scalars['Boolean'];
    message?: Maybe<Scalars['String']>;
};
export declare type Policy = {
    /** 权限组 code */
    namespace: Scalars['String'];
    code: Scalars['String'];
    isDefault: Scalars['Boolean'];
    description?: Maybe<Scalars['String']>;
    statements: Array<PolicyStatement>;
    createdAt?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    /** 被授权次数 */
    assignmentsCount: Scalars['Int'];
    /** 授权记录 */
    assignments: Array<PolicyAssignment>;
};
export declare type PolicyAssignmentsArgs = {
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    namespace?: Maybe<Scalars['String']>;
};
export declare type PolicyStatement = {
    resource: Scalars['String'];
    actions: Array<Scalars['String']>;
    effect?: Maybe<PolicyEffect>;
    condition?: Maybe<Array<PolicyStatementCondition>>;
};
export declare enum PolicyEffect {
    Allow = "ALLOW",
    Deny = "DENY"
}
export declare type PolicyStatementCondition = {
    param: Scalars['String'];
    operator: Scalars['String'];
    value: Scalars['Object'];
};
export declare type PolicyAssignment = {
    code: Scalars['String'];
    targetType: PolicyAssignmentTargetType;
    targetIdentifier: Scalars['String'];
};
export declare type PaginatedPolicies = {
    totalCount: Scalars['Int'];
    list: Array<Policy>;
};
export declare type PaginatedPolicyAssignments = {
    totalCount: Scalars['Int'];
    list: Array<PolicyAssignment>;
};
export declare enum UdfTargetType {
    Node = "NODE",
    Org = "ORG",
    User = "USER",
    Userpool = "USERPOOL",
    Role = "ROLE",
    Permission = "PERMISSION",
    Application = "APPLICATION"
}
export declare type UserDefinedData = {
    key: Scalars['String'];
    dataType: UdfDataType;
    value: Scalars['String'];
    label?: Maybe<Scalars['String']>;
};
export declare type UserDefinedField = {
    targetType: UdfTargetType;
    dataType: UdfDataType;
    key: Scalars['String'];
    label?: Maybe<Scalars['String']>;
    options?: Maybe<Scalars['String']>;
};
export declare type UserDefinedDataMap = {
    targetId: Scalars['String'];
    data: Array<UserDefinedData>;
};
export declare type SearchUserDepartmentOpt = {
    departmentId?: Maybe<Scalars['String']>;
    includeChildrenDepartments?: Maybe<Scalars['Boolean']>;
};
export declare type SearchUserGroupOpt = {
    code?: Maybe<Scalars['String']>;
};
export declare type SearchUserRoleOpt = {
    namespace?: Maybe<Scalars['String']>;
    code: Scalars['String'];
};
export declare type JwtTokenStatus = {
    code?: Maybe<Scalars['Int']>;
    message?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['Boolean']>;
    exp?: Maybe<Scalars['Int']>;
    iat?: Maybe<Scalars['Int']>;
    data?: Maybe<JwtTokenStatusDetail>;
};
export declare type JwtTokenStatusDetail = {
    id?: Maybe<Scalars['String']>;
    userPoolId?: Maybe<Scalars['String']>;
    arn?: Maybe<Scalars['String']>;
};
export declare type FindUserByIdentityInput = {
    identifier?: Maybe<Scalars['String']>;
    userIdInIdp?: Maybe<Scalars['String']>;
    isSocial?: Maybe<Scalars['Boolean']>;
    provider?: Maybe<Scalars['String']>;
};
export declare type CheckPasswordResult = {
    code: Scalars['Int'];
    message?: Maybe<Scalars['String']>;
};
export declare type UserPool = {
    id: Scalars['String'];
    name: Scalars['String'];
    domain: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    secret: Scalars['String'];
    jwtSecret: Scalars['String'];
    ownerId?: Maybe<Scalars['String']>;
    userpoolTypes?: Maybe<Array<UserPoolType>>;
    logo: Scalars['String'];
    createdAt?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    /** 用户邮箱是否验证（用户的 emailVerified 字段）默认值，默认为 false */
    emailVerifiedDefault: Scalars['Boolean'];
    /** 用户注册之后是否发送欢迎邮件 */
    sendWelcomeEmail: Scalars['Boolean'];
    /** 是否关闭注册 */
    registerDisabled: Scalars['Boolean'];
    /** @deprecated 是否开启用户池下应用间单点登录 */
    appSsoEnabled: Scalars['Boolean'];
    /**
     * 用户池禁止注册后，是否还显示微信小程序扫码登录。当 **showWXMPQRCode** 为 **true** 时，
     * 前端显示小程序码，此时只有以前允许注册时，扫码登录过的用户可以继续登录；新用户扫码无法登录。
     */
    showWxQRCodeWhenRegisterDisabled?: Maybe<Scalars['Boolean']>;
    /** 前端跨域请求白名单 */
    allowedOrigins?: Maybe<Scalars['String']>;
    /** 用户 **token** 有效时间，单位为秒，默认为 15 天。 */
    tokenExpiresAfter?: Maybe<Scalars['Int']>;
    /** 是否已删除 */
    isDeleted?: Maybe<Scalars['Boolean']>;
    /** 注册频繁检测 */
    frequentRegisterCheck?: Maybe<FrequentRegisterCheckConfig>;
    /** 登录失败检测 */
    loginFailCheck?: Maybe<LoginFailCheckConfig>;
    /** 密码重置策略 */
    passwordUpdatePolicy?: Maybe<PasswordUpdatePolicyConfig>;
    /** 登录失败检测 */
    loginPasswordFailCheck?: Maybe<LoginPasswordFailCheckConfig>;
    /** 密码安全策略 */
    loginFailStrategy?: Maybe<Scalars['String']>;
    /** 手机号修改策略 */
    changePhoneStrategy?: Maybe<ChangePhoneStrategy>;
    /** 邮箱修改策略 */
    changeEmailStrategy?: Maybe<ChangeEmailStrategy>;
    /** APP 扫码登录配置 */
    qrcodeLoginStrategy?: Maybe<QrcodeLoginStrategy>;
    /** APP 拉起小程序登录配置 */
    app2WxappLoginStrategy?: Maybe<App2WxappLoginStrategy>;
    /** 注册白名单配置 */
    whitelist?: Maybe<RegisterWhiteListConfig>;
    /** 自定义短信服务商配置 */
    customSMSProvider?: Maybe<CustomSmsProvider>;
    /** 用户池套餐类型 */
    packageType?: Maybe<Scalars['Int']>;
    /** 是否使用自定义数据库 CUSTOM_USER_STORE 模式 */
    useCustomUserStore?: Maybe<Scalars['Boolean']>;
    /** 是否要求邮箱必须验证才能登录（如果是通过邮箱登录的话） */
    loginRequireEmailVerified?: Maybe<Scalars['Boolean']>;
    /** 短信验证码长度 */
    verifyCodeLength?: Maybe<Scalars['Int']>;
    /** 验证码错误尝试次数 */
    verifyCodeMaxAttempts?: Maybe<Scalars['Int']>;
};
export declare type UserPoolType = {
    code?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['String']>;
    sdks?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export declare type FrequentRegisterCheckConfig = {
    timeInterval?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    enabled?: Maybe<Scalars['Boolean']>;
};
export declare type LoginFailCheckConfig = {
    timeInterval?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    enabled?: Maybe<Scalars['Boolean']>;
};
export declare type PasswordUpdatePolicyConfig = {
    enabled?: Maybe<Scalars['Boolean']>;
    forcedCycle?: Maybe<Scalars['Int']>;
    differenceCycle?: Maybe<Scalars['Int']>;
};
export declare type LoginPasswordFailCheckConfig = {
    timeInterval?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    enabled?: Maybe<Scalars['Boolean']>;
};
export declare type ChangePhoneStrategy = {
    verifyOldPhone?: Maybe<Scalars['Boolean']>;
};
export declare type ChangeEmailStrategy = {
    verifyOldEmail?: Maybe<Scalars['Boolean']>;
};
export declare type QrcodeLoginStrategy = {
    qrcodeExpiresAfter?: Maybe<Scalars['Int']>;
    returnFullUserInfo?: Maybe<Scalars['Boolean']>;
    allowExchangeUserInfoFromBrowser?: Maybe<Scalars['Boolean']>;
    ticketExpiresAfter?: Maybe<Scalars['Int']>;
};
export declare type App2WxappLoginStrategy = {
    ticketExpriresAfter?: Maybe<Scalars['Int']>;
    ticketExchangeUserInfoNeedSecret?: Maybe<Scalars['Boolean']>;
};
export declare type RegisterWhiteListConfig = {
    /** 是否开启手机号注册白名单 */
    phoneEnabled?: Maybe<Scalars['Boolean']>;
    /** 是否开启邮箱注册白名单 */
    emailEnabled?: Maybe<Scalars['Boolean']>;
    /** 是否开用户名注册白名单 */
    usernameEnabled?: Maybe<Scalars['Boolean']>;
};
export declare type CustomSmsProvider = {
    enabled?: Maybe<Scalars['Boolean']>;
    provider?: Maybe<Scalars['String']>;
    config?: Maybe<Scalars['String']>;
};
export declare type PaginatedUserpool = {
    totalCount: Scalars['Int'];
    list: Array<UserPool>;
};
export declare type AccessTokenRes = {
    accessToken?: Maybe<Scalars['String']>;
    exp?: Maybe<Scalars['Int']>;
    iat?: Maybe<Scalars['Int']>;
};
export declare enum WhitelistType {
    Username = "USERNAME",
    Email = "EMAIL",
    Phone = "PHONE"
}
export declare type WhiteList = {
    createdAt?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    value: Scalars['String'];
};
export declare type Mutation = {
    /** 允许操作某个资源 */
    allow: CommonMessage;
    /** 将一个（类）资源授权给用户、角色、分组、组织机构，且可以分别指定不同的操作权限。 */
    authorizeResource: CommonMessage;
    /** 配置社会化登录 */
    createSocialConnectionInstance: SocialConnectionInstance;
    /** 开启社会化登录 */
    enableSocialConnectionInstance: SocialConnectionInstance;
    /** 关闭社会化登录 */
    disableSocialConnectionInstance: SocialConnectionInstance;
    /** 设置用户在某个组织机构内所在的主部门 */
    setMainDepartment: CommonMessage;
    /** 配置自定义邮件模版 */
    configEmailTemplate: EmailTemplate;
    /** 启用自定义邮件模版 */
    enableEmailTemplate: EmailTemplate;
    /** 停用自定义邮件模版（将会使用系统默认邮件模版） */
    disableEmailTemplate: EmailTemplate;
    /** 发送邮件 */
    sendEmail: CommonMessage;
    /** 管理员发送首次登录验证邮件 */
    sendFirstLoginVerifyEmail: CommonMessage;
    /** 创建函数 */
    createFunction?: Maybe<Function>;
    /** 修改函数 */
    updateFunction: Function;
    deleteFunction: CommonMessage;
    addUserToGroup: CommonMessage;
    removeUserFromGroup: CommonMessage;
    /** 创建角色 */
    createGroup: Group;
    /** 修改角色 */
    updateGroup: Group;
    /** 批量删除角色 */
    deleteGroups: CommonMessage;
    loginByEmail?: Maybe<User>;
    loginByUsername?: Maybe<User>;
    loginByPhoneCode?: Maybe<User>;
    loginByPhonePassword?: Maybe<User>;
    /** 修改 MFA 信息 */
    changeMfa?: Maybe<Mfa>;
    /** 创建组织机构 */
    createOrg: Org;
    /** 删除组织机构 */
    deleteOrg: CommonMessage;
    /** 添加子节点 */
    addNode: Org;
    /** 添加子节点 */
    addNodeV2: Node;
    /** 修改节点 */
    updateNode: Node;
    /** 删除节点（会一并删掉子节点） */
    deleteNode: CommonMessage;
    /** （批量）将成员添加到节点中 */
    addMember: Node;
    /** （批量）将成员从节点中移除 */
    removeMember: Node;
    moveMembers?: Maybe<CommonMessage>;
    moveNode: Org;
    resetPassword?: Maybe<CommonMessage>;
    /** 通过首次登录的 Token 重置密码 */
    resetPasswordByFirstLoginToken?: Maybe<CommonMessage>;
    /** 通过密码强制更新临时 Token 修改密码 */
    resetPasswordByForceResetToken?: Maybe<CommonMessage>;
    createPolicy: Policy;
    updatePolicy: Policy;
    deletePolicy: CommonMessage;
    deletePolicies: CommonMessage;
    addPolicyAssignments: CommonMessage;
    /** 开启授权 */
    enablePolicyAssignment: CommonMessage;
    /** 开启授权 */
    disbalePolicyAssignment: CommonMessage;
    removePolicyAssignments: CommonMessage;
    registerByUsername?: Maybe<User>;
    registerByEmail?: Maybe<User>;
    registerByPhoneCode?: Maybe<User>;
    /** 创建角色 */
    createRole: Role;
    /** 修改角色 */
    updateRole: Role;
    /** 删除角色 */
    deleteRole: CommonMessage;
    /** 批量删除角色 */
    deleteRoles: CommonMessage;
    /** 给用户授权角色 */
    assignRole?: Maybe<CommonMessage>;
    /** 撤销角色 */
    revokeRole?: Maybe<CommonMessage>;
    /** 使用子账号登录 */
    loginBySubAccount: User;
    setUdf: UserDefinedField;
    removeUdf?: Maybe<CommonMessage>;
    setUdv?: Maybe<Array<UserDefinedData>>;
    setUdfValueBatch?: Maybe<CommonMessage>;
    removeUdv?: Maybe<Array<UserDefinedData>>;
    setUdvBatch?: Maybe<Array<UserDefinedData>>;
    refreshToken?: Maybe<RefreshToken>;
    /** 创建用户。此接口需要管理员权限，普通用户注册请使用 **register** 接口。 */
    createUser: User;
    /** 更新用户信息。 */
    updateUser: User;
    /** 修改用户密码，此接口需要验证原始密码，管理员直接修改请使用 **updateUser** 接口。 */
    updatePassword: User;
    /** 绑定手机号，调用此接口需要当前用户未绑定手机号 */
    bindPhone: User;
    /** 绑定邮箱 */
    bindEmail: User;
    /** 解绑定手机号，调用此接口需要当前用户已绑定手机号并且绑定了其他登录方式 */
    unbindPhone: User;
    /** 修改手机号。此接口需要验证手机号验证码，管理员直接修改请使用 **updateUser** 接口。 */
    updatePhone: User;
    /** 修改邮箱。此接口需要验证邮箱验证码，管理员直接修改请使用 updateUser 接口。 */
    updateEmail: User;
    /** 解绑定邮箱 */
    unbindEmail: User;
    /** 删除用户 */
    deleteUser?: Maybe<CommonMessage>;
    /** 批量删除用户 */
    deleteUsers?: Maybe<CommonMessage>;
    /** 创建用户池 */
    createUserpool: UserPool;
    updateUserpool: UserPool;
    refreshUserpoolSecret: Scalars['String'];
    deleteUserpool: CommonMessage;
    refreshAccessToken: RefreshAccessTokenRes;
    addWhitelist: Array<Maybe<WhiteList>>;
    removeWhitelist: Array<Maybe<WhiteList>>;
};
export declare type MutationAllowArgs = {
    resource: Scalars['String'];
    action: Scalars['String'];
    userId?: Maybe<Scalars['String']>;
    userIds?: Maybe<Array<Scalars['String']>>;
    roleCode?: Maybe<Scalars['String']>;
    roleCodes?: Maybe<Array<Scalars['String']>>;
    namespace?: Maybe<Scalars['String']>;
};
export declare type MutationAuthorizeResourceArgs = {
    namespace?: Maybe<Scalars['String']>;
    resourceType?: Maybe<ResourceType>;
    resource?: Maybe<Scalars['String']>;
    opts?: Maybe<Array<Maybe<AuthorizeResourceOpt>>>;
};
export declare type MutationCreateSocialConnectionInstanceArgs = {
    input: CreateSocialConnectionInstanceInput;
};
export declare type MutationEnableSocialConnectionInstanceArgs = {
    provider: Scalars['String'];
};
export declare type MutationDisableSocialConnectionInstanceArgs = {
    provider: Scalars['String'];
};
export declare type MutationSetMainDepartmentArgs = {
    userId: Scalars['String'];
    departmentId?: Maybe<Scalars['String']>;
};
export declare type MutationConfigEmailTemplateArgs = {
    input: ConfigEmailTemplateInput;
};
export declare type MutationEnableEmailTemplateArgs = {
    type: EmailTemplateType;
};
export declare type MutationDisableEmailTemplateArgs = {
    type: EmailTemplateType;
};
export declare type MutationSendEmailArgs = {
    email: Scalars['String'];
    scene: EmailScene;
};
export declare type MutationSendFirstLoginVerifyEmailArgs = {
    userId: Scalars['String'];
    appId: Scalars['String'];
};
export declare type MutationCreateFunctionArgs = {
    input: CreateFunctionInput;
};
export declare type MutationUpdateFunctionArgs = {
    input: UpdateFunctionInput;
};
export declare type MutationDeleteFunctionArgs = {
    id: Scalars['String'];
};
export declare type MutationAddUserToGroupArgs = {
    userIds: Array<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
};
export declare type MutationRemoveUserFromGroupArgs = {
    userIds: Array<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
};
export declare type MutationCreateGroupArgs = {
    code: Scalars['String'];
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateGroupArgs = {
    code: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    newCode?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteGroupsArgs = {
    codeList: Array<Scalars['String']>;
};
export declare type MutationLoginByEmailArgs = {
    input: LoginByEmailInput;
};
export declare type MutationLoginByUsernameArgs = {
    input: LoginByUsernameInput;
};
export declare type MutationLoginByPhoneCodeArgs = {
    input: LoginByPhoneCodeInput;
};
export declare type MutationLoginByPhonePasswordArgs = {
    input: LoginByPhonePasswordInput;
};
export declare type MutationChangeMfaArgs = {
    enable?: Maybe<Scalars['Boolean']>;
    id?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['String']>;
    userPoolId?: Maybe<Scalars['String']>;
    refresh?: Maybe<Scalars['Boolean']>;
};
export declare type MutationCreateOrgArgs = {
    name: Scalars['String'];
    code?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    tenantId?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteOrgArgs = {
    id: Scalars['String'];
};
export declare type MutationAddNodeArgs = {
    orgId: Scalars['String'];
    parentNodeId?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    nameI18n?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    descriptionI18n?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Int']>;
    code?: Maybe<Scalars['String']>;
};
export declare type MutationAddNodeV2Args = {
    orgId: Scalars['String'];
    parentNodeId?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    nameI18n?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    descriptionI18n?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Int']>;
    code?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateNodeArgs = {
    id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteNodeArgs = {
    orgId: Scalars['String'];
    nodeId: Scalars['String'];
};
export declare type MutationAddMemberArgs = {
    nodeId?: Maybe<Scalars['String']>;
    orgId?: Maybe<Scalars['String']>;
    nodeCode?: Maybe<Scalars['String']>;
    userIds: Array<Scalars['String']>;
    isLeader?: Maybe<Scalars['Boolean']>;
};
export declare type MutationRemoveMemberArgs = {
    nodeId?: Maybe<Scalars['String']>;
    orgId?: Maybe<Scalars['String']>;
    nodeCode?: Maybe<Scalars['String']>;
    userIds: Array<Scalars['String']>;
};
export declare type MutationMoveMembersArgs = {
    userIds: Array<Scalars['String']>;
    sourceNodeId: Scalars['String'];
    targetNodeId: Scalars['String'];
};
export declare type MutationMoveNodeArgs = {
    orgId: Scalars['String'];
    nodeId: Scalars['String'];
    targetParentId: Scalars['String'];
};
export declare type MutationResetPasswordArgs = {
    phone?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    code: Scalars['String'];
    newPassword: Scalars['String'];
    phoneCountryCode?: Maybe<Scalars['String']>;
};
export declare type MutationResetPasswordByFirstLoginTokenArgs = {
    token: Scalars['String'];
    password: Scalars['String'];
};
export declare type MutationResetPasswordByForceResetTokenArgs = {
    token: Scalars['String'];
    oldPassword: Scalars['String'];
    newPassword: Scalars['String'];
};
export declare type MutationCreatePolicyArgs = {
    namespace?: Maybe<Scalars['String']>;
    code: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    statements: Array<PolicyStatementInput>;
};
export declare type MutationUpdatePolicyArgs = {
    namespace?: Maybe<Scalars['String']>;
    code: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    statements?: Maybe<Array<PolicyStatementInput>>;
    newCode?: Maybe<Scalars['String']>;
};
export declare type MutationDeletePolicyArgs = {
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
};
export declare type MutationDeletePoliciesArgs = {
    codeList: Array<Scalars['String']>;
    namespace?: Maybe<Scalars['String']>;
};
export declare type MutationAddPolicyAssignmentsArgs = {
    policies: Array<Scalars['String']>;
    targetType: PolicyAssignmentTargetType;
    targetIdentifiers?: Maybe<Array<Scalars['String']>>;
    inheritByChildren?: Maybe<Scalars['Boolean']>;
    namespace?: Maybe<Scalars['String']>;
};
export declare type MutationEnablePolicyAssignmentArgs = {
    policy: Scalars['String'];
    targetType: PolicyAssignmentTargetType;
    targetIdentifier: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
};
export declare type MutationDisbalePolicyAssignmentArgs = {
    policy: Scalars['String'];
    targetType: PolicyAssignmentTargetType;
    targetIdentifier: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
};
export declare type MutationRemovePolicyAssignmentsArgs = {
    policies: Array<Scalars['String']>;
    targetType: PolicyAssignmentTargetType;
    targetIdentifiers?: Maybe<Array<Scalars['String']>>;
    namespace?: Maybe<Scalars['String']>;
};
export declare type MutationRegisterByUsernameArgs = {
    input: RegisterByUsernameInput;
};
export declare type MutationRegisterByEmailArgs = {
    input: RegisterByEmailInput;
};
export declare type MutationRegisterByPhoneCodeArgs = {
    input: RegisterByPhoneCodeInput;
};
export declare type MutationCreateRoleArgs = {
    namespace?: Maybe<Scalars['String']>;
    code: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    parent?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateRoleArgs = {
    code: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    newCode?: Maybe<Scalars['String']>;
    namespace?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteRoleArgs = {
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteRolesArgs = {
    codeList: Array<Scalars['String']>;
    namespace?: Maybe<Scalars['String']>;
};
export declare type MutationAssignRoleArgs = {
    namespace?: Maybe<Scalars['String']>;
    roleCode?: Maybe<Scalars['String']>;
    roleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
    userIds?: Maybe<Array<Scalars['String']>>;
    groupCodes?: Maybe<Array<Scalars['String']>>;
    nodeCodes?: Maybe<Array<Scalars['String']>>;
};
export declare type MutationRevokeRoleArgs = {
    namespace?: Maybe<Scalars['String']>;
    roleCode?: Maybe<Scalars['String']>;
    roleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
    userIds?: Maybe<Array<Scalars['String']>>;
    groupCodes?: Maybe<Array<Scalars['String']>>;
    nodeCodes?: Maybe<Array<Scalars['String']>>;
};
export declare type MutationLoginBySubAccountArgs = {
    account: Scalars['String'];
    password: Scalars['String'];
    captchaCode?: Maybe<Scalars['String']>;
    clientIp?: Maybe<Scalars['String']>;
};
export declare type MutationSetUdfArgs = {
    targetType: UdfTargetType;
    key: Scalars['String'];
    dataType: UdfDataType;
    label: Scalars['String'];
    options?: Maybe<Scalars['String']>;
};
export declare type MutationRemoveUdfArgs = {
    targetType: UdfTargetType;
    key: Scalars['String'];
};
export declare type MutationSetUdvArgs = {
    targetType: UdfTargetType;
    targetId: Scalars['String'];
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare type MutationSetUdfValueBatchArgs = {
    targetType: UdfTargetType;
    input: Array<SetUdfValueBatchInput>;
};
export declare type MutationRemoveUdvArgs = {
    targetType: UdfTargetType;
    targetId: Scalars['String'];
    key: Scalars['String'];
};
export declare type MutationSetUdvBatchArgs = {
    targetType: UdfTargetType;
    targetId: Scalars['String'];
    udvList?: Maybe<Array<UserDefinedDataInput>>;
};
export declare type MutationRefreshTokenArgs = {
    id?: Maybe<Scalars['String']>;
};
export declare type MutationCreateUserArgs = {
    userInfo: CreateUserInput;
    keepPassword?: Maybe<Scalars['Boolean']>;
    resetPasswordOnFirstLogin?: Maybe<Scalars['Boolean']>;
    params?: Maybe<Scalars['String']>;
    identity?: Maybe<CreateUserIdentityInput>;
};
export declare type MutationUpdateUserArgs = {
    id?: Maybe<Scalars['String']>;
    input: UpdateUserInput;
    emailToken?: Maybe<Scalars['String']>;
    phoneToken?: Maybe<Scalars['String']>;
};
export declare type MutationUpdatePasswordArgs = {
    newPassword: Scalars['String'];
    oldPassword?: Maybe<Scalars['String']>;
};
export declare type MutationBindPhoneArgs = {
    phone: Scalars['String'];
    phoneCode: Scalars['String'];
    phoneCountryCode?: Maybe<Scalars['String']>;
};
export declare type MutationBindEmailArgs = {
    email: Scalars['String'];
    emailCode: Scalars['String'];
};
export declare type MutationUpdatePhoneArgs = {
    phone: Scalars['String'];
    phoneCode: Scalars['String'];
    oldPhone?: Maybe<Scalars['String']>;
    oldPhoneCode?: Maybe<Scalars['String']>;
    phoneCountryCode?: Maybe<Scalars['String']>;
    oldPhoneCountryCode?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateEmailArgs = {
    email: Scalars['String'];
    emailCode: Scalars['String'];
    oldEmail?: Maybe<Scalars['String']>;
    oldEmailCode?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteUserArgs = {
    id: Scalars['String'];
};
export declare type MutationDeleteUsersArgs = {
    ids: Array<Scalars['String']>;
};
export declare type MutationCreateUserpoolArgs = {
    name: Scalars['String'];
    domain: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    logo?: Maybe<Scalars['String']>;
    userpoolTypes?: Maybe<Array<Scalars['String']>>;
};
export declare type MutationUpdateUserpoolArgs = {
    input: UpdateUserpoolInput;
};
export declare type MutationRefreshAccessTokenArgs = {
    accessToken?: Maybe<Scalars['String']>;
};
export declare type MutationAddWhitelistArgs = {
    type: WhitelistType;
    list: Array<Scalars['String']>;
};
export declare type MutationRemoveWhitelistArgs = {
    type: WhitelistType;
    list: Array<Scalars['String']>;
};
export declare type CommonMessage = {
    /** 可读的接口响应说明，请以业务状态码 code 作为判断业务是否成功的标志 */
    message?: Maybe<Scalars['String']>;
    /**
     * 业务状态码（与 HTTP 响应码不同），但且仅当为 200 的时候表示操作成功表示，详细说明请见：
     * [Authing 错误代码列表](https://docs.authing.co/advanced/error-code.html)
     */
    code?: Maybe<Scalars['Int']>;
};
export declare type AuthorizeResourceOpt = {
    targetType: PolicyAssignmentTargetType;
    targetIdentifier: Scalars['String'];
    actions?: Maybe<Array<Scalars['String']>>;
};
export declare type CreateSocialConnectionInstanceInput = {
    /** 社会化登录 provider */
    provider: Scalars['String'];
    fields?: Maybe<Array<Maybe<CreateSocialConnectionInstanceFieldInput>>>;
};
export declare type CreateSocialConnectionInstanceFieldInput = {
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare type ConfigEmailTemplateInput = {
    /** 邮件模版类型 */
    type: EmailTemplateType;
    /** 模版名称 */
    name: Scalars['String'];
    /** 邮件主题 */
    subject: Scalars['String'];
    /** 显示的邮件发送人 */
    sender: Scalars['String'];
    /** 邮件模版内容 */
    content: Scalars['String'];
    /** 重定向链接，操作成功后，用户将被重定向到此 URL。 */
    redirectTo?: Maybe<Scalars['String']>;
    hasURL?: Maybe<Scalars['Boolean']>;
    /** 验证码过期时间（单位为秒） */
    expiresIn?: Maybe<Scalars['Int']>;
};
/** 邮件使用场景 */
export declare enum EmailScene {
    /** 发送重置密码邮件，邮件中包含验证码 */
    ResetPassword = "RESET_PASSWORD",
    RESET_PASSWORD_VERIFY_CODE = "RESET_PASSWORD_VERIFY_CODE",
    /** 发送验证邮箱的邮件 */
    VerifyEmail = "VERIFY_EMAIL",
    FIRST_EMAIL_LOGIN_VERIFY = "FIRST_EMAIL_LOGIN_VERIFY",
    CONSOLE_CONDUCTED_VERIFY = "CONSOLE_CONDUCTED_VERIFY",
    /** 发送修改邮箱邮件，邮件中包含验证码 */
    ChangeEmail = "CHANGE_EMAIL",
    EMAIL_BIND_VERIFY_CODE = "EMAIL_BIND_VERIFY_CODE",
    EMAIL_UNBIND_VERIFY_CODE = "EMAIL_UNBIND_VERIFY_CODE",
    /** 发送 MFA 验证邮件 */
    MfaVerify = "MFA_VERIFY",
    /** 发送邮件验证码 */
    VerifyCode = "VERIFY_CODE",
    REGISTER_VERIFY_CODE = "REGISTER_VERIFY_CODE",
    LOGIN_VERIFY_CODE = "LOGIN_VERIFY_CODE",
    MFA_VERIFY_CODE = "MFA_VERIFY_CODE",
    INFORMATION_COMPLETION_VERIFY_CODE = "INFORMATION_COMPLETION_VERIFY_CODE"
}
export declare type CreateFunctionInput = {
    /** 函数名称 */
    name: Scalars['String'];
    /** 源代码 */
    sourceCode: Scalars['String'];
    /** 描述信息 */
    description?: Maybe<Scalars['String']>;
    /** 云函数链接 */
    url?: Maybe<Scalars['String']>;
};
export declare type UpdateFunctionInput = {
    /** ID */
    id: Scalars['String'];
    /** 函数名称 */
    name?: Maybe<Scalars['String']>;
    /** 源代码 */
    sourceCode?: Maybe<Scalars['String']>;
    /** 描述信息 */
    description?: Maybe<Scalars['String']>;
    /** 云函数链接 */
    url?: Maybe<Scalars['String']>;
};
export declare type LoginByEmailInput = {
    email: Scalars['String'];
    password: Scalars['String'];
    /** 图形验证码 */
    captchaCode?: Maybe<Scalars['String']>;
    /** 如果用户不存在，是否自动创建一个账号 */
    autoRegister?: Maybe<Scalars['Boolean']>;
    clientIp?: Maybe<Scalars['String']>;
    /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
    params?: Maybe<Scalars['String']>;
    /** 请求上下文信息，将会传递到 pipeline 中 */
    context?: Maybe<Scalars['String']>;
};
export declare type LoginByUsernameInput = {
    username: Scalars['String'];
    password: Scalars['String'];
    /** 图形验证码 */
    captchaCode?: Maybe<Scalars['String']>;
    /** 如果用户不存在，是否自动创建一个账号 */
    autoRegister?: Maybe<Scalars['Boolean']>;
    clientIp?: Maybe<Scalars['String']>;
    /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
    params?: Maybe<Scalars['String']>;
    /** 请求上下文信息，将会传递到 pipeline 中 */
    context?: Maybe<Scalars['String']>;
};
export declare type LoginByPhoneCodeInput = {
    phone: Scalars['String'];
    code: Scalars['String'];
    /** 电话区号 */
    phoneCountryCode?: Maybe<Scalars['String']>;
    /** 如果用户不存在，是否自动创建一个账号 */
    autoRegister?: Maybe<Scalars['Boolean']>;
    clientIp?: Maybe<Scalars['String']>;
    /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
    params?: Maybe<Scalars['String']>;
    /** 请求上下文信息，将会传递到 pipeline 中 */
    context?: Maybe<Scalars['String']>;
};
export declare type LoginByPhonePasswordInput = {
    phone: Scalars['String'];
    password: Scalars['String'];
    /** 图形验证码 */
    captchaCode?: Maybe<Scalars['String']>;
    /** 如果用户不存在，是否自动创建一个账号 */
    autoRegister?: Maybe<Scalars['Boolean']>;
    clientIp?: Maybe<Scalars['String']>;
    /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
    params?: Maybe<Scalars['String']>;
    /** 请求上下文信息，将会传递到 pipeline 中 */
    context?: Maybe<Scalars['String']>;
};
export declare type PolicyStatementInput = {
    resource: Scalars['String'];
    actions: Array<Scalars['String']>;
    effect?: Maybe<PolicyEffect>;
    condition?: Maybe<Array<PolicyStatementConditionInput>>;
};
export declare type PolicyStatementConditionInput = {
    param: Scalars['String'];
    operator: Scalars['String'];
    value: Scalars['Object'];
};
export declare type RegisterByUsernameInput = {
    username: Scalars['String'];
    password: Scalars['String'];
    profile?: Maybe<RegisterProfile>;
    forceLogin?: Maybe<Scalars['Boolean']>;
    generateToken?: Maybe<Scalars['Boolean']>;
    clientIp?: Maybe<Scalars['String']>;
    /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
    params?: Maybe<Scalars['String']>;
    /** 请求上下文信息，将会传递到 pipeline 中 */
    context?: Maybe<Scalars['String']>;
    phoneToken?: Maybe<Scalars['String']>;
    emailToken?: Maybe<Scalars['String']>;
};
export declare type RegisterProfile = {
    ip?: Maybe<Scalars['String']>;
    /** 手机号，需要加 phoneToken 作为验证 */
    phone?: Maybe<Scalars['String']>;
    /** 邮箱，需要加 emailToken 作为验证 */
    email?: Maybe<Scalars['String']>;
    oauth?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
    nickname?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    photo?: Maybe<Scalars['String']>;
    device?: Maybe<Scalars['String']>;
    browser?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    givenName?: Maybe<Scalars['String']>;
    familyName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    profile?: Maybe<Scalars['String']>;
    preferredUsername?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
    gender?: Maybe<Scalars['String']>;
    birthdate?: Maybe<Scalars['String']>;
    zoneinfo?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    formatted?: Maybe<Scalars['String']>;
    streetAddress?: Maybe<Scalars['String']>;
    locality?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    udf?: Maybe<Array<UserDdfInput>>;
};
export declare type UserDdfInput = {
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare type RegisterByEmailInput = {
    email: Scalars['String'];
    password: Scalars['String'];
    profile?: Maybe<RegisterProfile>;
    forceLogin?: Maybe<Scalars['Boolean']>;
    generateToken?: Maybe<Scalars['Boolean']>;
    clientIp?: Maybe<Scalars['String']>;
    /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
    params?: Maybe<Scalars['String']>;
    /** 请求上下文信息，将会传递到 pipeline 中 */
    context?: Maybe<Scalars['String']>;
    phoneToken?: Maybe<Scalars['String']>;
};
export declare type RegisterByPhoneCodeInput = {
    phone: Scalars['String'];
    code: Scalars['String'];
    /** 电话区号 */
    phoneCountryCode?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    profile?: Maybe<RegisterProfile>;
    forceLogin?: Maybe<Scalars['Boolean']>;
    generateToken?: Maybe<Scalars['Boolean']>;
    clientIp?: Maybe<Scalars['String']>;
    /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
    params?: Maybe<Scalars['String']>;
    /** 请求上下文信息，将会传递到 pipeline 中 */
    context?: Maybe<Scalars['String']>;
    emailToken?: Maybe<Scalars['String']>;
};
export declare type SetUdfValueBatchInput = {
    targetId: Scalars['String'];
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare type UserDefinedDataInput = {
    key: Scalars['String'];
    value?: Maybe<Scalars['String']>;
};
export declare type RefreshToken = {
    token?: Maybe<Scalars['String']>;
    iat?: Maybe<Scalars['Int']>;
    exp?: Maybe<Scalars['Int']>;
};
export declare type CreateUserInput = {
    /** 用户名，用户池内唯一 */
    username?: Maybe<Scalars['String']>;
    /** 邮箱，不区分大小写，如 Bob@example.com 和 bob@example.com 会识别为同一个邮箱。用户池内唯一。 */
    email?: Maybe<Scalars['String']>;
    /** 邮箱是否已验证 */
    emailVerified?: Maybe<Scalars['Boolean']>;
    /** 手机号，用户池内唯一 */
    phone?: Maybe<Scalars['String']>;
    /** 手机号是否已验证 */
    phoneVerified?: Maybe<Scalars['Boolean']>;
    unionid?: Maybe<Scalars['String']>;
    openid?: Maybe<Scalars['String']>;
    /** 昵称，该字段不唯一。 */
    nickname?: Maybe<Scalars['String']>;
    /** 头像链接，默认为 https://usercontents.authing.cn/authing-avatar.png */
    photo?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    /** 注册方式 */
    registerSource?: Maybe<Array<Scalars['String']>>;
    browser?: Maybe<Scalars['String']>;
    /** 用户社会化登录第三方身份提供商返回的原始用户信息，非社会化登录方式注册的用户此字段为空。 */
    oauth?: Maybe<Scalars['String']>;
    /** 用户累计登录次数，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
    loginsCount?: Maybe<Scalars['Int']>;
    lastLogin?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    lastIP?: Maybe<Scalars['String']>;
    /** 用户注册时间，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
    signedUp?: Maybe<Scalars['String']>;
    blocked?: Maybe<Scalars['Boolean']>;
    isDeleted?: Maybe<Scalars['Boolean']>;
    device?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    givenName?: Maybe<Scalars['String']>;
    familyName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    profile?: Maybe<Scalars['String']>;
    preferredUsername?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
    gender?: Maybe<Scalars['String']>;
    birthdate?: Maybe<Scalars['String']>;
    zoneinfo?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    formatted?: Maybe<Scalars['String']>;
    streetAddress?: Maybe<Scalars['String']>;
    locality?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    externalId?: Maybe<Scalars['String']>;
    phoneCountryCode?: Maybe<Scalars['String']>;
};
export declare type CreateUserIdentityInput = {
    provider: Scalars['String'];
    userIdInIdp: Scalars['String'];
    openid?: Maybe<Scalars['String']>;
    isSocial?: Maybe<Scalars['Boolean']>;
    connectionId?: Maybe<Scalars['String']>;
    accessToken?: Maybe<Scalars['String']>;
    refreshToken?: Maybe<Scalars['String']>;
};
export declare type UpdateUserInput = {
    /** 邮箱。直接修改用户邮箱需要管理员权限，普通用户修改邮箱请使用 **updateEmail** 接口。 */
    email?: Maybe<Scalars['String']>;
    unionid?: Maybe<Scalars['String']>;
    openid?: Maybe<Scalars['String']>;
    /** 邮箱是否已验证。直接修改 emailVerified 需要管理员权限。 */
    emailVerified?: Maybe<Scalars['Boolean']>;
    /** 手机号。直接修改用户手机号需要管理员权限，普通用户修改邮箱请使用 **updatePhone** 接口。 */
    phone?: Maybe<Scalars['String']>;
    /** 手机号是否已验证。直接修改 **phoneVerified** 需要管理员权限。 */
    phoneVerified?: Maybe<Scalars['Boolean']>;
    /** 用户名，用户池内唯一 */
    username?: Maybe<Scalars['String']>;
    /** 昵称，该字段不唯一。 */
    nickname?: Maybe<Scalars['String']>;
    /** 密码。直接修改用户密码需要管理员权限，普通用户修改邮箱请使用 **updatePassword** 接口。 */
    password?: Maybe<Scalars['String']>;
    /** 头像链接，默认为 https://usercontents.authing.cn/authing-avatar.png */
    photo?: Maybe<Scalars['String']>;
    /** 注册方式 */
    company?: Maybe<Scalars['String']>;
    browser?: Maybe<Scalars['String']>;
    device?: Maybe<Scalars['String']>;
    oauth?: Maybe<Scalars['String']>;
    tokenExpiredAt?: Maybe<Scalars['String']>;
    /** 用户累计登录次数，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
    loginsCount?: Maybe<Scalars['Int']>;
    lastLogin?: Maybe<Scalars['String']>;
    lastIP?: Maybe<Scalars['String']>;
    /** 用户注册时间，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
    blocked?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    givenName?: Maybe<Scalars['String']>;
    familyName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    profile?: Maybe<Scalars['String']>;
    preferredUsername?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
    gender?: Maybe<Scalars['String']>;
    birthdate?: Maybe<Scalars['String']>;
    zoneinfo?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    formatted?: Maybe<Scalars['String']>;
    streetAddress?: Maybe<Scalars['String']>;
    locality?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    externalId?: Maybe<Scalars['String']>;
    phoneCountryCode?: Maybe<Scalars['String']>;
    /** 主部门信息 */
    mainDepartmentId?: Maybe<Scalars['String']>;
    mainDepartmentCode?: Maybe<Scalars['String']>;
};
export declare type UpdateUserpoolInput = {
    name?: Maybe<Scalars['String']>;
    logo?: Maybe<Scalars['String']>;
    domain?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    userpoolTypes?: Maybe<Array<Scalars['String']>>;
    emailVerifiedDefault?: Maybe<Scalars['Boolean']>;
    sendWelcomeEmail?: Maybe<Scalars['Boolean']>;
    registerDisabled?: Maybe<Scalars['Boolean']>;
    /** @deprecated */
    appSsoEnabled?: Maybe<Scalars['Boolean']>;
    allowedOrigins?: Maybe<Scalars['String']>;
    tokenExpiresAfter?: Maybe<Scalars['Int']>;
    frequentRegisterCheck?: Maybe<FrequentRegisterCheckConfigInput>;
    loginFailCheck?: Maybe<LoginFailCheckConfigInput>;
    /** 密码重置策略 */
    passwordUpdatePolicy?: Maybe<PasswordUpdatePolicyInput>;
    loginFailStrategy?: Maybe<Scalars['String']>;
    loginPasswordFailCheck?: Maybe<LoginPasswordFailCheckConfigInput>;
    changePhoneStrategy?: Maybe<ChangePhoneStrategyInput>;
    changeEmailStrategy?: Maybe<ChangeEmailStrategyInput>;
    qrcodeLoginStrategy?: Maybe<QrcodeLoginStrategyInput>;
    app2WxappLoginStrategy?: Maybe<App2WxappLoginStrategyInput>;
    whitelist?: Maybe<RegisterWhiteListConfigInput>;
    /** 自定义短信服务商配置 */
    customSMSProvider?: Maybe<CustomSmsProviderInput>;
    /** 是否要求邮箱必须验证才能登录（如果是通过邮箱登录的话） */
    loginRequireEmailVerified?: Maybe<Scalars['Boolean']>;
    verifyCodeLength?: Maybe<Scalars['Int']>;
    verifyCodeMaxAttempts?: Maybe<Scalars['Int']>;
};
export declare type FrequentRegisterCheckConfigInput = {
    timeInterval?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    enabled?: Maybe<Scalars['Boolean']>;
};
export declare type LoginFailCheckConfigInput = {
    timeInterval?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    enabled?: Maybe<Scalars['Boolean']>;
};
export declare type PasswordUpdatePolicyInput = {
    enabled?: Maybe<Scalars['Boolean']>;
    forcedCycle?: Maybe<Scalars['Int']>;
    differenceCycle?: Maybe<Scalars['Int']>;
};
export declare type LoginPasswordFailCheckConfigInput = {
    timeInterval?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    enabled?: Maybe<Scalars['Boolean']>;
};
export declare type ChangePhoneStrategyInput = {
    verifyOldPhone?: Maybe<Scalars['Boolean']>;
};
export declare type ChangeEmailStrategyInput = {
    verifyOldEmail?: Maybe<Scalars['Boolean']>;
};
export declare type QrcodeLoginStrategyInput = {
    qrcodeExpiresAfter?: Maybe<Scalars['Int']>;
    returnFullUserInfo?: Maybe<Scalars['Boolean']>;
    allowExchangeUserInfoFromBrowser?: Maybe<Scalars['Boolean']>;
    ticketExpiresAfter?: Maybe<Scalars['Int']>;
};
export declare type App2WxappLoginStrategyInput = {
    ticketExpriresAfter?: Maybe<Scalars['Int']>;
    ticketExchangeUserInfoNeedSecret?: Maybe<Scalars['Boolean']>;
};
export declare type RegisterWhiteListConfigInput = {
    phoneEnabled?: Maybe<Scalars['Boolean']>;
    emailEnabled?: Maybe<Scalars['Boolean']>;
    usernameEnabled?: Maybe<Scalars['Boolean']>;
};
export declare type CustomSmsProviderInput = {
    enabled?: Maybe<Scalars['Boolean']>;
    provider?: Maybe<Scalars['String']>;
    config?: Maybe<Scalars['String']>;
};
export declare type RefreshAccessTokenRes = {
    accessToken?: Maybe<Scalars['String']>;
    exp?: Maybe<Scalars['Int']>;
    iat?: Maybe<Scalars['Int']>;
};
/** 批量删除返回结果 */
export declare type BatchOperationResult = {
    /** 删除成功的个数 */
    succeedCount: Scalars['Int'];
    /** 删除失败的个数 */
    failedCount: Scalars['Int'];
    message?: Maybe<Scalars['String']>;
    errors?: Maybe<Array<Scalars['String']>>;
};
export declare type KeyValuePair = {
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare type SocialConnectionFieldInput = {
    key?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    placeholder?: Maybe<Scalars['String']>;
    children?: Maybe<Array<Maybe<SocialConnectionFieldInput>>>;
};
export declare type CreateSocialConnectionInput = {
    provider: Scalars['String'];
    name: Scalars['String'];
    logo: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    fields?: Maybe<Array<SocialConnectionFieldInput>>;
};
export declare type PasswordUpdatePolicy = {
    enabled?: Maybe<Scalars['Boolean']>;
    forcedCycle?: Maybe<Scalars['Int']>;
    differenceCycle?: Maybe<Scalars['Int']>;
};
export declare type AddMemberVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
    includeChildrenNodes?: Maybe<Scalars['Boolean']>;
    nodeId?: Maybe<Scalars['String']>;
    orgId?: Maybe<Scalars['String']>;
    nodeCode?: Maybe<Scalars['String']>;
    userIds: Array<Scalars['String']>;
    isLeader?: Maybe<Scalars['Boolean']>;
}>;
export declare type AddMemberResponse = {
    addMember: {
        id: string;
        orgId?: Maybe<string>;
        name: string;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        path: Array<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
        users: {
            totalCount: number;
            list: Array<{
                id: string;
                arn: string;
                userPoolId: string;
                username?: Maybe<string>;
                status?: Maybe<UserStatus>;
                email?: Maybe<string>;
                emailVerified?: Maybe<boolean>;
                phone?: Maybe<string>;
                phoneVerified?: Maybe<boolean>;
                unionid?: Maybe<string>;
                openid?: Maybe<string>;
                nickname?: Maybe<string>;
                registerSource?: Maybe<Array<string>>;
                photo?: Maybe<string>;
                password?: Maybe<string>;
                oauth?: Maybe<string>;
                token?: Maybe<string>;
                tokenExpiredAt?: Maybe<string>;
                loginsCount?: Maybe<number>;
                lastLogin?: Maybe<string>;
                lastIP?: Maybe<string>;
                signedUp?: Maybe<string>;
                blocked?: Maybe<boolean>;
                isDeleted?: Maybe<boolean>;
                device?: Maybe<string>;
                browser?: Maybe<string>;
                company?: Maybe<string>;
                name?: Maybe<string>;
                givenName?: Maybe<string>;
                familyName?: Maybe<string>;
                middleName?: Maybe<string>;
                profile?: Maybe<string>;
                preferredUsername?: Maybe<string>;
                website?: Maybe<string>;
                gender?: Maybe<string>;
                birthdate?: Maybe<string>;
                zoneinfo?: Maybe<string>;
                locale?: Maybe<string>;
                address?: Maybe<string>;
                formatted?: Maybe<string>;
                streetAddress?: Maybe<string>;
                locality?: Maybe<string>;
                region?: Maybe<string>;
                postalCode?: Maybe<string>;
                city?: Maybe<string>;
                province?: Maybe<string>;
                country?: Maybe<string>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
                externalId?: Maybe<string>;
                phoneCountryCode?: Maybe<string>;
            }>;
        };
    };
};
export declare type AddNodeVariables = Exact<{
    orgId: Scalars['String'];
    parentNodeId?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    nameI18n?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    descriptionI18n?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Int']>;
    code?: Maybe<Scalars['String']>;
}>;
export declare type AddNodeResponse = {
    addNode: {
        id: string;
        rootNode: {
            id: string;
            orgId?: Maybe<string>;
            name: string;
            nameI18n?: Maybe<string>;
            description?: Maybe<string>;
            descriptionI18n?: Maybe<string>;
            order?: Maybe<number>;
            code?: Maybe<string>;
            root?: Maybe<boolean>;
            depth?: Maybe<number>;
            path: Array<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children?: Maybe<Array<string>>;
        };
        nodes: Array<{
            id: string;
            orgId?: Maybe<string>;
            name: string;
            nameI18n?: Maybe<string>;
            description?: Maybe<string>;
            descriptionI18n?: Maybe<string>;
            order?: Maybe<number>;
            code?: Maybe<string>;
            root?: Maybe<boolean>;
            depth?: Maybe<number>;
            path: Array<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children?: Maybe<Array<string>>;
        }>;
    };
};
export declare type AddNodeV2Variables = Exact<{
    orgId: Scalars['String'];
    parentNodeId?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    nameI18n?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    descriptionI18n?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Int']>;
    code?: Maybe<Scalars['String']>;
}>;
export declare type AddNodeV2Response = {
    addNodeV2: {
        id: string;
        orgId?: Maybe<string>;
        name: string;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        path: Array<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
    };
};
export declare type AddPolicyAssignmentsVariables = Exact<{
    policies: Array<Scalars['String']>;
    targetType: PolicyAssignmentTargetType;
    targetIdentifiers?: Maybe<Array<Scalars['String']>>;
    inheritByChildren?: Maybe<Scalars['Boolean']>;
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type AddPolicyAssignmentsResponse = {
    addPolicyAssignments: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type AddUserToGroupVariables = Exact<{
    userIds: Array<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
}>;
export declare type AddUserToGroupResponse = {
    addUserToGroup: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type AddWhitelistVariables = Exact<{
    type: WhitelistType;
    list: Array<Scalars['String']>;
}>;
export declare type AddWhitelistResponse = {
    addWhitelist: Array<Maybe<{
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        value: string;
    }>>;
};
export declare type AllowVariables = Exact<{
    resource: Scalars['String'];
    action: Scalars['String'];
    userId?: Maybe<Scalars['String']>;
    userIds?: Maybe<Array<Scalars['String']>>;
    roleCode?: Maybe<Scalars['String']>;
    roleCodes?: Maybe<Array<Scalars['String']>>;
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type AllowResponse = {
    allow: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type AssignRoleVariables = Exact<{
    namespace?: Maybe<Scalars['String']>;
    roleCode?: Maybe<Scalars['String']>;
    roleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
    userIds?: Maybe<Array<Scalars['String']>>;
    groupCodes?: Maybe<Array<Scalars['String']>>;
    nodeCodes?: Maybe<Array<Scalars['String']>>;
}>;
export declare type AssignRoleResponse = {
    assignRole?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
    }>;
};
export declare type AuthorizeResourceVariables = Exact<{
    namespace?: Maybe<Scalars['String']>;
    resource?: Maybe<Scalars['String']>;
    resourceType?: Maybe<ResourceType>;
    opts?: Maybe<Array<Maybe<AuthorizeResourceOpt>>>;
}>;
export declare type AuthorizeResourceResponse = {
    authorizeResource: {
        code?: Maybe<number>;
        message?: Maybe<string>;
    };
};
export declare type BindEmailVariables = Exact<{
    email: Scalars['String'];
    emailCode: Scalars['String'];
}>;
export declare type BindEmailResponse = {
    bindEmail: {
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    };
};
export declare type BindPhoneVariables = Exact<{
    phone: Scalars['String'];
    phoneCode: Scalars['String'];
    phoneCountryCode?: Maybe<Scalars['String']>;
}>;
export declare type BindPhoneResponse = {
    bindPhone: {
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    };
};
export declare type ChangeMfaVariables = Exact<{
    enable?: Maybe<Scalars['Boolean']>;
    id?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['String']>;
    userPoolId?: Maybe<Scalars['String']>;
    refresh?: Maybe<Scalars['Boolean']>;
}>;
export declare type ChangeMfaResponse = {
    changeMfa?: Maybe<{
        id: string;
        userId: string;
        userPoolId: string;
        enable: boolean;
        secret?: Maybe<string>;
    }>;
};
export declare type ConfigEmailTemplateVariables = Exact<{
    input: ConfigEmailTemplateInput;
}>;
export declare type ConfigEmailTemplateResponse = {
    configEmailTemplate: {
        type: EmailTemplateType;
        name: string;
        subject: string;
        sender: string;
        content: string;
        redirectTo?: Maybe<string>;
        hasURL?: Maybe<boolean>;
        expiresIn?: Maybe<number>;
        enabled?: Maybe<boolean>;
        isSystem?: Maybe<boolean>;
    };
};
export declare type CreateFunctionVariables = Exact<{
    input: CreateFunctionInput;
}>;
export declare type CreateFunctionResponse = {
    createFunction?: Maybe<{
        id: string;
        name: string;
        sourceCode: string;
        description?: Maybe<string>;
        url?: Maybe<string>;
    }>;
};
export declare type CreateGroupVariables = Exact<{
    code: Scalars['String'];
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
}>;
export declare type CreateGroupResponse = {
    createGroup: {
        code: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
    };
};
export declare type CreateOrgVariables = Exact<{
    name: Scalars['String'];
    code?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    tenantId?: Maybe<Scalars['String']>;
}>;
export declare type CreateOrgResponse = {
    createOrg: {
        id: string;
        rootNode: {
            id: string;
            orgId?: Maybe<string>;
            name: string;
            nameI18n?: Maybe<string>;
            description?: Maybe<string>;
            descriptionI18n?: Maybe<string>;
            order?: Maybe<number>;
            code?: Maybe<string>;
            root?: Maybe<boolean>;
            depth?: Maybe<number>;
            path: Array<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children?: Maybe<Array<string>>;
        };
        nodes: Array<{
            id: string;
            orgId?: Maybe<string>;
            name: string;
            nameI18n?: Maybe<string>;
            description?: Maybe<string>;
            descriptionI18n?: Maybe<string>;
            order?: Maybe<number>;
            code?: Maybe<string>;
            root?: Maybe<boolean>;
            depth?: Maybe<number>;
            path: Array<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children?: Maybe<Array<string>>;
        }>;
    };
};
export declare type CreatePolicyVariables = Exact<{
    namespace?: Maybe<Scalars['String']>;
    code: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    statements: Array<PolicyStatementInput>;
}>;
export declare type CreatePolicyResponse = {
    createPolicy: {
        namespace: string;
        code: string;
        isDefault: boolean;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        assignmentsCount: number;
        statements: Array<{
            resource: string;
            actions: Array<string>;
            effect?: Maybe<PolicyEffect>;
            condition?: Maybe<Array<{
                param: string;
                operator: string;
                value: any;
            }>>;
        }>;
    };
};
export declare type CreateRoleVariables = Exact<{
    namespace?: Maybe<Scalars['String']>;
    code: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    parent?: Maybe<Scalars['String']>;
}>;
export declare type CreateRoleResponse = {
    createRole: {
        id: string;
        namespace: string;
        code: string;
        arn: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        parent?: Maybe<{
            namespace: string;
            code: string;
            arn: string;
            description?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
        }>;
    };
};
export declare type CreateUserVariables = Exact<{
    userInfo: CreateUserInput;
    params?: Maybe<Scalars['String']>;
    identity?: Maybe<CreateUserIdentityInput>;
    keepPassword?: Maybe<Scalars['Boolean']>;
    resetPasswordOnFirstLogin?: Maybe<Scalars['Boolean']>;
}>;
export declare type CreateUserResponse = {
    createUser: {
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    };
};
export declare type CreateUserWithCustomDataVariables = Exact<{
    userInfo: CreateUserInput;
    keepPassword?: Maybe<Scalars['Boolean']>;
    params?: Maybe<Scalars['String']>;
}>;
export declare type CreateUserWithCustomDataResponse = {
    createUser: {
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
        customData?: Maybe<Array<Maybe<{
            key: string;
            value?: Maybe<string>;
            dataType: UdfDataType;
            label?: Maybe<string>;
        }>>>;
    };
};
export declare type CreateUserpoolVariables = Exact<{
    name: Scalars['String'];
    domain: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    logo?: Maybe<Scalars['String']>;
    userpoolTypes?: Maybe<Array<Scalars['String']>>;
}>;
export declare type CreateUserpoolResponse = {
    createUserpool: {
        id: string;
        name: string;
        domain: string;
        description?: Maybe<string>;
        secret: string;
        jwtSecret: string;
        logo: string;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        emailVerifiedDefault: boolean;
        sendWelcomeEmail: boolean;
        registerDisabled: boolean;
        appSsoEnabled: boolean;
        showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>;
        allowedOrigins?: Maybe<string>;
        tokenExpiresAfter?: Maybe<number>;
        isDeleted?: Maybe<boolean>;
        packageType?: Maybe<number>;
        userpoolTypes?: Maybe<Array<{
            code?: Maybe<string>;
            name?: Maybe<string>;
            description?: Maybe<string>;
            image?: Maybe<string>;
            sdks?: Maybe<Array<Maybe<string>>>;
        }>>;
        frequentRegisterCheck?: Maybe<{
            timeInterval?: Maybe<number>;
            limit?: Maybe<number>;
            enabled?: Maybe<boolean>;
        }>;
        loginFailCheck?: Maybe<{
            timeInterval?: Maybe<number>;
            limit?: Maybe<number>;
            enabled?: Maybe<boolean>;
        }>;
        changePhoneStrategy?: Maybe<{
            verifyOldPhone?: Maybe<boolean>;
        }>;
        changeEmailStrategy?: Maybe<{
            verifyOldEmail?: Maybe<boolean>;
        }>;
        qrcodeLoginStrategy?: Maybe<{
            qrcodeExpiresAfter?: Maybe<number>;
            returnFullUserInfo?: Maybe<boolean>;
            allowExchangeUserInfoFromBrowser?: Maybe<boolean>;
            ticketExpiresAfter?: Maybe<number>;
        }>;
        app2WxappLoginStrategy?: Maybe<{
            ticketExpriresAfter?: Maybe<number>;
            ticketExchangeUserInfoNeedSecret?: Maybe<boolean>;
        }>;
        whitelist?: Maybe<{
            phoneEnabled?: Maybe<boolean>;
            emailEnabled?: Maybe<boolean>;
            usernameEnabled?: Maybe<boolean>;
        }>;
        customSMSProvider?: Maybe<{
            enabled?: Maybe<boolean>;
            provider?: Maybe<string>;
        }>;
    };
};
export declare type DeleteFunctionVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type DeleteFunctionResponse = {
    deleteFunction: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type DeleteGroupsVariables = Exact<{
    codeList: Array<Scalars['String']>;
}>;
export declare type DeleteGroupsResponse = {
    deleteGroups: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type DeleteNodeVariables = Exact<{
    orgId: Scalars['String'];
    nodeId: Scalars['String'];
}>;
export declare type DeleteNodeResponse = {
    deleteNode: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type DeleteOrgVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type DeleteOrgResponse = {
    deleteOrg: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type DeletePoliciesVariables = Exact<{
    codeList: Array<Scalars['String']>;
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type DeletePoliciesResponse = {
    deletePolicies: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type DeletePolicyVariables = Exact<{
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type DeletePolicyResponse = {
    deletePolicy: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type DeleteRoleVariables = Exact<{
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type DeleteRoleResponse = {
    deleteRole: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type DeleteRolesVariables = Exact<{
    codeList: Array<Scalars['String']>;
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type DeleteRolesResponse = {
    deleteRoles: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type DeleteUserVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type DeleteUserResponse = {
    deleteUser?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
    }>;
};
export declare type DeleteUserpoolVariables = Exact<{
    [key: string]: never;
}>;
export declare type DeleteUserpoolResponse = {
    deleteUserpool: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type DeleteUsersVariables = Exact<{
    ids: Array<Scalars['String']>;
}>;
export declare type DeleteUsersResponse = {
    deleteUsers?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
    }>;
};
export declare type DisableEmailTemplateVariables = Exact<{
    type: EmailTemplateType;
}>;
export declare type DisableEmailTemplateResponse = {
    disableEmailTemplate: {
        type: EmailTemplateType;
        name: string;
        subject: string;
        sender: string;
        content: string;
        redirectTo?: Maybe<string>;
        hasURL?: Maybe<boolean>;
        expiresIn?: Maybe<number>;
        enabled?: Maybe<boolean>;
        isSystem?: Maybe<boolean>;
    };
};
export declare type DisbalePolicyAssignmentVariables = Exact<{
    policy: Scalars['String'];
    targetType: PolicyAssignmentTargetType;
    targetIdentifier: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type DisbalePolicyAssignmentResponse = {
    disbalePolicyAssignment: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type EnableEmailTemplateVariables = Exact<{
    type: EmailTemplateType;
}>;
export declare type EnableEmailTemplateResponse = {
    enableEmailTemplate: {
        type: EmailTemplateType;
        name: string;
        subject: string;
        sender: string;
        content: string;
        redirectTo?: Maybe<string>;
        hasURL?: Maybe<boolean>;
        expiresIn?: Maybe<number>;
        enabled?: Maybe<boolean>;
        isSystem?: Maybe<boolean>;
    };
};
export declare type EnablePolicyAssignmentVariables = Exact<{
    policy: Scalars['String'];
    targetType: PolicyAssignmentTargetType;
    targetIdentifier: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type EnablePolicyAssignmentResponse = {
    enablePolicyAssignment: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type LoginByEmailVariables = Exact<{
    input: LoginByEmailInput;
}>;
export declare type LoginByEmailResponse = {
    loginByEmail?: Maybe<{
        id: string;
        arn: string;
        status?: Maybe<UserStatus>;
        userPoolId: string;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
        newlyCreated?: Maybe<boolean>;
        customData?: Maybe<Array<Maybe<{
            key: string;
            value?: Maybe<string>;
            dataType: UdfDataType;
            label?: Maybe<string>;
        }>>>;
    }>;
};
export declare type LoginByPhoneCodeVariables = Exact<{
    input: LoginByPhoneCodeInput;
}>;
export declare type LoginByPhoneCodeResponse = {
    loginByPhoneCode?: Maybe<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
        newlyCreated?: Maybe<boolean>;
        customData?: Maybe<Array<Maybe<{
            key: string;
            value?: Maybe<string>;
            dataType: UdfDataType;
            label?: Maybe<string>;
        }>>>;
    }>;
};
export declare type LoginByPhonePasswordVariables = Exact<{
    input: LoginByPhonePasswordInput;
}>;
export declare type LoginByPhonePasswordResponse = {
    loginByPhonePassword?: Maybe<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
        newlyCreated?: Maybe<boolean>;
        customData?: Maybe<Array<Maybe<{
            key: string;
            value?: Maybe<string>;
            dataType: UdfDataType;
            label?: Maybe<string>;
        }>>>;
    }>;
};
export declare type LoginBySubAccountVariables = Exact<{
    account: Scalars['String'];
    password: Scalars['String'];
    captchaCode?: Maybe<Scalars['String']>;
    clientIp?: Maybe<Scalars['String']>;
}>;
export declare type LoginBySubAccountResponse = {
    loginBySubAccount: {
        id: string;
        arn: string;
        status?: Maybe<UserStatus>;
        userPoolId: string;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
        newlyCreated?: Maybe<boolean>;
        customData?: Maybe<Array<Maybe<{
            key: string;
            value?: Maybe<string>;
            dataType: UdfDataType;
            label?: Maybe<string>;
        }>>>;
    };
};
export declare type LoginByUsernameVariables = Exact<{
    input: LoginByUsernameInput;
}>;
export declare type LoginByUsernameResponse = {
    loginByUsername?: Maybe<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
        newlyCreated?: Maybe<boolean>;
        customData?: Maybe<Array<Maybe<{
            key: string;
            value?: Maybe<string>;
            dataType: UdfDataType;
            label?: Maybe<string>;
        }>>>;
    }>;
};
export declare type MoveMembersVariables = Exact<{
    userIds: Array<Scalars['String']>;
    sourceNodeId: Scalars['String'];
    targetNodeId: Scalars['String'];
}>;
export declare type MoveMembersResponse = {
    moveMembers?: Maybe<{
        code?: Maybe<number>;
        message?: Maybe<string>;
    }>;
};
export declare type MoveNodeVariables = Exact<{
    orgId: Scalars['String'];
    nodeId: Scalars['String'];
    targetParentId: Scalars['String'];
}>;
export declare type MoveNodeResponse = {
    moveNode: {
        id: string;
        rootNode: {
            id: string;
            orgId?: Maybe<string>;
            name: string;
            nameI18n?: Maybe<string>;
            description?: Maybe<string>;
            descriptionI18n?: Maybe<string>;
            order?: Maybe<number>;
            code?: Maybe<string>;
            root?: Maybe<boolean>;
            depth?: Maybe<number>;
            path: Array<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children?: Maybe<Array<string>>;
        };
        nodes: Array<{
            id: string;
            orgId?: Maybe<string>;
            name: string;
            nameI18n?: Maybe<string>;
            description?: Maybe<string>;
            descriptionI18n?: Maybe<string>;
            order?: Maybe<number>;
            code?: Maybe<string>;
            root?: Maybe<boolean>;
            depth?: Maybe<number>;
            path: Array<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children?: Maybe<Array<string>>;
        }>;
    };
};
export declare type RefreshAccessTokenVariables = Exact<{
    accessToken?: Maybe<Scalars['String']>;
}>;
export declare type RefreshAccessTokenResponse = {
    refreshAccessToken: {
        accessToken?: Maybe<string>;
        exp?: Maybe<number>;
        iat?: Maybe<number>;
    };
};
export declare type RefreshTokenVariables = Exact<{
    id?: Maybe<Scalars['String']>;
}>;
export declare type RefreshTokenResponse = {
    refreshToken?: Maybe<{
        token?: Maybe<string>;
        iat?: Maybe<number>;
        exp?: Maybe<number>;
    }>;
};
export declare type RefreshUserpoolSecretVariables = Exact<{
    [key: string]: never;
}>;
export declare type RefreshUserpoolSecretResponse = {
    refreshUserpoolSecret: string;
};
export declare type RegisterByEmailVariables = Exact<{
    input: RegisterByEmailInput;
}>;
export declare type RegisterByEmailResponse = {
    registerByEmail?: Maybe<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    }>;
};
export declare type RegisterByPhoneCodeVariables = Exact<{
    input: RegisterByPhoneCodeInput;
}>;
export declare type RegisterByPhoneCodeResponse = {
    registerByPhoneCode?: Maybe<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    }>;
};
export declare type RegisterByUsernameVariables = Exact<{
    input: RegisterByUsernameInput;
}>;
export declare type RegisterByUsernameResponse = {
    registerByUsername?: Maybe<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    }>;
};
export declare type RemoveMemberVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
    includeChildrenNodes?: Maybe<Scalars['Boolean']>;
    nodeId?: Maybe<Scalars['String']>;
    orgId?: Maybe<Scalars['String']>;
    nodeCode?: Maybe<Scalars['String']>;
    userIds: Array<Scalars['String']>;
}>;
export declare type RemoveMemberResponse = {
    removeMember: {
        id: string;
        name: string;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
        users: {
            totalCount: number;
            list: Array<{
                id: string;
                arn: string;
                userPoolId: string;
                status?: Maybe<UserStatus>;
                username?: Maybe<string>;
                email?: Maybe<string>;
                emailVerified?: Maybe<boolean>;
                phone?: Maybe<string>;
                phoneVerified?: Maybe<boolean>;
                unionid?: Maybe<string>;
                openid?: Maybe<string>;
                nickname?: Maybe<string>;
                registerSource?: Maybe<Array<string>>;
                photo?: Maybe<string>;
                password?: Maybe<string>;
                oauth?: Maybe<string>;
                token?: Maybe<string>;
                tokenExpiredAt?: Maybe<string>;
                loginsCount?: Maybe<number>;
                lastLogin?: Maybe<string>;
                lastIP?: Maybe<string>;
                signedUp?: Maybe<string>;
                blocked?: Maybe<boolean>;
                isDeleted?: Maybe<boolean>;
                device?: Maybe<string>;
                browser?: Maybe<string>;
                company?: Maybe<string>;
                name?: Maybe<string>;
                givenName?: Maybe<string>;
                familyName?: Maybe<string>;
                middleName?: Maybe<string>;
                profile?: Maybe<string>;
                preferredUsername?: Maybe<string>;
                website?: Maybe<string>;
                gender?: Maybe<string>;
                birthdate?: Maybe<string>;
                zoneinfo?: Maybe<string>;
                locale?: Maybe<string>;
                address?: Maybe<string>;
                formatted?: Maybe<string>;
                streetAddress?: Maybe<string>;
                locality?: Maybe<string>;
                region?: Maybe<string>;
                postalCode?: Maybe<string>;
                city?: Maybe<string>;
                province?: Maybe<string>;
                country?: Maybe<string>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
                phoneCountryCode?: Maybe<string>;
            }>;
        };
    };
};
export declare type RemovePolicyAssignmentsVariables = Exact<{
    policies: Array<Scalars['String']>;
    targetType: PolicyAssignmentTargetType;
    targetIdentifiers?: Maybe<Array<Scalars['String']>>;
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type RemovePolicyAssignmentsResponse = {
    removePolicyAssignments: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type RemoveUdfVariables = Exact<{
    targetType: UdfTargetType;
    key: Scalars['String'];
}>;
export declare type RemoveUdfResponse = {
    removeUdf?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
    }>;
};
export declare type RemoveUdvVariables = Exact<{
    targetType: UdfTargetType;
    targetId: Scalars['String'];
    key: Scalars['String'];
}>;
export declare type RemoveUdvResponse = {
    removeUdv?: Maybe<Array<{
        key: string;
        dataType: UdfDataType;
        value: string;
        label?: Maybe<string>;
    }>>;
};
export declare type RemoveUserFromGroupVariables = Exact<{
    userIds: Array<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
}>;
export declare type RemoveUserFromGroupResponse = {
    removeUserFromGroup: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type RemoveWhitelistVariables = Exact<{
    type: WhitelistType;
    list: Array<Scalars['String']>;
}>;
export declare type RemoveWhitelistResponse = {
    removeWhitelist: Array<Maybe<{
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        value: string;
    }>>;
};
export declare type ResetPasswordVariables = Exact<{
    phone?: Maybe<Scalars['String']>;
    phoneCountryCode?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    code: Scalars['String'];
    newPassword: Scalars['String'];
}>;
export declare type ResetPasswordResponse = {
    resetPassword?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
    }>;
};
export declare type ResetPasswordByFirstLoginTokenVariables = Exact<{
    token: Scalars['String'];
    password: Scalars['String'];
}>;
export declare type ResetPasswordByFirstLoginTokenResponse = {
    resetPasswordByFirstLoginToken?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
    }>;
};
export declare type ResetPasswordByForceResetTokenVariables = Exact<{
    token: Scalars['String'];
    oldPassword: Scalars['String'];
    newPassword: Scalars['String'];
}>;
export declare type ResetPasswordByForceResetTokenResponse = {
    resetPasswordByForceResetToken?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
    }>;
};
export declare type RevokeRoleVariables = Exact<{
    namespace?: Maybe<Scalars['String']>;
    roleCode?: Maybe<Scalars['String']>;
    roleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
    userIds?: Maybe<Array<Scalars['String']>>;
    groupCodes?: Maybe<Array<Scalars['String']>>;
    nodeCodes?: Maybe<Array<Scalars['String']>>;
}>;
export declare type RevokeRoleResponse = {
    revokeRole?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
    }>;
};
export declare type SendEmailVariables = Exact<{
    email: Scalars['String'];
    scene: EmailScene;
}>;
export declare type SendEmailResponse = {
    sendEmail: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type SendFirstLoginVerifyEmailVariables = Exact<{
    userId: Scalars['String'];
    appId: Scalars['String'];
}>;
export declare type SendFirstLoginVerifyEmailResponse = {
    sendFirstLoginVerifyEmail: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type SetMainDepartmentVariables = Exact<{
    userId: Scalars['String'];
    departmentId?: Maybe<Scalars['String']>;
}>;
export declare type SetMainDepartmentResponse = {
    setMainDepartment: {
        message?: Maybe<string>;
        code?: Maybe<number>;
    };
};
export declare type SetUdfVariables = Exact<{
    targetType: UdfTargetType;
    key: Scalars['String'];
    dataType: UdfDataType;
    label: Scalars['String'];
    options?: Maybe<Scalars['String']>;
}>;
export declare type SetUdfResponse = {
    setUdf: {
        targetType: UdfTargetType;
        dataType: UdfDataType;
        key: string;
        label?: Maybe<string>;
        options?: Maybe<string>;
    };
};
export declare type SetUdfValueBatchVariables = Exact<{
    targetType: UdfTargetType;
    input: Array<SetUdfValueBatchInput>;
}>;
export declare type SetUdfValueBatchResponse = {
    setUdfValueBatch?: Maybe<{
        code?: Maybe<number>;
        message?: Maybe<string>;
    }>;
};
export declare type SetUdvVariables = Exact<{
    targetType: UdfTargetType;
    targetId: Scalars['String'];
    key: Scalars['String'];
    value: Scalars['String'];
}>;
export declare type SetUdvResponse = {
    setUdv?: Maybe<Array<{
        key: string;
        dataType: UdfDataType;
        value: string;
        label?: Maybe<string>;
    }>>;
};
export declare type SetUdvBatchVariables = Exact<{
    targetType: UdfTargetType;
    targetId: Scalars['String'];
    udvList?: Maybe<Array<UserDefinedDataInput>>;
}>;
export declare type SetUdvBatchResponse = {
    setUdvBatch?: Maybe<Array<{
        key: string;
        dataType: UdfDataType;
        value: string;
        label?: Maybe<string>;
    }>>;
};
export declare type UnbindEmailVariables = Exact<{
    [key: string]: never;
}>;
export declare type UnbindEmailResponse = {
    unbindEmail: {
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    };
};
export declare type UnbindPhoneVariables = Exact<{
    [key: string]: never;
}>;
export declare type UnbindPhoneResponse = {
    unbindPhone: {
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    };
};
export declare type UpdateEmailVariables = Exact<{
    email: Scalars['String'];
    emailCode: Scalars['String'];
    oldEmail?: Maybe<Scalars['String']>;
    oldEmailCode?: Maybe<Scalars['String']>;
}>;
export declare type UpdateEmailResponse = {
    updateEmail: {
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    };
};
export declare type UpdateFunctionVariables = Exact<{
    input: UpdateFunctionInput;
}>;
export declare type UpdateFunctionResponse = {
    updateFunction: {
        id: string;
        name: string;
        sourceCode: string;
        description?: Maybe<string>;
        url?: Maybe<string>;
    };
};
export declare type UpdateGroupVariables = Exact<{
    code: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    newCode?: Maybe<Scalars['String']>;
}>;
export declare type UpdateGroupResponse = {
    updateGroup: {
        code: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
    };
};
export declare type UpdateNodeVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
    includeChildrenNodes?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
}>;
export declare type UpdateNodeResponse = {
    updateNode: {
        id: string;
        orgId?: Maybe<string>;
        name: string;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        path: Array<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
        users: {
            totalCount: number;
        };
    };
};
export declare type UpdatePasswordVariables = Exact<{
    newPassword: Scalars['String'];
    oldPassword?: Maybe<Scalars['String']>;
}>;
export declare type UpdatePasswordResponse = {
    updatePassword: {
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    };
};
export declare type UpdatePhoneVariables = Exact<{
    phone: Scalars['String'];
    phoneCode: Scalars['String'];
    oldPhone?: Maybe<Scalars['String']>;
    oldPhoneCode?: Maybe<Scalars['String']>;
    phoneCountryCode?: Maybe<Scalars['String']>;
    oldPhoneCountryCode?: Maybe<Scalars['String']>;
}>;
export declare type UpdatePhoneResponse = {
    updatePhone: {
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    };
};
export declare type UpdatePolicyVariables = Exact<{
    namespace?: Maybe<Scalars['String']>;
    code: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    statements?: Maybe<Array<PolicyStatementInput>>;
    newCode?: Maybe<Scalars['String']>;
}>;
export declare type UpdatePolicyResponse = {
    updatePolicy: {
        namespace: string;
        code: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        statements: Array<{
            resource: string;
            actions: Array<string>;
            effect?: Maybe<PolicyEffect>;
            condition?: Maybe<Array<{
                param: string;
                operator: string;
                value: any;
            }>>;
        }>;
    };
};
export declare type UpdateRoleVariables = Exact<{
    code: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    newCode?: Maybe<Scalars['String']>;
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type UpdateRoleResponse = {
    updateRole: {
        id: string;
        namespace: string;
        code: string;
        arn: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        parent?: Maybe<{
            namespace: string;
            code: string;
            arn: string;
            description?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
        }>;
    };
};
export declare type UpdateUserVariables = Exact<{
    id?: Maybe<Scalars['String']>;
    input: UpdateUserInput;
    emailToken?: Maybe<Scalars['String']>;
    phoneToken?: Maybe<Scalars['String']>;
}>;
export declare type UpdateUserResponse = {
    updateUser: {
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    };
};
export declare type UpdateUserpoolVariables = Exact<{
    input: UpdateUserpoolInput;
}>;
export declare type UpdateUserpoolResponse = {
    updateUserpool: {
        id: string;
        name: string;
        domain: string;
        description?: Maybe<string>;
        secret: string;
        jwtSecret: string;
        logo: string;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        emailVerifiedDefault: boolean;
        sendWelcomeEmail: boolean;
        registerDisabled: boolean;
        appSsoEnabled: boolean;
        showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>;
        allowedOrigins?: Maybe<string>;
        tokenExpiresAfter?: Maybe<number>;
        isDeleted?: Maybe<boolean>;
        loginFailStrategy?: Maybe<string>;
        packageType?: Maybe<number>;
        useCustomUserStore?: Maybe<boolean>;
        loginRequireEmailVerified?: Maybe<boolean>;
        verifyCodeLength?: Maybe<number>;
        verifyCodeMaxAttempts?: Maybe<number>;
        userpoolTypes?: Maybe<Array<{
            code?: Maybe<string>;
            name?: Maybe<string>;
            description?: Maybe<string>;
            image?: Maybe<string>;
            sdks?: Maybe<Array<Maybe<string>>>;
        }>>;
        frequentRegisterCheck?: Maybe<{
            timeInterval?: Maybe<number>;
            limit?: Maybe<number>;
            enabled?: Maybe<boolean>;
        }>;
        loginFailCheck?: Maybe<{
            timeInterval?: Maybe<number>;
            limit?: Maybe<number>;
            enabled?: Maybe<boolean>;
        }>;
        loginPasswordFailCheck?: Maybe<{
            timeInterval?: Maybe<number>;
            limit?: Maybe<number>;
            enabled?: Maybe<boolean>;
        }>;
        changePhoneStrategy?: Maybe<{
            verifyOldPhone?: Maybe<boolean>;
        }>;
        changeEmailStrategy?: Maybe<{
            verifyOldEmail?: Maybe<boolean>;
        }>;
        qrcodeLoginStrategy?: Maybe<{
            qrcodeExpiresAfter?: Maybe<number>;
            returnFullUserInfo?: Maybe<boolean>;
            allowExchangeUserInfoFromBrowser?: Maybe<boolean>;
            ticketExpiresAfter?: Maybe<number>;
        }>;
        app2WxappLoginStrategy?: Maybe<{
            ticketExpriresAfter?: Maybe<number>;
            ticketExchangeUserInfoNeedSecret?: Maybe<boolean>;
        }>;
        whitelist?: Maybe<{
            phoneEnabled?: Maybe<boolean>;
            emailEnabled?: Maybe<boolean>;
            usernameEnabled?: Maybe<boolean>;
        }>;
        customSMSProvider?: Maybe<{
            enabled?: Maybe<boolean>;
            provider?: Maybe<string>;
            config?: Maybe<string>;
        }>;
    };
};
export declare type AccessTokenVariables = Exact<{
    userPoolId: Scalars['String'];
    secret: Scalars['String'];
}>;
export declare type AccessTokenResponse = {
    accessToken: {
        accessToken?: Maybe<string>;
        exp?: Maybe<number>;
        iat?: Maybe<number>;
    };
};
export declare type ArchivedUsersVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}>;
export declare type ArchivedUsersResponse = {
    archivedUsers: {
        totalCount: number;
        list: Array<{
            id: string;
            arn: string;
            status?: Maybe<UserStatus>;
            userPoolId: string;
            username?: Maybe<string>;
            email?: Maybe<string>;
            emailVerified?: Maybe<boolean>;
            phone?: Maybe<string>;
            phoneVerified?: Maybe<boolean>;
            unionid?: Maybe<string>;
            openid?: Maybe<string>;
            nickname?: Maybe<string>;
            registerSource?: Maybe<Array<string>>;
            photo?: Maybe<string>;
            password?: Maybe<string>;
            oauth?: Maybe<string>;
            token?: Maybe<string>;
            tokenExpiredAt?: Maybe<string>;
            loginsCount?: Maybe<number>;
            lastLogin?: Maybe<string>;
            lastIP?: Maybe<string>;
            signedUp?: Maybe<string>;
            blocked?: Maybe<boolean>;
            isDeleted?: Maybe<boolean>;
            device?: Maybe<string>;
            browser?: Maybe<string>;
            company?: Maybe<string>;
            name?: Maybe<string>;
            givenName?: Maybe<string>;
            familyName?: Maybe<string>;
            middleName?: Maybe<string>;
            profile?: Maybe<string>;
            preferredUsername?: Maybe<string>;
            website?: Maybe<string>;
            gender?: Maybe<string>;
            birthdate?: Maybe<string>;
            zoneinfo?: Maybe<string>;
            locale?: Maybe<string>;
            address?: Maybe<string>;
            formatted?: Maybe<string>;
            streetAddress?: Maybe<string>;
            locality?: Maybe<string>;
            region?: Maybe<string>;
            postalCode?: Maybe<string>;
            city?: Maybe<string>;
            province?: Maybe<string>;
            country?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            externalId?: Maybe<string>;
            phoneCountryCode?: Maybe<string>;
        }>;
    };
};
export declare type AuthorizedTargetsVariables = Exact<{
    namespace: Scalars['String'];
    resourceType: ResourceType;
    resource: Scalars['String'];
    targetType?: Maybe<PolicyAssignmentTargetType>;
    actions?: Maybe<AuthorizedTargetsActionsInput>;
}>;
export declare type AuthorizedTargetsResponse = {
    authorizedTargets?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
            targetType?: Maybe<PolicyAssignmentTargetType>;
            targetIdentifier?: Maybe<string>;
            actions?: Maybe<Array<string>>;
        }>>>;
    }>;
};
export declare type CheckLoginStatusVariables = Exact<{
    token?: Maybe<Scalars['String']>;
}>;
export declare type CheckLoginStatusResponse = {
    checkLoginStatus?: Maybe<{
        code?: Maybe<number>;
        message?: Maybe<string>;
        status?: Maybe<boolean>;
        exp?: Maybe<number>;
        iat?: Maybe<number>;
        data?: Maybe<{
            id?: Maybe<string>;
            userPoolId?: Maybe<string>;
            arn?: Maybe<string>;
        }>;
    }>;
};
export declare type CheckPasswordStrengthVariables = Exact<{
    password: Scalars['String'];
}>;
export declare type CheckPasswordStrengthResponse = {
    checkPasswordStrength: {
        valid: boolean;
        message?: Maybe<string>;
    };
};
export declare type ChildrenNodesVariables = Exact<{
    nodeId: Scalars['String'];
}>;
export declare type ChildrenNodesResponse = {
    childrenNodes: Array<{
        id: string;
        orgId?: Maybe<string>;
        name: string;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        path: Array<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
    }>;
};
export declare type EmailTemplatesVariables = Exact<{
    [key: string]: never;
}>;
export declare type EmailTemplatesResponse = {
    emailTemplates: Array<{
        type: EmailTemplateType;
        name: string;
        subject: string;
        sender: string;
        content: string;
        redirectTo?: Maybe<string>;
        hasURL?: Maybe<boolean>;
        expiresIn?: Maybe<number>;
        enabled?: Maybe<boolean>;
        isSystem?: Maybe<boolean>;
    }>;
};
export declare type FindUserVariables = Exact<{
    email?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
    externalId?: Maybe<Scalars['String']>;
    identity?: Maybe<FindUserByIdentityInput>;
}>;
export declare type FindUserResponse = {
    findUser?: Maybe<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
    }>;
};
export declare type FindUserWithCustomDataVariables = Exact<{
    email?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
    externalId?: Maybe<Scalars['String']>;
}>;
export declare type FindUserWithCustomDataResponse = {
    findUser?: Maybe<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
        customData?: Maybe<Array<Maybe<{
            key: string;
            value?: Maybe<string>;
            dataType: UdfDataType;
            label?: Maybe<string>;
        }>>>;
    }>;
};
export declare type FunctionVariables = Exact<{
    id?: Maybe<Scalars['String']>;
}>;
export declare type FunctionResponse = {
    function?: Maybe<{
        id: string;
        name: string;
        sourceCode: string;
        description?: Maybe<string>;
        url?: Maybe<string>;
    }>;
};
export declare type FunctionsVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
}>;
export declare type FunctionsResponse = {
    functions: {
        totalCount: number;
        list: Array<{
            id: string;
            name: string;
            sourceCode: string;
            description?: Maybe<string>;
            url?: Maybe<string>;
        }>;
    };
};
export declare type GetUserDepartmentsVariables = Exact<{
    id: Scalars['String'];
    orgId?: Maybe<Scalars['String']>;
}>;
export declare type GetUserDepartmentsResponse = {
    user?: Maybe<{
        departments?: Maybe<{
            totalCount: number;
            list: Array<{
                isMainDepartment: boolean;
                joinedAt?: Maybe<string>;
                department: {
                    id: string;
                    orgId?: Maybe<string>;
                    name: string;
                    nameI18n?: Maybe<string>;
                    description?: Maybe<string>;
                    descriptionI18n?: Maybe<string>;
                    order?: Maybe<number>;
                    code?: Maybe<string>;
                    root?: Maybe<boolean>;
                    depth?: Maybe<number>;
                    path: Array<string>;
                    codePath: Array<Maybe<string>>;
                    namePath: Array<string>;
                    createdAt?: Maybe<string>;
                    updatedAt?: Maybe<string>;
                    children?: Maybe<Array<string>>;
                };
            }>;
        }>;
    }>;
};
export declare type GetUserGroupsVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type GetUserGroupsResponse = {
    user?: Maybe<{
        groups?: Maybe<{
            totalCount: number;
            list: Array<{
                code: string;
                name: string;
                description?: Maybe<string>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
            }>;
        }>;
    }>;
};
export declare type GetUserRolesVariables = Exact<{
    id: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type GetUserRolesResponse = {
    user?: Maybe<{
        roles?: Maybe<{
            totalCount: number;
            list: Array<{
                id: string;
                code: string;
                namespace: string;
                arn: string;
                description?: Maybe<string>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
                parent?: Maybe<{
                    code: string;
                    namespace: string;
                    arn: string;
                    description?: Maybe<string>;
                    createdAt?: Maybe<string>;
                    updatedAt?: Maybe<string>;
                }>;
            }>;
        }>;
    }>;
};
export declare type GroupVariables = Exact<{
    code: Scalars['String'];
}>;
export declare type GroupResponse = {
    group?: Maybe<{
        code: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
    }>;
};
export declare type GroupWithUsersVariables = Exact<{
    code: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}>;
export declare type GroupWithUsersResponse = {
    group?: Maybe<{
        users: {
            totalCount: number;
            list: Array<{
                id: string;
                arn: string;
                status?: Maybe<UserStatus>;
                userPoolId: string;
                username?: Maybe<string>;
                email?: Maybe<string>;
                emailVerified?: Maybe<boolean>;
                phone?: Maybe<string>;
                phoneVerified?: Maybe<boolean>;
                unionid?: Maybe<string>;
                openid?: Maybe<string>;
                nickname?: Maybe<string>;
                registerSource?: Maybe<Array<string>>;
                photo?: Maybe<string>;
                password?: Maybe<string>;
                oauth?: Maybe<string>;
                token?: Maybe<string>;
                tokenExpiredAt?: Maybe<string>;
                loginsCount?: Maybe<number>;
                lastLogin?: Maybe<string>;
                lastIP?: Maybe<string>;
                signedUp?: Maybe<string>;
                blocked?: Maybe<boolean>;
                isDeleted?: Maybe<boolean>;
                device?: Maybe<string>;
                browser?: Maybe<string>;
                company?: Maybe<string>;
                name?: Maybe<string>;
                givenName?: Maybe<string>;
                familyName?: Maybe<string>;
                middleName?: Maybe<string>;
                profile?: Maybe<string>;
                preferredUsername?: Maybe<string>;
                website?: Maybe<string>;
                gender?: Maybe<string>;
                birthdate?: Maybe<string>;
                zoneinfo?: Maybe<string>;
                locale?: Maybe<string>;
                address?: Maybe<string>;
                formatted?: Maybe<string>;
                streetAddress?: Maybe<string>;
                locality?: Maybe<string>;
                region?: Maybe<string>;
                postalCode?: Maybe<string>;
                city?: Maybe<string>;
                province?: Maybe<string>;
                country?: Maybe<string>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
                externalId?: Maybe<string>;
                phoneCountryCode?: Maybe<string>;
            }>;
        };
    }>;
};
export declare type GroupWithUsersWithCustomDataVariables = Exact<{
    code: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}>;
export declare type GroupWithUsersWithCustomDataResponse = {
    group?: Maybe<{
        users: {
            totalCount: number;
            list: Array<{
                id: string;
                arn: string;
                status?: Maybe<UserStatus>;
                userPoolId: string;
                username?: Maybe<string>;
                email?: Maybe<string>;
                emailVerified?: Maybe<boolean>;
                phone?: Maybe<string>;
                phoneVerified?: Maybe<boolean>;
                unionid?: Maybe<string>;
                openid?: Maybe<string>;
                nickname?: Maybe<string>;
                registerSource?: Maybe<Array<string>>;
                photo?: Maybe<string>;
                password?: Maybe<string>;
                oauth?: Maybe<string>;
                token?: Maybe<string>;
                tokenExpiredAt?: Maybe<string>;
                loginsCount?: Maybe<number>;
                lastLogin?: Maybe<string>;
                lastIP?: Maybe<string>;
                signedUp?: Maybe<string>;
                blocked?: Maybe<boolean>;
                isDeleted?: Maybe<boolean>;
                device?: Maybe<string>;
                browser?: Maybe<string>;
                company?: Maybe<string>;
                name?: Maybe<string>;
                givenName?: Maybe<string>;
                familyName?: Maybe<string>;
                middleName?: Maybe<string>;
                profile?: Maybe<string>;
                preferredUsername?: Maybe<string>;
                website?: Maybe<string>;
                gender?: Maybe<string>;
                birthdate?: Maybe<string>;
                zoneinfo?: Maybe<string>;
                locale?: Maybe<string>;
                address?: Maybe<string>;
                formatted?: Maybe<string>;
                streetAddress?: Maybe<string>;
                locality?: Maybe<string>;
                region?: Maybe<string>;
                postalCode?: Maybe<string>;
                city?: Maybe<string>;
                province?: Maybe<string>;
                country?: Maybe<string>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
                externalId?: Maybe<string>;
                phoneCountryCode?: Maybe<string>;
                customData?: Maybe<Array<Maybe<{
                    key: string;
                    value?: Maybe<string>;
                    dataType: UdfDataType;
                    label?: Maybe<string>;
                }>>>;
            }>;
        };
    }>;
};
export declare type GroupsVariables = Exact<{
    userId?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
}>;
export declare type GroupsResponse = {
    groups: {
        totalCount: number;
        list: Array<{
            code: string;
            name: string;
            description?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
        }>;
    };
};
export declare type IsActionAllowedVariables = Exact<{
    resource: Scalars['String'];
    action: Scalars['String'];
    userId: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type IsActionAllowedResponse = {
    isActionAllowed: boolean;
};
export declare type IsActionDeniedVariables = Exact<{
    resource: Scalars['String'];
    action: Scalars['String'];
    userId: Scalars['String'];
}>;
export declare type IsActionDeniedResponse = {
    isActionDenied: boolean;
};
export declare type IsDomainAvaliableVariables = Exact<{
    domain: Scalars['String'];
}>;
export declare type IsDomainAvaliableResponse = {
    isDomainAvaliable?: Maybe<boolean>;
};
export declare type IsRootNodeVariables = Exact<{
    nodeId: Scalars['String'];
    orgId: Scalars['String'];
}>;
export declare type IsRootNodeResponse = {
    isRootNode?: Maybe<boolean>;
};
export declare type IsUserExistsVariables = Exact<{
    email?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
    externalId?: Maybe<Scalars['String']>;
}>;
export declare type IsUserExistsResponse = {
    isUserExists?: Maybe<boolean>;
};
export declare type AuthorizedResourcesVariables = Exact<{
    targetType?: Maybe<PolicyAssignmentTargetType>;
    targetIdentifier?: Maybe<Scalars['String']>;
    namespace?: Maybe<Scalars['String']>;
    resourceType?: Maybe<Scalars['String']>;
}>;
export declare type AuthorizedResourcesResponse = {
    authorizedResources?: Maybe<{
        totalCount: number;
        list: Array<{
            code: string;
            type?: Maybe<ResourceType>;
            actions?: Maybe<Array<string>>;
            apiIdentifier?: Maybe<string>;
        }>;
    }>;
};
export declare type ListGroupAuthorizedResourcesVariables = Exact<{
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
    resourceType?: Maybe<Scalars['String']>;
}>;
export declare type ListGroupAuthorizedResourcesResponse = {
    group?: Maybe<{
        authorizedResources?: Maybe<{
            totalCount: number;
            list: Array<{
                code: string;
                type?: Maybe<ResourceType>;
                actions?: Maybe<Array<string>>;
                apiIdentifier?: Maybe<string>;
            }>;
        }>;
    }>;
};
export declare type ListNodeByCodeAuthorizedResourcesVariables = Exact<{
    orgId: Scalars['String'];
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
    resourceType?: Maybe<Scalars['String']>;
}>;
export declare type ListNodeByCodeAuthorizedResourcesResponse = {
    nodeByCode?: Maybe<{
        authorizedResources?: Maybe<{
            totalCount: number;
            list: Array<{
                code: string;
                type?: Maybe<ResourceType>;
                actions?: Maybe<Array<string>>;
                apiIdentifier?: Maybe<string>;
            }>;
        }>;
    }>;
};
export declare type ListNodeByIdAuthorizedResourcesVariables = Exact<{
    id: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
    resourceType?: Maybe<Scalars['String']>;
}>;
export declare type ListNodeByIdAuthorizedResourcesResponse = {
    nodeById?: Maybe<{
        authorizedResources?: Maybe<{
            totalCount: number;
            list: Array<{
                code: string;
                type?: Maybe<ResourceType>;
                actions?: Maybe<Array<string>>;
                apiIdentifier?: Maybe<string>;
            }>;
        }>;
    }>;
};
export declare type ListRoleAuthorizedResourcesVariables = Exact<{
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
    resourceType?: Maybe<Scalars['String']>;
}>;
export declare type ListRoleAuthorizedResourcesResponse = {
    role?: Maybe<{
        authorizedResources?: Maybe<{
            totalCount: number;
            list: Array<{
                code: string;
                type?: Maybe<ResourceType>;
                actions?: Maybe<Array<string>>;
                apiIdentifier?: Maybe<string>;
            }>;
        }>;
    }>;
};
export declare type ListUserAuthorizedResourcesVariables = Exact<{
    id: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
    resourceType?: Maybe<Scalars['String']>;
}>;
export declare type ListUserAuthorizedResourcesResponse = {
    user?: Maybe<{
        authorizedResources?: Maybe<{
            totalCount: number;
            list: Array<{
                code: string;
                type?: Maybe<ResourceType>;
                actions?: Maybe<Array<string>>;
                apiIdentifier?: Maybe<string>;
            }>;
        }>;
    }>;
};
export declare type NodeByCodeVariables = Exact<{
    orgId: Scalars['String'];
    code: Scalars['String'];
}>;
export declare type NodeByCodeResponse = {
    nodeByCode?: Maybe<{
        id: string;
        orgId?: Maybe<string>;
        name: string;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        path: Array<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
    }>;
};
export declare type NodeByCodeWithMembersVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
    includeChildrenNodes?: Maybe<Scalars['Boolean']>;
    orgId: Scalars['String'];
    code: Scalars['String'];
}>;
export declare type NodeByCodeWithMembersResponse = {
    nodeByCode?: Maybe<{
        id: string;
        orgId?: Maybe<string>;
        name: string;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
        users: {
            totalCount: number;
            list: Array<{
                id: string;
                arn: string;
                userPoolId: string;
                status?: Maybe<UserStatus>;
                username?: Maybe<string>;
                email?: Maybe<string>;
                emailVerified?: Maybe<boolean>;
                phone?: Maybe<string>;
                phoneVerified?: Maybe<boolean>;
                unionid?: Maybe<string>;
                openid?: Maybe<string>;
                nickname?: Maybe<string>;
                registerSource?: Maybe<Array<string>>;
                photo?: Maybe<string>;
                password?: Maybe<string>;
                oauth?: Maybe<string>;
                token?: Maybe<string>;
                tokenExpiredAt?: Maybe<string>;
                loginsCount?: Maybe<number>;
                lastLogin?: Maybe<string>;
                lastIP?: Maybe<string>;
                signedUp?: Maybe<string>;
                blocked?: Maybe<boolean>;
                isDeleted?: Maybe<boolean>;
                device?: Maybe<string>;
                browser?: Maybe<string>;
                company?: Maybe<string>;
                name?: Maybe<string>;
                givenName?: Maybe<string>;
                familyName?: Maybe<string>;
                middleName?: Maybe<string>;
                profile?: Maybe<string>;
                preferredUsername?: Maybe<string>;
                website?: Maybe<string>;
                gender?: Maybe<string>;
                birthdate?: Maybe<string>;
                zoneinfo?: Maybe<string>;
                locale?: Maybe<string>;
                address?: Maybe<string>;
                formatted?: Maybe<string>;
                streetAddress?: Maybe<string>;
                locality?: Maybe<string>;
                region?: Maybe<string>;
                postalCode?: Maybe<string>;
                city?: Maybe<string>;
                province?: Maybe<string>;
                country?: Maybe<string>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
                externalId?: Maybe<string>;
                phoneCountryCode?: Maybe<string>;
            }>;
        };
    }>;
};
export declare type NodeByIdVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type NodeByIdResponse = {
    nodeById?: Maybe<{
        id: string;
        orgId?: Maybe<string>;
        name: string;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        path: Array<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
    }>;
};
export declare type NodeByIdWithMembersVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
    includeChildrenNodes?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
}>;
export declare type NodeByIdWithMembersResponse = {
    nodeById?: Maybe<{
        id: string;
        orgId?: Maybe<string>;
        name: string;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
        users: {
            totalCount: number;
            list: Array<{
                id: string;
                arn: string;
                userPoolId: string;
                status?: Maybe<UserStatus>;
                username?: Maybe<string>;
                email?: Maybe<string>;
                emailVerified?: Maybe<boolean>;
                phone?: Maybe<string>;
                phoneVerified?: Maybe<boolean>;
                unionid?: Maybe<string>;
                openid?: Maybe<string>;
                nickname?: Maybe<string>;
                registerSource?: Maybe<Array<string>>;
                photo?: Maybe<string>;
                password?: Maybe<string>;
                oauth?: Maybe<string>;
                token?: Maybe<string>;
                tokenExpiredAt?: Maybe<string>;
                loginsCount?: Maybe<number>;
                lastLogin?: Maybe<string>;
                lastIP?: Maybe<string>;
                signedUp?: Maybe<string>;
                blocked?: Maybe<boolean>;
                isDeleted?: Maybe<boolean>;
                device?: Maybe<string>;
                browser?: Maybe<string>;
                company?: Maybe<string>;
                name?: Maybe<string>;
                givenName?: Maybe<string>;
                familyName?: Maybe<string>;
                middleName?: Maybe<string>;
                profile?: Maybe<string>;
                preferredUsername?: Maybe<string>;
                website?: Maybe<string>;
                gender?: Maybe<string>;
                birthdate?: Maybe<string>;
                zoneinfo?: Maybe<string>;
                locale?: Maybe<string>;
                address?: Maybe<string>;
                formatted?: Maybe<string>;
                streetAddress?: Maybe<string>;
                locality?: Maybe<string>;
                region?: Maybe<string>;
                postalCode?: Maybe<string>;
                city?: Maybe<string>;
                province?: Maybe<string>;
                country?: Maybe<string>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
                externalId?: Maybe<string>;
                phoneCountryCode?: Maybe<string>;
            }>;
        };
    }>;
};
export declare type OrgVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type OrgResponse = {
    org: {
        id: string;
        rootNode: {
            id: string;
            orgId?: Maybe<string>;
            name: string;
            nameI18n?: Maybe<string>;
            description?: Maybe<string>;
            descriptionI18n?: Maybe<string>;
            order?: Maybe<number>;
            code?: Maybe<string>;
            root?: Maybe<boolean>;
            depth?: Maybe<number>;
            path: Array<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children?: Maybe<Array<string>>;
        };
        nodes: Array<{
            id: string;
            orgId?: Maybe<string>;
            name: string;
            nameI18n?: Maybe<string>;
            description?: Maybe<string>;
            descriptionI18n?: Maybe<string>;
            order?: Maybe<number>;
            code?: Maybe<string>;
            root?: Maybe<boolean>;
            depth?: Maybe<number>;
            path: Array<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children?: Maybe<Array<string>>;
        }>;
    };
};
export declare type OrgsVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
}>;
export declare type OrgsResponse = {
    orgs: {
        totalCount: number;
        list: Array<{
            id: string;
            rootNode: {
                id: string;
                name: string;
                nameI18n?: Maybe<string>;
                path: Array<string>;
                description?: Maybe<string>;
                descriptionI18n?: Maybe<string>;
                order?: Maybe<number>;
                code?: Maybe<string>;
                root?: Maybe<boolean>;
                depth?: Maybe<number>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
                children?: Maybe<Array<string>>;
            };
            nodes: Array<{
                id: string;
                name: string;
                path: Array<string>;
                nameI18n?: Maybe<string>;
                description?: Maybe<string>;
                descriptionI18n?: Maybe<string>;
                order?: Maybe<number>;
                code?: Maybe<string>;
                root?: Maybe<boolean>;
                depth?: Maybe<number>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
                children?: Maybe<Array<string>>;
            }>;
        }>;
    };
};
export declare type PoliciesVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type PoliciesResponse = {
    policies: {
        totalCount: number;
        list: Array<{
            namespace: string;
            code: string;
            description?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            statements: Array<{
                resource: string;
                actions: Array<string>;
                effect?: Maybe<PolicyEffect>;
                condition?: Maybe<Array<{
                    param: string;
                    operator: string;
                    value: any;
                }>>;
            }>;
        }>;
    };
};
export declare type PolicyVariables = Exact<{
    namespace?: Maybe<Scalars['String']>;
    code: Scalars['String'];
}>;
export declare type PolicyResponse = {
    policy?: Maybe<{
        namespace: string;
        code: string;
        isDefault: boolean;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        statements: Array<{
            resource: string;
            actions: Array<string>;
            effect?: Maybe<PolicyEffect>;
            condition?: Maybe<Array<{
                param: string;
                operator: string;
                value: any;
            }>>;
        }>;
    }>;
};
export declare type PolicyAssignmentsVariables = Exact<{
    namespace?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    targetType?: Maybe<PolicyAssignmentTargetType>;
    targetIdentifier?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}>;
export declare type PolicyAssignmentsResponse = {
    policyAssignments: {
        totalCount: number;
        list: Array<{
            code: string;
            targetType: PolicyAssignmentTargetType;
            targetIdentifier: string;
        }>;
    };
};
export declare type PolicyWithAssignmentsVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    code: Scalars['String'];
}>;
export declare type PolicyWithAssignmentsResponse = {
    policy?: Maybe<{
        code: string;
        isDefault: boolean;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        assignmentsCount: number;
        statements: Array<{
            resource: string;
            actions: Array<string>;
            effect?: Maybe<PolicyEffect>;
        }>;
        assignments: Array<{
            code: string;
            targetType: PolicyAssignmentTargetType;
            targetIdentifier: string;
        }>;
    }>;
};
export declare type PreviewEmailVariables = Exact<{
    type: EmailTemplateType;
}>;
export declare type PreviewEmailResponse = {
    previewEmail: string;
};
export declare type QiniuUptokenVariables = Exact<{
    type?: Maybe<Scalars['String']>;
}>;
export declare type QiniuUptokenResponse = {
    qiniuUptoken?: Maybe<string>;
};
export declare type QueryMfaVariables = Exact<{
    id?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['String']>;
    userPoolId?: Maybe<Scalars['String']>;
}>;
export declare type QueryMfaResponse = {
    queryMfa?: Maybe<{
        id: string;
        userId: string;
        userPoolId: string;
        enable: boolean;
        secret?: Maybe<string>;
    }>;
};
export declare type RoleVariables = Exact<{
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
}>;
export declare type RoleResponse = {
    role?: Maybe<{
        id: string;
        namespace: string;
        code: string;
        arn: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        parent?: Maybe<{
            namespace: string;
            code: string;
            arn: string;
            description?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
        }>;
    }>;
};
export declare type RoleWithUsersVariables = Exact<{
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}>;
export declare type RoleWithUsersResponse = {
    role?: Maybe<{
        users: {
            totalCount: number;
            list: Array<{
                id: string;
                arn: string;
                status?: Maybe<UserStatus>;
                userPoolId: string;
                username?: Maybe<string>;
                email?: Maybe<string>;
                emailVerified?: Maybe<boolean>;
                phone?: Maybe<string>;
                phoneVerified?: Maybe<boolean>;
                unionid?: Maybe<string>;
                openid?: Maybe<string>;
                nickname?: Maybe<string>;
                registerSource?: Maybe<Array<string>>;
                photo?: Maybe<string>;
                password?: Maybe<string>;
                oauth?: Maybe<string>;
                token?: Maybe<string>;
                tokenExpiredAt?: Maybe<string>;
                loginsCount?: Maybe<number>;
                lastLogin?: Maybe<string>;
                lastIP?: Maybe<string>;
                signedUp?: Maybe<string>;
                blocked?: Maybe<boolean>;
                isDeleted?: Maybe<boolean>;
                device?: Maybe<string>;
                browser?: Maybe<string>;
                company?: Maybe<string>;
                name?: Maybe<string>;
                givenName?: Maybe<string>;
                familyName?: Maybe<string>;
                middleName?: Maybe<string>;
                profile?: Maybe<string>;
                preferredUsername?: Maybe<string>;
                website?: Maybe<string>;
                gender?: Maybe<string>;
                birthdate?: Maybe<string>;
                zoneinfo?: Maybe<string>;
                locale?: Maybe<string>;
                address?: Maybe<string>;
                formatted?: Maybe<string>;
                streetAddress?: Maybe<string>;
                locality?: Maybe<string>;
                region?: Maybe<string>;
                postalCode?: Maybe<string>;
                city?: Maybe<string>;
                province?: Maybe<string>;
                country?: Maybe<string>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
                externalId?: Maybe<string>;
                phoneCountryCode?: Maybe<string>;
            }>;
        };
    }>;
};
export declare type RoleWithUsersWithCustomDataVariables = Exact<{
    code: Scalars['String'];
    namespace?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}>;
export declare type RoleWithUsersWithCustomDataResponse = {
    role?: Maybe<{
        users: {
            totalCount: number;
            list: Array<{
                id: string;
                arn: string;
                status?: Maybe<UserStatus>;
                userPoolId: string;
                username?: Maybe<string>;
                email?: Maybe<string>;
                emailVerified?: Maybe<boolean>;
                phone?: Maybe<string>;
                phoneVerified?: Maybe<boolean>;
                unionid?: Maybe<string>;
                openid?: Maybe<string>;
                nickname?: Maybe<string>;
                registerSource?: Maybe<Array<string>>;
                photo?: Maybe<string>;
                password?: Maybe<string>;
                oauth?: Maybe<string>;
                token?: Maybe<string>;
                tokenExpiredAt?: Maybe<string>;
                loginsCount?: Maybe<number>;
                lastLogin?: Maybe<string>;
                lastIP?: Maybe<string>;
                signedUp?: Maybe<string>;
                blocked?: Maybe<boolean>;
                isDeleted?: Maybe<boolean>;
                device?: Maybe<string>;
                browser?: Maybe<string>;
                company?: Maybe<string>;
                name?: Maybe<string>;
                givenName?: Maybe<string>;
                familyName?: Maybe<string>;
                middleName?: Maybe<string>;
                profile?: Maybe<string>;
                preferredUsername?: Maybe<string>;
                website?: Maybe<string>;
                gender?: Maybe<string>;
                birthdate?: Maybe<string>;
                zoneinfo?: Maybe<string>;
                locale?: Maybe<string>;
                address?: Maybe<string>;
                formatted?: Maybe<string>;
                streetAddress?: Maybe<string>;
                locality?: Maybe<string>;
                region?: Maybe<string>;
                postalCode?: Maybe<string>;
                city?: Maybe<string>;
                province?: Maybe<string>;
                country?: Maybe<string>;
                createdAt?: Maybe<string>;
                updatedAt?: Maybe<string>;
                externalId?: Maybe<string>;
                phoneCountryCode?: Maybe<string>;
                customData?: Maybe<Array<Maybe<{
                    key: string;
                    value?: Maybe<string>;
                    dataType: UdfDataType;
                    label?: Maybe<string>;
                }>>>;
            }>;
        };
    }>;
};
export declare type RolesVariables = Exact<{
    namespace?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
}>;
export declare type RolesResponse = {
    roles: {
        totalCount: number;
        list: Array<{
            id: string;
            namespace: string;
            code: string;
            arn: string;
            description?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
        }>;
    };
};
export declare type RootNodeVariables = Exact<{
    orgId: Scalars['String'];
}>;
export declare type RootNodeResponse = {
    rootNode: {
        id: string;
        orgId?: Maybe<string>;
        name: string;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        path: Array<string>;
        codePath: Array<Maybe<string>>;
        namePath: Array<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
    };
};
export declare type SearchNodesVariables = Exact<{
    keyword: Scalars['String'];
}>;
export declare type SearchNodesResponse = {
    searchNodes: Array<{
        id: string;
        orgId?: Maybe<string>;
        name: string;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        path: Array<string>;
        codePath: Array<Maybe<string>>;
        namePath: Array<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
    }>;
};
export declare type SearchUserVariables = Exact<{
    query: Scalars['String'];
    fields?: Maybe<Array<Maybe<Scalars['String']>>>;
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    departmentOpts?: Maybe<Array<Maybe<SearchUserDepartmentOpt>>>;
    groupOpts?: Maybe<Array<Maybe<SearchUserGroupOpt>>>;
    roleOpts?: Maybe<Array<Maybe<SearchUserRoleOpt>>>;
}>;
export declare type SearchUserResponse = {
    searchUser: {
        totalCount: number;
        list: Array<{
            id: string;
            arn: string;
            userPoolId: string;
            status?: Maybe<UserStatus>;
            username?: Maybe<string>;
            email?: Maybe<string>;
            emailVerified?: Maybe<boolean>;
            phone?: Maybe<string>;
            phoneVerified?: Maybe<boolean>;
            unionid?: Maybe<string>;
            openid?: Maybe<string>;
            nickname?: Maybe<string>;
            registerSource?: Maybe<Array<string>>;
            photo?: Maybe<string>;
            password?: Maybe<string>;
            oauth?: Maybe<string>;
            token?: Maybe<string>;
            tokenExpiredAt?: Maybe<string>;
            loginsCount?: Maybe<number>;
            lastLogin?: Maybe<string>;
            lastIP?: Maybe<string>;
            signedUp?: Maybe<string>;
            blocked?: Maybe<boolean>;
            isDeleted?: Maybe<boolean>;
            device?: Maybe<string>;
            browser?: Maybe<string>;
            company?: Maybe<string>;
            name?: Maybe<string>;
            givenName?: Maybe<string>;
            familyName?: Maybe<string>;
            middleName?: Maybe<string>;
            profile?: Maybe<string>;
            preferredUsername?: Maybe<string>;
            website?: Maybe<string>;
            gender?: Maybe<string>;
            birthdate?: Maybe<string>;
            zoneinfo?: Maybe<string>;
            locale?: Maybe<string>;
            address?: Maybe<string>;
            formatted?: Maybe<string>;
            streetAddress?: Maybe<string>;
            locality?: Maybe<string>;
            region?: Maybe<string>;
            postalCode?: Maybe<string>;
            city?: Maybe<string>;
            province?: Maybe<string>;
            country?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            externalId?: Maybe<string>;
            phoneCountryCode?: Maybe<string>;
        }>;
    };
};
export declare type SearchUserWithCustomDataVariables = Exact<{
    query: Scalars['String'];
    fields?: Maybe<Array<Maybe<Scalars['String']>>>;
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    departmentOpts?: Maybe<Array<Maybe<SearchUserDepartmentOpt>>>;
    groupOpts?: Maybe<Array<Maybe<SearchUserGroupOpt>>>;
    roleOpts?: Maybe<Array<Maybe<SearchUserRoleOpt>>>;
}>;
export declare type SearchUserWithCustomDataResponse = {
    searchUser: {
        totalCount: number;
        list: Array<{
            id: string;
            arn: string;
            userPoolId: string;
            status?: Maybe<UserStatus>;
            username?: Maybe<string>;
            email?: Maybe<string>;
            emailVerified?: Maybe<boolean>;
            phone?: Maybe<string>;
            phoneVerified?: Maybe<boolean>;
            unionid?: Maybe<string>;
            openid?: Maybe<string>;
            nickname?: Maybe<string>;
            registerSource?: Maybe<Array<string>>;
            photo?: Maybe<string>;
            password?: Maybe<string>;
            oauth?: Maybe<string>;
            token?: Maybe<string>;
            tokenExpiredAt?: Maybe<string>;
            loginsCount?: Maybe<number>;
            lastLogin?: Maybe<string>;
            lastIP?: Maybe<string>;
            signedUp?: Maybe<string>;
            blocked?: Maybe<boolean>;
            isDeleted?: Maybe<boolean>;
            device?: Maybe<string>;
            browser?: Maybe<string>;
            company?: Maybe<string>;
            name?: Maybe<string>;
            givenName?: Maybe<string>;
            familyName?: Maybe<string>;
            middleName?: Maybe<string>;
            profile?: Maybe<string>;
            preferredUsername?: Maybe<string>;
            website?: Maybe<string>;
            gender?: Maybe<string>;
            birthdate?: Maybe<string>;
            zoneinfo?: Maybe<string>;
            locale?: Maybe<string>;
            address?: Maybe<string>;
            formatted?: Maybe<string>;
            streetAddress?: Maybe<string>;
            locality?: Maybe<string>;
            region?: Maybe<string>;
            postalCode?: Maybe<string>;
            city?: Maybe<string>;
            province?: Maybe<string>;
            country?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            externalId?: Maybe<string>;
            phoneCountryCode?: Maybe<string>;
            customData?: Maybe<Array<Maybe<{
                key: string;
                value?: Maybe<string>;
                dataType: UdfDataType;
                label?: Maybe<string>;
            }>>>;
        }>;
    };
};
export declare type TemplateCodeVariables = Exact<{
    [key: string]: never;
}>;
export declare type TemplateCodeResponse = {
    templateCode: string;
};
export declare type UdfVariables = Exact<{
    targetType: UdfTargetType;
}>;
export declare type UdfResponse = {
    udf: Array<{
        targetType: UdfTargetType;
        dataType: UdfDataType;
        key: string;
        label?: Maybe<string>;
        options?: Maybe<string>;
    }>;
};
export declare type UdfValueBatchVariables = Exact<{
    targetType: UdfTargetType;
    targetIds: Array<Scalars['String']>;
}>;
export declare type UdfValueBatchResponse = {
    udfValueBatch: Array<{
        targetId: string;
        data: Array<{
            key: string;
            dataType: UdfDataType;
            value: string;
            label?: Maybe<string>;
        }>;
    }>;
};
export declare type UdvVariables = Exact<{
    targetType: UdfTargetType;
    targetId: Scalars['String'];
}>;
export declare type UdvResponse = {
    udv: Array<{
        key: string;
        dataType: UdfDataType;
        value: string;
        label?: Maybe<string>;
    }>;
};
export declare type UserVariables = Exact<{
    id?: Maybe<Scalars['String']>;
}>;
export declare type UserResponse = {
    user?: Maybe<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
        identities?: Maybe<Array<Maybe<{
            openid?: Maybe<string>;
            userIdInIdp?: Maybe<string>;
            userId?: Maybe<string>;
            connectionId?: Maybe<string>;
            isSocial?: Maybe<boolean>;
            provider?: Maybe<string>;
            type?: Maybe<string>;
            userPoolId?: Maybe<string>;
            extIdpId?: Maybe<string>;
        }>>>;
        customData?: Maybe<Array<Maybe<{
            key: string;
            value?: Maybe<string>;
            dataType: UdfDataType;
            label?: Maybe<string>;
        }>>>;
    }>;
};
export declare type UserBatchVariables = Exact<{
    ids: Array<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
}>;
export declare type UserBatchResponse = {
    userBatch: Array<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
        identities?: Maybe<Array<Maybe<{
            openid?: Maybe<string>;
            userIdInIdp?: Maybe<string>;
            userId?: Maybe<string>;
            connectionId?: Maybe<string>;
            isSocial?: Maybe<boolean>;
            provider?: Maybe<string>;
            type?: Maybe<string>;
            userPoolId?: Maybe<string>;
            extIdpId?: Maybe<string>;
        }>>>;
    }>;
};
export declare type UserBatchWithCustomDataVariables = Exact<{
    ids: Array<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
}>;
export declare type UserBatchWithCustomDataResponse = {
    userBatch: Array<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
        identities?: Maybe<Array<Maybe<{
            openid?: Maybe<string>;
            userIdInIdp?: Maybe<string>;
            userId?: Maybe<string>;
            connectionId?: Maybe<string>;
            isSocial?: Maybe<boolean>;
            provider?: Maybe<string>;
            type?: Maybe<string>;
            userPoolId?: Maybe<string>;
            extIdpId?: Maybe<string>;
        }>>>;
        customData?: Maybe<Array<Maybe<{
            key: string;
            value?: Maybe<string>;
            dataType: UdfDataType;
            label?: Maybe<string>;
        }>>>;
    }>;
};
export declare type UserWithCustomDataVariables = Exact<{
    id?: Maybe<Scalars['String']>;
}>;
export declare type UserWithCustomDataResponse = {
    user?: Maybe<{
        id: string;
        arn: string;
        userPoolId: string;
        status?: Maybe<UserStatus>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource?: Maybe<Array<string>>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        city?: Maybe<string>;
        province?: Maybe<string>;
        country?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        externalId?: Maybe<string>;
        phoneCountryCode?: Maybe<string>;
        identities?: Maybe<Array<Maybe<{
            openid?: Maybe<string>;
            userIdInIdp?: Maybe<string>;
            userId?: Maybe<string>;
            connectionId?: Maybe<string>;
            isSocial?: Maybe<boolean>;
            provider?: Maybe<string>;
            userPoolId?: Maybe<string>;
            extIdpId?: Maybe<string>;
        }>>>;
        customData?: Maybe<Array<Maybe<{
            key: string;
            value?: Maybe<string>;
            dataType: UdfDataType;
            label?: Maybe<string>;
        }>>>;
    }>;
};
export declare type UserpoolVariables = Exact<{
    [key: string]: never;
}>;
export declare type UserpoolResponse = {
    userpool: {
        id: string;
        name: string;
        domain: string;
        description?: Maybe<string>;
        secret: string;
        jwtSecret: string;
        ownerId?: Maybe<string>;
        logo: string;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        emailVerifiedDefault: boolean;
        sendWelcomeEmail: boolean;
        registerDisabled: boolean;
        appSsoEnabled: boolean;
        showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>;
        allowedOrigins?: Maybe<string>;
        tokenExpiresAfter?: Maybe<number>;
        isDeleted?: Maybe<boolean>;
        loginFailStrategy?: Maybe<string>;
        packageType?: Maybe<number>;
        useCustomUserStore?: Maybe<boolean>;
        loginRequireEmailVerified?: Maybe<boolean>;
        verifyCodeLength?: Maybe<number>;
        verifyCodeMaxAttempts?: Maybe<number>;
        userpoolTypes?: Maybe<Array<{
            code?: Maybe<string>;
            name?: Maybe<string>;
            description?: Maybe<string>;
            image?: Maybe<string>;
            sdks?: Maybe<Array<Maybe<string>>>;
        }>>;
        frequentRegisterCheck?: Maybe<{
            timeInterval?: Maybe<number>;
            limit?: Maybe<number>;
            enabled?: Maybe<boolean>;
        }>;
        loginFailCheck?: Maybe<{
            timeInterval?: Maybe<number>;
            limit?: Maybe<number>;
            enabled?: Maybe<boolean>;
        }>;
        loginPasswordFailCheck?: Maybe<{
            timeInterval?: Maybe<number>;
            limit?: Maybe<number>;
            enabled?: Maybe<boolean>;
        }>;
        changePhoneStrategy?: Maybe<{
            verifyOldPhone?: Maybe<boolean>;
        }>;
        changeEmailStrategy?: Maybe<{
            verifyOldEmail?: Maybe<boolean>;
        }>;
        qrcodeLoginStrategy?: Maybe<{
            qrcodeExpiresAfter?: Maybe<number>;
            returnFullUserInfo?: Maybe<boolean>;
            allowExchangeUserInfoFromBrowser?: Maybe<boolean>;
            ticketExpiresAfter?: Maybe<number>;
        }>;
        app2WxappLoginStrategy?: Maybe<{
            ticketExpriresAfter?: Maybe<number>;
            ticketExchangeUserInfoNeedSecret?: Maybe<boolean>;
        }>;
        whitelist?: Maybe<{
            phoneEnabled?: Maybe<boolean>;
            emailEnabled?: Maybe<boolean>;
            usernameEnabled?: Maybe<boolean>;
        }>;
        customSMSProvider?: Maybe<{
            enabled?: Maybe<boolean>;
            provider?: Maybe<string>;
            config?: Maybe<string>;
        }>;
    };
};
export declare type UserpoolTypesVariables = Exact<{
    [key: string]: never;
}>;
export declare type UserpoolTypesResponse = {
    userpoolTypes: Array<{
        code?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        sdks?: Maybe<Array<Maybe<string>>>;
    }>;
};
export declare type UserpoolsVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
}>;
export declare type UserpoolsResponse = {
    userpools: {
        totalCount: number;
        list: Array<{
            id: string;
            name: string;
            domain: string;
            ownerId?: Maybe<string>;
            description?: Maybe<string>;
            secret: string;
            jwtSecret: string;
            logo: string;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            emailVerifiedDefault: boolean;
            sendWelcomeEmail: boolean;
            registerDisabled: boolean;
            appSsoEnabled: boolean;
            showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>;
            allowedOrigins?: Maybe<string>;
            tokenExpiresAfter?: Maybe<number>;
            isDeleted?: Maybe<boolean>;
            packageType?: Maybe<number>;
            useCustomUserStore?: Maybe<boolean>;
            loginRequireEmailVerified?: Maybe<boolean>;
            verifyCodeLength?: Maybe<number>;
            verifyCodeMaxAttempts?: Maybe<number>;
        }>;
    };
};
export declare type UsersVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
    excludeUsersInOrg?: Maybe<Scalars['Boolean']>;
}>;
export declare type UsersResponse = {
    users: {
        totalCount: number;
        list: Array<{
            id: string;
            arn: string;
            userPoolId: string;
            status?: Maybe<UserStatus>;
            username?: Maybe<string>;
            email?: Maybe<string>;
            emailVerified?: Maybe<boolean>;
            phone?: Maybe<string>;
            phoneVerified?: Maybe<boolean>;
            unionid?: Maybe<string>;
            openid?: Maybe<string>;
            nickname?: Maybe<string>;
            registerSource?: Maybe<Array<string>>;
            photo?: Maybe<string>;
            password?: Maybe<string>;
            oauth?: Maybe<string>;
            token?: Maybe<string>;
            tokenExpiredAt?: Maybe<string>;
            loginsCount?: Maybe<number>;
            lastLogin?: Maybe<string>;
            lastIP?: Maybe<string>;
            signedUp?: Maybe<string>;
            blocked?: Maybe<boolean>;
            isDeleted?: Maybe<boolean>;
            device?: Maybe<string>;
            browser?: Maybe<string>;
            company?: Maybe<string>;
            name?: Maybe<string>;
            givenName?: Maybe<string>;
            familyName?: Maybe<string>;
            middleName?: Maybe<string>;
            profile?: Maybe<string>;
            preferredUsername?: Maybe<string>;
            website?: Maybe<string>;
            gender?: Maybe<string>;
            birthdate?: Maybe<string>;
            zoneinfo?: Maybe<string>;
            locale?: Maybe<string>;
            address?: Maybe<string>;
            formatted?: Maybe<string>;
            streetAddress?: Maybe<string>;
            locality?: Maybe<string>;
            region?: Maybe<string>;
            postalCode?: Maybe<string>;
            city?: Maybe<string>;
            province?: Maybe<string>;
            country?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            externalId?: Maybe<string>;
            phoneCountryCode?: Maybe<string>;
            identities?: Maybe<Array<Maybe<{
                openid?: Maybe<string>;
                userIdInIdp?: Maybe<string>;
                userId?: Maybe<string>;
                connectionId?: Maybe<string>;
                isSocial?: Maybe<boolean>;
                provider?: Maybe<string>;
                type?: Maybe<string>;
                userPoolId?: Maybe<string>;
                extIdpId?: Maybe<string>;
            }>>>;
        }>;
    };
};
export declare type UsersWithCustomDataVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortByEnum>;
    excludeUsersInOrg?: Maybe<Scalars['Boolean']>;
}>;
export declare type UsersWithCustomDataResponse = {
    users: {
        totalCount: number;
        list: Array<{
            id: string;
            arn: string;
            userPoolId: string;
            status?: Maybe<UserStatus>;
            username?: Maybe<string>;
            email?: Maybe<string>;
            emailVerified?: Maybe<boolean>;
            phone?: Maybe<string>;
            phoneVerified?: Maybe<boolean>;
            unionid?: Maybe<string>;
            openid?: Maybe<string>;
            nickname?: Maybe<string>;
            registerSource?: Maybe<Array<string>>;
            photo?: Maybe<string>;
            password?: Maybe<string>;
            oauth?: Maybe<string>;
            token?: Maybe<string>;
            tokenExpiredAt?: Maybe<string>;
            loginsCount?: Maybe<number>;
            lastLogin?: Maybe<string>;
            lastIP?: Maybe<string>;
            signedUp?: Maybe<string>;
            blocked?: Maybe<boolean>;
            isDeleted?: Maybe<boolean>;
            device?: Maybe<string>;
            browser?: Maybe<string>;
            company?: Maybe<string>;
            name?: Maybe<string>;
            givenName?: Maybe<string>;
            familyName?: Maybe<string>;
            middleName?: Maybe<string>;
            profile?: Maybe<string>;
            preferredUsername?: Maybe<string>;
            website?: Maybe<string>;
            gender?: Maybe<string>;
            birthdate?: Maybe<string>;
            zoneinfo?: Maybe<string>;
            locale?: Maybe<string>;
            address?: Maybe<string>;
            formatted?: Maybe<string>;
            streetAddress?: Maybe<string>;
            locality?: Maybe<string>;
            region?: Maybe<string>;
            postalCode?: Maybe<string>;
            city?: Maybe<string>;
            province?: Maybe<string>;
            country?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            externalId?: Maybe<string>;
            phoneCountryCode?: Maybe<string>;
            identities?: Maybe<Array<Maybe<{
                openid?: Maybe<string>;
                userIdInIdp?: Maybe<string>;
                userId?: Maybe<string>;
                connectionId?: Maybe<string>;
                isSocial?: Maybe<boolean>;
                provider?: Maybe<string>;
                type?: Maybe<string>;
                userPoolId?: Maybe<string>;
                extIdpId?: Maybe<string>;
            }>>>;
            customData?: Maybe<Array<Maybe<{
                key: string;
                value?: Maybe<string>;
                dataType: UdfDataType;
                label?: Maybe<string>;
            }>>>;
        }>;
    };
};
export declare type WhitelistVariables = Exact<{
    type: WhitelistType;
}>;
export declare type WhitelistResponse = {
    whitelist: Array<{
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        value: string;
    }>;
};
export declare const AddMemberDocument = "\n    mutation addMember($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $nodeId: String, $orgId: String, $nodeCode: String, $userIds: [String!]!, $isLeader: Boolean) {\n  addMember(nodeId: $nodeId, orgId: $orgId, nodeCode: $nodeCode, userIds: $userIds, isLeader: $isLeader) {\n    id\n    orgId\n    name\n    nameI18n\n    description\n    descriptionI18n\n    order\n    code\n    root\n    depth\n    path\n    createdAt\n    updatedAt\n    children\n    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {\n      totalCount\n      list {\n        id\n        arn\n        userPoolId\n        username\n        status\n        email\n        emailVerified\n        phone\n        phoneVerified\n        unionid\n        openid\n        nickname\n        registerSource\n        photo\n        password\n        oauth\n        token\n        tokenExpiredAt\n        loginsCount\n        lastLogin\n        lastIP\n        signedUp\n        blocked\n        isDeleted\n        device\n        browser\n        company\n        name\n        givenName\n        familyName\n        middleName\n        profile\n        preferredUsername\n        website\n        gender\n        birthdate\n        zoneinfo\n        locale\n        address\n        formatted\n        streetAddress\n        locality\n        region\n        postalCode\n        city\n        province\n        country\n        createdAt\n        updatedAt\n        externalId\n        phoneCountryCode\n      }\n    }\n  }\n}\n    ";
export declare const AddNodeDocument = "\n    mutation addNode($orgId: String!, $parentNodeId: String, $name: String!, $nameI18n: String, $description: String, $descriptionI18n: String, $order: Int, $code: String) {\n  addNode(orgId: $orgId, parentNodeId: $parentNodeId, name: $name, nameI18n: $nameI18n, description: $description, descriptionI18n: $descriptionI18n, order: $order, code: $code) {\n    id\n    rootNode {\n      id\n      orgId\n      name\n      nameI18n\n      description\n      descriptionI18n\n      order\n      code\n      root\n      depth\n      path\n      createdAt\n      updatedAt\n      children\n    }\n    nodes {\n      id\n      orgId\n      name\n      nameI18n\n      description\n      descriptionI18n\n      order\n      code\n      root\n      depth\n      path\n      createdAt\n      updatedAt\n      children\n    }\n  }\n}\n    ";
export declare const AddNodeV2Document = "\n    mutation addNodeV2($orgId: String!, $parentNodeId: String, $name: String!, $nameI18n: String, $description: String, $descriptionI18n: String, $order: Int, $code: String) {\n  addNodeV2(orgId: $orgId, parentNodeId: $parentNodeId, name: $name, nameI18n: $nameI18n, description: $description, descriptionI18n: $descriptionI18n, order: $order, code: $code) {\n    id\n    orgId\n    name\n    nameI18n\n    description\n    descriptionI18n\n    order\n    code\n    root\n    depth\n    path\n    createdAt\n    updatedAt\n    children\n  }\n}\n    ";
export declare const AddPolicyAssignmentsDocument = "\n    mutation addPolicyAssignments($policies: [String!]!, $targetType: PolicyAssignmentTargetType!, $targetIdentifiers: [String!], $inheritByChildren: Boolean, $namespace: String) {\n  addPolicyAssignments(policies: $policies, targetType: $targetType, targetIdentifiers: $targetIdentifiers, inheritByChildren: $inheritByChildren, namespace: $namespace) {\n    message\n    code\n  }\n}\n    ";
export declare const AddUserToGroupDocument = "\n    mutation addUserToGroup($userIds: [String!]!, $code: String) {\n  addUserToGroup(userIds: $userIds, code: $code) {\n    message\n    code\n  }\n}\n    ";
export declare const AddWhitelistDocument = "\n    mutation addWhitelist($type: WhitelistType!, $list: [String!]!) {\n  addWhitelist(type: $type, list: $list) {\n    createdAt\n    updatedAt\n    value\n  }\n}\n    ";
export declare const AllowDocument = "\n    mutation allow($resource: String!, $action: String!, $userId: String, $userIds: [String!], $roleCode: String, $roleCodes: [String!], $namespace: String) {\n  allow(resource: $resource, action: $action, userId: $userId, userIds: $userIds, roleCode: $roleCode, roleCodes: $roleCodes, namespace: $namespace) {\n    message\n    code\n  }\n}\n    ";
export declare const AssignRoleDocument = "\n    mutation assignRole($namespace: String, $roleCode: String, $roleCodes: [String], $userIds: [String!], $groupCodes: [String!], $nodeCodes: [String!]) {\n  assignRole(namespace: $namespace, roleCode: $roleCode, roleCodes: $roleCodes, userIds: $userIds, groupCodes: $groupCodes, nodeCodes: $nodeCodes) {\n    message\n    code\n  }\n}\n    ";
export declare const AuthorizeResourceDocument = "\n    mutation authorizeResource($namespace: String, $resource: String, $resourceType: ResourceType, $opts: [AuthorizeResourceOpt]) {\n  authorizeResource(namespace: $namespace, resource: $resource, resourceType: $resourceType, opts: $opts) {\n    code\n    message\n  }\n}\n    ";
export declare const BindEmailDocument = "\n    mutation bindEmail($email: String!, $emailCode: String!) {\n  bindEmail(email: $email, emailCode: $emailCode) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    phoneCountryCode\n  }\n}\n    ";
export declare const BindPhoneDocument = "\n    mutation bindPhone($phone: String!, $phoneCode: String!, $phoneCountryCode: String) {\n  bindPhone(phone: $phone, phoneCode: $phoneCode, phoneCountryCode: $phoneCountryCode) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    phoneCountryCode\n  }\n}\n    ";
export declare const ChangeMfaDocument = "\n    mutation changeMfa($enable: Boolean, $id: String, $userId: String, $userPoolId: String, $refresh: Boolean) {\n  changeMfa(enable: $enable, id: $id, userId: $userId, userPoolId: $userPoolId, refresh: $refresh) {\n    id\n    userId\n    userPoolId\n    enable\n    secret\n  }\n}\n    ";
export declare const ConfigEmailTemplateDocument = "\n    mutation configEmailTemplate($input: ConfigEmailTemplateInput!) {\n  configEmailTemplate(input: $input) {\n    type\n    name\n    subject\n    sender\n    content\n    redirectTo\n    hasURL\n    expiresIn\n    enabled\n    isSystem\n  }\n}\n    ";
export declare const CreateFunctionDocument = "\n    mutation createFunction($input: CreateFunctionInput!) {\n  createFunction(input: $input) {\n    id\n    name\n    sourceCode\n    description\n    url\n  }\n}\n    ";
export declare const CreateGroupDocument = "\n    mutation createGroup($code: String!, $name: String!, $description: String) {\n  createGroup(code: $code, name: $name, description: $description) {\n    code\n    name\n    description\n    createdAt\n    updatedAt\n  }\n}\n    ";
export declare const CreateOrgDocument = "\n    mutation createOrg($name: String!, $code: String, $description: String, $tenantId: String) {\n  createOrg(name: $name, code: $code, description: $description, tenantId: $tenantId) {\n    id\n    rootNode {\n      id\n      orgId\n      name\n      nameI18n\n      description\n      descriptionI18n\n      order\n      code\n      root\n      depth\n      path\n      createdAt\n      updatedAt\n      children\n    }\n    nodes {\n      id\n      orgId\n      name\n      nameI18n\n      description\n      descriptionI18n\n      order\n      code\n      root\n      depth\n      path\n      createdAt\n      updatedAt\n      children\n    }\n  }\n}\n    ";
export declare const CreatePolicyDocument = "\n    mutation createPolicy($namespace: String, $code: String!, $description: String, $statements: [PolicyStatementInput!]!) {\n  createPolicy(namespace: $namespace, code: $code, description: $description, statements: $statements) {\n    namespace\n    code\n    isDefault\n    description\n    statements {\n      resource\n      actions\n      effect\n      condition {\n        param\n        operator\n        value\n      }\n    }\n    createdAt\n    updatedAt\n    assignmentsCount\n  }\n}\n    ";
export declare const CreateRoleDocument = "\n    mutation createRole($namespace: String, $code: String!, $description: String, $parent: String) {\n  createRole(namespace: $namespace, code: $code, description: $description, parent: $parent) {\n    id\n    namespace\n    code\n    arn\n    description\n    createdAt\n    updatedAt\n    parent {\n      namespace\n      code\n      arn\n      description\n      createdAt\n      updatedAt\n    }\n  }\n}\n    ";
export declare const CreateUserDocument = "\n    mutation createUser($userInfo: CreateUserInput!, $params: String, $identity: CreateUserIdentityInput, $keepPassword: Boolean, $resetPasswordOnFirstLogin: Boolean) {\n  createUser(userInfo: $userInfo, params: $params, identity: $identity, keepPassword: $keepPassword, resetPasswordOnFirstLogin: $resetPasswordOnFirstLogin) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n  }\n}\n    ";
export declare const CreateUserWithCustomDataDocument = "\n    mutation createUserWithCustomData($userInfo: CreateUserInput!, $keepPassword: Boolean, $params: String) {\n  createUser(userInfo: $userInfo, keepPassword: $keepPassword, params: $params) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n    customData {\n      key\n      value\n      dataType\n      label\n    }\n  }\n}\n    ";
export declare const CreateUserpoolDocument = "\n    mutation createUserpool($name: String!, $domain: String!, $description: String, $logo: String, $userpoolTypes: [String!]) {\n  createUserpool(name: $name, domain: $domain, description: $description, logo: $logo, userpoolTypes: $userpoolTypes) {\n    id\n    name\n    domain\n    description\n    secret\n    jwtSecret\n    userpoolTypes {\n      code\n      name\n      description\n      image\n      sdks\n    }\n    logo\n    createdAt\n    updatedAt\n    emailVerifiedDefault\n    sendWelcomeEmail\n    registerDisabled\n    appSsoEnabled\n    showWxQRCodeWhenRegisterDisabled\n    allowedOrigins\n    tokenExpiresAfter\n    isDeleted\n    frequentRegisterCheck {\n      timeInterval\n      limit\n      enabled\n    }\n    loginFailCheck {\n      timeInterval\n      limit\n      enabled\n    }\n    changePhoneStrategy {\n      verifyOldPhone\n    }\n    changeEmailStrategy {\n      verifyOldEmail\n    }\n    qrcodeLoginStrategy {\n      qrcodeExpiresAfter\n      returnFullUserInfo\n      allowExchangeUserInfoFromBrowser\n      ticketExpiresAfter\n    }\n    app2WxappLoginStrategy {\n      ticketExpriresAfter\n      ticketExchangeUserInfoNeedSecret\n    }\n    whitelist {\n      phoneEnabled\n      emailEnabled\n      usernameEnabled\n    }\n    customSMSProvider {\n      enabled\n      provider\n    }\n    packageType\n  }\n}\n    ";
export declare const DeleteFunctionDocument = "\n    mutation deleteFunction($id: String!) {\n  deleteFunction(id: $id) {\n    message\n    code\n  }\n}\n    ";
export declare const DeleteGroupsDocument = "\n    mutation deleteGroups($codeList: [String!]!) {\n  deleteGroups(codeList: $codeList) {\n    message\n    code\n  }\n}\n    ";
export declare const DeleteNodeDocument = "\n    mutation deleteNode($orgId: String!, $nodeId: String!) {\n  deleteNode(orgId: $orgId, nodeId: $nodeId) {\n    message\n    code\n  }\n}\n    ";
export declare const DeleteOrgDocument = "\n    mutation deleteOrg($id: String!) {\n  deleteOrg(id: $id) {\n    message\n    code\n  }\n}\n    ";
export declare const DeletePoliciesDocument = "\n    mutation deletePolicies($codeList: [String!]!, $namespace: String) {\n  deletePolicies(codeList: $codeList, namespace: $namespace) {\n    message\n    code\n  }\n}\n    ";
export declare const DeletePolicyDocument = "\n    mutation deletePolicy($code: String!, $namespace: String) {\n  deletePolicy(code: $code, namespace: $namespace) {\n    message\n    code\n  }\n}\n    ";
export declare const DeleteRoleDocument = "\n    mutation deleteRole($code: String!, $namespace: String) {\n  deleteRole(code: $code, namespace: $namespace) {\n    message\n    code\n  }\n}\n    ";
export declare const DeleteRolesDocument = "\n    mutation deleteRoles($codeList: [String!]!, $namespace: String) {\n  deleteRoles(codeList: $codeList, namespace: $namespace) {\n    message\n    code\n  }\n}\n    ";
export declare const DeleteUserDocument = "\n    mutation deleteUser($id: String!) {\n  deleteUser(id: $id) {\n    message\n    code\n  }\n}\n    ";
export declare const DeleteUserpoolDocument = "\n    mutation deleteUserpool {\n  deleteUserpool {\n    message\n    code\n  }\n}\n    ";
export declare const DeleteUsersDocument = "\n    mutation deleteUsers($ids: [String!]!) {\n  deleteUsers(ids: $ids) {\n    message\n    code\n  }\n}\n    ";
export declare const DisableEmailTemplateDocument = "\n    mutation disableEmailTemplate($type: EmailTemplateType!) {\n  disableEmailTemplate(type: $type) {\n    type\n    name\n    subject\n    sender\n    content\n    redirectTo\n    hasURL\n    expiresIn\n    enabled\n    isSystem\n  }\n}\n    ";
export declare const DisbalePolicyAssignmentDocument = "\n    mutation disbalePolicyAssignment($policy: String!, $targetType: PolicyAssignmentTargetType!, $targetIdentifier: String!, $namespace: String) {\n  disbalePolicyAssignment(policy: $policy, targetType: $targetType, targetIdentifier: $targetIdentifier, namespace: $namespace) {\n    message\n    code\n  }\n}\n    ";
export declare const EnableEmailTemplateDocument = "\n    mutation enableEmailTemplate($type: EmailTemplateType!) {\n  enableEmailTemplate(type: $type) {\n    type\n    name\n    subject\n    sender\n    content\n    redirectTo\n    hasURL\n    expiresIn\n    enabled\n    isSystem\n  }\n}\n    ";
export declare const EnablePolicyAssignmentDocument = "\n    mutation enablePolicyAssignment($policy: String!, $targetType: PolicyAssignmentTargetType!, $targetIdentifier: String!, $namespace: String) {\n  enablePolicyAssignment(policy: $policy, targetType: $targetType, targetIdentifier: $targetIdentifier, namespace: $namespace) {\n    message\n    code\n  }\n}\n    ";
export declare const LoginByEmailDocument = "\n    mutation loginByEmail($input: LoginByEmailInput!) {\n  loginByEmail(input: $input) {\n    id\n    arn\n    status\n    userPoolId\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n    newlyCreated\n    phoneCountryCode\n    customData {\n      key\n      value\n      dataType\n      label\n    }\n  }\n}\n    ";
export declare const LoginByPhoneCodeDocument = "\n    mutation loginByPhoneCode($input: LoginByPhoneCodeInput!) {\n  loginByPhoneCode(input: $input) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n    newlyCreated\n    phoneCountryCode\n    customData {\n      key\n      value\n      dataType\n      label\n    }\n  }\n}\n    ";
export declare const LoginByPhonePasswordDocument = "\n    mutation loginByPhonePassword($input: LoginByPhonePasswordInput!) {\n  loginByPhonePassword(input: $input) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n    newlyCreated\n    phoneCountryCode\n    customData {\n      key\n      value\n      dataType\n      label\n    }\n  }\n}\n    ";
export declare const LoginBySubAccountDocument = "\n    mutation loginBySubAccount($account: String!, $password: String!, $captchaCode: String, $clientIp: String) {\n  loginBySubAccount(account: $account, password: $password, captchaCode: $captchaCode, clientIp: $clientIp) {\n    id\n    arn\n    status\n    userPoolId\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n    newlyCreated\n    phoneCountryCode\n    customData {\n      key\n      value\n      dataType\n      label\n    }\n  }\n}\n    ";
export declare const LoginByUsernameDocument = "\n    mutation loginByUsername($input: LoginByUsernameInput!) {\n  loginByUsername(input: $input) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n    newlyCreated\n    phoneCountryCode\n    customData {\n      key\n      value\n      dataType\n      label\n    }\n  }\n}\n    ";
export declare const MoveMembersDocument = "\n    mutation moveMembers($userIds: [String!]!, $sourceNodeId: String!, $targetNodeId: String!) {\n  moveMembers(userIds: $userIds, sourceNodeId: $sourceNodeId, targetNodeId: $targetNodeId) {\n    code\n    message\n  }\n}\n    ";
export declare const MoveNodeDocument = "\n    mutation moveNode($orgId: String!, $nodeId: String!, $targetParentId: String!) {\n  moveNode(orgId: $orgId, nodeId: $nodeId, targetParentId: $targetParentId) {\n    id\n    rootNode {\n      id\n      orgId\n      name\n      nameI18n\n      description\n      descriptionI18n\n      order\n      code\n      root\n      depth\n      path\n      createdAt\n      updatedAt\n      children\n    }\n    nodes {\n      id\n      orgId\n      name\n      nameI18n\n      description\n      descriptionI18n\n      order\n      code\n      root\n      depth\n      path\n      createdAt\n      updatedAt\n      children\n    }\n  }\n}\n    ";
export declare const RefreshAccessTokenDocument = "\n    mutation refreshAccessToken($accessToken: String) {\n  refreshAccessToken(accessToken: $accessToken) {\n    accessToken\n    exp\n    iat\n  }\n}\n    ";
export declare const RefreshTokenDocument = "\n    mutation refreshToken($id: String) {\n  refreshToken(id: $id) {\n    token\n    iat\n    exp\n  }\n}\n    ";
export declare const RefreshUserpoolSecretDocument = "\n    mutation refreshUserpoolSecret {\n  refreshUserpoolSecret\n}\n    ";
export declare const RegisterByEmailDocument = "\n    mutation registerByEmail($input: RegisterByEmailInput!) {\n  registerByEmail(input: $input) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n  }\n}\n    ";
export declare const RegisterByPhoneCodeDocument = "\n    mutation registerByPhoneCode($input: RegisterByPhoneCodeInput!) {\n  registerByPhoneCode(input: $input) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n  }\n}\n    ";
export declare const RegisterByUsernameDocument = "\n    mutation registerByUsername($input: RegisterByUsernameInput!) {\n  registerByUsername(input: $input) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n  }\n}\n    ";
export declare const RemoveMemberDocument = "\n    mutation removeMember($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $nodeId: String, $orgId: String, $nodeCode: String, $userIds: [String!]!) {\n  removeMember(nodeId: $nodeId, orgId: $orgId, nodeCode: $nodeCode, userIds: $userIds) {\n    id\n    name\n    nameI18n\n    description\n    descriptionI18n\n    order\n    code\n    root\n    depth\n    createdAt\n    updatedAt\n    children\n    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {\n      totalCount\n      list {\n        id\n        arn\n        userPoolId\n        status\n        username\n        email\n        emailVerified\n        phone\n        phoneVerified\n        unionid\n        openid\n        nickname\n        registerSource\n        photo\n        password\n        oauth\n        token\n        tokenExpiredAt\n        loginsCount\n        lastLogin\n        lastIP\n        signedUp\n        blocked\n        isDeleted\n        device\n        browser\n        company\n        name\n        givenName\n        familyName\n        middleName\n        profile\n        preferredUsername\n        website\n        gender\n        birthdate\n        zoneinfo\n        locale\n        address\n        formatted\n        streetAddress\n        locality\n        region\n        postalCode\n        city\n        province\n        country\n        createdAt\n        updatedAt\n        phoneCountryCode\n      }\n    }\n  }\n}\n    ";
export declare const RemovePolicyAssignmentsDocument = "\n    mutation removePolicyAssignments($policies: [String!]!, $targetType: PolicyAssignmentTargetType!, $targetIdentifiers: [String!], $namespace: String) {\n  removePolicyAssignments(policies: $policies, targetType: $targetType, targetIdentifiers: $targetIdentifiers, namespace: $namespace) {\n    message\n    code\n  }\n}\n    ";
export declare const RemoveUdfDocument = "\n    mutation removeUdf($targetType: UDFTargetType!, $key: String!) {\n  removeUdf(targetType: $targetType, key: $key) {\n    message\n    code\n  }\n}\n    ";
export declare const RemoveUdvDocument = "\n    mutation removeUdv($targetType: UDFTargetType!, $targetId: String!, $key: String!) {\n  removeUdv(targetType: $targetType, targetId: $targetId, key: $key) {\n    key\n    dataType\n    value\n    label\n  }\n}\n    ";
export declare const RemoveUserFromGroupDocument = "\n    mutation removeUserFromGroup($userIds: [String!]!, $code: String) {\n  removeUserFromGroup(userIds: $userIds, code: $code) {\n    message\n    code\n  }\n}\n    ";
export declare const RemoveWhitelistDocument = "\n    mutation removeWhitelist($type: WhitelistType!, $list: [String!]!) {\n  removeWhitelist(type: $type, list: $list) {\n    createdAt\n    updatedAt\n    value\n  }\n}\n    ";
export declare const ResetPasswordDocument = "\n    mutation resetPassword($phone: String, $phoneCountryCode: String, $email: String, $code: String!, $newPassword: String!) {\n  resetPassword(phone: $phone, phoneCountryCode: $phoneCountryCode, email: $email, code: $code, newPassword: $newPassword) {\n    message\n    code\n  }\n}\n    ";
export declare const ResetPasswordByFirstLoginTokenDocument = "\n    mutation resetPasswordByFirstLoginToken($token: String!, $password: String!) {\n  resetPasswordByFirstLoginToken(token: $token, password: $password) {\n    message\n    code\n  }\n}\n    ";
export declare const ResetPasswordByForceResetTokenDocument = "\n    mutation resetPasswordByForceResetToken($token: String!, $oldPassword: String!, $newPassword: String!) {\n  resetPasswordByForceResetToken(token: $token, oldPassword: $oldPassword, newPassword: $newPassword) {\n    message\n    code\n  }\n}\n    ";
export declare const RevokeRoleDocument = "\n    mutation revokeRole($namespace: String, $roleCode: String, $roleCodes: [String], $userIds: [String!], $groupCodes: [String!], $nodeCodes: [String!]) {\n  revokeRole(namespace: $namespace, roleCode: $roleCode, roleCodes: $roleCodes, userIds: $userIds, groupCodes: $groupCodes, nodeCodes: $nodeCodes) {\n    message\n    code\n  }\n}\n    ";
export declare const SendEmailDocument = "\n    mutation sendEmail($email: String!, $scene: EmailScene!) {\n  sendEmail(email: $email, scene: $scene) {\n    message\n    code\n  }\n}\n    ";
export declare const SendFirstLoginVerifyEmailDocument = "\n    mutation sendFirstLoginVerifyEmail($userId: String!, $appId: String!) {\n  sendFirstLoginVerifyEmail(userId: $userId, appId: $appId) {\n    message\n    code\n  }\n}\n    ";
export declare const SetMainDepartmentDocument = "\n    mutation setMainDepartment($userId: String!, $departmentId: String) {\n  setMainDepartment(userId: $userId, departmentId: $departmentId) {\n    message\n    code\n  }\n}\n    ";
export declare const SetUdfDocument = "\n    mutation setUdf($targetType: UDFTargetType!, $key: String!, $dataType: UDFDataType!, $label: String!, $options: String) {\n  setUdf(targetType: $targetType, key: $key, dataType: $dataType, label: $label, options: $options) {\n    targetType\n    dataType\n    key\n    label\n    options\n  }\n}\n    ";
export declare const SetUdfValueBatchDocument = "\n    mutation setUdfValueBatch($targetType: UDFTargetType!, $input: [SetUdfValueBatchInput!]!) {\n  setUdfValueBatch(targetType: $targetType, input: $input) {\n    code\n    message\n  }\n}\n    ";
export declare const SetUdvDocument = "\n    mutation setUdv($targetType: UDFTargetType!, $targetId: String!, $key: String!, $value: String!) {\n  setUdv(targetType: $targetType, targetId: $targetId, key: $key, value: $value) {\n    key\n    dataType\n    value\n    label\n  }\n}\n    ";
export declare const SetUdvBatchDocument = "\n    mutation setUdvBatch($targetType: UDFTargetType!, $targetId: String!, $udvList: [UserDefinedDataInput!]) {\n  setUdvBatch(targetType: $targetType, targetId: $targetId, udvList: $udvList) {\n    key\n    dataType\n    value\n    label\n  }\n}\n    ";
export declare const UnbindEmailDocument = "\n    mutation unbindEmail {\n  unbindEmail {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    phoneCountryCode\n  }\n}\n    ";
export declare const UnbindPhoneDocument = "\n    mutation unbindPhone {\n  unbindPhone {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    phoneCountryCode\n  }\n}\n    ";
export declare const UpdateEmailDocument = "\n    mutation updateEmail($email: String!, $emailCode: String!, $oldEmail: String, $oldEmailCode: String) {\n  updateEmail(email: $email, emailCode: $emailCode, oldEmail: $oldEmail, oldEmailCode: $oldEmailCode) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    phoneCountryCode\n  }\n}\n    ";
export declare const UpdateFunctionDocument = "\n    mutation updateFunction($input: UpdateFunctionInput!) {\n  updateFunction(input: $input) {\n    id\n    name\n    sourceCode\n    description\n    url\n  }\n}\n    ";
export declare const UpdateGroupDocument = "\n    mutation updateGroup($code: String!, $name: String, $description: String, $newCode: String) {\n  updateGroup(code: $code, name: $name, description: $description, newCode: $newCode) {\n    code\n    name\n    description\n    createdAt\n    updatedAt\n  }\n}\n    ";
export declare const UpdateNodeDocument = "\n    mutation updateNode($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $id: String!, $name: String, $code: String, $description: String) {\n  updateNode(id: $id, name: $name, code: $code, description: $description) {\n    id\n    orgId\n    name\n    nameI18n\n    description\n    descriptionI18n\n    order\n    code\n    root\n    depth\n    path\n    createdAt\n    updatedAt\n    children\n    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {\n      totalCount\n    }\n  }\n}\n    ";
export declare const UpdatePasswordDocument = "\n    mutation updatePassword($newPassword: String!, $oldPassword: String) {\n  updatePassword(newPassword: $newPassword, oldPassword: $oldPassword) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    phoneCountryCode\n  }\n}\n    ";
export declare const UpdatePhoneDocument = "\n    mutation updatePhone($phone: String!, $phoneCode: String!, $oldPhone: String, $oldPhoneCode: String, $phoneCountryCode: String, $oldPhoneCountryCode: String) {\n  updatePhone(phone: $phone, phoneCode: $phoneCode, oldPhone: $oldPhone, oldPhoneCode: $oldPhoneCode, phoneCountryCode: $phoneCountryCode, oldPhoneCountryCode: $oldPhoneCountryCode) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    phoneCountryCode\n  }\n}\n    ";
export declare const UpdatePolicyDocument = "\n    mutation updatePolicy($namespace: String, $code: String!, $description: String, $statements: [PolicyStatementInput!], $newCode: String) {\n  updatePolicy(namespace: $namespace, code: $code, description: $description, statements: $statements, newCode: $newCode) {\n    namespace\n    code\n    description\n    statements {\n      resource\n      actions\n      effect\n      condition {\n        param\n        operator\n        value\n      }\n    }\n    createdAt\n    updatedAt\n  }\n}\n    ";
export declare const UpdateRoleDocument = "\n    mutation updateRole($code: String!, $description: String, $newCode: String, $namespace: String) {\n  updateRole(code: $code, description: $description, newCode: $newCode, namespace: $namespace) {\n    id\n    namespace\n    code\n    arn\n    description\n    createdAt\n    updatedAt\n    parent {\n      namespace\n      code\n      arn\n      description\n      createdAt\n      updatedAt\n    }\n  }\n}\n    ";
export declare const UpdateUserDocument = "\n    mutation updateUser($id: String, $input: UpdateUserInput!, $emailToken: String, $phoneToken: String) {\n  updateUser(id: $id, input: $input, emailToken: $emailToken, phoneToken: $phoneToken) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n  }\n}\n    ";
export declare const UpdateUserpoolDocument = "\n    mutation updateUserpool($input: UpdateUserpoolInput!) {\n  updateUserpool(input: $input) {\n    id\n    name\n    domain\n    description\n    secret\n    jwtSecret\n    userpoolTypes {\n      code\n      name\n      description\n      image\n      sdks\n    }\n    logo\n    createdAt\n    updatedAt\n    emailVerifiedDefault\n    sendWelcomeEmail\n    registerDisabled\n    appSsoEnabled\n    showWxQRCodeWhenRegisterDisabled\n    allowedOrigins\n    tokenExpiresAfter\n    isDeleted\n    frequentRegisterCheck {\n      timeInterval\n      limit\n      enabled\n    }\n    loginFailCheck {\n      timeInterval\n      limit\n      enabled\n    }\n    loginFailStrategy\n    loginPasswordFailCheck {\n      timeInterval\n      limit\n      enabled\n    }\n    changePhoneStrategy {\n      verifyOldPhone\n    }\n    changeEmailStrategy {\n      verifyOldEmail\n    }\n    qrcodeLoginStrategy {\n      qrcodeExpiresAfter\n      returnFullUserInfo\n      allowExchangeUserInfoFromBrowser\n      ticketExpiresAfter\n    }\n    app2WxappLoginStrategy {\n      ticketExpriresAfter\n      ticketExchangeUserInfoNeedSecret\n    }\n    whitelist {\n      phoneEnabled\n      emailEnabled\n      usernameEnabled\n    }\n    customSMSProvider {\n      enabled\n      provider\n      config\n    }\n    packageType\n    useCustomUserStore\n    loginRequireEmailVerified\n    verifyCodeLength\n    verifyCodeMaxAttempts\n  }\n}\n    ";
export declare const AccessTokenDocument = "\n    query accessToken($userPoolId: String!, $secret: String!) {\n  accessToken(userPoolId: $userPoolId, secret: $secret) {\n    accessToken\n    exp\n    iat\n  }\n}\n    ";
export declare const ArchivedUsersDocument = "\n    query archivedUsers($page: Int, $limit: Int) {\n  archivedUsers(page: $page, limit: $limit) {\n    totalCount\n    list {\n      id\n      arn\n      status\n      userPoolId\n      username\n      email\n      emailVerified\n      phone\n      phoneVerified\n      unionid\n      openid\n      nickname\n      registerSource\n      photo\n      password\n      oauth\n      token\n      tokenExpiredAt\n      loginsCount\n      lastLogin\n      lastIP\n      signedUp\n      blocked\n      isDeleted\n      device\n      browser\n      company\n      name\n      givenName\n      familyName\n      middleName\n      profile\n      preferredUsername\n      website\n      gender\n      birthdate\n      zoneinfo\n      locale\n      address\n      formatted\n      streetAddress\n      locality\n      region\n      postalCode\n      city\n      province\n      country\n      createdAt\n      updatedAt\n      externalId\n      phoneCountryCode\n    }\n  }\n}\n    ";
export declare const AuthorizedTargetsDocument = "\n    query authorizedTargets($namespace: String!, $resourceType: ResourceType!, $resource: String!, $targetType: PolicyAssignmentTargetType, $actions: AuthorizedTargetsActionsInput) {\n  authorizedTargets(namespace: $namespace, resource: $resource, resourceType: $resourceType, targetType: $targetType, actions: $actions) {\n    totalCount\n    list {\n      targetType\n      targetIdentifier\n      actions\n    }\n  }\n}\n    ";
export declare const CheckLoginStatusDocument = "\n    query checkLoginStatus($token: String) {\n  checkLoginStatus(token: $token) {\n    code\n    message\n    status\n    exp\n    iat\n    data {\n      id\n      userPoolId\n      arn\n    }\n  }\n}\n    ";
export declare const CheckPasswordStrengthDocument = "\n    query checkPasswordStrength($password: String!) {\n  checkPasswordStrength(password: $password) {\n    valid\n    message\n  }\n}\n    ";
export declare const ChildrenNodesDocument = "\n    query childrenNodes($nodeId: String!) {\n  childrenNodes(nodeId: $nodeId) {\n    id\n    orgId\n    name\n    nameI18n\n    description\n    descriptionI18n\n    order\n    code\n    root\n    depth\n    path\n    createdAt\n    updatedAt\n    children\n  }\n}\n    ";
export declare const EmailTemplatesDocument = "\n    query emailTemplates {\n  emailTemplates {\n    type\n    name\n    subject\n    sender\n    content\n    redirectTo\n    hasURL\n    expiresIn\n    enabled\n    isSystem\n  }\n}\n    ";
export declare const FindUserDocument = "\n    query findUser($email: String, $phone: String, $username: String, $externalId: String, $identity: FindUserByIdentityInput) {\n  findUser(email: $email, phone: $phone, username: $username, externalId: $externalId, identity: $identity) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n  }\n}\n    ";
export declare const FindUserWithCustomDataDocument = "\n    query findUserWithCustomData($email: String, $phone: String, $username: String, $externalId: String) {\n  findUser(email: $email, phone: $phone, username: $username, externalId: $externalId) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n    customData {\n      key\n      value\n      dataType\n      label\n    }\n  }\n}\n    ";
export declare const FunctionDocument = "\n    query function($id: String) {\n  function(id: $id) {\n    id\n    name\n    sourceCode\n    description\n    url\n  }\n}\n    ";
export declare const FunctionsDocument = "\n    query functions($page: Int, $limit: Int, $sortBy: SortByEnum) {\n  functions(page: $page, limit: $limit, sortBy: $sortBy) {\n    list {\n      id\n      name\n      sourceCode\n      description\n      url\n    }\n    totalCount\n  }\n}\n    ";
export declare const GetUserDepartmentsDocument = "\n    query getUserDepartments($id: String!, $orgId: String) {\n  user(id: $id) {\n    departments(orgId: $orgId) {\n      totalCount\n      list {\n        department {\n          id\n          orgId\n          name\n          nameI18n\n          description\n          descriptionI18n\n          order\n          code\n          root\n          depth\n          path\n          codePath\n          namePath\n          createdAt\n          updatedAt\n          children\n          isVirtualNode\n        }\n        isMainDepartment\n        joinedAt\n      }\n    }\n  }\n}\n    ";
export declare const GetUserGroupsDocument = "\n    query getUserGroups($id: String!) {\n  user(id: $id) {\n    groups {\n      totalCount\n      list {\n        code\n        name\n        description\n        createdAt\n        updatedAt\n      }\n    }\n  }\n}\n    ";
export declare const GetUserRolesDocument = "\n    query getUserRoles($id: String!, $namespace: String) {\n  user(id: $id) {\n    roles(namespace: $namespace) {\n      totalCount\n      list {\n        id\n        code\n        namespace\n        arn\n        description\n        createdAt\n        updatedAt\n        parent {\n          code\n          namespace\n          arn\n          description\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n}\n    ";
export declare const GroupDocument = "\n    query group($code: String!) {\n  group(code: $code) {\n    code\n    name\n    description\n    createdAt\n    updatedAt\n  }\n}\n    ";
export declare const GroupWithUsersDocument = "\n    query groupWithUsers($code: String!, $page: Int, $limit: Int) {\n  group(code: $code) {\n    users(page: $page, limit: $limit) {\n      totalCount\n      list {\n        id\n        arn\n        status\n        userPoolId\n        username\n        email\n        emailVerified\n        phone\n        phoneVerified\n        unionid\n        openid\n        nickname\n        registerSource\n        photo\n        password\n        oauth\n        token\n        tokenExpiredAt\n        loginsCount\n        lastLogin\n        lastIP\n        signedUp\n        blocked\n        isDeleted\n        device\n        browser\n        company\n        name\n        givenName\n        familyName\n        middleName\n        profile\n        preferredUsername\n        website\n        gender\n        birthdate\n        zoneinfo\n        locale\n        address\n        formatted\n        streetAddress\n        locality\n        region\n        postalCode\n        city\n        province\n        country\n        createdAt\n        updatedAt\n        externalId\n        phoneCountryCode\n      }\n    }\n  }\n}\n    ";
export declare const GroupWithUsersWithCustomDataDocument = "\n    query groupWithUsersWithCustomData($code: String!, $page: Int, $limit: Int) {\n  group(code: $code) {\n    users(page: $page, limit: $limit) {\n      totalCount\n      list {\n        id\n        arn\n        status\n        userPoolId\n        username\n        email\n        emailVerified\n        phone\n        phoneVerified\n        unionid\n        openid\n        nickname\n        registerSource\n        photo\n        password\n        oauth\n        token\n        tokenExpiredAt\n        loginsCount\n        lastLogin\n        lastIP\n        signedUp\n        blocked\n        isDeleted\n        device\n        browser\n        company\n        name\n        givenName\n        familyName\n        middleName\n        profile\n        preferredUsername\n        website\n        gender\n        birthdate\n        zoneinfo\n        locale\n        address\n        formatted\n        streetAddress\n        locality\n        region\n        postalCode\n        city\n        province\n        country\n        createdAt\n        updatedAt\n        externalId\n        phoneCountryCode\n        customData {\n          key\n          value\n          dataType\n          label\n        }\n      }\n    }\n  }\n}\n    ";
export declare const GroupsDocument = "\n    query groups($userId: String, $page: Int, $limit: Int, $sortBy: SortByEnum) {\n  groups(userId: $userId, page: $page, limit: $limit, sortBy: $sortBy) {\n    totalCount\n    list {\n      code\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n}\n    ";
export declare const IsActionAllowedDocument = "\n    query isActionAllowed($resource: String!, $action: String!, $userId: String!, $namespace: String) {\n  isActionAllowed(resource: $resource, action: $action, userId: $userId, namespace: $namespace)\n}\n    ";
export declare const IsActionDeniedDocument = "\n    query isActionDenied($resource: String!, $action: String!, $userId: String!) {\n  isActionDenied(resource: $resource, action: $action, userId: $userId)\n}\n    ";
export declare const IsDomainAvaliableDocument = "\n    query isDomainAvaliable($domain: String!) {\n  isDomainAvaliable(domain: $domain)\n}\n    ";
export declare const IsRootNodeDocument = "\n    query isRootNode($nodeId: String!, $orgId: String!) {\n  isRootNode(nodeId: $nodeId, orgId: $orgId)\n}\n    ";
export declare const IsUserExistsDocument = "\n    query isUserExists($email: String, $phone: String, $username: String, $externalId: String) {\n  isUserExists(email: $email, phone: $phone, username: $username, externalId: $externalId)\n}\n    ";
export declare const AuthorizedResourcesDocument = "\n    query authorizedResources($targetType: PolicyAssignmentTargetType, $targetIdentifier: String, $namespace: String, $resourceType: String) {\n  authorizedResources(targetType: $targetType, targetIdentifier: $targetIdentifier, namespace: $namespace, resourceType: $resourceType) {\n    totalCount\n    list {\n      code\n      type\n      actions\n      apiIdentifier\n    }\n  }\n}\n    ";
export declare const ListGroupAuthorizedResourcesDocument = "\n    query listGroupAuthorizedResources($code: String!, $namespace: String, $resourceType: String) {\n  group(code: $code) {\n    authorizedResources(namespace: $namespace, resourceType: $resourceType) {\n      totalCount\n      list {\n        code\n        type\n        actions\n        apiIdentifier\n      }\n    }\n  }\n}\n    ";
export declare const ListNodeByCodeAuthorizedResourcesDocument = "\n    query listNodeByCodeAuthorizedResources($orgId: String!, $code: String!, $namespace: String, $resourceType: String) {\n  nodeByCode(orgId: $orgId, code: $code) {\n    authorizedResources(namespace: $namespace, resourceType: $resourceType) {\n      totalCount\n      list {\n        code\n        type\n        actions\n        apiIdentifier\n      }\n    }\n  }\n}\n    ";
export declare const ListNodeByIdAuthorizedResourcesDocument = "\n    query listNodeByIdAuthorizedResources($id: String!, $namespace: String, $resourceType: String) {\n  nodeById(id: $id) {\n    authorizedResources(namespace: $namespace, resourceType: $resourceType) {\n      totalCount\n      list {\n        code\n        type\n        actions\n        apiIdentifier\n      }\n    }\n  }\n}\n    ";
export declare const ListRoleAuthorizedResourcesDocument = "\n    query listRoleAuthorizedResources($code: String!, $namespace: String, $resourceType: String) {\n  role(code: $code, namespace: $namespace) {\n    authorizedResources(resourceType: $resourceType) {\n      totalCount\n      list {\n        code\n        type\n        actions\n        apiIdentifier\n      }\n    }\n  }\n}\n    ";
export declare const ListUserAuthorizedResourcesDocument = "\n    query listUserAuthorizedResources($id: String!, $namespace: String, $resourceType: String) {\n  user(id: $id) {\n    authorizedResources(namespace: $namespace, resourceType: $resourceType) {\n      totalCount\n      list {\n        code\n        type\n        actions\n        apiIdentifier\n      }\n    }\n  }\n}\n    ";
export declare const NodeByCodeDocument = "\n    query nodeByCode($orgId: String!, $code: String!) {\n  nodeByCode(orgId: $orgId, code: $code) {\n    id\n    orgId\n    name\n    nameI18n\n    description\n    descriptionI18n\n    order\n    code\n    root\n    depth\n    path\n    createdAt\n    updatedAt\n    children\n  }\n}\n    ";
export declare const NodeByCodeWithMembersDocument = "\n    query nodeByCodeWithMembers($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $orgId: String!, $code: String!) {\n  nodeByCode(orgId: $orgId, code: $code) {\n    id\n    orgId\n    name\n    nameI18n\n    description\n    descriptionI18n\n    order\n    code\n    root\n    depth\n    createdAt\n    updatedAt\n    children\n    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {\n      totalCount\n      list {\n        id\n        arn\n        userPoolId\n        status\n        username\n        email\n        emailVerified\n        phone\n        phoneVerified\n        unionid\n        openid\n        nickname\n        registerSource\n        photo\n        password\n        oauth\n        token\n        tokenExpiredAt\n        loginsCount\n        lastLogin\n        lastIP\n        signedUp\n        blocked\n        isDeleted\n        device\n        browser\n        company\n        name\n        givenName\n        familyName\n        middleName\n        profile\n        preferredUsername\n        website\n        gender\n        birthdate\n        zoneinfo\n        locale\n        address\n        formatted\n        streetAddress\n        locality\n        region\n        postalCode\n        city\n        province\n        country\n        createdAt\n        updatedAt\n        externalId\n        phoneCountryCode\n      }\n    }\n  }\n}\n    ";
export declare const NodeByIdDocument = "\n    query nodeById($id: String!) {\n  nodeById(id: $id) {\n    id\n    orgId\n    name\n    nameI18n\n    description\n    descriptionI18n\n    order\n    code\n    root\n    depth\n    path\n    createdAt\n    updatedAt\n    children\n  }\n}\n    ";
export declare const NodeByIdWithMembersDocument = "\n    query nodeByIdWithMembers($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $id: String!) {\n  nodeById(id: $id) {\n    id\n    orgId\n    name\n    nameI18n\n    description\n    descriptionI18n\n    order\n    code\n    root\n    depth\n    createdAt\n    updatedAt\n    children\n    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {\n      totalCount\n      list {\n        id\n        arn\n        userPoolId\n        status\n        username\n        email\n        emailVerified\n        phone\n        phoneVerified\n        unionid\n        openid\n        nickname\n        registerSource\n        photo\n        password\n        oauth\n        token\n        tokenExpiredAt\n        loginsCount\n        lastLogin\n        lastIP\n        signedUp\n        blocked\n        isDeleted\n        device\n        browser\n        company\n        name\n        givenName\n        familyName\n        middleName\n        profile\n        preferredUsername\n        website\n        gender\n        birthdate\n        zoneinfo\n        locale\n        address\n        formatted\n        streetAddress\n        locality\n        region\n        postalCode\n        city\n        province\n        country\n        createdAt\n        updatedAt\n        externalId\n        phoneCountryCode\n      }\n    }\n  }\n}\n    ";
export declare const OrgDocument = "\n    query org($id: String!) {\n  org(id: $id) {\n    id\n    rootNode {\n      id\n      orgId\n      name\n      nameI18n\n      description\n      descriptionI18n\n      order\n      code\n      root\n      depth\n      path\n      createdAt\n      updatedAt\n      children\n    }\n    nodes {\n      id\n      orgId\n      name\n      nameI18n\n      description\n      descriptionI18n\n      order\n      code\n      root\n      depth\n      path\n      createdAt\n      updatedAt\n      children\n    }\n  }\n}\n    ";
export declare const OrgsDocument = "\n    query orgs($page: Int, $limit: Int, $sortBy: SortByEnum) {\n  orgs(page: $page, limit: $limit, sortBy: $sortBy) {\n    totalCount\n    list {\n      id\n      rootNode {\n        id\n        name\n        nameI18n\n        path\n        description\n        descriptionI18n\n        order\n        code\n        root\n        depth\n        createdAt\n        updatedAt\n        children\n      }\n      nodes {\n        id\n        name\n        path\n        nameI18n\n        description\n        descriptionI18n\n        order\n        code\n        root\n        depth\n        createdAt\n        updatedAt\n        children\n      }\n    }\n  }\n}\n    ";
export declare const PoliciesDocument = "\n    query policies($page: Int, $limit: Int, $namespace: String) {\n  policies(page: $page, limit: $limit, namespace: $namespace) {\n    totalCount\n    list {\n      namespace\n      code\n      description\n      createdAt\n      updatedAt\n      statements {\n        resource\n        actions\n        effect\n        condition {\n          param\n          operator\n          value\n        }\n      }\n    }\n  }\n}\n    ";
export declare const PolicyDocument = "\n    query policy($namespace: String, $code: String!) {\n  policy(code: $code, namespace: $namespace) {\n    namespace\n    code\n    isDefault\n    description\n    statements {\n      resource\n      actions\n      effect\n      condition {\n        param\n        operator\n        value\n      }\n    }\n    createdAt\n    updatedAt\n  }\n}\n    ";
export declare const PolicyAssignmentsDocument = "\n    query policyAssignments($namespace: String, $code: String, $targetType: PolicyAssignmentTargetType, $targetIdentifier: String, $page: Int, $limit: Int) {\n  policyAssignments(namespace: $namespace, code: $code, targetType: $targetType, targetIdentifier: $targetIdentifier, page: $page, limit: $limit) {\n    totalCount\n    list {\n      code\n      targetType\n      targetIdentifier\n    }\n  }\n}\n    ";
export declare const PolicyWithAssignmentsDocument = "\n    query policyWithAssignments($page: Int, $limit: Int, $code: String!) {\n  policy(code: $code) {\n    code\n    isDefault\n    description\n    statements {\n      resource\n      actions\n      effect\n    }\n    createdAt\n    updatedAt\n    assignmentsCount\n    assignments(page: $page, limit: $limit) {\n      code\n      targetType\n      targetIdentifier\n    }\n  }\n}\n    ";
export declare const PreviewEmailDocument = "\n    query previewEmail($type: EmailTemplateType!) {\n  previewEmail(type: $type)\n}\n    ";
export declare const QiniuUptokenDocument = "\n    query qiniuUptoken($type: String) {\n  qiniuUptoken(type: $type)\n}\n    ";
export declare const QueryMfaDocument = "\n    query queryMfa($id: String, $userId: String, $userPoolId: String) {\n  queryMfa(id: $id, userId: $userId, userPoolId: $userPoolId) {\n    id\n    userId\n    userPoolId\n    enable\n    secret\n  }\n}\n    ";
export declare const RoleDocument = "\n    query role($code: String!, $namespace: String) {\n  role(code: $code, namespace: $namespace) {\n    id\n    namespace\n    code\n    arn\n    description\n    createdAt\n    updatedAt\n    parent {\n      namespace\n      code\n      arn\n      description\n      createdAt\n      updatedAt\n    }\n  }\n}\n    ";
export declare const RoleWithUsersDocument = "\n    query roleWithUsers($code: String!, $namespace: String, $page: Int, $limit: Int) {\n  role(code: $code, namespace: $namespace) {\n    users(page: $page, limit: $limit) {\n      totalCount\n      list {\n        id\n        arn\n        status\n        userPoolId\n        username\n        email\n        emailVerified\n        phone\n        phoneVerified\n        unionid\n        openid\n        nickname\n        registerSource\n        photo\n        password\n        oauth\n        token\n        tokenExpiredAt\n        loginsCount\n        lastLogin\n        lastIP\n        signedUp\n        blocked\n        isDeleted\n        device\n        browser\n        company\n        name\n        givenName\n        familyName\n        middleName\n        profile\n        preferredUsername\n        website\n        gender\n        birthdate\n        zoneinfo\n        locale\n        address\n        formatted\n        streetAddress\n        locality\n        region\n        postalCode\n        city\n        province\n        country\n        createdAt\n        updatedAt\n        externalId\n        phoneCountryCode\n      }\n    }\n  }\n}\n    ";
export declare const RoleWithUsersWithCustomDataDocument = "\n    query roleWithUsersWithCustomData($code: String!, $namespace: String, $page: Int, $limit: Int) {\n  role(code: $code, namespace: $namespace) {\n    users(page: $page, limit: $limit) {\n      totalCount\n      list {\n        id\n        arn\n        status\n        userPoolId\n        username\n        email\n        emailVerified\n        phone\n        phoneVerified\n        unionid\n        openid\n        nickname\n        registerSource\n        photo\n        password\n        oauth\n        token\n        tokenExpiredAt\n        loginsCount\n        lastLogin\n        lastIP\n        signedUp\n        blocked\n        isDeleted\n        device\n        browser\n        company\n        name\n        givenName\n        familyName\n        middleName\n        profile\n        preferredUsername\n        website\n        gender\n        birthdate\n        zoneinfo\n        locale\n        address\n        formatted\n        streetAddress\n        locality\n        region\n        postalCode\n        city\n        province\n        country\n        createdAt\n        updatedAt\n        externalId\n        phoneCountryCode\n        customData {\n          key\n          value\n          dataType\n          label\n        }\n      }\n    }\n  }\n}\n    ";
export declare const RolesDocument = "\n    query roles($namespace: String, $page: Int, $limit: Int, $sortBy: SortByEnum) {\n  roles(namespace: $namespace, page: $page, limit: $limit, sortBy: $sortBy) {\n    totalCount\n    list {\n      id\n      namespace\n      code\n      arn\n      description\n      createdAt\n      updatedAt\n    }\n  }\n}\n    ";
export declare const RootNodeDocument = "\n    query rootNode($orgId: String!) {\n  rootNode(orgId: $orgId) {\n    id\n    orgId\n    name\n    nameI18n\n    description\n    descriptionI18n\n    order\n    code\n    root\n    depth\n    path\n    codePath\n    namePath\n    createdAt\n    updatedAt\n    children\n  }\n}\n    ";
export declare const SearchNodesDocument = "\n    query searchNodes($keyword: String!) {\n  searchNodes(keyword: $keyword) {\n    id\n    orgId\n    name\n    nameI18n\n    description\n    descriptionI18n\n    order\n    code\n    root\n    depth\n    path\n    codePath\n    namePath\n    createdAt\n    updatedAt\n    children\n  }\n}\n    ";
export declare const SearchUserDocument = "\n    query searchUser($query: String!, $fields: [String], $page: Int, $limit: Int, $departmentOpts: [SearchUserDepartmentOpt], $groupOpts: [SearchUserGroupOpt], $roleOpts: [SearchUserRoleOpt]) {\n  searchUser(query: $query, fields: $fields, page: $page, limit: $limit, departmentOpts: $departmentOpts, groupOpts: $groupOpts, roleOpts: $roleOpts) {\n    totalCount\n    list {\n      id\n      arn\n      userPoolId\n      status\n      username\n      email\n      emailVerified\n      phone\n      phoneVerified\n      unionid\n      openid\n      nickname\n      registerSource\n      photo\n      password\n      oauth\n      token\n      tokenExpiredAt\n      loginsCount\n      lastLogin\n      lastIP\n      signedUp\n      blocked\n      isDeleted\n      device\n      browser\n      company\n      name\n      givenName\n      familyName\n      middleName\n      profile\n      preferredUsername\n      website\n      gender\n      birthdate\n      zoneinfo\n      locale\n      address\n      formatted\n      streetAddress\n      locality\n      region\n      postalCode\n      city\n      province\n      country\n      createdAt\n      updatedAt\n      externalId\n      phoneCountryCode\n    }\n  }\n}\n    ";
export declare const SearchUserWithCustomDataDocument = "\n    query searchUserWithCustomData($query: String!, $fields: [String], $page: Int, $limit: Int, $departmentOpts: [SearchUserDepartmentOpt], $groupOpts: [SearchUserGroupOpt], $roleOpts: [SearchUserRoleOpt]) {\n  searchUser(query: $query, fields: $fields, page: $page, limit: $limit, departmentOpts: $departmentOpts, groupOpts: $groupOpts, roleOpts: $roleOpts) {\n    totalCount\n    list {\n      id\n      arn\n      userPoolId\n      status\n      username\n      email\n      emailVerified\n      phone\n      phoneVerified\n      unionid\n      openid\n      nickname\n      registerSource\n      photo\n      password\n      oauth\n      token\n      tokenExpiredAt\n      loginsCount\n      lastLogin\n      lastIP\n      signedUp\n      blocked\n      isDeleted\n      device\n      browser\n      company\n      name\n      givenName\n      familyName\n      middleName\n      profile\n      preferredUsername\n      website\n      gender\n      birthdate\n      zoneinfo\n      locale\n      address\n      formatted\n      streetAddress\n      locality\n      region\n      postalCode\n      city\n      province\n      country\n      createdAt\n      updatedAt\n      externalId\n      phoneCountryCode\n      customData {\n        key\n        value\n        dataType\n        label\n      }\n    }\n  }\n}\n    ";
export declare const TemplateCodeDocument = "\n    query templateCode {\n  templateCode\n}\n    ";
export declare const UdfDocument = "\n    query udf($targetType: UDFTargetType!) {\n  udf(targetType: $targetType) {\n    targetType\n    dataType\n    key\n    label\n    options\n  }\n}\n    ";
export declare const UdfValueBatchDocument = "\n    query udfValueBatch($targetType: UDFTargetType!, $targetIds: [String!]!) {\n  udfValueBatch(targetType: $targetType, targetIds: $targetIds) {\n    targetId\n    data {\n      key\n      dataType\n      value\n      label\n    }\n  }\n}\n    ";
export declare const UdvDocument = "\n    query udv($targetType: UDFTargetType!, $targetId: String!) {\n  udv(targetType: $targetType, targetId: $targetId) {\n    key\n    dataType\n    value\n    label\n  }\n}\n    ";
export declare const UserDocument = "\n    query user($id: String) {\n  user(id: $id) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    identities {\n      openid\n      userIdInIdp\n      userId\n      connectionId\n      isSocial\n      provider\n      type\n      userPoolId\n      extIdpId\n    }\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n    customData {\n      key\n      value\n      dataType\n      label\n    }\n  }\n}\n    ";
export declare const UserBatchDocument = "\n    query userBatch($ids: [String!]!, $type: String) {\n  userBatch(ids: $ids, type: $type) {\n    identities {\n      openid\n      userIdInIdp\n      userId\n      connectionId\n      isSocial\n      provider\n      type\n      userPoolId\n      extIdpId\n    }\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n  }\n}\n    ";
export declare const UserBatchWithCustomDataDocument = "\n    query userBatchWithCustomData($ids: [String!]!, $type: String) {\n  userBatch(ids: $ids, type: $type) {\n    identities {\n      openid\n      userIdInIdp\n      userId\n      connectionId\n      isSocial\n      provider\n      type\n      userPoolId\n      extIdpId\n    }\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n    customData {\n      key\n      value\n      dataType\n      label\n    }\n  }\n}\n    ";
export declare const UserWithCustomDataDocument = "\n    query userWithCustomData($id: String) {\n  user(id: $id) {\n    id\n    arn\n    userPoolId\n    status\n    username\n    email\n    emailVerified\n    phone\n    phoneVerified\n    identities {\n      openid\n      userIdInIdp\n      userId\n      connectionId\n      isSocial\n      provider\n      userPoolId\n      extIdpId\n    }\n    unionid\n    openid\n    nickname\n    registerSource\n    photo\n    password\n    oauth\n    token\n    tokenExpiredAt\n    loginsCount\n    lastLogin\n    lastIP\n    signedUp\n    blocked\n    isDeleted\n    device\n    browser\n    company\n    name\n    givenName\n    familyName\n    middleName\n    profile\n    preferredUsername\n    website\n    gender\n    birthdate\n    zoneinfo\n    locale\n    address\n    formatted\n    streetAddress\n    locality\n    region\n    postalCode\n    city\n    province\n    country\n    createdAt\n    updatedAt\n    externalId\n    phoneCountryCode\n    customData {\n      key\n      value\n      dataType\n      label\n    }\n  }\n}\n    ";
export declare const UserpoolDocument = "\n    query userpool {\n  userpool {\n    id\n    name\n    domain\n    description\n    secret\n    jwtSecret\n    ownerId\n    userpoolTypes {\n      code\n      name\n      description\n      image\n      sdks\n    }\n    logo\n    createdAt\n    updatedAt\n    emailVerifiedDefault\n    sendWelcomeEmail\n    registerDisabled\n    appSsoEnabled\n    showWxQRCodeWhenRegisterDisabled\n    allowedOrigins\n    tokenExpiresAfter\n    isDeleted\n    frequentRegisterCheck {\n      timeInterval\n      limit\n      enabled\n    }\n    loginFailCheck {\n      timeInterval\n      limit\n      enabled\n    }\n    loginPasswordFailCheck {\n      timeInterval\n      limit\n      enabled\n    }\n    loginFailStrategy\n    changePhoneStrategy {\n      verifyOldPhone\n    }\n    changeEmailStrategy {\n      verifyOldEmail\n    }\n    qrcodeLoginStrategy {\n      qrcodeExpiresAfter\n      returnFullUserInfo\n      allowExchangeUserInfoFromBrowser\n      ticketExpiresAfter\n    }\n    app2WxappLoginStrategy {\n      ticketExpriresAfter\n      ticketExchangeUserInfoNeedSecret\n    }\n    whitelist {\n      phoneEnabled\n      emailEnabled\n      usernameEnabled\n    }\n    customSMSProvider {\n      enabled\n      provider\n      config\n    }\n    packageType\n    useCustomUserStore\n    loginRequireEmailVerified\n    verifyCodeLength\n    verifyCodeMaxAttempts\n  }\n}\n    ";
export declare const UserpoolTypesDocument = "\n    query userpoolTypes {\n  userpoolTypes {\n    code\n    name\n    description\n    image\n    sdks\n  }\n}\n    ";
export declare const UserpoolsDocument = "\n    query userpools($page: Int, $limit: Int, $sortBy: SortByEnum) {\n  userpools(page: $page, limit: $limit, sortBy: $sortBy) {\n    totalCount\n    list {\n      id\n      name\n      domain\n      ownerId\n      description\n      secret\n      jwtSecret\n      logo\n      createdAt\n      updatedAt\n      emailVerifiedDefault\n      sendWelcomeEmail\n      registerDisabled\n      appSsoEnabled\n      showWxQRCodeWhenRegisterDisabled\n      allowedOrigins\n      tokenExpiresAfter\n      isDeleted\n      packageType\n      useCustomUserStore\n      loginRequireEmailVerified\n      verifyCodeLength\n      verifyCodeMaxAttempts\n    }\n  }\n}\n    ";
export declare const UsersDocument = "\n    query users($page: Int, $limit: Int, $sortBy: SortByEnum, $excludeUsersInOrg: Boolean) {\n  users(page: $page, limit: $limit, sortBy: $sortBy, excludeUsersInOrg: $excludeUsersInOrg) {\n    totalCount\n    list {\n      identities {\n        openid\n        userIdInIdp\n        userId\n        connectionId\n        isSocial\n        provider\n        type\n        userPoolId\n        extIdpId\n      }\n      id\n      arn\n      userPoolId\n      status\n      username\n      email\n      emailVerified\n      phone\n      phoneVerified\n      unionid\n      openid\n      nickname\n      registerSource\n      photo\n      password\n      oauth\n      token\n      tokenExpiredAt\n      loginsCount\n      lastLogin\n      lastIP\n      signedUp\n      blocked\n      isDeleted\n      device\n      browser\n      company\n      name\n      givenName\n      familyName\n      middleName\n      profile\n      preferredUsername\n      website\n      gender\n      birthdate\n      zoneinfo\n      locale\n      address\n      formatted\n      streetAddress\n      locality\n      region\n      postalCode\n      city\n      province\n      country\n      createdAt\n      updatedAt\n      externalId\n      phoneCountryCode\n    }\n  }\n}\n    ";
export declare const UsersWithCustomDataDocument = "\n    query usersWithCustomData($page: Int, $limit: Int, $sortBy: SortByEnum, $excludeUsersInOrg: Boolean) {\n  users(page: $page, limit: $limit, sortBy: $sortBy, excludeUsersInOrg: $excludeUsersInOrg) {\n    totalCount\n    list {\n      id\n      identities {\n        openid\n        userIdInIdp\n        userId\n        connectionId\n        isSocial\n        provider\n        type\n        userPoolId\n        extIdpId\n      }\n      arn\n      userPoolId\n      status\n      username\n      email\n      emailVerified\n      phone\n      phoneVerified\n      unionid\n      openid\n      nickname\n      registerSource\n      photo\n      password\n      oauth\n      token\n      tokenExpiredAt\n      loginsCount\n      lastLogin\n      lastIP\n      signedUp\n      blocked\n      isDeleted\n      device\n      browser\n      company\n      name\n      givenName\n      familyName\n      middleName\n      profile\n      preferredUsername\n      website\n      gender\n      birthdate\n      zoneinfo\n      locale\n      address\n      formatted\n      streetAddress\n      locality\n      region\n      postalCode\n      city\n      province\n      country\n      createdAt\n      updatedAt\n      externalId\n      phoneCountryCode\n      customData {\n        key\n        value\n        dataType\n        label\n      }\n    }\n  }\n}\n    ";
export declare const WhitelistDocument = "\n    query whitelist($type: WhitelistType!) {\n  whitelist(type: $type) {\n    createdAt\n    updatedAt\n    value\n  }\n}\n    ";
