
export type StatsResponse = {
    "data": {
        "total_seconds": number //<float: total coding activity, excluding "Other" language, as seconds for the given range of time>,
        "total_seconds_including_other_language": number //<float: total coding activity as seconds for the given range of time>,
        "human_readable_total": string //<string: total coding activity, excluding "Other" language, as human readable string>,
        "human_readable_total_including_other_language": string //<string: total coding activity as human readable string>,
        "daily_average": number //<float: average coding activity per day as seconds for the given range of time, excluding Other language>,
        "daily_average_including_other_language": number //<float: average coding activity per day as seconds for the given range of time>,
        "human_readable_daily_average": string //<string: daily average as human readable string, excluding Other language>,
        "human_readable_daily_average_including_other_language": string //<string: daily average as human readable string>,
        "categories": 
            {
            "name": string //<string: name of category, for ex: Coding or Debugging>,
            "total_seconds": number //<float: total coding activity as seconds>,
            "percent": number //<float: percent of time spent in this category>,
            "digital": string //<string: total coding activity for this category in digital clock format>,
            "text": string //<string: total coding activity in human readable format>,
            "hours": number //<integer: hours portion of coding activity for this category>,
            "minutes": number //<integer: minutes portion of coding activity for this category>
        }[], 
        "projects":
            {
            "name": string //<string: project name>,
            "total_seconds": number //<float: total coding activity as seconds>,
            "percent": number //<float: percent of time spent in this project>,
            "digital": string //<string: total coding activity for this project in digital clock format>,
            "text": string //<string: total coding activity in human readable format>,
            "hours": number //<integer: hours portion of coding activity for this project>,
            "minutes": number //<integer: minutes portion of coding activity for this project>
        }[],
        "languages":
            {
            "name": string //<string: language name>,
            "total_seconds": number //<float: total coding activity spent in this language as seconds>,
            "percent": number //<float: percent of time spent in this language>,
            "digital": string //<string: total coding activity for this language in digital clock format>,
            "text": string //<string: total coding activity in human readable format>,
            "hours": number //<integer: hours portion of coding activity for this language>,
            "minutes": number //<integer: minutes portion of coding activity for this language>,
            "seconds": number //<integer: seconds portion of coding activity for this language>
        }[],
        "editors":
            {
            "name": string //<string: editor name>,
            "total_seconds": number //<float: total coding activity spent in this editor as seconds>,
            "percent": number //<float: percent of time spent in this editor>,
            "digital": string //<string: total coding activity for this editor in digital clock format>,
            "text": string //<string: total coding activity in human readable format>,
            "hours": number //<integer: hours portion of coding activity for this editor>,
            "minutes": number //<integer: minutes portion of coding activity for this editor>,
            "seconds": number //<integer: seconds portion of coding activity for this editor>
        }[],
        "operating_systems":
            {
            "name": string //<string: os name>,
            "total_seconds": number //<float: total coding activity spent in this os as seconds>,
            "percent": number //<float: percent of time spent in this os>,
            "digital": string //<string: total coding activity for this os in digital clock format>,
            "text": string //<string: total coding activity in human readable format>,
            "hours": number //<integer: hours portion of coding activity for this os>,
            "minutes": number //<integer: minutes portion of coding activity for this os>,
            "seconds": number //<integer: seconds portion of coding activity for this os>
        }[],
        "dependencies":
            {
            "name": string //<string: dependency name>,
            "total_seconds": number //<float: total coding activity spent in this dependency as seconds>,
            "percent": number //<float: percent of time spent in this dependency>,
            "digital": string //<string: total coding activity for this dependency in digital clock format>,
            "text": string //<string: total coding activity in human readable format>,
            "hours": number //<integer: hours portion of coding activity for this dependency>,
            "minutes": number //<integer: minutes portion of coding activity for this dependency>,
            "seconds": number //<integer: seconds portion of coding activity for this dependency>
        }[],
        "machines":
            {
            "name": string //<string: machine hostname and ip address>,
            "machine_name_id": string //<string: unique id of this machine>,
            "total_seconds": number //<float: total coding activity spent on this machine as seconds>,
            "percent": number //<float: percent of time spent on this machine>,
            "digital": string //<string: total coding activity for this machine in digital clock format>,
            "text": string //<string: total coding activity in human readable format>,
            "hours": number //<integer: hours portion of coding activity for this machine>,
            "minutes": number //<integer: minutes portion of coding activity for this machine>,
            "seconds": number //<integer: seconds portion of coding activity for this machine>
        }[],
        "best_day": {
            "date": string //<string: day with most coding time logged as Date string in YEAR-MONTH-DAY format>,
            "text": string //<string: total coding activity for this day in human readable format>,
            "total_seconds": number //<float: number of seconds of coding activity, including other language, for this day>
        },
        "range": string //<string: time range of these stats>,
        "human_readable_range": string //<string: time range as human readable string>,
        "holidays": number //<integer: number of days in this range with no coding time logged>,
        "days_including_holidays": number //<integer: number of days in this range>,
        "days_minus_holidays": number //<integer: number of days in this range excluding days with no coding time logged>,
        "status": string //<string: status of these stats in the cache>,
        "percent_calculated": number //<integer: percent these stats have finished updating in the background>,
        "is_already_updating": number //<boolean: true if these stats are being updated in the background>,
        "is_coding_activity_visible": number //<boolean: true if this user's coding activity is publicly visible>,
        "is_other_usage_visible": number //<boolean: true if this user's languages, editors, and operating system stats are publicly visible>,
        "is_stuck": number //<boolean: true if these stats got stuck while processing and will be recalculated in the background>,
        "is_including_today": number //<boolean: true if these stats include the current day; normally false except range "all_time">,
        "is_up_to_date": number //<boolean: true if these stats are up to date; when false, stats are missing or from an old time range and will be refreshed soon>,
        "start": string //<string: start of this time range as ISO 8601 UTC datetime>,
        "end": string //<string: end of this time range as ISO 8601 UTC datetime>,
        "timezone": string //<string: timezone used in Olson Country/Region format>,
        "timeout": number //<integer: value of the user's keystroke timeout setting in minutes>,
        "writes_only": number //<boolean: status of the user's writes_only setting>,
        "user_id": string //<string: unique id of this user>,
        "username": string //<string: public username for this user>,
        "created_at": string //<string: time when these stats were created in ISO 8601 format>,
        "modified_at": string //<string: time when these stats were last updated in ISO 8601 format>
    }
}
