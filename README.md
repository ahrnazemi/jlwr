jlwr
====

java locally weighted regression 
Locally weighted regression (LWR)  is a variation of the standard linear regression technique in which training points close to the query point have more in
uence over the fitted regression surface. Given a set of training points, linear regression fits the linear model that minimizes squared prediction error over the whole training set.
This implicitly assumes that we know the global form of the underlying function that generated the data. LWR, on the other hand, only fits a function locally, without
imposing any requirements on the global form.The LWR learning procedure is simply to store every training point. Algorithm 1
shows how predictions are made for a given query point. The training and query points are assumed to be pairs of real-valued vectors (~x; ~y). There is one real-valued
parameter for the algorithm, h, known as the bandwidth.