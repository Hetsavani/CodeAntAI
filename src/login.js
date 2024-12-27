"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const nav = useNavigate();
  //   const [deploymentType, setDeploymentType] = useState<'saas' | 'self-hosted'>('saas')

  return (
    <div
        style={{backgroundImage: 'url(/background.png)',backgroundRepeat:"no-repeat",backgroundSize: '35% 35%',backgroundPosition:"0px 410px"}}
     class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div class="w-full max-w-[1100px] grid lg:grid-cols-2 gap-8 items-center">
        <div
          //   style={{
          //     boxShadow:
          //       "0px 4px 6px rgb(0, 0, 0), 0px -4px 6px rgb(0, 0, 0),4px 0px 6px rgb(0, 0, 0), -4px 0px 6px rgb(0, 0, 0);",
          //   }}
          class="space-y-8 shadow-lg shadow-dark p-3 rounded-3xl lg:pr-8 bg-white"
        >
          <div className="flex border-b-2 border-secondary-300 pb-3" style={{boxSizing:"border-box"}}>
            <img src="/logo.png" className="h-10 w-10 mt-2 ms-2"></img>
            <span class="text-xl pt-3 font-semibold">
              AI to Detect & Autofix Bad Code
            </span>
          </div>

          <div class="grid grid-cols-3 pb-3 gap-2 text-center">
            <div class="space-y-1">
              <div class="text-2xl font-bold">30+</div>
              <div class="text-m text-gray-600">Language Support</div>
            </div>
            <div class="space-y-1">
              <div class="text-2xl font-bold">10K+</div>
              <div class="text-m text-gray-600">Developers</div>
            </div>
            <div class="space-y-1">
              <div class="text-2xl font-bold">100K+</div>
              <div class="text-m text-gray-600">Hours Saved</div>
            </div>
          </div>
        </div>
        <div
          class="absolute mt-5 bg-white shadow-lg rounded-3xl p-4"
          style={{ top: "350px", left: "500px", width: "200px" }}
        >
          {/* <i class="fas fa-chart-line text-green-500 text-3xl fs-4"></i> */}
          <div className="flex mb-2">
            <i class="bi bi-pie-chart-fill text-secondary text-3xl"></i>
            <div
              style={{ height: "20px" }}
              class="text-xs mt-1 ms-5 text-center px-2 py-auto"
            >
              <span className="text-blue-800 text-m fw-bold">
                <i class="fw-bold bi bi-arrow-up"></i>14%
              </span>{" "}
              <br />
              This week
            </div>
          </div>
          <div class="space-y-1">
            <div class="text-sm text-gray-600">Issues Fixed</div>
            <div class="text-2xl font-bold">500K+</div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-lg">
          <div class="flex justify-center mb-6">
            <img src="/logo.png" alt="CodeAnt AI Logo" class="h-10" />
            <h1 class="text-2xl font-bold ml-2 mt-2">CodeAnt AI</h1>
          </div>

          <h2 class="text-2xl font-semibold text-center mb-6">
            Welcome to CodeAnt AI
          </h2>

          <div class="flex gap-2 p-1 bg-gray-100 rounded-lg mb-6">
            <button
              id="saasBtn"
              class="flex-1 py-2 rounded-md text-sm font-medium transition-colors bg-blue-500 text-white"
            >
              SAAS
            </button>
            <button
              id="selfHostedBtn"
              class="flex-1 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
            >
              Self Hosted
            </button>
          </div>

          <div class="space-y-3">
            <button
              onClick={() => {
                nav("/repository");
              }}
              class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-m text-m font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <i class="ri-github-fill mr-2"></i>
              Sign in with Github
            </button>

            <button class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-m text-m font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i class="bi bi-bucket-fill mr-2 text-danger"></i>
              Sign in with Bitbucket
            </button>

            <button class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-m text-m font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i class="bi bi-windows mr-2 text-primary"></i>
              Sign in with Azure DevOps
            </button>

            <button class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-m text-m font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i class="ri-gitlab-fill mr-2 text-warning"></i>
              Sign in with Gitlab
            </button>
          </div>

          <p class="text-sm text-gray-600 text-center mt-6">
            By signing up you agree to the
            <a href="#" class="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
