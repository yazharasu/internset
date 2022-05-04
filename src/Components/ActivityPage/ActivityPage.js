import React from 'react'
import airindia from '../../Assets/airindia.jpg';
import user from '../../Data/user.json';
import idSubmitted from '../../Assets/ID-document-submited.svg';
import intern_start from '../../Assets/Internship-Start-Date.svg';
import offerSign from '../../Assets/sign-offer-letter.svg';
import day_complete from '../../Assets/Day-completed.svg';
import Resubmission from '../../Assets/Resubmission.svg';
import submitted from '../../Assets/submitted.svg';
import started from '../../Assets/started.svg';
import sign from '../../Assets/sign.png';
import completed_final from '../../Assets/completed_final.JPG';
import './styles.css';


export default function ActivityPage() {

  return (
    <div style={ {width: "1000px"} } >   
        <div class="m-2 p-1 d-flex flex-row justify-content-between border">
            <div class="d-flex flex-row">
                <img src= {airindia} class="img-thumbnail img-fluid" style={ {width: "120px", height:"80px"} } /> 
                <div class="d-flex flex-column align-items-left justify-content-center ms-2 me-2" >
                    <h5 >{user.userData.Intern_title}</h5>
                    <h6 class="text-secondary"> {user.userData.Company_name} </h6>
                </div>
            </div>
            <h5 class=" mt-4 me-2">Internship Diary</h5>
        </div>

        <div class="m-4 table-responsive-lg" >
        <table class="table table-bordered">
            <tbody>
                <tr>
                <td>Intern's Name</td>
                <td>{user.userData.Intern_name}</td>
                </tr>

                <tr>
                <td>Intern's Address</td>
                <td>{user.userData.Intern_address}</td>
                </tr>

                <tr>
                <td>Intern's email</td>
                <td>{user.userData.Intern_email}</td>
                </tr>

                <tr>
                <td>Duration of Internship</td>
                <td>{user.userData.Duration}</td>
                </tr>

                <tr>
                <td>Start Date of Internship</td>
                <td>{user.userData.Start_date}</td>
                </tr>

                <tr>    
                <td>End Date of Internship</td>
                <td>{user.userData.End_date}</td>
                </tr>

                <tr>
                <td>Work Supervisor</td>
                <td>{user.userData.Work_supervisor}</td>
                </tr>

                <tr>
                <td>Supervisor's Designation</td>
                <td>{user.userData.Designation}</td>
                </tr>
            </tbody>
        </table>
        </div>


        <div class="m-4 border" >
            <h5 class="pt-3 pb-3 ps-3 border-bottom">Internship Timeline</h5>

            <div>
                <div class="ms-0 p-1 border-right" style={ {width: "100px", height:"30px", "border-top-right-radius":"20px", "border-bottom-right-radius":"20px", "background-color":"lightgrey"   } } >
                    <p class="ms-4 me-3">
                        {user.internActivity.date}
                    </p>
                </div>

                <div class="ms-4 d-flex flex-row align-items-center justify-content-left task">
                    <div class="task-icon">
                        <img src={idSubmitted} alt="" style={ {width: "40px", height:"40px"} }  />
                    </div>
                    <div class="d-flex flex-row">
                        <p class="ms-4 mt-3 fw-bold" >You submitted the required ID documents</p>
                        <p class="mt-3 ms-3 text-secondary" >{user.internActivity.submission}</p>
                    </div>
                </div>
                <div  class="ms-4 d-flex flex-row align-items-center justify-content-left task">
                    <div class="task-icon">
                        <img src={offerSign} style={ {width: "40px", height:"40px"} }  />
                    </div>
                    <div class="d-flex flex-row">
                        <p class="ms-4 mt-3 fw-bold">You signed the offer letter  </p>
                        <p class="mt-3 ms-3 text-secondary">{user.internActivity.signed}</p>
                    </div>
                </div>
                <div  class="ms-4 d-flex flex-row align-items-center justify-content-left">
                    <div>
                        <img src={intern_start} style={ {width: "40px", height:"40px"} } />
                    </div>
                    <div class="d-flex flex-row">
                        <p class="ms-4 mt-3 fw-bold">You internship start data was updated to July 12</p>
                        <p class="mt-3 ms-3 text-secondary">{user.internActivity.startDate}</p>
                    </div>
                </div>
            </div>

            { user.weeklyActivity.map( (week) => {
                return(
                    <>
                        <div class="ms-0 p-1 border-right" style={ {width: "100px", height:"30px", "border-top-right-radius":"20px", "border-bottom-right-radius":"20px", "background-color":"lightgrey"   } } >
                            <p class="ms-4 me-3">
                                {week.date}
                            </p>
                        </div>
                        <div  class="ms-4 d-flex flex-row align-items-center justify-content-left">
                            <img src={started} style={ {width: "40px", height:"40px"} } />
                            <div class="d-flex flex-row">
                                <p class="ms-4 mt-3 fw-bold">{week.week} week started</p>
                                <p class="mt-3 ms-3 text-secondary">{week.startDate}</p>
                            </div>
                        </div>

                    
                        { week.dailyActivity.map( (actDaily) => {
                            var noActivities = actDaily.activities.length;
                            var count = 0;
                            
                        return(
                            <div class="dont-break">
                            <div class="ms-0 mt-1 mb-1 p-1 border-right" style={ {width: "100px", height:"30px", "border-top-right-radius":"20px", "border-bottom-right-radius":"20px", "background-color":"lightgrey"   } } >
                                <p class="ms-4 me-3">
                                    {actDaily.date}
                                </p>
                            </div>

                            {actDaily.activities.map( (act) => {
                                count += 1
                                if(act.status === "submitted"){
                                    return(
                                    <div  class={`ms-4 d-flex flex-row align-items-center justify-content-left ${(count<noActivities) ? "task": "" }`}>
                                        <div class={`${(count<noActivities) ? "task-icon": "" }`}>
                                            <img src={submitted} class="task-icon" style={ {width: "40px", height:"40px"} } />
                                        </div>
                                        <div class="d-flex flex-row">
                                            <p class="ms-4 mt-3 fw-bold">{`You submitted the work for ${act.task}`}</p>
                                            <p class="mt-3 ms-3 text-secondary">{act.time}</p>
                                        </div>
                                    </div>
                                    )
                                }else if (act.status === "resubmission"){
                                    return(
                                    <div  class={`ms-4 d-flex flex-row align-items-center justify-content-left ${(count<noActivities) ? "task": "" }`}>
                                        <div class={`${(count<noActivities) ? "task-icon": "" }`}>
                                            <img src={Resubmission} class="task-icon" style={ {width: "40px", height:"40px"} } />
                                        </div>
                                        <div class="d-flex flex-row">
                                            <p class="ms-4 mt-3 fw-bold">{`You supervisor requested resubmission for ${act.task}`}</p>
                                            <p class="mt-3 ms-3 text-secondary">{act.time}</p>
                                        </div>
                                    </div>
                                    )
                                }else if (act.status === "resubmitted"){
                                    return(
                                    <div  class={`ms-4 d-flex flex-row align-items-center justify-content-left ${(count<noActivities) ? "task": "" }`}>
                                        <div class={`${(count<noActivities) ? "task-icon": "" }`}>
                                            <img src={submitted} class="task-icon" style={ {width: "40px", height:"40px"} } />
                                        </div>
                                        <div class="d-flex flex-row">
                                            <p class="ms-4 mt-3 fw-bold">{`You resubmitted the work for ${act.task}`}</p>
                                            <p class="mt-3 ms-3 text-secondary">{act.time}</p>
                                        </div>
                                    </div>
                                    )
                                }else if (act.status === "complete"){
                                    return(
                                    <div  class={`ms-4 d-flex flex-row align-items-center justify-content-left ${(count<noActivities) ? "task": "" }`}>
                                        <div class={`${(count<noActivities) ? "task-icon": "" }`}>
                                            <img src={day_complete} class="task-icon" style={ {width: "40px", height:"40px"} } />
                                        </div>
                                        <div class="d-flex flex-row ">
                                            <p class="ms-4 mt-3 fw-bold">{`Your work for ${act.task} is marked as complete`}</p>
                                            <p class="mt-3 ms-3 text-secondary">{act.time}</p>
                                        </div>
                                    </div>
                                    )
                                }
                                
                            })}
                            </div>
                            ) 
                        })}
                        <div class="mb-4 d-flex flex-row  border align-items-center justify-content-left dont-break">
                            <div class="bg-success" style={ {width: "10px", height:"58px"} }>  </div>
                            <img class="ms-3" src={started} style={ {width: "40px", height:"40px"} } />
                            <div class="d-flex flex-row">
                                <p class="ms-4 mt-3 text-success fw-bold">Your {week.week} week is over</p>
                            </div>
                        </div>
                    </>
            )}  )}

            <div class="mb-4 d-flex flex-column align-items-center justify-content-center dont-break">

                <img class="ms-3" src={completed_final} style={ {width: "100px", height:"100px"} } />
                <div class="d-flex flex-row">
                    <p class="ms-4 mt-3 text-success fw-bold">You've completed your internship!</p>
                </div>
            </div>
        </div>
        <div class="ms-4 d-flex flex-column align-items-left justify-content-left dont-break">
            <p class="ms-4">For {user.userData.Company_name}</p>
            <img class="ms-3 mb-2" src={sign} style={ {width: "120px", height:"50px"} } />
            <p class="ms-4 mb-0 p-0 fw-bold">{user.userData.Work_supervisor}</p>
            <p class="ms-4 mb-0 p-0 text-secondary fw-bold">{user.userData.Designation}</p>
        </div>

    </div>
    )
}
