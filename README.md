jlwr
====

java locally weighted regression :
Locally weighted regression (LWR)  is a variation of the standard linear regression technique in which training points close to the query point have more in
uence over the fitted regression surface. Given a set of training points, linear regression fits the linear model that minimizes squared prediction error over the whole training set.
This implicitly assumes that we know the global form of the underlying function that generated the data. LWR, on the other hand, only fits a function locally, without
imposing any requirements on the global form.The LWR learning procedure is simply to store every training point. 

LWR calculates a new model for every new query point. This diers from standard regression techniques, which calculate one global model for all possible queries. Although this allows LWR to model more complex functions, it also means that it is
signicantly more computationally expensive than a single global regression.
