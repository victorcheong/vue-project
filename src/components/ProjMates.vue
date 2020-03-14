<template>
  <div id="app">
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <table>
      <tr>
        <th>
          <img src='../assets/bestlogo.jpg' style="height:100px; position:absolute; top:0; left:0">
        </th>
        <th style="position:absolute; top:25px; right:0">
          <ul style="list-style-type:none; margin:0; padding:0; overflow:hidden" id='header'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#forum'>My Projects</a></li>
            <li><a href='#forum'>Find Group Mates</a></li>
            <li><a href='#forum'>Forum</a></li>
            <li @mouseover="hover = true"><a><i class="fa fa-user"></i> Peppa Pig</a></li>
          </ul>
        </th>
        <div v-if='hover' style="position:absolute; right:10px; top: 60px;">
          <ul style="list-style-type:none; text-align: left" @mouseleave="hover = false" id='userinfo'>
            <li><a href='#'>Alerts</a></li>
            <li><a href='#'>Profile</a></li>
            <li><a href='#'>Log Out</a></li>
          </ul>
        </div>
      </tr>
    </table>
    <br>
    <br>
    <br>
    <div style="border-width:1px; border-style:solid; height:100px; display:block; background-size: 100% 100%;">   
    Hello
    </div>
    <table>
      <tr>
        <td style="padding-left: 500px; padding-right: 0px;">
          <label for="modules">
            <h1>You are viewing</h1>
          </label>
        </td>
        <td style="padding-left: 20px;">
          <select id="modules" v-model="module">
            <option value="bt3103">BT3103</option>
            <option value="is3103">IS3103</option>
            <option value="bt3102">BT3102</option>
          </select>
        </td>
      </tr>
    </table>
    <div>
        <div style="left: 250px; position:absolute; border-color: grey; border-radius: 2px; border-width: thin; padding: 20px 20px 20px 20px;
        box-shadow: 1px 0.5px 1px 2.5px grey;">
          <h5>Looking for:</h5>
          <ul style="text-align: justify; list-style-type:none">
            <li><a href="#" v-on:click = 'currPage = "Students not in any group"' style="text-decoration:none"><span><i class="fa fa-angle-double-right" aria-hidden="true"></i>Students without Group</span></a></li>
            <br>
            <li><a href="#" v-on:click='currPage = "Formed Project Groups"' style="text-decoration:none"><span><i class="fa fa-angle-double-right" aria-hidden="true"></i>Formed Project Groups</span></a></li>
            <br>
            <li><a href="#" v-on:click='currPage = "Form a new group"' style="text-decoration:none"><span><i class="fa fa-angle-double-right" aria-hidden="true"></i>New Group</span></a></li>
            <br>
            <li><a href="#" v-on:click='currPage = "Join Existing Groups"' style="text-decoration:none"><span><i class="fa fa-angle-double-right" aria-hidden="true"></i>Existing Groups</span></a></li>
          </ul>
        </div>
        <div style="position: absolute; right: 300px; text-align: left; border-color: grey; border-radius: 2px; border-width: thin; padding: 20px 20px 20px 20px;
        box-shadow: 1px 0.5px 1px 2.5px grey;">
          <div v-show='currPage== "Students not in any group"' style="padding-right: 120px;">
            <h1>Students with No Group:</h1>
            <div v-show="module=='bt3103'">
              <ol>
                <li>
                  Tom
                  <a href='https://www.google.com' target="_blank">Profile</a>
                </li>
                <li>
                  Dick
                  <a href='https://www.google.com' target="_blank">Profile</a>
                </li>
                <li>
                  Harry
                  <a href='https://www.google.com' target="_blank">Profile</a>
                </li>
              </ol>
            </div>
            <div v-show="module=='is3103'">
              <ol>
                <li>
                  Jeff
                  <a href='https://www.google.com' target="_blank">Profile</a>
                </li>
                <li>
                  Hardy
                  <a href='https://www.google.com' target="_blank">Profile</a>
                </li>
                <li>
                  Robert
                  <a href='https://www.google.com' target="_blank">Profile</a>
                </li>
              </ol>
            </div>
            <div v-show="module=='bt3102'">
              <ol>
                <li>
                  Edward
                  <a href='https://www.google.com' target="_blank">Profile</a>
                </li>
                <li>
                  Frankanstein
                  <a href='https://www.google.com' target="_blank">Profile</a>
                </li>
                <li>
                  Monster
                  <a href='https://www.google.com' target="_blank">Profile</a>
                </li>
              </ol>
            </div>
          </div>
          <div v-show='currPage== "Formed Project Groups"' style="padding-right: 120px;">
            <h1 style="text-align: left">Formed Project Groups: </h1>
            <div v-if="module=='bt3103'">
              <ul>
                <li style="text-align: left; list-style: none;">
                  <div class='group' style="border-radius: 25px;border: 2px solid #73AD21; padding: 10px;">
                    <h4>Group 6 (5/5)</h4>
                    <div class='group-content'>
                      Alan <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Brad <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Charlie <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Dan <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Edward <a href='https://www.google.com' target="_blank">Profile</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div v-if="module=='is3103'">
              <ul>
                <li style="text-align: left; list-style: none;">
                  <div class='group' style="border-radius: 25px;border: 2px solid #73AD21; padding: 10px;">
                    <h4>Group 8 (5/5)</h4>
                    <div class='group-content'>
                      King <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Lesley <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Jia Ting <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Kobe Bryant <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Mary <a href='https://www.google.com' target="_blank">Profile</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div v-if="module=='bt3102'">
              <ul>
                <li style="text-align: left;list-style: none;">
                  <div class='group' style="border-radius: 25px;border: 2px solid #73AD21; padding: 10px;">
                    <h4>Group 7 (5/5)</h4>
                    <div class='group-content'>
                      Jack <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Jill <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Went <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Up <a href='https://www.google.com' target="_blank">Profile</a>
                      <br>
                      Hill <a href='https://www.google.com' target="_blank">Profile</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
      
          </div>
          <div v-show='currPage== "Form a new group"'>
            <h1>Form a new group:</h1>
            <div class="modal-content" style="width: 600px; overflow: auto; margin-bottom: 0px;">
              <div>
                <label style="vertical-align: middle;"><h6>Group Name:</h6></label>
                <textarea v-model='newGroup.groupName' style="resize: none;" rows="1"></textarea>
                <button style="vertical-align: top;" v-on:click="checkAvailable()">Check Availability</button>
                <br>
                <div class='good' v-if="good!=''" style="color: green">{{good}}</div>
                <div class='bad' v-if="bad!=''" style="color: red">{{bad}}</div>
              </div>
              <br>
              <h6>Size of group:</h6><input type=number v-model='newGroup.size' @change='addMember()'>
              <br>
              <br>
              <div style="text-align: left; font-size: 20px">
                <h6>Add your peers who are without a group:</h6>
                <select v-show='module=="bt3103"' v-model = 'friend'>
                  <option disabled selected value>Select a peer</option>
                  <option v-for='fren in bt3103NoGroup' v-bind:key=fren>{{fren}}</option>
                </select>
                <select v-show='module=="is3103"' v-model = 'friend'>
                  <option disabled selected value>Select a peer</option>
                  <option v-for='fren in is3103NoGroup' v-bind:key=fren>{{fren}}</option>
                </select>
                <select v-show='module=="bt3102"' v-model = 'friend'>
                  <option disabled selected value>Select a peer</option>
                  <option v-for='fren in bt3102NoGroup' v-bind:key=fren>{{fren}}</option>
                </select>
                <button v-on:click='addFriend()'>Add</button>
                <br>
                <br>
                <h6>Remove your peers in your group:</h6>
                <select v-model = 'friend'>
                  <option disabled selected value>Select a peer</option>
                  <option v-for='fren in newGroup.currGroup.slice(1)' v-bind:key=fren>{{fren}}</option>
                </select>
                <button v-on:click='removeFriend()'>Remove</button>
              </div>
      
              <br>
              <div>Group as of now: {{newGroup.currGroup.join(', ')}}</div>
              <br>
              <div v-if='newGroup.size - newGroup.currGroup.length > 1'>You need
                {{newGroup.size - newGroup.currGroup.length}}
                more group mates.</div>
              <div v-if='newGroup.size - newGroup.currGroup.length <= 1'>You need
                {{newGroup.size - newGroup.currGroup.length}} more group mate.</div>
              <br>
              <br>
              <div style="text-align: left; font-size: 20px">
                <h6>I want to look for:</h6>
              </div>
              <div>
                <h6>Add a new skill:</h6>
                <textarea rows="1" v-model.lazy='skill' style="resize: none;"></textarea>
                
                <button v-on:click='checkSkill()' style="vertical-align: top;">Add</button>
                <br>
                <div v-if='hasNewSkill && newGroup.newSkill.length > 0 && skill != ""' id='add'>{{skill}} has been added!
                </div>
                <div v-if='!hasNewSkill && newGroup.newSkill.length > 0 && skill != ""'>{{skill}} has already been added!
                </div>
              </div>
              <br>
              <label><h6>Select Team Member</h6></label>
              <select v-model='newGroup.currMember' v-on:change='checkCurr()'>
                <option v-for='(value, index) in newGroup.skills' v-bind:key=index+1>{{index + 1}}</option>
              </select>
      
              <br>
              <div>
                <div v-for='(value, index) in newGroup.memberStatus' v-show='value=="true"' v-bind:key = value>
                  <p style="text-align: left">
                    Team Member {{index + 1}}
                  </p>
                  <div id='memberlist'>
                    Desired Skills:
                    <br>
                    <input type="checkbox" id="skill1" name="skill1" value="Java" @change='addRemoveSkills(index)'
                      v-model='newGroup.skills[index]'>
                    <label for="skill1">Java</label><br>
                    <input type="checkbox" id="skill2" name="skill2" value="Python" @change='addRemoveSkills(index)'
                      v-model='newGroup.skills[index]'>
                    <label for="skill2">Python</label><br>
                    <input type="checkbox" id="skill3" name="skill3" value="HTML" @change='addRemoveSkills(index)'
                      v-model='newGroup.skills[index]'>
                    <label for="skill3">HTML</label><br>
                    <div v-for='curr in newGroup.newSkill' v-bind:key = curr>
                      <input type="checkbox" v-bind:value=curr @change='addRemoveSkills(index)'
                        v-model='newGroup.skills[index]'>
                      <label>{{curr}}</label>
                      <button v-on:click='newGroup.newSkill.splice(newGroup.newSkill.indexOf(skill), 1); newGroup.skills[index].splice(newGroup.skills[index].indexOf(skill), 1); 
                            addRemoveSkills(index)'>Remove</button><br>
                    </div>
                    <div v-if='loadMore'>
                      Year:
                      <br>
                      <input type="checkbox" id="skill4" name="skill4" value="Year 1" @change='addRemoveSkills(index)'
                        v-model='newGroup.skills[index]'>
                      <label for="skill4">Year 1</label><br>
                      <input type="checkbox" id="skill5" name="skill5" value="Year 2" @change='addRemoveSkills(index)'
                        v-model='newGroup.skills[index]'>
                      <label for="skill5">Year 2</label><br>
                      <input type="checkbox" id="skill6" name="skill6" value="Year 3" @change='addRemoveSkills(index)'
                        v-model='newGroup.skills[index]'>
                      <label for="skill6">Year 3</label><br>
                      <input type="checkbox" id="skill7" name="skill7" value="Year 4" @change='addRemoveSkills(index)'
                        v-model='newGroup.skills[index]'>
                      <label for="skill7">Year 4</label><br>
                      Major:
                      <br>
                      <input type="checkbox" id="skill8" name="skill8" value="Business Analytics"
                        @change='addRemoveSkills(index)' v-model='newGroup.skills[index]'>
                      <label for="skill8">Business Analytics</label><br>
                      <input type="checkbox" id="skill9" name="skill9" value="Computer Science"
                        @change='addRemoveSkills(index)' v-model='newGroup.skills[index]'>
                      <label for="skill9">Computer Science</label><br>
                      <input type="checkbox" id="skill10" name="skill10" value="Information Systems"
                        @change='addRemoveSkills(index)' v-model='newGroup.skills[index]'>
                      <label for="skill10">Information Systems</label><br>
                      <input type="checkbox" id="skill11" name="skill11" value="Information Security"
                        @change='addRemoveSkills(index)' v-model='newGroup.skills[index]'>
                      <label for="skill11">Information Security</label><br>
                      <input type="checkbox" id="skill12" name="skill12" value="Computer Engineering"
                        @change='addRemoveSkills(index)' v-model='newGroup.skills[index]'>
                      <label for="skill12">Computer Engineering</label><br>
                    </div>
                    <button v-on:click='loadMore=!loadMore; changeText()'>{{loadText}}</button>
      
                    <p>You have selected:</p>
                    <p>{{newGroup.members[index]}}</p>
                    <h6>Any comments for your group?</h6><textarea v-model.lazy='newGroup.comment' rows="1" style="resize: none;"></textarea>
                    <br>
                    <br>
                    <button v-on:click='addGroup'>Submit</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div v-show='currPage == "Join Existing Groups"' style="padding-right: 200px;">
            <h1 style="text-align: left">Join Existing Groups:</h1>
            <table>
            <tr>
              <td>
                <div style="text-align: left" v-for='team in newGroups'  v-bind:key = team>
                  <ul style="list-style-type:none">
                    <li class="removebullet">
                      <div class='group' style="text-align: center">
                        <div style="border-radius: 25px;border: 2px solid #73AD21; padding: 10px;list-style:none;">
                          <h4>{{team.groupName}} ({{team.currGroup.length}}/{{team.size}}) </h4>
                        </div>
                        <ul v-for='member in team.currGroup' v-bind:key = member>
                          <div class='group-content'>
                            <div v-if='team.currGroup.length > 1'>You <a href='https://www.google.com' target="_blank">Profile</a>
                            </div>
                            <li>
                              {{member}} <a href='https://www.google.com' target="_blank">Profile</a>
                            </li>
                          </div>
                        </ul>
                      </div>
                      <br>
                      <br>
                      <div class='group'>
                        <div style="border-radius: 25px;border: 2px solid #73AD21; padding: 10px;">
                          Team Composition:
                        </div>
                        <div class='group-content'>
                          <table>
                            <td>
                              <div v-for='(mem, index) in team.skills1' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1}}
                                <ul>
                                  <div v-for='skill in mem' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-if='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar" v-bind:style='{width: team.compatibility[index] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{team.compatibility[index] + '%'}}</div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td style="padding-left: 50px; vertical-align: top;">
                              <div v-for='(mem, index) in team.skills2' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1 + team.skills1.length}}
                                <ul>
                                  <div v-for='skill in mem' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-if='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar"
                                        v-bind:style='{width: team.compatibility[index + team.skills1.length] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{team.compatibility[index + team.skills1.length] + '%'}}</div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td style="padding-left: 50px; vertical-align: top;">
                              <div v-for='(mem, index) in team.skills3' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1 + team.skills1.length + team.skills2.length}}
                                <ul>
                                  <div v-for='skill in mem' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-if='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar"
                                        v-bind:style='{width: team.compatibility[index + team.skills1.length + team.skills2.length] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{team.compatibility[index + team.skills1.length + team.skills2.length] + '%'}}</div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </table>
                        </div>
                      </div>
                      <br>
                      <br>
                      {{team.comment}}
                    </li>
                  </ul>
                </div>
                <br>
                <div v-if="module=='bt3103'">
                  <ul style="list-style-type:none">
                    <li style="text-align: left">
                      <div class='group'>
                        <div style="border-radius: 25px;border: 2px solid #73AD21; padding: 10px;">
                          <h3>Group 1 ({{bt3103_grp1_teamNum}}/5)</h3>
                        </div>
                        <div class='group-content'>
                          Alan <a href='https://www.google.com' target="_blank">Profile</a>
                          <br>
                          Brad <a href='https://www.google.com' target="_blank">Profile</a>
                          <br>
                          Charlie <a href='https://www.google.com' target="_blank">Profile</a>
                          <br>
                          Dan <a href='https://www.google.com' target="_blank">Profile</a>
                          <br>
                          <p v-if='bt3103_grp1_hasJoined'>You <a href='https://www.google.com' target="_blank">Profile</a></p>
                        </div>
                      </div>
                      <br>
                      <br>
                      <div class='group'>
                        <div style="border-radius: 25px;border: 2px solid #73AD21; padding: 10px;">
                          Team Composition:
                        </div>
                        <div class='group-content'>
                          <table>
                            <td>
                              <div v-for='(mem, index) in bt3103_grp1_skills1' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1}}
                                <ul>
                                  <div v-for='skill in bt3103_grp1_skills1[index]' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <button v-if='bt3103_grp1_hasJoined && bt3103_grp1_joinIndex == index'
                                  v-on:click='leave("bt3103", index, 1)'>Leave</button>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-show='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar" v-bind:style='{width: bt3103_grp1_com[index] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{bt3103_grp1_com[index] + '%'}}</div>
                                  </div>
                                </div>
                                <button v-show='mem[0] != "apple" && bt3103_grp1_com[index] == 100'
                                  v-on:click='join("bt3103", index, 1)'>Click to join now</button>
                                <a href='mailto:abcd@google.com' v-show='bt3103_grp1_com[index] < 100'>Send an email request</a>
                              </div>
                            </td>
                            <td style="vertical-align: top; padding-left: 50px;">
                              <div v-for='(mem, index) in bt3103_grp1_skills2' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1 + bt3103_grp1_skills1.length}}
                                <ul>
                                  <div v-for='skill in mem' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <button
                                  v-if='bt3103_grp1_hasJoined && bt3103_grp1_joinIndex == index + bt3103_grp1_skills1.length'
                                  v-on:click='leave("bt3103", index + bt3103_grp1_skills1.length, 2)'>Leave</button>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-if='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar"
                                        v-bind:style='{width: bt3103_grp1_com[index + bt3103_grp1_skills1.length] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{bt3103_grp1_com[index + bt3103_grp1_skills1.length] + '%'}}</div>
                                  </div>
                                </div>
                                <button v-show='mem[0] != "apple" && bt3103_grp1_com[index + bt3103_grp1_skills1.length] == 100'
                                  v-on:click='join("bt3103", index + bt3103_grp1_skills1.length, 2)'>Click to join now</button>
                                <a href='mailto:abcd@google.com'
                                  v-show='bt3103_grp1_com[index + bt3103_grp1_skills1.length] < 100'>Send an email request</a>
                              </div>
                            </td>
                            <td style="vertical-align: top; padding-left: 50px;">
                              <div v-for='(mem, index) in bt3103_grp1_skills3' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1 + bt3103_grp1_skills1.length + bt3103_grp1_skills2.length}}
                                <ul>
                                  <div v-for='skill in mem' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <button
                                  v-if='bt3103_grp1_hasJoined && bt3103_grp1_joinIndex == index + bt3103_grp1_skills1.length + bt3103_grp1_skills2.length'
                                  v-on:click='leave("bt3103", index + bt3103_grp1_skills1.length + bt3103_grp1_skills2.length, 3)'>Leave</button>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-if='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar"
                                        v-bind:style='{width: bt3103_grp1_com[index + bt3103_grp1_skills1.length + bt3103_grp1_skills2.length] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{bt3103_grp1_com[index + bt3103_grp1_skills1.length + bt3103_grp1_skills2.length] + '%'}}
                                    </div>
                                  </div>
                                </div>
                                <button
                                  v-show='mem[0] != "apple" && bt3103_grp1_com[index + bt3103_grp1_skills1.length + bt3103_grp1_skills2.length] == 100'
                                  v-on:click='join("bt3103", index + bt3103_grp1_skills1.length + bt3103_grp1_skills2.length, 3)'>Click
                                  to join now</button>
                                <a href='mailto:abcd@google.com'
                                  v-show='bt3103_grp1_com[index + bt3103_grp1_skills1.length + bt3103_grp1_skills2.length] < 100'>Send
                                  an email request</a>
                              </div>
                            </td>
                          </table>
                        </div>
                      </div>
                      <br>
                      <br>
                      We are available to meet up on Wednesday nights.
                    </li>
                  </ul>
                </div>
                <div v-if="module=='is3103'">
                  <ul style="list-style-type:none">
                    <li style="text-align: left">
                      <div class='group'>
                        <div style="border-radius: 25px;border: 2px solid #73AD21; padding: 10px;">
                          <h3>Group 2 ({{is3103_grp1_teamNum}}/5) </h3>
                        </div>
                        <div class='group-content'>
                          Alan <a href='https://www.google.com' target="_blank">Profile</a>
                          <br>
                          Brad <a href='https://www.google.com' target="_blank">Profile</a>
                          <br>
                          <p v-if='is3103_grp1_hasJoined'>You <a href='https://www.google.com' target="_blank">Profile</a></p>
                        </div>
                      </div>
                      <br>
                      <br>
                      <div class='group'>
                        <div style="border-radius: 25px;border: 2px solid #73AD21; padding: 10px;">
                          Team Composition:
                        </div>
                        <div class='group-content'>
                          <table>
                            <td>
                              <div v-for='(mem, index) in is3103_grp1_skills1' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1}}
                                <ul>
                                  <div v-for='skill in is3103_grp1_skills1[index]' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <button v-if='is3103_grp1_hasJoined && is3103_grp1_joinIndex == index'
                                  v-on:click='leave("is3103", index, 1)'>Leave</button>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-show='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar" v-bind:style='{width: is3103_grp1_com[index] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{is3103_grp1_com[index] + '%'}}</div>
                                  </div>
                                </div>
                                <button v-show='mem[0] != "apple" && is3103_grp1_com[index] == 100'
                                  v-on:click='join("is3103", index, 1)'>Click to join now</button>
                                <a href='mailto:abcd@google.com' v-show='is3103_grp1_com[index] < 100'>Send an email request</a>
                              </div>
                            </td>
                            <td style="vertical-align: top; padding-left: 50px;">
                              <div v-for='(mem, index) in is3103_grp1_skills2' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1 + is3103_grp1_skills1.length}}
                                <ul>
                                  <div v-for='skill in mem' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <button
                                  v-if='is3103_grp1_hasJoined && is3103_grp1_joinIndex == index + is3103_grp1_skills1.length'
                                  v-on:click='leave("is3103", index + is3103_grp1_skills1.length, 2)'>Leave</button>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-if='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar"
                                        v-bind:style='{width: is3103_grp1_com[index + is3103_grp1_skills1.length] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{is3103_grp1_com[index + is3103_grp1_skills1.length] + '%'}}</div>
                                  </div>
                                </div>
                                <button v-show='mem[0] != "apple" && is3103_grp1_com[index + is3103_grp1_skills1.length] == 100'
                                  v-on:click='join("is3103", index + is3103_grp1_skills1.length, 2)'>Click to join now</button>
                                <a href='mailto:abcd@google.com'
                                  v-show='is3103_grp1_com[index + is3103_grp1_skills1.length] < 100'>Send an email request</a>
                              </div>
                            </td>
                            <td style="vertical-align: top; padding-left: 50px;">
                              <div v-for='(mem, index) in is3103_grp1_skills3' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1 + is3103_grp1_skills1.length + is3103_grp1_skills2.length}}
                                <ul>
                                  <div v-for='skill in mem' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <button
                                  v-if='is3103_grp1_hasJoined && is3103_grp1_joinIndex == index + is3103_grp1_skills1.length + is3103_grp1_skills2.length'
                                  v-on:click='leave("is3103", index + is3103_grp1_skills1.length + is3103_grp1_skills2.length, 3)'>Leave</button>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-if='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar"
                                        v-bind:style='{width: is3103_grp1_com[index + is3103_grp1_skills1.length + is3103_grp1_skills2.length] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{is3103_grp1_com[index + is3103_grp1_skills1.length + is3103_grp1_skills2.length] + '%'}}
                                    </div>
                                  </div>
                                </div>
                                <button
                                  v-show='mem[0] != "apple" && is3103_grp1_com[index + is3103_grp1_skills1.length + is3103_grp1_skills2.length] == 100'
                                  v-on:click='join("is3103", index + is3103_grp1_skills1.length + is3103_grp1_skills2.length, 3)'>Click
                                  to join now</button>
                                <a href='mailto:abcd@google.com'
                                  v-show='is3103_grp1_com[index + is3103_grp1_skills1.length + is3103_grp1_skills2.length] < 100'>Send
                                  an email request</a>
                              </div>
                            </td>
                          </table>
                        </div>
                      </div>
                      <br>
                      <br>
                      We are available to meet up on Thursday nights.
                    </li>
                  </ul>
                </div>
                <div v-if="module=='bt3102'">
                  <ul style="list-style-type:none">
                    <li style="text-align: left">
                      <div class='group'>
                        <div style="border-radius: 25px;border: 2px solid #73AD21; padding: 10px;">
                          <h3>Group 3 ({{bt3102_grp1_teamNum}}/5) </h3>
                        </div>
                        <div class='group-content'>
                          Alan <a href='https://www.google.com' target="_blank">Profile</a>
                          <br>
                          <p v-if='bt3102_grp1_hasJoined'>You <a href='https://www.google.com' target="_blank">Profile</a></p>
                        </div>
                      </div>
                      <br>
                      <br>
                      <div class='group'>
                        <div style="border-radius: 25px;border: 2px solid #73AD21; padding: 10px;">
                          Team Composition:
                        </div>
                        <div class='group-content'>
                          <table>
                            <td>
                              <div v-for='(mem, index) in bt3102_grp1_skills1' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1}}
                                <ul>
                                  <div v-for='skill in bt3102_grp1_skills1[index]' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <button v-if='bt3102_grp1_hasJoined && bt3102_grp1_joinIndex == index'
                                  v-on:click='leave("bt3102", index, 1)'>Leave</button>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-show='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar" v-bind:style='{width: bt3102_grp1_com[index] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{bt3102_grp1_com[index] + '%'}}</div>
                                  </div>
                                </div>
                                <button v-show='mem[0] != "apple" && bt3102_grp1_com[index] == 100'
                                  v-on:click='join("bt3102", index, 1)'>Click to join now</button>
                                <a href='mailto:abcd@google.com' v-show='bt3102_grp1_com[index] < 100'>Send an email request</a>
                              </div>
                            </td>
                            <td style="vertical-align: top; padding-left: 50px;">
                              <div v-for='(mem, index) in bt3102_grp1_skills2' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1 + bt3102_grp1_skills1.length}}
                                <ul>
                                  <div v-for='skill in mem' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <button
                                  v-if='bt3102_grp1_hasJoined && bt3102_grp1_joinIndex == index + bt3102_grp1_skills1.length'
                                  v-on:click='leave("bt3102", index + bt3102_grp1_skills1.length, 2)'>Leave</button>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-if='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar"
                                        v-bind:style='{width: bt3102_grp1_com[index + bt3102_grp1_skills1.length] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{bt3102_grp1_com[index + bt3102_grp1_skills1.length] + '%'}}</div>
                                  </div>
                                </div>
                                <button v-show='mem[0] != "apple" && bt3102_grp1_com[index + bt3102_grp1_skills1.length] == 100'
                                  v-on:click='join("bt3102", index + bt3102_grp1_skills1.length, 2)'>Click to join now</button>
                                <a href='mailto:abcd@google.com'
                                  v-show='bt3102_grp1_com[index + bt3102_grp1_skills1.length] < 100'>Send an email request</a>
                              </div>
                            </td>
                            <td style="vertical-align: top; padding-left: 50px;">
                              <div v-for='(mem, index) in bt3102_grp1_skills3' v-bind:key = mem>
                                <i class="fa fa-user" style="font-size:24px; color:green" v-show='mem[0] != "apple"'></i>
                                <i class="fa fa-user" style="font-size:24px; color:red" v-show='mem[0] == "apple"'></i>
                                Team Member {{index + 1 + bt3102_grp1_skills1.length + bt3102_grp1_skills2.length}}
                                <ul>
                                  <div v-for='skill in mem' v-bind:key = skill>
                                    <li v-if='skill != "apple"'>{{skill}} <i class="fa fa-check"
                                        style="font-size:24px;color:green" v-if='my_skills.indexOf(skill) > -1'></i></li>
                                  </div>
                                </ul>
                                <br>
                                <button
                                  v-if='bt3102_grp1_hasJoined && bt3102_grp1_joinIndex == index + bt3102_grp1_skills1.length + bt3102_grp1_skills2.length'
                                  v-on:click='leave("bt3102", index + bt3102_grp1_skills1.length + bt3102_grp1_skills2.length, 3)'>Leave</button>
                                <div class="db pt3 pb4 ph3 ph0-l relative" style="min-height: 100px;" v-if='mem[0] != "apple"'>
                                  <div class="mb4 f6 fw6 dark-gray">Compatibility</div>
                                  <div>
                                    <!---->
                                    <div class="vue-simple-progress" style="background: rgb(238, 238, 238);">
                                      <!---->
                                      <!---->
                                      <div class="vue-simple-progress-bar"
                                        v-bind:style='{width: bt3102_grp1_com[index + bt3102_grp1_skills1.length + bt3102_grp1_skills2.length] + "%"}'
                                        style="background: rgb(33, 150, 243); height: 3px; transition: all 0.5s ease 0s;">
                                        <!---->
                                      </div>
                                    </div>
                                    <div class="vue-simple-progress-text"
                                      style="color: rgb(34, 34, 34); font-size: 13px; text-align: center; padding-top: 4px;">
                                      {{bt3102_grp1_com[index + bt3102_grp1_skills1.length + bt3102_grp1_skills2.length] + '%'}}
                                    </div>
                                  </div>
                                </div>
                                <button
                                  v-show='mem[0] != "apple" && bt3102_grp1_com[index + bt3102_grp1_skills1.length + bt3102_grp1_skills2.length] == 100'
                                  v-on:click='join("bt3102", index + bt3102_grp1_skills1.length + bt3102_grp1_skills2.length, 3)'>Click
                                  to join now</button>
                                <a href='mailto:abcd@google.com'
                                  v-show='bt3102_grp1_com[index + bt3102_grp1_skills1.length + bt3102_grp1_skills2.length] < 100'>Send
                                  an email request</a>
                              </div>
                            </td>
                          </table>
                        </div>
                      </div>
                      <br>
                      <br>
                      We are available to meet up on Friday nights.
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            </table>
          </div>
        </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      hover:false,
      module: "bt3103",
      good: "",
      bad: "",
      loadMore:false,
      loadText:"Load More",
      my_skills: ['Java', 'C++', 'Tableau'],
      bt3103_grp1_skills1:[['Java'], ['apple']],
      bt3103_grp1_skills1Old:[['Java'], ['apple']],
      bt3103_grp1_new1:[['Java'], ['apple']],
      bt3103_grp1_skills2:[['apple'], ['apple']],
      bt3103_grp1_skills2Old:[['apple'], ['apple']],
      bt3103_grp1_new2:[['apple'], ['apple']],
      bt3103_grp1_skills3:[['apple']],
      bt3103_grp1_skills3Old:[['apple']],
      bt3103_grp1_new3:[['apple']],
      bt3103_grp1_com:[100], 
      bt3103_grp1_teamNum: 4,
      bt3103_grp1_hasJoined:false,
      bt3103_grp1_joinIndex:-1,
      
      is3103_grp1_skills1:[['Tableau', 'R'], ['C++']],
      is3103_grp1_skills1Old:[['Tableau', 'R'], ['C++']],
      is3103_grp1_new1:[['Tableau', 'R'], ['C++']],
      is3103_grp1_skills2:[['Simulation'], ['apple']],
      is3103_grp1_skills2Old:[['Simulation'], ['apple']],
      is3103_grp1_new2:[['Simulation'], ['apple']],
      is3103_grp1_skills3:[['apple']],
      is3103_grp1_skills3Old:[['apple']],
      is3103_grp1_new3:[['apple']],
      is3103_grp1_com:[50, 100, 0], 
      is3103_grp1_teamNum: 2,
      is3103_grp1_hasJoined:false,
      is3103_grp1_joinIndex:-1,

      bt3102_grp1_skills1:[['C'], ['Ruby']],
      bt3102_grp1_skills1Old:[['C'], ['Ruby']],
      bt3102_grp1_new1:[['C'], ['Ruby']],
      bt3102_grp1_skills2:[['Tableau'], ['Year 2']],
      bt3102_grp1_skills2Old:[['Tableau'], ['Year 2']],
      bt3102_grp1_new2:[['Tableau'], ['Year 2']],
      bt3102_grp1_skills3:[['apple']],
      bt3102_grp1_skills3Old:[['apple']],
      bt3102_grp1_new3:[['apple']],
      bt3102_grp1_com:[0, 0, 100, 0], 
      bt3102_grp1_teamNum: 1,
      bt3102_grp1_hasJoined:false,
      bt3102_grp1_joinIndex:-1,
      
      skill:'',
      hasNewSkill: false,
      currSkill: '',
      taken : ["apple", "pancakes", "chicken rice"],
      friend:'',
      bt3103NoGroup: ['Tom', 'Dick', 'Harry'],
      is3103NoGroup: ['Jeff', 'Hardy', 'Robert'],
      bt3102NoGroup: ['Edward', 'Frankanstein', 'Monster'],
      newGroupFormed:{'bt3103':false, 'is3103':false, 'bt3102':false},
      newGroup:{module: '', groupName:'', size:2, currGroup:['You'], newSkill: [], comment:'', compatibility:[], 
      memberStatus:['true'], members:['None'], skills:[[]], currMember:1, skills1:[], skills2:[], skills3:[]},
      newGroups:[],
      currPage:'Students not in any group',
      showNotif:false
    }
  },
  methods: {
    checkAvailable: function() {
    var el = this.newGroup.groupName;
    if(el.length == 0) {
      this.bad = "Group name must contain at least 1 character.";
      this.good = "";
    }
    else if(this.taken.indexOf(el) >= 0) {
      this.bad = "This group name is taken. Please choose another one.";
      this.good = "";
    } else {
      this.good = "This group name is available";
      this.bad = "";
    }
  },

  changeText : function() {
    if(this.loadText == "Load More") {
      this.loadText = "Load Less";
    } else {
      this.loadText = "Load More";
    }
  },

    addFriend: function() {
      if(this.newGroup.currGroup.indexOf("" + this.friend) > -1) {
        alert("You have already added this name.");
      } else if(this.friend == '') {
        alert('Please select 1 friend to add.');
      }else {
        this.newGroup.currGroup.push(this.friend);
        this.newGroup.skills.pop();
      }
      this.friend = '';
    },

    removeFriend: function() {
      if(this.friend == '') {
        alert('Please select 1 friend to remove.');
      } else if(this.newGroup.currGroup.indexOf("" + this.friend) == -1) {
        alert("You have entered the name of your group mate incorrectly. Please try again.");
      } else {
        this.newGroup.currGroup.splice(this.newGroup.currGroup.indexOf("" + this.friend), 1);
        this.newGroup.skills.push([]);
      }
      this.friend = '';
    },

    addRemoveSkills: function(index) {
    if(this.newGroup.skills[index].length > 0) {
      this.newGroup.members[index] = this.newGroup.skills[index].join(", ");
    } else {
      this.newGroup.members[index] = "None";
    }
  },

  checkSkill: function() {
    if(this.skill == '') {
      alert("Please enter at least 1 character.");
    }else if(this.newGroup.newSkill.indexOf(this.skill) == -1) {
      this.hasNewSkill = true;
      this.newGroup.newSkill.push(this.skill);
    } else {
      this.hasNewSkill = false;
    }
  },

  addGroup: function() {
    if(this.newGroup.groupName == '') {
      alert("Please fill in a group name.");
    } else if(this.newGroup.comment.length == 0) {
      alert("Please write a comment for your group.");
    } else if(this.newGroup.size < 1) {
      alert("Please enter a valid group size.");
    } else if(this.newGroup.size == 1) {
      alert("Group size should be at least 2");
    } else {
      for(var i = 0; i < this.newGroup.skills.length; i++) {
        if(this.newGroup.skills[i].length == 0) {
          alert("Please choose at least 1 option for team mate " + (i + 1));
          return;
        }
      }
      alert("Your group has been sucessfully created! Click the Join Existing Groups tab to see your group."); 
      for(var j = 0; j < this.newGroup.skills.length; j++) {
        var count = 0;
        for(i = 0; i < this.newGroup.skills[j].length; i++) {
          var curr = this.newGroup.skills[j][i];
          if(this.my_skills.indexOf(curr) > -1) {
            count ++;
          }
        }
        var compatibility = Math.round(parseFloat(count) / this.newGroup.skills[j].length * 100);
        this.newGroup.module = this.module;
        this.newGroup.compatibility.push(compatibility);
      }
      for(i = 0; i < this.newGroup.currGroup.length; i++) {
        this.newGroup.skills.push(['apple']);
      }
      for(i = 0; i < this.newGroup.skills.length; i++) {
        var skill = this.newGroup.skills[i];
        if(this.newGroup.skills1.length < 2) {
          this.newGroup.skills1.push(skill);
        }else if(this.newGroup.skills2.length < 2) {
          this.newGroup.skills2.push(skill);
        }else {
          this.newGroup.skills3.push(skill);
        }
      }
      this.newGroupFormed[this.module] = true;
      this.newGroups.push(this.newGroup);
      this.newGroup = {module: '', groupName:'', size:2, currGroup:['You'], newSkill: [], comment:'', compatibility:[], 
      memberStatus:['true'], members:['None'], skills:[[]], currMember:1, skills1:[], skills2:[], skills3:[]};
    }
  },
  addMember: function() {
    var add = this.newGroup.size - 1;
    this.newGroup.memberStatus = ['true'];
    this.newGroup.skills = [[]];
    for(var i = 1; i < add; i++) {
      this.newGroup.memberStatus.push('false');
      this.newGroup.skills.push([]);
    }
  },
  checkCurr: function() {
    var index = this.newGroup.currMember - 1;
    this.newGroup.memberStatus[index] = 'true';
    for(var i = 0; i < this.newGroup.memberStatus.length; i++) {
      if(i != index) {
        this.newGroup.memberStatus[i] = 'false';
      }
    }
  },
  join: function(module, index, num) {
    if(module=='bt3103') {
      if(num == 1) {
        this.bt3103_grp1_skills1[index][0] = 'apple';
        this.bt3103_grp1_new1 = this.bt3103_grp1_skills1;
      } else if(num == 2) {
        this.bt3103_grp1_skills2[index - this.bt3103_grp1_skills1.length][0] = 'apple';
        this.bt3103_grp1_new2 = this.bt3103_grp1_skills2;
      } else if(num == 3) {
        this.bt3103_grp1_skills3[index - this.bt3103_grp1_skills1.length - this.bt3103_grp1_skills2.length][0] = 'apple';
        this.bt3103_grp1_new3 = this.bt3103_grp1_skills3;
      }
      this.bt3103_grp1_teamNum += 1;
      this.bt3103_grp1_hasJoined = true;
      this.bt3103_grp1_joinIndex = index;
    } else if(module == 'is3103') {
      if(num == 1) {
        this.is3103_grp1_skills1[index][0] = 'apple';
        this.is3103_grp1_new1 = this.is3103_grp1_skills1;
      } else if(num == 2) {
        this.is3103_grp1_skills2[index - this.is3103_grp1_skills1.length][0] = 'apple';
        this.is3103_grp1_new2 = this.is3103_grp1_skills2;
      } else if(num == 3) {
        this.is3103_grp1_skills3[index - this.is3103_grp1_skills1.length - this.is3103_grp1_skills2.length][0] = 'apple';
        this.is3103_grp1_new3 = this.is3103_grp1_skills3;
      }
      this.is3103_grp1_teamNum += 1;
      this.is3103_grp1_hasJoined = true;
      this.is3103_grp1_joinIndex = index;
    } else if(module == 'bt3102') {
      if(num == 1) {
        this.bt3102_grp1_skills1[index][0] = 'apple';
        this.bt3102_grp1_new1 = this.bt3102_grp1_skills1;
      } else if(num == 2) {
        this.bt3102_grp1_skills2[index - this.bt3102_grp1_skills1.length][0] = 'apple';
        this.bt3102_grp1_new2 = this.bt3102_grp1_skills2;
      } else if(num == 3) {
        this.bt3102_grp1_skills3[index - this.bt3102_grp1_skills1.length - this.bt3102_grp1_skills2.length][0] = 'apple';
        this.bt3102_grp1_new3 = this.bt3102_grp1_skills3;
      }
      this.bt3102_grp1_teamNum += 1;
      this.bt3102_grp1_hasJoined = true;
      this.bt3102_grp1_joinIndex = index;
    }
  },
  leave: function(module, index, num) {
    if(module=="bt3103") {
      if(num == 1) {
        this.bt3103_grp1_new1[index][0] = this.bt3103_grp1_skills1Old[index][0];
        this.bt3103_grp1_skills1[index][0] = this.bt3103_grp1_skills1Old[index][0];
      } else if(num == 2) {
        this.bt3103_grp1_new2[index - this.bt3103_grp1_skills1.length - this.bt3103_grp1_skills2.length][0] = this.bt3103_grp1_skills2Old[index - this.bt3103_grp1_skills1.length - this.bt3103_grp1_skills2.length][0];
        this.bt3103_grp1_skills2[index - this.bt3103_grp1_skills1.length - this.bt3103_grp1_skills2.length][0] = this.bt3103_grp1_skills2Old[index - this.bt3103_grp1_skills1.length - this.bt3103_grp1_skills2.length][0];
      } else if(num == 3) {
        this.bt3103_grp1_new3[index - this.bt3103_grp1_skills1.length - this.bt3103_grp1_skills2.length][0] = this.bt3103_grp1_skills3Old[index - this.bt3103_grp1_skills1.length - this.bt3103_grp1_skills2.length][0];
        this.bt3103_grp1_skills3[index - this.bt3103_grp1_skills1.length - this.bt3103_grp1_skills2.length][0] = this.bt3103_grp1_skills3Old[index - this.bt3103_grp1_skills1.length - this.bt3103_grp1_skills2.length][0];
      }
      this.bt3103_grp1_teamNum -= 1;
      this.bt3103_grp1_hasJoined = false;
      this.bt3103_grp1_joinIndex = -1;
    } else if(module=='is3103') {
      if(num == 1) {
        this.is3103_grp1_new1[index][0] = this.is3103_grp1_skills1Old[index][0];
        this.is3103_grp1_skills1[index][0] = this.is3103_grp1_skills1Old[index][0];
      } else if(num == 2) {
        this.is3103_grp1_new2[index - this.is3103_grp1_skills1.length - this.is3103_grp1_skills2.length][0] = this.is3103_grp1_skills2Old[index - this.is3103_grp1_skills1.length - this.is3103_grp1_skills2.length][0];
        this.is3103_grp1_skills2[index - this.is3103_grp1_skills1.length - this.is3103_grp1_skills2.length][0] = this.is3103_grp1_skills2Old[index - this.is3103_grp1_skills1.length - this.is3103_grp1_skills2.length][0];
      } else if(num == 3) {
        this.is3103_grp1_new3[index - this.is3103_grp1_skills1.length - this.is3103_grp1_skills2.length][0] = this.is3103_grp1_skills3Old[index - this.is3103_grp1_skills1.length - this.is3103_grp1_skills2.length][0];
        this.is3103_grp1_skills3[index - this.is3103_grp1_skills1.length - this.is3103_grp1_skills2.length][0] = this.is3103_grp1_skills3Old[index - this.is3103_grp1_skills1.length - this.is3103_grp1_skills2.length][0];
      }
      this.is3103_grp1_teamNum -= 1;
      this.is3103_grp1_hasJoined = false;
      this.is3103_grp1_joinIndex = -1;
    } else if(module=='bt3102') {
      if(num == 1) {
        this.bt3102_grp1_new1[index][0] = this.bt3102_grp1_skills1Old[index][0];
        this.bt3102_grp1_skills1[index][0] = this.bt3102_grp1_skills1Old[index][0];
      } else if(num == 2) {
        this.bt3102_grp1_new2[index - this.bt3102_grp1_skills1.length - this.bt3102_grp1_skills2.length][0] = this.bt3102_grp1_skills2Old[index - this.bt3102_grp1_skills1.length - this.bt3102_grp1_skills2.length][0];
        this.bt3102_grp1_skills2[index - this.bt3102_grp1_skills1.length - this.bt3102_grp1_skills2.length][0] = this.bt3102_grp1_skills2Old[index - this.bt3102_grp1_skills1.length - this.bt3102_grp1_skills2.length][0];
      } else if(num == 3) {
        this.bt3102_grp1_new3[index - this.bt3102_grp1_skills1.length - this.bt3102_grp1_skills2.length][0] = this.bt3102_grp1_skills3Old[index - this.bt3102_grp1_skills1.length - this.bt3102_grp1_skills2.length][0];
        this.bt3102_grp1_skills3[index - this.bt3102_grp1_skills1.length - this.bt3102_grp1_skills2.length][0] = this.bt3102_grp1_skills3Old[index - this.bt3102_grp1_skills1.length - this.bt3102_grp1_skills2.length][0];
      }
      this.bt3102_grp1_teamNum -= 1;
      this.bt3102_grp1_hasJoined = false;
      this.bt3102_grp1_joinIndex = -1;
    }
  },
  checkNewGroup:function() {
    if(this.newGroupFormed[this.module]) {
      alert("You have already created a group for this module.");
    } else {
      this.openBox = true;
    }
  }
}
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#header li a {
  display: block;
  color: black;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

#header li {
  float: left;
}

#header li a:hover {
  background-color: darksalmon;
}

#userinfo li {
  padding-top: 10px;
  background-color: #f1f1f1;
  width: 60px;
  padding-right: 50px;
}

#userinfo li a {
  text-decoration: none;
  color: black;
}

#userinfo li a:hover {
  background-color:darkgray;
}

body {
	height: 100%;
}

#modules {
	width: 100px;
	height: 30px;
}

#studentlist {
	
  text-align: left;
}

#memberlist {
  width: 500px;
  text-align: left;
}

.button {
	text-align: center;
	border-radius: 25px;
	border: 2px solid gray;
	background-color: white;
	color: black;
	padding: 10px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}

.hidden {
	display: none;
  overflow: hidden;
  text-align: center;
	border-radius: 25px;
	border: 2px solid gray;
	background-color: white;
	color: black;
	padding: 10px;
	text-align: center;
	text-decoration: none;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}

.group {
	display: inline-block;
}

.group:hover .group-content {
  display: block;
  position: absolute;
 }

.group-content {
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	width: 600px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	padding: 12px 16px;
	z-index: 1;
	text-align: justify; 
	text-align-last: justify;
}

.modal {
	display: none; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	padding-top: 100px; /* Location of the box */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0,0,0); /* Fallback color */
	background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content */
  .modal-content {
	background-color: #fefefe;
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	width: 80%;
  }

</style>
