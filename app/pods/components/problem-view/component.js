import Ember from 'ember';

export default Ember.Component.extend({
    submissionResult: null,
    didRender() {
        this._super(...arguments);
        let submission = this.get('problem.top');

        if (submission.get('isTopSubmission')) {
            if (submission.get('result') === -1) {
                this.set('submissionResult', -1);
            } else if (submission.get('result') === 1) {
                if (submission.get('score') === 0) {
                    this.set('submissionResult', -1);
                } else if (submission.get('score') > 0 && submission.get('score') < 100) {
                    this.set('submissionResult', 0);
                } else {
                    this.set('submissionResult', 1);
                }
            }
        }
    }

});
