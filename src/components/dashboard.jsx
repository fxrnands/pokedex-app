import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function dashboard() {
  return (
    <div>
      <main>
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Pokemon"
                options={{ height: 600 }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default dashboard;
