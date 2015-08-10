var Candidate = React.createClass({
  propTypes: {
    candidate: React.PropTypes.object
  },
  render: function() {
    var candidate = this.props.candidate;
    var name = candidate.first_name + ' ' + candidate.last_name;
    var rate = '$' + candidate.hourly_rate + '/hour, $' + candidate.yearly_rate + '/year';
    return (
      <div>
        <img className="profile-picture" src={candidate.profile_image.small.url} alt={name + "'s profile image"} />
        <Skills skills={candidate.skills} />
        <div className="clear" />
        <div className="user-details">
          <h1>{name}</h1>
          <p className="location">
            <i className="fa fa-map-marker" />
            {candidate.location}
          </p>
          {candidate.social_media_profiles.map(function(profile) {
            return <SocialButton {...profile} key={profile.id} />
          })}
          <ul>
            <li>{rate}</li>
            <li className={candidate.education ? '' : 'hidden'}>{candidate.education}</li>
            <li>{candidate.years_experience} years professional experience</li>
            <li className={candidate.workplace_preference ? '' : 'hidden'}>Prefers {candidate.workplace_preference} work</li>
          </ul>
        </div>
      </div>
    );
  }
});