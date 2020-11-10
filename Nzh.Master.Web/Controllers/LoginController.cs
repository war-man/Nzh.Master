﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using Nzh.Master.Common.Helper;
using Nzh.Master.IService;
using Nzh.Master.IService.Sys;
using Nzh.Master.Model.Base;
using Nzh.Master.Model.Enum;
using Nzh.Master.Model.Sys;
using Nzh.Master.Web.Models;

namespace Nzh.Master.Web.Controllers
{
    public class LoginController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly IUserService _userService;

        private readonly ILogService _logService;

        private readonly ITestService _testService;

        public LoginController(ILogger<HomeController> logger, IUserService userService, ILogService logService, ITestService testService)
        {
            _logger = logger;
            _userService = userService;
            _logService = logService;
            _testService = testService;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult LoginIn(string UserName,string Password)
        {
            var result = new ResultModel<bool>();
            //var UserName = request.Value<string>("UserName");
            //string Password = request.Value<string>("Password");
            //var UserName = "";
            //string Password = "";
            if (string.IsNullOrEmpty(UserName))
            {
                result.Msg = "用户名不能为空。";
                result.Code = -1;
                result.Data = false;
                return Json(result);
            }
            if (string.IsNullOrEmpty(Password))
            {
                result.Msg = "密码不能为空。";
                result.Code = -1;
                result.Data = false;
                return Json(result);
            }
            result = _testService.GetByName(UserName);
            result = _userService.CheckLogin(UserName, Password);

            if (result.Code == 1)
            {
                _userService.UpDateUser(result.Data);
            }
            string IpAddress = "";//TODO
            Sys_Log log = new Sys_Log
            {
                LogStatus = result.Code == 1 ? Status.Enable : Status.Enable,
                LogType = LogType.LoginSucess,
                Remark = result.Msg,
                IpAddress = IpAddress,
                CreateUserId = result.Data.Id
            };
            _logService.WriteLog(log);
            return Json(result);
        }
    }
}
