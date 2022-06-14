/*
 * @Author: mingwei
 * @Date: 2022-06-14 10:41:07
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 10:41:08
 * @FilePath: /vite-project/src/config/error_code.ts
 * @Description:
 */
export const error_code = {
  otherError: 99999, //未手动捕获的错误
  //系统错误
  ServerConnectionError: 10001,
  SystemBusy: 10002,
  TimeOut: 10003,
  ApiFrequentRequests: 10004,

  //数据库错误
  MysqlConnectionError: 20001,
  ForeignKeyConstraintError: 20002,
  UnknownDatabase: 20003,
  MysqlInsertError: 20101,
  InsertDuplicate: 20102,
  MysqlFindError: 20201,
  MysqlDeleteError: 20301,
  MysqlUpdateError: 20401,
  UpdateDuplicate: 20402,
  MysqlOutOfRange: 20403,
  ParameterLengthError: 20404,
  MysqlTransactionError: 20501,
  RedisConnectionError: 21001,
  RedisSetError: 21002,
  RedisDeleteError: 21003,
  RedisGetError: 21004,
  RedisAddError: 21005,
  RedisPersistError: 21006,
  MongoConnetError: 22001,
  MqConnetError: 23001,
  MqConsumeError: 23002,

  //权限错误
  JwtGetFailed: 30001,
  JwtExpiredError: 30001,
  SessionInvalidError: 30002,
  SessionNotFoundError: 30003,
  InsufficientUserPermissions: 30004,
  NoApiAccessPermissions: 30005,
  NotSetUpPermission: 30006,

  //业务相关错误
  DataIllegal: 40001,
  CatchError: 40002,
  MissingRequiredParameters: 40003,
  AccountNotReviewed: 41001,
  AccountDisable: 41002,
  MailNotActive: 41003,
  UsernameNotFound: 41004,
  PasswordError: 41005,
  VerificationCodeError: 41006,
  ResetPasswordError: 41007,
  mailNotFound: 41008,
  LoginInfoIllegal: 41009,
  NotEmployee: 41010,
  InvitationTokenExpired: 41011,
  InvalidRole: 41012,
  NotSystemRole: 41013,
  UnemployeeError: 41014,
  InvitationTokenParseError: 41015,
  FileUploadError: 42001,
  FileSizeError: 42002,
  FileTypeError: 42003,
  PictureUploadError: 42004,
  PictureSizeError: 42005,
  PictureTypeError: 42006,
  DuplicateUsername: 43001,
  DuplicatePhoneNumber: 43002,
  phoneNumberNotFound: 43003,
  NoMatchRecord: 43004,
  DuplicateMail: 43004,
  OTPVerifyError: 44001,

  //
  CallbackFailed: 50001,
  OssUploadError: 50002,
  SendMailError: 51001,
  MailAddressIllegal: 51002,
  SendSmsError: 52001,
  MobileNumberIllegal: 52002,
  MobileCountOverLimit: 52003,
  DenyIpRange: 52004,
  BusinessLimitControl: 52005,
  CdnManualRefreshError: 53001,
  WxAccessTokenError: 54001,
  WxAGetUserinfoError: 54002,
  ExternalApiError: 59999,

  //格式错误
  IdCardFormatError: 60001,
  emailFormatError: 60002,
  phoneFormatError: 60003,
};
