import React from "react";

function CsDashboard() {
  return (
    <div className="w-full h-screen flex flex-col bg-slate-400 mt-10 p-5">
      {/* Stats Section */}
      <div className="flex gap-5 justify-between w-full ">
        <div className="flex flex-col bg-red-500 w-full">
          <span>Hi, Favour,</span>
          <div className="flex w-full justify-between">
            <span> Your Dashboard</span>
            <div>Date Component</div>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="h-2 bg-white grid grid-cols-2 gap-4 p-4">
          {/* PA Request */}
          <div className="flex items-center space-x-2">
            <img
              src="images/img_icon_bar_chart_v.svg"
              alt="Icon"
              className="w-6 h-6"
            />
            <span>PA Request 275</span>
          </div>
          {/* Approved PA Requests */}
          <div className="flex items-center space-x-2">
            <img
              src="images/img_icon_bar_chart_v.svg"
              alt="Icon"
              className="w-6 h-6"
            />
            <span>Approved PA Requests 182</span>
          </div>
          {/* Open Tickets */}
          <div className="flex items-center space-x-2">
            <img
              src="images/img_icon_bar_chart_v.svg"
              alt="Icon"
              className="w-6 h-6"
            />
            <span>Open Tickets 2300</span>
          </div>
          {/* Closed Tickets */}
          <div className="flex items-center space-x-2">
            <img
              src="images/img_icon_bar_chart_v.svg"
              alt="Icon"
              className="w-6 h-6"
            />
            <span>Closed Tickets 42</span>
          </div>
        </div>

        {/* Escalations Section */}
        <div className="w-full ">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Escalations</h2>
            <button className="text-red-500 py-2 px-4 rounded-md hover:bg-red-600">
              See All
            </button>
          </div>

          <div className="space-y-4">
            {/* Dummy Data for Escalations */}
            {[
              {
                description:
                  "Escalation 1: Issue with the server not responding.",
              },
              {
                description:
                  "Escalation 2: User unable to access their account due to login error.",
              },
              {
                description:
                  "Escalation 3: Critical bug in the production environment affecting users.",
              },
              {
                description:
                  "Escalation 4: Delayed response to support tickets causing customer dissatisfaction.",
              },
              {
                description:
                  "Escalation 5: Service downtime in the payment gateway.",
              },
            ].map((escalation, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-white shadow-sm border-b w-[531px] h-[50px] border-gray-300 rounded-md font-productSans"
              >
                <p className="text-[13px] font-normal leading-[15.7px]">
                  {escalation.description}
                </p>
                <button className="text-red-500 py-2 px-4 rounded-md hover:bg-red-600">
                  Take Action
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CsDashboard;
